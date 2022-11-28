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
import { PlayerSessionCreationPolicyEnum } from "./playersessioncreationpolicyenum";
import { GameSessionStatusEnum } from "./gamesessionstatusenum";
import { GameSessionStatusReasonEnum } from "./gamesessionstatusreasonenum";
// GameSession
/**
 * <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <p> <b>Related actions</b> </p> <p> <a>CreateGameSession</a> | <a>DescribeGameSessions</a> | <a>DescribeGameSessionDetails</a> | <a>SearchGameSessions</a> | <a>UpdateGameSession</a> | <a>GetGameSessionLogUrl</a> | <a>StartGameSessionPlacement</a> | <a>DescribeGameSessionPlacement</a> | <a>StopGameSessionPlacement</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
var GameSession = /** @class */ (function (_super) {
    __extends(GameSession, _super);
    function GameSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], GameSession.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatorId" }),
        __metadata("design:type", String)
    ], GameSession.prototype, "creatorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentPlayerSessionCount" }),
        __metadata("design:type", Number)
    ], GameSession.prototype, "currentPlayerSessionCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsName" }),
        __metadata("design:type", String)
    ], GameSession.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetArn" }),
        __metadata("design:type", String)
    ], GameSession.prototype, "fleetArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetId" }),
        __metadata("design:type", String)
    ], GameSession.prototype, "fleetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameProperties", elemType: GameProperty }),
        __metadata("design:type", Array)
    ], GameSession.prototype, "gameProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameSessionData" }),
        __metadata("design:type", String)
    ], GameSession.prototype, "gameSessionData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameSessionId" }),
        __metadata("design:type", String)
    ], GameSession.prototype, "gameSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpAddress" }),
        __metadata("design:type", String)
    ], GameSession.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Location" }),
        __metadata("design:type", String)
    ], GameSession.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MatchmakerData" }),
        __metadata("design:type", String)
    ], GameSession.prototype, "matchmakerData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumPlayerSessionCount" }),
        __metadata("design:type", Number)
    ], GameSession.prototype, "maximumPlayerSessionCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GameSession.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayerSessionCreationPolicy" }),
        __metadata("design:type", String)
    ], GameSession.prototype, "playerSessionCreationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], GameSession.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], GameSession.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusReason" }),
        __metadata("design:type", String)
    ], GameSession.prototype, "statusReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TerminationTime" }),
        __metadata("design:type", Date)
    ], GameSession.prototype, "terminationTime", void 0);
    return GameSession;
}(SpeakeasyBase));
export { GameSession };
