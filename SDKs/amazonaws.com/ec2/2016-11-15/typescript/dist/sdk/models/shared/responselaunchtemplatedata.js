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
import { LaunchTemplateBlockDeviceMapping } from "./launchtemplateblockdevicemapping";
import { LaunchTemplateCapacityReservationSpecificationResponse } from "./launchtemplatecapacityreservationspecificationresponse";
import { LaunchTemplateCpuOptions } from "./launchtemplatecpuoptions";
import { CreditSpecification } from "./creditspecification";
import { ElasticGpuSpecificationResponse } from "./elasticgpuspecificationresponse";
import { LaunchTemplateElasticInferenceAcceleratorResponse } from "./launchtemplateelasticinferenceacceleratorresponse";
import { LaunchTemplateEnclaveOptions } from "./launchtemplateenclaveoptions";
import { LaunchTemplateHibernationOptions } from "./launchtemplatehibernationoptions";
import { LaunchTemplateIamInstanceProfileSpecification } from "./launchtemplateiaminstanceprofilespecification";
import { ShutdownBehaviorEnum } from "./shutdownbehaviorenum";
import { LaunchTemplateInstanceMarketOptions } from "./launchtemplateinstancemarketoptions";
import { InstanceTypeEnum } from "./instancetypeenum";
import { LaunchTemplateLicenseConfiguration } from "./launchtemplatelicenseconfiguration";
import { LaunchTemplateInstanceMetadataOptions } from "./launchtemplateinstancemetadataoptions";
import { LaunchTemplatesMonitoring } from "./launchtemplatesmonitoring";
import { LaunchTemplateInstanceNetworkInterfaceSpecification } from "./launchtemplateinstancenetworkinterfacespecification";
import { LaunchTemplatePlacement } from "./launchtemplateplacement";
import { LaunchTemplateTagSpecification } from "./launchtemplatetagspecification";
// ResponseLaunchTemplateData
/**
 * The information for a launch template.
**/
var ResponseLaunchTemplateData = /** @class */ (function (_super) {
    __extends(ResponseLaunchTemplateData, _super);
    function ResponseLaunchTemplateData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: LaunchTemplateBlockDeviceMapping }),
        __metadata("design:type", Array)
    ], ResponseLaunchTemplateData.prototype, "blockDeviceMappings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LaunchTemplateCapacityReservationSpecificationResponse)
    ], ResponseLaunchTemplateData.prototype, "capacityReservationSpecification", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LaunchTemplateCpuOptions)
    ], ResponseLaunchTemplateData.prototype, "cpuOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreditSpecification)
    ], ResponseLaunchTemplateData.prototype, "creditSpecification", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ResponseLaunchTemplateData.prototype, "disableApiTermination", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ResponseLaunchTemplateData.prototype, "ebsOptimized", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ElasticGpuSpecificationResponse }),
        __metadata("design:type", Array)
    ], ResponseLaunchTemplateData.prototype, "elasticGpuSpecifications", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: LaunchTemplateElasticInferenceAcceleratorResponse }),
        __metadata("design:type", Array)
    ], ResponseLaunchTemplateData.prototype, "elasticInferenceAccelerators", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LaunchTemplateEnclaveOptions)
    ], ResponseLaunchTemplateData.prototype, "enclaveOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LaunchTemplateHibernationOptions)
    ], ResponseLaunchTemplateData.prototype, "hibernationOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LaunchTemplateIamInstanceProfileSpecification)
    ], ResponseLaunchTemplateData.prototype, "iamInstanceProfile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResponseLaunchTemplateData.prototype, "imageId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResponseLaunchTemplateData.prototype, "instanceInitiatedShutdownBehavior", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LaunchTemplateInstanceMarketOptions)
    ], ResponseLaunchTemplateData.prototype, "instanceMarketOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResponseLaunchTemplateData.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResponseLaunchTemplateData.prototype, "kernelId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResponseLaunchTemplateData.prototype, "keyName", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: LaunchTemplateLicenseConfiguration }),
        __metadata("design:type", Array)
    ], ResponseLaunchTemplateData.prototype, "licenseSpecifications", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LaunchTemplateInstanceMetadataOptions)
    ], ResponseLaunchTemplateData.prototype, "metadataOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LaunchTemplatesMonitoring)
    ], ResponseLaunchTemplateData.prototype, "monitoring", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: LaunchTemplateInstanceNetworkInterfaceSpecification }),
        __metadata("design:type", Array)
    ], ResponseLaunchTemplateData.prototype, "networkInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LaunchTemplatePlacement)
    ], ResponseLaunchTemplateData.prototype, "placement", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResponseLaunchTemplateData.prototype, "ramDiskId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ResponseLaunchTemplateData.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ResponseLaunchTemplateData.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: LaunchTemplateTagSpecification }),
        __metadata("design:type", Array)
    ], ResponseLaunchTemplateData.prototype, "tagSpecifications", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResponseLaunchTemplateData.prototype, "userData", void 0);
    return ResponseLaunchTemplateData;
}(SpeakeasyBase));
export { ResponseLaunchTemplateData };
