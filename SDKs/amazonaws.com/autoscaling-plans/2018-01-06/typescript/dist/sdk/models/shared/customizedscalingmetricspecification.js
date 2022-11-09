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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricStatisticEnum } from "./metricstatisticenum";
// CustomizedScalingMetricSpecification
/**
 * <p>Represents a CloudWatch metric of your choosing that can be used for dynamic scaling as part of a target tracking scaling policy. </p> <p>To create your customized scaling metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases. </p> </li> </ul> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
**/
var CustomizedScalingMetricSpecification = /** @class */ (function (_super) {
    __extends(CustomizedScalingMetricSpecification, _super);
    function CustomizedScalingMetricSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Dimensions", elemType: shared.MetricDimension }),
        __metadata("design:type", Array)
    ], CustomizedScalingMetricSpecification.prototype, "dimensions", void 0);
    __decorate([
        Metadata({ data: "json, name=MetricName" }),
        __metadata("design:type", String)
    ], CustomizedScalingMetricSpecification.prototype, "metricName", void 0);
    __decorate([
        Metadata({ data: "json, name=Namespace" }),
        __metadata("design:type", String)
    ], CustomizedScalingMetricSpecification.prototype, "namespace", void 0);
    __decorate([
        Metadata({ data: "json, name=Statistic" }),
        __metadata("design:type", String)
    ], CustomizedScalingMetricSpecification.prototype, "statistic", void 0);
    __decorate([
        Metadata({ data: "json, name=Unit" }),
        __metadata("design:type", String)
    ], CustomizedScalingMetricSpecification.prototype, "unit", void 0);
    return CustomizedScalingMetricSpecification;
}(SpeakeasyBase));
export { CustomizedScalingMetricSpecification };
