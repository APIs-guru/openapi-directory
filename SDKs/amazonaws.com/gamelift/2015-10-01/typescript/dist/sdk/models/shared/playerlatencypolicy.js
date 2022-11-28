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
// PlayerLatencyPolicy
/**
 * <p>Sets a latency cap for individual players when placing a game session. With a latency policy in force, a game session cannot be placed in a fleet location where a player reports latency higher than the cap. Latency policies are used only with placement request that provide player latency information. Player latency policies can be stacked to gradually relax latency requirements over time. </p> <p>Latency policies are part of a <a>GameSessionQueue</a>.</p>
**/
var PlayerLatencyPolicy = /** @class */ (function (_super) {
    __extends(PlayerLatencyPolicy, _super);
    function PlayerLatencyPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumIndividualPlayerLatencyMilliseconds" }),
        __metadata("design:type", Number)
    ], PlayerLatencyPolicy.prototype, "maximumIndividualPlayerLatencyMilliseconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyDurationSeconds" }),
        __metadata("design:type", Number)
    ], PlayerLatencyPolicy.prototype, "policyDurationSeconds", void 0);
    return PlayerLatencyPolicy;
}(SpeakeasyBase));
export { PlayerLatencyPolicy };
