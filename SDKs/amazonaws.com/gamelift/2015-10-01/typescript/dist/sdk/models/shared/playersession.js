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
import { PlayerSessionStatusEnum } from "./playersessionstatusenum";
// PlayerSession
/**
 * <p>Represents a player session. Player sessions are created either for a specific game session, or as part of a game session placement or matchmaking request. A player session can represents a reserved player slot in a game session (when status is <code>RESERVED</code>) or actual player activity in a game session (when status is <code>ACTIVE</code>). A player session object, including player data, is automatically passed to a game session when the player connects to the game session and is validated. After the game session ends, player sessions information is retained for 30 days and then removed.</p> <p> <b>Related actions</b> </p> <p> <a>CreatePlayerSession</a> | <a>CreatePlayerSessions</a> | <a>DescribePlayerSessions</a> | <a>StartGameSessionPlacement</a> | <a>DescribeGameSessionPlacement</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
var PlayerSession = /** @class */ (function (_super) {
    __extends(PlayerSession, _super);
    function PlayerSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], PlayerSession.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsName" }),
        __metadata("design:type", String)
    ], PlayerSession.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetArn" }),
        __metadata("design:type", String)
    ], PlayerSession.prototype, "fleetArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetId" }),
        __metadata("design:type", String)
    ], PlayerSession.prototype, "fleetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameSessionId" }),
        __metadata("design:type", String)
    ], PlayerSession.prototype, "gameSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpAddress" }),
        __metadata("design:type", String)
    ], PlayerSession.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayerData" }),
        __metadata("design:type", String)
    ], PlayerSession.prototype, "playerData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayerId" }),
        __metadata("design:type", String)
    ], PlayerSession.prototype, "playerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayerSessionId" }),
        __metadata("design:type", String)
    ], PlayerSession.prototype, "playerSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], PlayerSession.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], PlayerSession.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TerminationTime" }),
        __metadata("design:type", Date)
    ], PlayerSession.prototype, "terminationTime", void 0);
    return PlayerSession;
}(SpeakeasyBase));
export { PlayerSession };
