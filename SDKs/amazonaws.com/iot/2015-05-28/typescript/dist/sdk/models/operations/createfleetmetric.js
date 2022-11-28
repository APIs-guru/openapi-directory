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
var CreateFleetMetricPathParams = /** @class */ (function (_super) {
    __extends(CreateFleetMetricPathParams, _super);
    function CreateFleetMetricPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metricName" }),
        __metadata("design:type", String)
    ], CreateFleetMetricPathParams.prototype, "metricName", void 0);
    return CreateFleetMetricPathParams;
}(SpeakeasyBase));
export { CreateFleetMetricPathParams };
var CreateFleetMetricHeaders = /** @class */ (function (_super) {
    __extends(CreateFleetMetricHeaders, _super);
    function CreateFleetMetricHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateFleetMetricHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateFleetMetricHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateFleetMetricHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateFleetMetricHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateFleetMetricHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateFleetMetricHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateFleetMetricHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateFleetMetricHeaders;
}(SpeakeasyBase));
export { CreateFleetMetricHeaders };
// CreateFleetMetricRequestBodyAggregationType
/**
 * The type of aggregation queries.
**/
var CreateFleetMetricRequestBodyAggregationType = /** @class */ (function (_super) {
    __extends(CreateFleetMetricRequestBodyAggregationType, _super);
    function CreateFleetMetricRequestBodyAggregationType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateFleetMetricRequestBodyAggregationType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], CreateFleetMetricRequestBodyAggregationType.prototype, "values", void 0);
    return CreateFleetMetricRequestBodyAggregationType;
}(SpeakeasyBase));
export { CreateFleetMetricRequestBodyAggregationType };
export var CreateFleetMetricRequestBodyUnitEnum;
(function (CreateFleetMetricRequestBodyUnitEnum) {
    CreateFleetMetricRequestBodyUnitEnum["Seconds"] = "Seconds";
    CreateFleetMetricRequestBodyUnitEnum["Microseconds"] = "Microseconds";
    CreateFleetMetricRequestBodyUnitEnum["Milliseconds"] = "Milliseconds";
    CreateFleetMetricRequestBodyUnitEnum["Bytes"] = "Bytes";
    CreateFleetMetricRequestBodyUnitEnum["Kilobytes"] = "Kilobytes";
    CreateFleetMetricRequestBodyUnitEnum["Megabytes"] = "Megabytes";
    CreateFleetMetricRequestBodyUnitEnum["Gigabytes"] = "Gigabytes";
    CreateFleetMetricRequestBodyUnitEnum["Terabytes"] = "Terabytes";
    CreateFleetMetricRequestBodyUnitEnum["Bits"] = "Bits";
    CreateFleetMetricRequestBodyUnitEnum["Kilobits"] = "Kilobits";
    CreateFleetMetricRequestBodyUnitEnum["Megabits"] = "Megabits";
    CreateFleetMetricRequestBodyUnitEnum["Gigabits"] = "Gigabits";
    CreateFleetMetricRequestBodyUnitEnum["Terabits"] = "Terabits";
    CreateFleetMetricRequestBodyUnitEnum["Percent"] = "Percent";
    CreateFleetMetricRequestBodyUnitEnum["Count"] = "Count";
    CreateFleetMetricRequestBodyUnitEnum["BytesSecond"] = "Bytes/Second";
    CreateFleetMetricRequestBodyUnitEnum["KilobytesSecond"] = "Kilobytes/Second";
    CreateFleetMetricRequestBodyUnitEnum["MegabytesSecond"] = "Megabytes/Second";
    CreateFleetMetricRequestBodyUnitEnum["GigabytesSecond"] = "Gigabytes/Second";
    CreateFleetMetricRequestBodyUnitEnum["TerabytesSecond"] = "Terabytes/Second";
    CreateFleetMetricRequestBodyUnitEnum["BitsSecond"] = "Bits/Second";
    CreateFleetMetricRequestBodyUnitEnum["KilobitsSecond"] = "Kilobits/Second";
    CreateFleetMetricRequestBodyUnitEnum["MegabitsSecond"] = "Megabits/Second";
    CreateFleetMetricRequestBodyUnitEnum["GigabitsSecond"] = "Gigabits/Second";
    CreateFleetMetricRequestBodyUnitEnum["TerabitsSecond"] = "Terabits/Second";
    CreateFleetMetricRequestBodyUnitEnum["CountSecond"] = "Count/Second";
    CreateFleetMetricRequestBodyUnitEnum["None"] = "None";
})(CreateFleetMetricRequestBodyUnitEnum || (CreateFleetMetricRequestBodyUnitEnum = {}));
var CreateFleetMetricRequestBody = /** @class */ (function (_super) {
    __extends(CreateFleetMetricRequestBody, _super);
    function CreateFleetMetricRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregationField" }),
        __metadata("design:type", String)
    ], CreateFleetMetricRequestBody.prototype, "aggregationField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregationType" }),
        __metadata("design:type", CreateFleetMetricRequestBodyAggregationType)
    ], CreateFleetMetricRequestBody.prototype, "aggregationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateFleetMetricRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexName" }),
        __metadata("design:type", String)
    ], CreateFleetMetricRequestBody.prototype, "indexName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=period" }),
        __metadata("design:type", Number)
    ], CreateFleetMetricRequestBody.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryString" }),
        __metadata("design:type", String)
    ], CreateFleetMetricRequestBody.prototype, "queryString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryVersion" }),
        __metadata("design:type", String)
    ], CreateFleetMetricRequestBody.prototype, "queryVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateFleetMetricRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], CreateFleetMetricRequestBody.prototype, "unit", void 0);
    return CreateFleetMetricRequestBody;
}(SpeakeasyBase));
export { CreateFleetMetricRequestBody };
var CreateFleetMetricRequest = /** @class */ (function (_super) {
    __extends(CreateFleetMetricRequest, _super);
    function CreateFleetMetricRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFleetMetricPathParams)
    ], CreateFleetMetricRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFleetMetricHeaders)
    ], CreateFleetMetricRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateFleetMetricRequestBody)
    ], CreateFleetMetricRequest.prototype, "request", void 0);
    return CreateFleetMetricRequest;
}(SpeakeasyBase));
export { CreateFleetMetricRequest };
var CreateFleetMetricResponse = /** @class */ (function (_super) {
    __extends(CreateFleetMetricResponse, _super);
    function CreateFleetMetricResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFleetMetricResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateFleetMetricResponse)
    ], CreateFleetMetricResponse.prototype, "createFleetMetricResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFleetMetricResponse.prototype, "indexNotReadyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFleetMetricResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFleetMetricResponse.prototype, "invalidAggregationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFleetMetricResponse.prototype, "invalidQueryException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFleetMetricResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFleetMetricResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFleetMetricResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFleetMetricResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFleetMetricResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFleetMetricResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFleetMetricResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFleetMetricResponse.prototype, "unauthorizedException", void 0);
    return CreateFleetMetricResponse;
}(SpeakeasyBase));
export { CreateFleetMetricResponse };
