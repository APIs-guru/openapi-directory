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
import { AggregationType } from "./aggregationtype";
import { FleetMetricUnitEnum } from "./fleetmetricunitenum";
var DescribeFleetMetricResponse = /** @class */ (function (_super) {
    __extends(DescribeFleetMetricResponse, _super);
    function DescribeFleetMetricResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregationField" }),
        __metadata("design:type", String)
    ], DescribeFleetMetricResponse.prototype, "aggregationField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregationType" }),
        __metadata("design:type", AggregationType)
    ], DescribeFleetMetricResponse.prototype, "aggregationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", Date)
    ], DescribeFleetMetricResponse.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DescribeFleetMetricResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexName" }),
        __metadata("design:type", String)
    ], DescribeFleetMetricResponse.prototype, "indexName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedDate" }),
        __metadata("design:type", Date)
    ], DescribeFleetMetricResponse.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricArn" }),
        __metadata("design:type", String)
    ], DescribeFleetMetricResponse.prototype, "metricArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricName" }),
        __metadata("design:type", String)
    ], DescribeFleetMetricResponse.prototype, "metricName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=period" }),
        __metadata("design:type", Number)
    ], DescribeFleetMetricResponse.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryString" }),
        __metadata("design:type", String)
    ], DescribeFleetMetricResponse.prototype, "queryString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryVersion" }),
        __metadata("design:type", String)
    ], DescribeFleetMetricResponse.prototype, "queryVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], DescribeFleetMetricResponse.prototype, "unit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], DescribeFleetMetricResponse.prototype, "version", void 0);
    return DescribeFleetMetricResponse;
}(SpeakeasyBase));
export { DescribeFleetMetricResponse };
