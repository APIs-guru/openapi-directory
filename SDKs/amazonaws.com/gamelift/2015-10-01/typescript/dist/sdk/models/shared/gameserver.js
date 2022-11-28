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
import { GameServerClaimStatusEnum } from "./gameserverclaimstatusenum";
import { GameServerUtilizationStatusEnum } from "./gameserverutilizationstatusenum";
// GameServer
/**
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Properties describing a game server that is running on an instance in a <a>GameServerGroup</a>. </p> <p>A game server is created by a successful call to <code>RegisterGameServer</code> and deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a game session by calling <code>ClaimGameServer</code>. </p> <p> <b>Related actions</b> </p> <p> <a>RegisterGameServer</a> | <a>ListGameServers</a> | <a>ClaimGameServer</a> | <a>DescribeGameServer</a> | <a>UpdateGameServer</a> | <a>DeregisterGameServer</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a> </p>
**/
var GameServer = /** @class */ (function (_super) {
    __extends(GameServer, _super);
    function GameServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClaimStatus" }),
        __metadata("design:type", String)
    ], GameServer.prototype, "claimStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConnectionInfo" }),
        __metadata("design:type", String)
    ], GameServer.prototype, "connectionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameServerData" }),
        __metadata("design:type", String)
    ], GameServer.prototype, "gameServerData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameServerGroupArn" }),
        __metadata("design:type", String)
    ], GameServer.prototype, "gameServerGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameServerGroupName" }),
        __metadata("design:type", String)
    ], GameServer.prototype, "gameServerGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameServerId" }),
        __metadata("design:type", String)
    ], GameServer.prototype, "gameServerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], GameServer.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastClaimTime" }),
        __metadata("design:type", Date)
    ], GameServer.prototype, "lastClaimTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastHealthCheckTime" }),
        __metadata("design:type", Date)
    ], GameServer.prototype, "lastHealthCheckTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegistrationTime" }),
        __metadata("design:type", Date)
    ], GameServer.prototype, "registrationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UtilizationStatus" }),
        __metadata("design:type", String)
    ], GameServer.prototype, "utilizationStatus", void 0);
    return GameServer;
}(SpeakeasyBase));
export { GameServer };
