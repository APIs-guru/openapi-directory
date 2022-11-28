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
import { ArchitectureValuesEnum } from "./architecturevaluesenum";
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";
import { BootModeValuesEnum } from "./bootmodevaluesenum";
import { CapacityReservationSpecificationResponse } from "./capacityreservationspecificationresponse";
import { CpuOptions } from "./cpuoptions";
import { ElasticGpuAssociation } from "./elasticgpuassociation";
import { ElasticInferenceAcceleratorAssociation } from "./elasticinferenceacceleratorassociation";
import { EnclaveOptions } from "./enclaveoptions";
import { HibernationOptions } from "./hibernationoptions";
import { HypervisorTypeEnum } from "./hypervisortypeenum";
import { IamInstanceProfile } from "./iaminstanceprofile";
import { InstanceLifecycleTypeEnum } from "./instancelifecycletypeenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { LicenseConfiguration } from "./licenseconfiguration";
import { InstanceMetadataOptionsResponse } from "./instancemetadataoptionsresponse";
import { Monitoring } from "./monitoring";
import { InstanceNetworkInterface } from "./instancenetworkinterface";
import { Placement } from "./placement";
import { PlatformValuesEnum } from "./platformvaluesenum";
import { ProductCode } from "./productcode";
import { DeviceTypeEnum } from "./devicetypeenum";
import { GroupIdentifier } from "./groupidentifier";
import { InstanceState } from "./instancestate";
import { StateReason } from "./statereason";
import { Tag } from "./tag";
import { VirtualizationTypeEnum } from "./virtualizationtypeenum";
// Instance
/**
 * Describes an instance.
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Instance.prototype, "amiLaunchIndex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "architecture", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: InstanceBlockDeviceMapping }),
        __metadata("design:type", Array)
    ], Instance.prototype, "blockDeviceMappings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "bootMode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "capacityReservationId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CapacityReservationSpecificationResponse)
    ], Instance.prototype, "capacityReservationSpecification", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CpuOptions)
    ], Instance.prototype, "cpuOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "ebsOptimized", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ElasticGpuAssociation }),
        __metadata("design:type", Array)
    ], Instance.prototype, "elasticGpuAssociations", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ElasticInferenceAcceleratorAssociation }),
        __metadata("design:type", Array)
    ], Instance.prototype, "elasticInferenceAcceleratorAssociations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "enaSupport", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnclaveOptions)
    ], Instance.prototype, "enclaveOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HibernationOptions)
    ], Instance.prototype, "hibernationOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "hypervisor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamInstanceProfile)
    ], Instance.prototype, "iamInstanceProfile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "imageId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "instanceLifecycle", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "kernelId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "keyName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], Instance.prototype, "launchTime", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: LicenseConfiguration }),
        __metadata("design:type", Array)
    ], Instance.prototype, "licenses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InstanceMetadataOptionsResponse)
    ], Instance.prototype, "metadataOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Monitoring)
    ], Instance.prototype, "monitoring", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: InstanceNetworkInterface }),
        __metadata("design:type", Array)
    ], Instance.prototype, "networkInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "outpostArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Placement)
    ], Instance.prototype, "placement", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "privateDnsName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "privateIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ProductCode }),
        __metadata("design:type", Array)
    ], Instance.prototype, "productCodes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "publicDnsName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "publicIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "ramdiskId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "rootDeviceName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "rootDeviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GroupIdentifier }),
        __metadata("design:type", Array)
    ], Instance.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "sourceDestCheck", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "spotInstanceRequestId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "sriovNetSupport", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InstanceState)
    ], Instance.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StateReason)
    ], Instance.prototype, "stateReason", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "stateTransitionReason", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "subnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Tag }),
        __metadata("design:type", Array)
    ], Instance.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "virtualizationType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Instance.prototype, "vpcId", void 0);
    return Instance;
}(SpeakeasyBase));
export { Instance };
