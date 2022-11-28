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
import { InstanceFleetTypeEnum } from "./instancefleettypeenum";
import { InstanceTypeSpecification } from "./instancetypespecification";
import { InstanceFleetProvisioningSpecifications } from "./instancefleetprovisioningspecifications";
import { InstanceFleetStatus } from "./instancefleetstatus";
// InstanceFleet
/**
 * <p>Describes an instance fleet, which is a group of EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot Instances, which are provisioned to meet a defined target capacity. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
var InstanceFleet = /** @class */ (function (_super) {
    __extends(InstanceFleet, _super);
    function InstanceFleet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], InstanceFleet.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceFleetType" }),
        __metadata("design:type", String)
    ], InstanceFleet.prototype, "instanceFleetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceTypeSpecifications", elemType: InstanceTypeSpecification }),
        __metadata("design:type", Array)
    ], InstanceFleet.prototype, "instanceTypeSpecifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LaunchSpecifications" }),
        __metadata("design:type", InstanceFleetProvisioningSpecifications)
    ], InstanceFleet.prototype, "launchSpecifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], InstanceFleet.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedOnDemandCapacity" }),
        __metadata("design:type", Number)
    ], InstanceFleet.prototype, "provisionedOnDemandCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedSpotCapacity" }),
        __metadata("design:type", Number)
    ], InstanceFleet.prototype, "provisionedSpotCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", InstanceFleetStatus)
    ], InstanceFleet.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetOnDemandCapacity" }),
        __metadata("design:type", Number)
    ], InstanceFleet.prototype, "targetOnDemandCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetSpotCapacity" }),
        __metadata("design:type", Number)
    ], InstanceFleet.prototype, "targetSpotCapacity", void 0);
    return InstanceFleet;
}(SpeakeasyBase));
export { InstanceFleet };
