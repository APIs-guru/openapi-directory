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
import { BlockDeviceMapping } from "./blockdevicemapping";
import { InstanceMonitoring } from "./instancemonitoring";
import { InstanceMetadataOptions } from "./instancemetadataoptions";
// LaunchConfiguration
/**
 * Describes a launch configuration.
**/
var LaunchConfiguration = /** @class */ (function (_super) {
    __extends(LaunchConfiguration, _super);
    function LaunchConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], LaunchConfiguration.prototype, "associatePublicIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: BlockDeviceMapping }),
        __metadata("design:type", Array)
    ], LaunchConfiguration.prototype, "blockDeviceMappings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LaunchConfiguration.prototype, "classicLinkVpcId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], LaunchConfiguration.prototype, "classicLinkVpcSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], LaunchConfiguration.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], LaunchConfiguration.prototype, "ebsOptimized", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LaunchConfiguration.prototype, "iamInstanceProfile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LaunchConfiguration.prototype, "imageId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InstanceMonitoring)
    ], LaunchConfiguration.prototype, "instanceMonitoring", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LaunchConfiguration.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LaunchConfiguration.prototype, "kernelId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LaunchConfiguration.prototype, "keyName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LaunchConfiguration.prototype, "launchConfigurationArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LaunchConfiguration.prototype, "launchConfigurationName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InstanceMetadataOptions)
    ], LaunchConfiguration.prototype, "metadataOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LaunchConfiguration.prototype, "placementTenancy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LaunchConfiguration.prototype, "ramdiskId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], LaunchConfiguration.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LaunchConfiguration.prototype, "spotPrice", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LaunchConfiguration.prototype, "userData", void 0);
    return LaunchConfiguration;
}(SpeakeasyBase));
export { LaunchConfiguration };
