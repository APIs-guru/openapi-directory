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
import { GameProperty } from "./gameproperty";
// CreateGameSessionInput
/**
 * Represents the input for a request operation.
**/
var CreateGameSessionInput = /** @class */ (function (_super) {
    __extends(CreateGameSessionInput, _super);
    function CreateGameSessionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AliasId" }),
        __metadata("design:type", String)
    ], CreateGameSessionInput.prototype, "aliasId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatorId" }),
        __metadata("design:type", String)
    ], CreateGameSessionInput.prototype, "creatorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetId" }),
        __metadata("design:type", String)
    ], CreateGameSessionInput.prototype, "fleetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameProperties", elemType: GameProperty }),
        __metadata("design:type", Array)
    ], CreateGameSessionInput.prototype, "gameProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameSessionData" }),
        __metadata("design:type", String)
    ], CreateGameSessionInput.prototype, "gameSessionData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameSessionId" }),
        __metadata("design:type", String)
    ], CreateGameSessionInput.prototype, "gameSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdempotencyToken" }),
        __metadata("design:type", String)
    ], CreateGameSessionInput.prototype, "idempotencyToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Location" }),
        __metadata("design:type", String)
    ], CreateGameSessionInput.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumPlayerSessionCount" }),
        __metadata("design:type", Number)
    ], CreateGameSessionInput.prototype, "maximumPlayerSessionCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateGameSessionInput.prototype, "name", void 0);
    return CreateGameSessionInput;
}(SpeakeasyBase));
export { CreateGameSessionInput };
