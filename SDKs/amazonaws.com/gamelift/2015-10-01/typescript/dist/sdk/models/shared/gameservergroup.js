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
import { BalancingStrategyEnum } from "./balancingstrategyenum";
import { GameServerProtectionPolicyEnum } from "./gameserverprotectionpolicyenum";
import { InstanceDefinition } from "./instancedefinition";
import { GameServerGroupStatusEnum } from "./gameservergroupstatusenum";
// GameServerGroup
/**
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Properties that describe a game server group resource. A game server group manages certain properties related to a corresponding EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <code>CreateGameServerGroup</code> and deleted by calling <code>DeleteGameServerGroup</code>. Game server group activity can be temporarily suspended and resumed by calling <code>SuspendGameServerGroup</code> and <code>ResumeGameServerGroup</code>, respectively. </p> <p> <b>Related actions</b> </p> <p> <a>CreateGameServerGroup</a> | <a>ListGameServerGroups</a> | <a>DescribeGameServerGroup</a> | <a>UpdateGameServerGroup</a> | <a>DeleteGameServerGroup</a> | <a>ResumeGameServerGroup</a> | <a>SuspendGameServerGroup</a> | <a>DescribeGameServerInstances</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a> </p>
**/
var GameServerGroup = /** @class */ (function (_super) {
    __extends(GameServerGroup, _super);
    function GameServerGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoScalingGroupArn" }),
        __metadata("design:type", String)
    ], GameServerGroup.prototype, "autoScalingGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BalancingStrategy" }),
        __metadata("design:type", String)
    ], GameServerGroup.prototype, "balancingStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], GameServerGroup.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameServerGroupArn" }),
        __metadata("design:type", String)
    ], GameServerGroup.prototype, "gameServerGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameServerGroupName" }),
        __metadata("design:type", String)
    ], GameServerGroup.prototype, "gameServerGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameServerProtectionPolicy" }),
        __metadata("design:type", String)
    ], GameServerGroup.prototype, "gameServerProtectionPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceDefinitions", elemType: InstanceDefinition }),
        __metadata("design:type", Array)
    ], GameServerGroup.prototype, "instanceDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" }),
        __metadata("design:type", Date)
    ], GameServerGroup.prototype, "lastUpdatedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], GameServerGroup.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], GameServerGroup.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusReason" }),
        __metadata("design:type", String)
    ], GameServerGroup.prototype, "statusReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuspendedActions" }),
        __metadata("design:type", Array)
    ], GameServerGroup.prototype, "suspendedActions", void 0);
    return GameServerGroup;
}(SpeakeasyBase));
export { GameServerGroup };
