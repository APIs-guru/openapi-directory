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
import { BackfillModeEnum } from "./backfillmodeenum";
import { FlexMatchModeEnum } from "./flexmatchmodeenum";
import { GameProperty } from "./gameproperty";
// MatchmakingConfiguration
/**
 * Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration.
**/
var MatchmakingConfiguration = /** @class */ (function (_super) {
    __extends(MatchmakingConfiguration, _super);
    function MatchmakingConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AcceptanceRequired" }),
        __metadata("design:type", Boolean)
    ], MatchmakingConfiguration.prototype, "acceptanceRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AcceptanceTimeoutSeconds" }),
        __metadata("design:type", Number)
    ], MatchmakingConfiguration.prototype, "acceptanceTimeoutSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalPlayerCount" }),
        __metadata("design:type", Number)
    ], MatchmakingConfiguration.prototype, "additionalPlayerCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackfillMode" }),
        __metadata("design:type", String)
    ], MatchmakingConfiguration.prototype, "backfillMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigurationArn" }),
        __metadata("design:type", String)
    ], MatchmakingConfiguration.prototype, "configurationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], MatchmakingConfiguration.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomEventData" }),
        __metadata("design:type", String)
    ], MatchmakingConfiguration.prototype, "customEventData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], MatchmakingConfiguration.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FlexMatchMode" }),
        __metadata("design:type", String)
    ], MatchmakingConfiguration.prototype, "flexMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameProperties", elemType: GameProperty }),
        __metadata("design:type", Array)
    ], MatchmakingConfiguration.prototype, "gameProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameSessionData" }),
        __metadata("design:type", String)
    ], MatchmakingConfiguration.prototype, "gameSessionData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameSessionQueueArns" }),
        __metadata("design:type", Array)
    ], MatchmakingConfiguration.prototype, "gameSessionQueueArns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], MatchmakingConfiguration.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationTarget" }),
        __metadata("design:type", String)
    ], MatchmakingConfiguration.prototype, "notificationTarget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestTimeoutSeconds" }),
        __metadata("design:type", Number)
    ], MatchmakingConfiguration.prototype, "requestTimeoutSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleSetArn" }),
        __metadata("design:type", String)
    ], MatchmakingConfiguration.prototype, "ruleSetArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleSetName" }),
        __metadata("design:type", String)
    ], MatchmakingConfiguration.prototype, "ruleSetName", void 0);
    return MatchmakingConfiguration;
}(SpeakeasyBase));
export { MatchmakingConfiguration };
