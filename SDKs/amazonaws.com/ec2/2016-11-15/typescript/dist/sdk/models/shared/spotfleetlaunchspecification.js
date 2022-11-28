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
import { IamInstanceProfileSpecification } from "./iaminstanceprofilespecification";
import { InstanceTypeEnum } from "./instancetypeenum";
import { SpotFleetMonitoring } from "./spotfleetmonitoring";
import { InstanceNetworkInterfaceSpecification } from "./instancenetworkinterfacespecification";
import { SpotPlacement } from "./spotplacement";
import { GroupIdentifier } from "./groupidentifier";
import { SpotFleetTagSpecification } from "./spotfleettagspecification";
// SpotFleetLaunchSpecification
/**
 * Describes the launch specification for one or more Spot Instances. If you include On-Demand capacity in your fleet request or want to specify an EFA network device, you can't use <code>SpotFleetLaunchSpecification</code>; you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.
**/
var SpotFleetLaunchSpecification = /** @class */ (function (_super) {
    __extends(SpotFleetLaunchSpecification, _super);
    function SpotFleetLaunchSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpotFleetLaunchSpecification.prototype, "addressingType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: BlockDeviceMapping }),
        __metadata("design:type", Array)
    ], SpotFleetLaunchSpecification.prototype, "blockDeviceMappings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], SpotFleetLaunchSpecification.prototype, "ebsOptimized", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamInstanceProfileSpecification)
    ], SpotFleetLaunchSpecification.prototype, "iamInstanceProfile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpotFleetLaunchSpecification.prototype, "imageId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpotFleetLaunchSpecification.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpotFleetLaunchSpecification.prototype, "kernelId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpotFleetLaunchSpecification.prototype, "keyName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpotFleetMonitoring)
    ], SpotFleetLaunchSpecification.prototype, "monitoring", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: InstanceNetworkInterfaceSpecification }),
        __metadata("design:type", Array)
    ], SpotFleetLaunchSpecification.prototype, "networkInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpotPlacement)
    ], SpotFleetLaunchSpecification.prototype, "placement", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpotFleetLaunchSpecification.prototype, "ramdiskId", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GroupIdentifier }),
        __metadata("design:type", Array)
    ], SpotFleetLaunchSpecification.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpotFleetLaunchSpecification.prototype, "spotPrice", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpotFleetLaunchSpecification.prototype, "subnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: SpotFleetTagSpecification }),
        __metadata("design:type", Array)
    ], SpotFleetLaunchSpecification.prototype, "tagSpecifications", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpotFleetLaunchSpecification.prototype, "userData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpotFleetLaunchSpecification.prototype, "weightedCapacity", void 0);
    return SpotFleetLaunchSpecification;
}(SpeakeasyBase));
export { SpotFleetLaunchSpecification };
