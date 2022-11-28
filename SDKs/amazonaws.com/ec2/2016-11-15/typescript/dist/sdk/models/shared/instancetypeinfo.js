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
import { EbsInfo } from "./ebsinfo";
import { FpgaInfo } from "./fpgainfo";
import { GpuInfo } from "./gpuinfo";
import { InstanceTypeHypervisorEnum } from "./instancetypehypervisorenum";
import { InferenceAcceleratorInfo } from "./inferenceacceleratorinfo";
import { InstanceStorageInfo } from "./instancestorageinfo";
import { InstanceTypeEnum } from "./instancetypeenum";
import { MemoryInfo } from "./memoryinfo";
import { NetworkInfo } from "./networkinfo";
import { PlacementGroupInfo } from "./placementgroupinfo";
import { ProcessorInfo } from "./processorinfo";
import { VCpuInfo } from "./vcpuinfo";
// InstanceTypeInfo
/**
 * Describes the instance type.
**/
var InstanceTypeInfo = /** @class */ (function (_super) {
    __extends(InstanceTypeInfo, _super);
    function InstanceTypeInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], InstanceTypeInfo.prototype, "autoRecoverySupported", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], InstanceTypeInfo.prototype, "bareMetal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], InstanceTypeInfo.prototype, "burstablePerformanceSupported", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], InstanceTypeInfo.prototype, "currentGeneration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], InstanceTypeInfo.prototype, "dedicatedHostsSupported", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EbsInfo)
    ], InstanceTypeInfo.prototype, "ebsInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FpgaInfo)
    ], InstanceTypeInfo.prototype, "fpgaInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], InstanceTypeInfo.prototype, "freeTierEligible", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GpuInfo)
    ], InstanceTypeInfo.prototype, "gpuInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], InstanceTypeInfo.prototype, "hibernationSupported", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceTypeInfo.prototype, "hypervisor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InferenceAcceleratorInfo)
    ], InstanceTypeInfo.prototype, "inferenceAcceleratorInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InstanceStorageInfo)
    ], InstanceTypeInfo.prototype, "instanceStorageInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], InstanceTypeInfo.prototype, "instanceStorageSupported", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstanceTypeInfo.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MemoryInfo)
    ], InstanceTypeInfo.prototype, "memoryInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkInfo)
    ], InstanceTypeInfo.prototype, "networkInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlacementGroupInfo)
    ], InstanceTypeInfo.prototype, "placementGroupInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProcessorInfo)
    ], InstanceTypeInfo.prototype, "processorInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], InstanceTypeInfo.prototype, "supportedBootModes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], InstanceTypeInfo.prototype, "supportedRootDeviceTypes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], InstanceTypeInfo.prototype, "supportedUsageClasses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], InstanceTypeInfo.prototype, "supportedVirtualizationTypes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VCpuInfo)
    ], InstanceTypeInfo.prototype, "vCpuInfo", void 0);
    return InstanceTypeInfo;
}(SpeakeasyBase));
export { InstanceTypeInfo };
