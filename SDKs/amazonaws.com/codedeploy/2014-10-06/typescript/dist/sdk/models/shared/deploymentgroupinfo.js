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
import { AlarmConfiguration } from "./alarmconfiguration";
import { AutoRollbackConfiguration } from "./autorollbackconfiguration";
import { AutoScalingGroup } from "./autoscalinggroup";
import { BlueGreenDeploymentConfiguration } from "./bluegreendeploymentconfiguration";
import { ComputePlatformEnum } from "./computeplatformenum";
import { DeploymentStyle } from "./deploymentstyle";
import { Ec2TagFilter } from "./ec2tagfilter";
import { Ec2TagSet } from "./ec2tagset";
import { EcsService } from "./ecsservice";
import { LastDeploymentInfo } from "./lastdeploymentinfo";
import { LoadBalancerInfo } from "./loadbalancerinfo";
import { TagFilter } from "./tagfilter";
import { OnPremisesTagSet } from "./onpremisestagset";
import { OutdatedInstancesStrategyEnum } from "./outdatedinstancesstrategyenum";
import { RevisionLocation } from "./revisionlocation";
import { TriggerConfig } from "./triggerconfig";
// DeploymentGroupInfo
/**
 * Information about a deployment group.
**/
var DeploymentGroupInfo = /** @class */ (function (_super) {
    __extends(DeploymentGroupInfo, _super);
    function DeploymentGroupInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alarmConfiguration" }),
        __metadata("design:type", AlarmConfiguration)
    ], DeploymentGroupInfo.prototype, "alarmConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationName" }),
        __metadata("design:type", String)
    ], DeploymentGroupInfo.prototype, "applicationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoRollbackConfiguration" }),
        __metadata("design:type", AutoRollbackConfiguration)
    ], DeploymentGroupInfo.prototype, "autoRollbackConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoScalingGroups", elemType: AutoScalingGroup }),
        __metadata("design:type", Array)
    ], DeploymentGroupInfo.prototype, "autoScalingGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blueGreenDeploymentConfiguration" }),
        __metadata("design:type", BlueGreenDeploymentConfiguration)
    ], DeploymentGroupInfo.prototype, "blueGreenDeploymentConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computePlatform" }),
        __metadata("design:type", String)
    ], DeploymentGroupInfo.prototype, "computePlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentConfigName" }),
        __metadata("design:type", String)
    ], DeploymentGroupInfo.prototype, "deploymentConfigName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentGroupId" }),
        __metadata("design:type", String)
    ], DeploymentGroupInfo.prototype, "deploymentGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentGroupName" }),
        __metadata("design:type", String)
    ], DeploymentGroupInfo.prototype, "deploymentGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentStyle" }),
        __metadata("design:type", DeploymentStyle)
    ], DeploymentGroupInfo.prototype, "deploymentStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2TagFilters", elemType: Ec2TagFilter }),
        __metadata("design:type", Array)
    ], DeploymentGroupInfo.prototype, "ec2TagFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2TagSet" }),
        __metadata("design:type", Ec2TagSet)
    ], DeploymentGroupInfo.prototype, "ec2TagSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ecsServices", elemType: EcsService }),
        __metadata("design:type", Array)
    ], DeploymentGroupInfo.prototype, "ecsServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastAttemptedDeployment" }),
        __metadata("design:type", LastDeploymentInfo)
    ], DeploymentGroupInfo.prototype, "lastAttemptedDeployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastSuccessfulDeployment" }),
        __metadata("design:type", LastDeploymentInfo)
    ], DeploymentGroupInfo.prototype, "lastSuccessfulDeployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loadBalancerInfo" }),
        __metadata("design:type", LoadBalancerInfo)
    ], DeploymentGroupInfo.prototype, "loadBalancerInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onPremisesInstanceTagFilters", elemType: TagFilter }),
        __metadata("design:type", Array)
    ], DeploymentGroupInfo.prototype, "onPremisesInstanceTagFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onPremisesTagSet" }),
        __metadata("design:type", OnPremisesTagSet)
    ], DeploymentGroupInfo.prototype, "onPremisesTagSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outdatedInstancesStrategy" }),
        __metadata("design:type", String)
    ], DeploymentGroupInfo.prototype, "outdatedInstancesStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceRoleArn" }),
        __metadata("design:type", String)
    ], DeploymentGroupInfo.prototype, "serviceRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetRevision" }),
        __metadata("design:type", RevisionLocation)
    ], DeploymentGroupInfo.prototype, "targetRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerConfigurations", elemType: TriggerConfig }),
        __metadata("design:type", Array)
    ], DeploymentGroupInfo.prototype, "triggerConfigurations", void 0);
    return DeploymentGroupInfo;
}(SpeakeasyBase));
export { DeploymentGroupInfo };
