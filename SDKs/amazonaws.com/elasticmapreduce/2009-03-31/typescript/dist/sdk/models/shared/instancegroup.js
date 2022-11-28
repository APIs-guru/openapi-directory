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
import { AutoScalingPolicyDescription } from "./autoscalingpolicydescription";
import { Configuration } from "./configuration";
import { EbsBlockDevice } from "./ebsblockdevice";
import { InstanceGroupTypeEnum } from "./instancegrouptypeenum";
import { MarketTypeEnum } from "./markettypeenum";
import { ShrinkPolicy } from "./shrinkpolicy";
import { InstanceGroupStatus } from "./instancegroupstatus";
// InstanceGroup
/**
 * This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS.
**/
var InstanceGroup = /** @class */ (function (_super) {
    __extends(InstanceGroup, _super);
    function InstanceGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoScalingPolicy" }),
        __metadata("design:type", AutoScalingPolicyDescription)
    ], InstanceGroup.prototype, "autoScalingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BidPrice" }),
        __metadata("design:type", String)
    ], InstanceGroup.prototype, "bidPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Configurations", elemType: Configuration }),
        __metadata("design:type", Array)
    ], InstanceGroup.prototype, "configurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigurationsVersion" }),
        __metadata("design:type", Number)
    ], InstanceGroup.prototype, "configurationsVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomAmiId" }),
        __metadata("design:type", String)
    ], InstanceGroup.prototype, "customAmiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EbsBlockDevices", elemType: EbsBlockDevice }),
        __metadata("design:type", Array)
    ], InstanceGroup.prototype, "ebsBlockDevices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EbsOptimized" }),
        __metadata("design:type", Boolean)
    ], InstanceGroup.prototype, "ebsOptimized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], InstanceGroup.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceGroupType" }),
        __metadata("design:type", String)
    ], InstanceGroup.prototype, "instanceGroupType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], InstanceGroup.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastSuccessfullyAppliedConfigurations", elemType: Configuration }),
        __metadata("design:type", Array)
    ], InstanceGroup.prototype, "lastSuccessfullyAppliedConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastSuccessfullyAppliedConfigurationsVersion" }),
        __metadata("design:type", Number)
    ], InstanceGroup.prototype, "lastSuccessfullyAppliedConfigurationsVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Market" }),
        __metadata("design:type", String)
    ], InstanceGroup.prototype, "market", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], InstanceGroup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedInstanceCount" }),
        __metadata("design:type", Number)
    ], InstanceGroup.prototype, "requestedInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunningInstanceCount" }),
        __metadata("design:type", Number)
    ], InstanceGroup.prototype, "runningInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShrinkPolicy" }),
        __metadata("design:type", ShrinkPolicy)
    ], InstanceGroup.prototype, "shrinkPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", InstanceGroupStatus)
    ], InstanceGroup.prototype, "status", void 0);
    return InstanceGroup;
}(SpeakeasyBase));
export { InstanceGroup };
