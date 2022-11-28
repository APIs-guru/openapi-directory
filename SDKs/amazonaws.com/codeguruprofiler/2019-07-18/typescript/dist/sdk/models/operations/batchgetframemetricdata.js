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
var BatchGetFrameMetricDataPathParams = /** @class */ (function (_super) {
    __extends(BatchGetFrameMetricDataPathParams, _super);
    function BatchGetFrameMetricDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profilingGroupName" }),
        __metadata("design:type", String)
    ], BatchGetFrameMetricDataPathParams.prototype, "profilingGroupName", void 0);
    return BatchGetFrameMetricDataPathParams;
}(SpeakeasyBase));
export { BatchGetFrameMetricDataPathParams };
export var BatchGetFrameMetricDataTargetResolutionEnum;
(function (BatchGetFrameMetricDataTargetResolutionEnum) {
    BatchGetFrameMetricDataTargetResolutionEnum["Pt5M"] = "PT5M";
    BatchGetFrameMetricDataTargetResolutionEnum["Pt1H"] = "PT1H";
    BatchGetFrameMetricDataTargetResolutionEnum["P1D"] = "P1D";
})(BatchGetFrameMetricDataTargetResolutionEnum || (BatchGetFrameMetricDataTargetResolutionEnum = {}));
var BatchGetFrameMetricDataQueryParams = /** @class */ (function (_super) {
    __extends(BatchGetFrameMetricDataQueryParams, _super);
    function BatchGetFrameMetricDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", Date)
    ], BatchGetFrameMetricDataQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" }),
        __metadata("design:type", String)
    ], BatchGetFrameMetricDataQueryParams.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", Date)
    ], BatchGetFrameMetricDataQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetResolution" }),
        __metadata("design:type", String)
    ], BatchGetFrameMetricDataQueryParams.prototype, "targetResolution", void 0);
    return BatchGetFrameMetricDataQueryParams;
}(SpeakeasyBase));
export { BatchGetFrameMetricDataQueryParams };
var BatchGetFrameMetricDataHeaders = /** @class */ (function (_super) {
    __extends(BatchGetFrameMetricDataHeaders, _super);
    function BatchGetFrameMetricDataHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchGetFrameMetricDataHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchGetFrameMetricDataHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchGetFrameMetricDataHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchGetFrameMetricDataHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchGetFrameMetricDataHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchGetFrameMetricDataHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchGetFrameMetricDataHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchGetFrameMetricDataHeaders;
}(SpeakeasyBase));
export { BatchGetFrameMetricDataHeaders };
var BatchGetFrameMetricDataRequestBody = /** @class */ (function (_super) {
    __extends(BatchGetFrameMetricDataRequestBody, _super);
    function BatchGetFrameMetricDataRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frameMetrics", elemType: shared.FrameMetric }),
        __metadata("design:type", Array)
    ], BatchGetFrameMetricDataRequestBody.prototype, "frameMetrics", void 0);
    return BatchGetFrameMetricDataRequestBody;
}(SpeakeasyBase));
export { BatchGetFrameMetricDataRequestBody };
var BatchGetFrameMetricDataRequest = /** @class */ (function (_super) {
    __extends(BatchGetFrameMetricDataRequest, _super);
    function BatchGetFrameMetricDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchGetFrameMetricDataPathParams)
    ], BatchGetFrameMetricDataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchGetFrameMetricDataQueryParams)
    ], BatchGetFrameMetricDataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchGetFrameMetricDataHeaders)
    ], BatchGetFrameMetricDataRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchGetFrameMetricDataRequestBody)
    ], BatchGetFrameMetricDataRequest.prototype, "request", void 0);
    return BatchGetFrameMetricDataRequest;
}(SpeakeasyBase));
export { BatchGetFrameMetricDataRequest };
var BatchGetFrameMetricDataResponse = /** @class */ (function (_super) {
    __extends(BatchGetFrameMetricDataResponse, _super);
    function BatchGetFrameMetricDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchGetFrameMetricDataResponse)
    ], BatchGetFrameMetricDataResponse.prototype, "batchGetFrameMetricDataResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchGetFrameMetricDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchGetFrameMetricDataResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchGetFrameMetricDataResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchGetFrameMetricDataResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchGetFrameMetricDataResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchGetFrameMetricDataResponse.prototype, "validationException", void 0);
    return BatchGetFrameMetricDataResponse;
}(SpeakeasyBase));
export { BatchGetFrameMetricDataResponse };
