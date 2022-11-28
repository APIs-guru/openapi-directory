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
import { MetricTypeEnum } from "./metrictypeenum";
// PredefinedMetricSpecification
/**
 * <p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the Amazon Web Services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p>
**/
var PredefinedMetricSpecification = /** @class */ (function (_super) {
    __extends(PredefinedMetricSpecification, _super);
    function PredefinedMetricSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PredefinedMetricType" }),
        __metadata("design:type", String)
    ], PredefinedMetricSpecification.prototype, "predefinedMetricType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceLabel" }),
        __metadata("design:type", String)
    ], PredefinedMetricSpecification.prototype, "resourceLabel", void 0);
    return PredefinedMetricSpecification;
}(SpeakeasyBase));
export { PredefinedMetricSpecification };
