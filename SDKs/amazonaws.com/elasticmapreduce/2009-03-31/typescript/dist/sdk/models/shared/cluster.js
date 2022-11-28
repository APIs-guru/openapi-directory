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
import { Application } from "./application";
import { Configuration } from "./configuration";
import { Ec2InstanceAttributes } from "./ec2instanceattributes";
import { InstanceCollectionTypeEnum } from "./instancecollectiontypeenum";
import { KerberosAttributes } from "./kerberosattributes";
import { PlacementGroupConfig } from "./placementgroupconfig";
import { RepoUpgradeOnBootEnum } from "./repoupgradeonbootenum";
import { ScaleDownBehaviorEnum } from "./scaledownbehaviorenum";
import { ClusterStatus } from "./clusterstatus";
import { Tag } from "./tag";
// Cluster
/**
 * The detailed description of the cluster.
**/
var Cluster = /** @class */ (function (_super) {
    __extends(Cluster, _super);
    function Cluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Applications", elemType: Application }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "applications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoScalingRole" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "autoScalingRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoTerminate" }),
        __metadata("design:type", Boolean)
    ], Cluster.prototype, "autoTerminate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterArn" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Configurations", elemType: Configuration }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "configurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomAmiId" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "customAmiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EbsRootVolumeSize" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "ebsRootVolumeSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ec2InstanceAttributes" }),
        __metadata("design:type", Ec2InstanceAttributes)
    ], Cluster.prototype, "ec2InstanceAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceCollectionType" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "instanceCollectionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KerberosAttributes" }),
        __metadata("design:type", KerberosAttributes)
    ], Cluster.prototype, "kerberosAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogEncryptionKmsKeyId" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "logEncryptionKmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogUri" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "logUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MasterPublicDnsName" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "masterPublicDnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NormalizedInstanceHours" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "normalizedInstanceHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutpostArn" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "outpostArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlacementGroups", elemType: PlacementGroupConfig }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "placementGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReleaseLabel" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "releaseLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepoUpgradeOnBoot" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "repoUpgradeOnBoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedAmiVersion" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "requestedAmiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunningAmiVersion" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "runningAmiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScaleDownBehavior" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "scaleDownBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "securityConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceRole" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "serviceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", ClusterStatus)
    ], Cluster.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StepConcurrencyLevel" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "stepConcurrencyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TerminationProtected" }),
        __metadata("design:type", Boolean)
    ], Cluster.prototype, "terminationProtected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VisibleToAllUsers" }),
        __metadata("design:type", Boolean)
    ], Cluster.prototype, "visibleToAllUsers", void 0);
    return Cluster;
}(SpeakeasyBase));
export { Cluster };
