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
import { Alarm } from "./alarm";
import { PredictiveScalingConfiguration } from "./predictivescalingconfiguration";
import { StepAdjustment } from "./stepadjustment";
import { TargetTrackingConfiguration } from "./targettrackingconfiguration";
// ScalingPolicy
/**
 * Describes a scaling policy.
**/
var ScalingPolicy = /** @class */ (function (_super) {
    __extends(ScalingPolicy, _super);
    function ScalingPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "adjustmentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Alarm }),
        __metadata("design:type", Array)
    ], ScalingPolicy.prototype, "alarms", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "autoScalingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScalingPolicy.prototype, "cooldown", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ScalingPolicy.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScalingPolicy.prototype, "estimatedInstanceWarmup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "metricAggregationType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScalingPolicy.prototype, "minAdjustmentMagnitude", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScalingPolicy.prototype, "minAdjustmentStep", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "policyArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "policyName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "policyType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PredictiveScalingConfiguration)
    ], ScalingPolicy.prototype, "predictiveScalingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScalingPolicy.prototype, "scalingAdjustment", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: StepAdjustment }),
        __metadata("design:type", Array)
    ], ScalingPolicy.prototype, "stepAdjustments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TargetTrackingConfiguration)
    ], ScalingPolicy.prototype, "targetTrackingConfiguration", void 0);
    return ScalingPolicy;
}(SpeakeasyBase));
export { ScalingPolicy };
