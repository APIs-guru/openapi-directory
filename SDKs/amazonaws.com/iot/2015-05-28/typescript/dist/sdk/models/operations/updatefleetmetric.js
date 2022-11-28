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
import * as shared from "../shared";
var UpdateFleetMetricPathParams = /** @class */ (function (_super) {
    __extends(UpdateFleetMetricPathParams, _super);
    function UpdateFleetMetricPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metricName" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricPathParams.prototype, "metricName", void 0);
    return UpdateFleetMetricPathParams;
}(SpeakeasyBase));
export { UpdateFleetMetricPathParams };
var UpdateFleetMetricHeaders = /** @class */ (function (_super) {
    __extends(UpdateFleetMetricHeaders, _super);
    function UpdateFleetMetricHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateFleetMetricHeaders;
}(SpeakeasyBase));
export { UpdateFleetMetricHeaders };
// UpdateFleetMetricRequestBodyAggregationType
/**
 * The type of aggregation queries.
**/
var UpdateFleetMetricRequestBodyAggregationType = /** @class */ (function (_super) {
    __extends(UpdateFleetMetricRequestBodyAggregationType, _super);
    function UpdateFleetMetricRequestBodyAggregationType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricRequestBodyAggregationType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], UpdateFleetMetricRequestBodyAggregationType.prototype, "values", void 0);
    return UpdateFleetMetricRequestBodyAggregationType;
}(SpeakeasyBase));
export { UpdateFleetMetricRequestBodyAggregationType };
export var UpdateFleetMetricRequestBodyUnitEnum;
(function (UpdateFleetMetricRequestBodyUnitEnum) {
    UpdateFleetMetricRequestBodyUnitEnum["Seconds"] = "Seconds";
    UpdateFleetMetricRequestBodyUnitEnum["Microseconds"] = "Microseconds";
    UpdateFleetMetricRequestBodyUnitEnum["Milliseconds"] = "Milliseconds";
    UpdateFleetMetricRequestBodyUnitEnum["Bytes"] = "Bytes";
    UpdateFleetMetricRequestBodyUnitEnum["Kilobytes"] = "Kilobytes";
    UpdateFleetMetricRequestBodyUnitEnum["Megabytes"] = "Megabytes";
    UpdateFleetMetricRequestBodyUnitEnum["Gigabytes"] = "Gigabytes";
    UpdateFleetMetricRequestBodyUnitEnum["Terabytes"] = "Terabytes";
    UpdateFleetMetricRequestBodyUnitEnum["Bits"] = "Bits";
    UpdateFleetMetricRequestBodyUnitEnum["Kilobits"] = "Kilobits";
    UpdateFleetMetricRequestBodyUnitEnum["Megabits"] = "Megabits";
    UpdateFleetMetricRequestBodyUnitEnum["Gigabits"] = "Gigabits";
    UpdateFleetMetricRequestBodyUnitEnum["Terabits"] = "Terabits";
    UpdateFleetMetricRequestBodyUnitEnum["Percent"] = "Percent";
    UpdateFleetMetricRequestBodyUnitEnum["Count"] = "Count";
    UpdateFleetMetricRequestBodyUnitEnum["BytesSecond"] = "Bytes/Second";
    UpdateFleetMetricRequestBodyUnitEnum["KilobytesSecond"] = "Kilobytes/Second";
    UpdateFleetMetricRequestBodyUnitEnum["MegabytesSecond"] = "Megabytes/Second";
    UpdateFleetMetricRequestBodyUnitEnum["GigabytesSecond"] = "Gigabytes/Second";
    UpdateFleetMetricRequestBodyUnitEnum["TerabytesSecond"] = "Terabytes/Second";
    UpdateFleetMetricRequestBodyUnitEnum["BitsSecond"] = "Bits/Second";
    UpdateFleetMetricRequestBodyUnitEnum["KilobitsSecond"] = "Kilobits/Second";
    UpdateFleetMetricRequestBodyUnitEnum["MegabitsSecond"] = "Megabits/Second";
    UpdateFleetMetricRequestBodyUnitEnum["GigabitsSecond"] = "Gigabits/Second";
    UpdateFleetMetricRequestBodyUnitEnum["TerabitsSecond"] = "Terabits/Second";
    UpdateFleetMetricRequestBodyUnitEnum["CountSecond"] = "Count/Second";
    UpdateFleetMetricRequestBodyUnitEnum["None"] = "None";
})(UpdateFleetMetricRequestBodyUnitEnum || (UpdateFleetMetricRequestBodyUnitEnum = {}));
var UpdateFleetMetricRequestBody = /** @class */ (function (_super) {
    __extends(UpdateFleetMetricRequestBody, _super);
    function UpdateFleetMetricRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregationField" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricRequestBody.prototype, "aggregationField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregationType" }),
        __metadata("design:type", UpdateFleetMetricRequestBodyAggregationType)
    ], UpdateFleetMetricRequestBody.prototype, "aggregationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedVersion" }),
        __metadata("design:type", Number)
    ], UpdateFleetMetricRequestBody.prototype, "expectedVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexName" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricRequestBody.prototype, "indexName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=period" }),
        __metadata("design:type", Number)
    ], UpdateFleetMetricRequestBody.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryString" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricRequestBody.prototype, "queryString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryVersion" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricRequestBody.prototype, "queryVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], UpdateFleetMetricRequestBody.prototype, "unit", void 0);
    return UpdateFleetMetricRequestBody;
}(SpeakeasyBase));
export { UpdateFleetMetricRequestBody };
var UpdateFleetMetricRequest = /** @class */ (function (_super) {
    __extends(UpdateFleetMetricRequest, _super);
    function UpdateFleetMetricRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFleetMetricPathParams)
    ], UpdateFleetMetricRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFleetMetricHeaders)
    ], UpdateFleetMetricRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateFleetMetricRequestBody)
    ], UpdateFleetMetricRequest.prototype, "request", void 0);
    return UpdateFleetMetricRequest;
}(SpeakeasyBase));
export { UpdateFleetMetricRequest };
var UpdateFleetMetricResponse = /** @class */ (function (_super) {
    __extends(UpdateFleetMetricResponse, _super);
    function UpdateFleetMetricResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFleetMetricResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFleetMetricResponse.prototype, "indexNotReadyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFleetMetricResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFleetMetricResponse.prototype, "invalidAggregationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFleetMetricResponse.prototype, "invalidQueryException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFleetMetricResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFleetMetricResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFleetMetricResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFleetMetricResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFleetMetricResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFleetMetricResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFleetMetricResponse.prototype, "versionConflictException", void 0);
    return UpdateFleetMetricResponse;
}(SpeakeasyBase));
export { UpdateFleetMetricResponse };
