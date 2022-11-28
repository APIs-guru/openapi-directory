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
import { MetricDimension } from "./metricdimension";
import { MetricStatisticEnum } from "./metricstatisticenum";
// CustomizedLoadMetricSpecification
/**
 * <p>Represents a CloudWatch metric of your choosing that can be used for predictive scaling. </p> <p>For predictive scaling to work with a customized load metric specification, AWS Auto Scaling needs access to the <code>Sum</code> and <code>Average</code> statistics that CloudWatch computes from metric data.</p> <p>When you choose a load metric, make sure that the required <code>Sum</code> and <code>Average</code> statistics for your metric are available in CloudWatch and that they provide relevant data for predictive scaling. The <code>Sum</code> statistic must represent the total load on the resource, and the <code>Average</code> statistic must represent the average load per capacity unit of the resource. For example, there is a metric that counts the number of requests processed by your Auto Scaling group. If the <code>Sum</code> statistic represents the total request count processed by the group, then the <code>Average</code> statistic for the specified metric must represent the average request count processed by each instance of the group. </p> <p>If you publish your own metrics, you can aggregate the data points at a given interval and then publish the aggregated data points to CloudWatch. Before AWS Auto Scaling generates the forecast, it sums up all the metric data points that occurred within each hour to match the granularity period that is used in the forecast (60 minutes).</p> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p> <p>After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource">View Scaling Information for a Resource</a> in the <i>AWS Auto Scaling User Guide</i>.</p>
**/
var CustomizedLoadMetricSpecification = /** @class */ (function (_super) {
    __extends(CustomizedLoadMetricSpecification, _super);
    function CustomizedLoadMetricSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Dimensions", elemType: MetricDimension }),
        __metadata("design:type", Array)
    ], CustomizedLoadMetricSpecification.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricName" }),
        __metadata("design:type", String)
    ], CustomizedLoadMetricSpecification.prototype, "metricName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Namespace" }),
        __metadata("design:type", String)
    ], CustomizedLoadMetricSpecification.prototype, "namespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Statistic" }),
        __metadata("design:type", String)
    ], CustomizedLoadMetricSpecification.prototype, "statistic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unit" }),
        __metadata("design:type", String)
    ], CustomizedLoadMetricSpecification.prototype, "unit", void 0);
    return CustomizedLoadMetricSpecification;
}(SpeakeasyBase));
export { CustomizedLoadMetricSpecification };
