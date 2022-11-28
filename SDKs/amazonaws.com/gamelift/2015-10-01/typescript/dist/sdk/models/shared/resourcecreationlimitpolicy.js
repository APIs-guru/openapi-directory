var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
// ResourceCreationLimitPolicy
/**
 * <p>A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.</p> <p>The policy is evaluated when a player tries to create a new game session. On receiving a <code>CreateGameSession</code> request, GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than game session limit in the specified time period.</p> <p>The resource creation limit policy is included in <a>FleetAttributes</a>.</p>
**/
var ResourceCreationLimitPolicy = /** @class */ (function (_super) {
    __extends(ResourceCreationLimitPolicy, _super);
    function ResourceCreationLimitPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NewGameSessionsPerCreator" }),
        __metadata("design:type", Number)
    ], ResourceCreationLimitPolicy.prototype, "newGameSessionsPerCreator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyPeriodInMinutes" }),
        __metadata("design:type", Number)
    ], ResourceCreationLimitPolicy.prototype, "policyPeriodInMinutes", void 0);
    return ResourceCreationLimitPolicy;
}(SpeakeasyBase));
export { ResourceCreationLimitPolicy };
