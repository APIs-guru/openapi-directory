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
import { PredictiveScalingPredefinedLoadMetric } from "./predictivescalingpredefinedloadmetric";
import { PredictiveScalingPredefinedMetricPair } from "./predictivescalingpredefinedmetricpair";
import { PredictiveScalingPredefinedScalingMetric } from "./predictivescalingpredefinedscalingmetric";
// PredictiveScalingMetricSpecification
/**
 * <p>This structure specifies the metrics and target utilization settings for a predictive scaling policy. </p> <p>You must specify either a metric pair, or a load metric and a scaling metric individually. Specifying a metric pair instead of individual metrics provides a simpler way to configure metrics for a scaling policy. You choose the metric pair, and the policy automatically knows the correct sum and average statistics to use for the load metric and the scaling metric.</p> <p>Example</p> <ul> <li> <p>You create a predictive scaling policy and specify <code>ALBRequestCount</code> as the value for the metric pair and <code>1000.0</code> as the target value. For this type of metric, you must provide the metric dimension for the corresponding target group, so you also provide a resource label for the Application Load Balancer target group that is attached to your Auto Scaling group.</p> </li> <li> <p>The number of requests the target group receives per minute provides the load metric, and the request count averaged between the members of the target group provides the scaling metric. In CloudWatch, this refers to the <code>RequestCount</code> and <code>RequestCountPerTarget</code> metrics, respectively.</p> </li> <li> <p>For optimal use of predictive scaling, you adhere to the best practice of using a dynamic scaling policy to automatically scale between the minimum capacity and maximum capacity in response to real-time changes in resource utilization.</p> </li> <li> <p>Amazon EC2 Auto Scaling consumes data points for the load metric over the last 14 days and creates an hourly load forecast for predictive scaling. (A minimum of 24 hours of data is required.)</p> </li> <li> <p>After creating the load forecast, Amazon EC2 Auto Scaling determines when to reduce or increase the capacity of your Auto Scaling group in each hour of the forecast period so that the average number of requests received by each instance is as close to 1000 requests per minute as possible at all times.</p> </li> </ul>
**/
var PredictiveScalingMetricSpecification = /** @class */ (function (_super) {
    __extends(PredictiveScalingMetricSpecification, _super);
    function PredictiveScalingMetricSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PredictiveScalingPredefinedLoadMetric)
    ], PredictiveScalingMetricSpecification.prototype, "predefinedLoadMetricSpecification", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PredictiveScalingPredefinedMetricPair)
    ], PredictiveScalingMetricSpecification.prototype, "predefinedMetricPairSpecification", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PredictiveScalingPredefinedScalingMetric)
    ], PredictiveScalingMetricSpecification.prototype, "predefinedScalingMetricSpecification", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PredictiveScalingMetricSpecification.prototype, "targetValue", void 0);
    return PredictiveScalingMetricSpecification;
}(SpeakeasyBase));
export { PredictiveScalingMetricSpecification };
