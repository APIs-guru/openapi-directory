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
import { GameServerInstanceStatusEnum } from "./gameserverinstancestatusenum";
// GameServerInstance
/**
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p> Additional properties, including status, that describe an EC2 instance in a game server group. Instance configurations are set with game server group properties (see <code>DescribeGameServerGroup</code> and with the EC2 launch template that was used when creating the game server group. </p> <p>Retrieve game server instances for a game server group by calling <code>DescribeGameServerInstances</code>. </p> <p> <b>Related actions</b> </p> <p> <a>CreateGameServerGroup</a> | <a>ListGameServerGroups</a> | <a>DescribeGameServerGroup</a> | <a>UpdateGameServerGroup</a> | <a>DeleteGameServerGroup</a> | <a>ResumeGameServerGroup</a> | <a>SuspendGameServerGroup</a> | <a>DescribeGameServerInstances</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a> </p>
**/
var GameServerInstance = /** @class */ (function (_super) {
    __extends(GameServerInstance, _super);
    function GameServerInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameServerGroupArn" }),
        __metadata("design:type", String)
    ], GameServerInstance.prototype, "gameServerGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameServerGroupName" }),
        __metadata("design:type", String)
    ], GameServerInstance.prototype, "gameServerGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], GameServerInstance.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceStatus" }),
        __metadata("design:type", String)
    ], GameServerInstance.prototype, "instanceStatus", void 0);
    return GameServerInstance;
}(SpeakeasyBase));
export { GameServerInstance };
