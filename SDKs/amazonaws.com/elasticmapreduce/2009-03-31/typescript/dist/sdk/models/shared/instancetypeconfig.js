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
import { Configuration } from "./configuration";
import { EbsConfiguration } from "./ebsconfiguration";
// InstanceTypeConfig
/**
 * <p>An instance type configuration for each instance type in an instance fleet, which determines the EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. When you use an allocation strategy, you can include a maximum of 30 instance type configurations for a fleet. For more information about how to use an allocation strategy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html">Configure Instance Fleets</a>. Without an allocation strategy, you may specify a maximum of five instance type configurations for a fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
var InstanceTypeConfig = /** @class */ (function (_super) {
    __extends(InstanceTypeConfig, _super);
    function InstanceTypeConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BidPrice" }),
        __metadata("design:type", String)
    ], InstanceTypeConfig.prototype, "bidPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BidPriceAsPercentageOfOnDemandPrice" }),
        __metadata("design:type", Number)
    ], InstanceTypeConfig.prototype, "bidPriceAsPercentageOfOnDemandPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Configurations", elemType: Configuration }),
        __metadata("design:type", Array)
    ], InstanceTypeConfig.prototype, "configurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomAmiId" }),
        __metadata("design:type", String)
    ], InstanceTypeConfig.prototype, "customAmiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EbsConfiguration" }),
        __metadata("design:type", EbsConfiguration)
    ], InstanceTypeConfig.prototype, "ebsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], InstanceTypeConfig.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WeightedCapacity" }),
        __metadata("design:type", Number)
    ], InstanceTypeConfig.prototype, "weightedCapacity", void 0);
    return InstanceTypeConfig;
}(SpeakeasyBase));
export { InstanceTypeConfig };
