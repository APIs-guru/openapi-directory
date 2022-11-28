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
import { AutoRollbackConfiguration } from "./autorollbackconfiguration";
import { BlueGreenDeploymentConfiguration } from "./bluegreendeploymentconfiguration";
import { ComputePlatformEnum } from "./computeplatformenum";
import { DeploymentCreatorEnum } from "./deploymentcreatorenum";
import { DeploymentOverview } from "./deploymentoverview";
import { DeploymentStyle } from "./deploymentstyle";
import { ErrorInformation } from "./errorinformation";
import { FileExistsBehaviorEnum } from "./fileexistsbehaviorenum";
import { LoadBalancerInfo } from "./loadbalancerinfo";
import { RevisionLocation } from "./revisionlocation";
import { RelatedDeployments } from "./relateddeployments";
import { RollbackInfo } from "./rollbackinfo";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { TargetInstances } from "./targetinstances";
// DeploymentInfo
/**
 * Information about a deployment.
**/
var DeploymentInfo = /** @class */ (function (_super) {
    __extends(DeploymentInfo, _super);
    function DeploymentInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalDeploymentStatusInfo" }),
        __metadata("design:type", String)
    ], DeploymentInfo.prototype, "additionalDeploymentStatusInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationName" }),
        __metadata("design:type", String)
    ], DeploymentInfo.prototype, "applicationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoRollbackConfiguration" }),
        __metadata("design:type", AutoRollbackConfiguration)
    ], DeploymentInfo.prototype, "autoRollbackConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blueGreenDeploymentConfiguration" }),
        __metadata("design:type", BlueGreenDeploymentConfiguration)
    ], DeploymentInfo.prototype, "blueGreenDeploymentConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completeTime" }),
        __metadata("design:type", Date)
    ], DeploymentInfo.prototype, "completeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computePlatform" }),
        __metadata("design:type", String)
    ], DeploymentInfo.prototype, "computePlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", Date)
    ], DeploymentInfo.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", String)
    ], DeploymentInfo.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentConfigName" }),
        __metadata("design:type", String)
    ], DeploymentInfo.prototype, "deploymentConfigName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentGroupName" }),
        __metadata("design:type", String)
    ], DeploymentInfo.prototype, "deploymentGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentId" }),
        __metadata("design:type", String)
    ], DeploymentInfo.prototype, "deploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentOverview" }),
        __metadata("design:type", DeploymentOverview)
    ], DeploymentInfo.prototype, "deploymentOverview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentStatusMessages" }),
        __metadata("design:type", Array)
    ], DeploymentInfo.prototype, "deploymentStatusMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentStyle" }),
        __metadata("design:type", DeploymentStyle)
    ], DeploymentInfo.prototype, "deploymentStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DeploymentInfo.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorInformation" }),
        __metadata("design:type", ErrorInformation)
    ], DeploymentInfo.prototype, "errorInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], DeploymentInfo.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileExistsBehavior" }),
        __metadata("design:type", String)
    ], DeploymentInfo.prototype, "fileExistsBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreApplicationStopFailures" }),
        __metadata("design:type", Boolean)
    ], DeploymentInfo.prototype, "ignoreApplicationStopFailures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceTerminationWaitTimeStarted" }),
        __metadata("design:type", Boolean)
    ], DeploymentInfo.prototype, "instanceTerminationWaitTimeStarted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loadBalancerInfo" }),
        __metadata("design:type", LoadBalancerInfo)
    ], DeploymentInfo.prototype, "loadBalancerInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previousRevision" }),
        __metadata("design:type", RevisionLocation)
    ], DeploymentInfo.prototype, "previousRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedDeployments" }),
        __metadata("design:type", RelatedDeployments)
    ], DeploymentInfo.prototype, "relatedDeployments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", RevisionLocation)
    ], DeploymentInfo.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollbackInfo" }),
        __metadata("design:type", RollbackInfo)
    ], DeploymentInfo.prototype, "rollbackInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], DeploymentInfo.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DeploymentInfo.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetInstances" }),
        __metadata("design:type", TargetInstances)
    ], DeploymentInfo.prototype, "targetInstances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateOutdatedInstancesOnly" }),
        __metadata("design:type", Boolean)
    ], DeploymentInfo.prototype, "updateOutdatedInstancesOnly", void 0);
    return DeploymentInfo;
}(SpeakeasyBase));
export { DeploymentInfo };
