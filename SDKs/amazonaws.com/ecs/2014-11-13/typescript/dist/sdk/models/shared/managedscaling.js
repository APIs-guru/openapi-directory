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
import { ManagedScalingStatusEnum } from "./managedscalingstatusenum";
// ManagedScaling
/**
 * <p>The managed scaling settings for the Auto Scaling group capacity provider.</p> <p>When managed scaling is enabled, Amazon ECS manages the scale-in and scale-out actions of the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an Amazon ECS-managed CloudWatch metric with the specified <code>targetCapacity</code> value as the target value for the metric. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling">Using Managed Scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If managed scaling is disabled, the user must manage the scaling of the Auto Scaling group.</p>
**/
var ManagedScaling = /** @class */ (function (_super) {
    __extends(ManagedScaling, _super);
    function ManagedScaling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceWarmupPeriod" }),
        __metadata("design:type", Number)
    ], ManagedScaling.prototype, "instanceWarmupPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumScalingStepSize" }),
        __metadata("design:type", Number)
    ], ManagedScaling.prototype, "maximumScalingStepSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumScalingStepSize" }),
        __metadata("design:type", Number)
    ], ManagedScaling.prototype, "minimumScalingStepSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ManagedScaling.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetCapacity" }),
        __metadata("design:type", Number)
    ], ManagedScaling.prototype, "targetCapacity", void 0);
    return ManagedScaling;
}(SpeakeasyBase));
export { ManagedScaling };
