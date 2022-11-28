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
import { DefaultTargetCapacityTypeEnum } from "./defaulttargetcapacitytypeenum";
// TargetCapacitySpecification
/**
 * <p>The number of units to request. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can specify a target capacity of 0 and add capacity later.</p> <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance <code>MaxTotalPrice</code>, or both to ensure that your fleet cost does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, EC2 Fleet will launch instances until it reaches the maximum amount that you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity. The <code>MaxTotalPrice</code> parameters are located in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptions.html">OnDemandOptions</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptions">SpotOptions</a>.</p>
**/
var TargetCapacitySpecification = /** @class */ (function (_super) {
    __extends(TargetCapacitySpecification, _super);
    function TargetCapacitySpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TargetCapacitySpecification.prototype, "defaultTargetCapacityType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TargetCapacitySpecification.prototype, "onDemandTargetCapacity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TargetCapacitySpecification.prototype, "spotTargetCapacity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TargetCapacitySpecification.prototype, "totalTargetCapacity", void 0);
    return TargetCapacitySpecification;
}(SpeakeasyBase));
export { TargetCapacitySpecification };
