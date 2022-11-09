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
var ListAnomaliesForInsightPathParams = /** @class */ (function (_super) {
    __extends(ListAnomaliesForInsightPathParams, _super);
    function ListAnomaliesForInsightPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=InsightId" }),
        __metadata("design:type", String)
    ], ListAnomaliesForInsightPathParams.prototype, "insightId", void 0);
    return ListAnomaliesForInsightPathParams;
}(SpeakeasyBase));
export { ListAnomaliesForInsightPathParams };
var ListAnomaliesForInsightQueryParams = /** @class */ (function (_super) {
    __extends(ListAnomaliesForInsightQueryParams, _super);
    function ListAnomaliesForInsightQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListAnomaliesForInsightQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListAnomaliesForInsightQueryParams.prototype, "nextToken", void 0);
    return ListAnomaliesForInsightQueryParams;
}(SpeakeasyBase));
export { ListAnomaliesForInsightQueryParams };
var ListAnomaliesForInsightHeaders = /** @class */ (function (_super) {
    __extends(ListAnomaliesForInsightHeaders, _super);
    function ListAnomaliesForInsightHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAnomaliesForInsightHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAnomaliesForInsightHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAnomaliesForInsightHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAnomaliesForInsightHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAnomaliesForInsightHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAnomaliesForInsightHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAnomaliesForInsightHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAnomaliesForInsightHeaders;
}(SpeakeasyBase));
export { ListAnomaliesForInsightHeaders };
// ListAnomaliesForInsightRequestBodyStartTimeRange
/**
 *  A time range used to specify when the behavior of an insight or anomaly started.
**/
var ListAnomaliesForInsightRequestBodyStartTimeRange = /** @class */ (function (_super) {
    __extends(ListAnomaliesForInsightRequestBodyStartTimeRange, _super);
    function ListAnomaliesForInsightRequestBodyStartTimeRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FromTime" }),
        __metadata("design:type", Date)
    ], ListAnomaliesForInsightRequestBodyStartTimeRange.prototype, "fromTime", void 0);
    __decorate([
        Metadata({ data: "json, name=ToTime" }),
        __metadata("design:type", Date)
    ], ListAnomaliesForInsightRequestBodyStartTimeRange.prototype, "toTime", void 0);
    return ListAnomaliesForInsightRequestBodyStartTimeRange;
}(SpeakeasyBase));
export { ListAnomaliesForInsightRequestBodyStartTimeRange };
var ListAnomaliesForInsightRequestBody = /** @class */ (function (_super) {
    __extends(ListAnomaliesForInsightRequestBody, _super);
    function ListAnomaliesForInsightRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListAnomaliesForInsightRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListAnomaliesForInsightRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=StartTimeRange" }),
        __metadata("design:type", ListAnomaliesForInsightRequestBodyStartTimeRange)
    ], ListAnomaliesForInsightRequestBody.prototype, "startTimeRange", void 0);
    return ListAnomaliesForInsightRequestBody;
}(SpeakeasyBase));
export { ListAnomaliesForInsightRequestBody };
var ListAnomaliesForInsightRequest = /** @class */ (function (_super) {
    __extends(ListAnomaliesForInsightRequest, _super);
    function ListAnomaliesForInsightRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListAnomaliesForInsightPathParams)
    ], ListAnomaliesForInsightRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAnomaliesForInsightQueryParams)
    ], ListAnomaliesForInsightRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAnomaliesForInsightHeaders)
    ], ListAnomaliesForInsightRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListAnomaliesForInsightRequestBody)
    ], ListAnomaliesForInsightRequest.prototype, "request", void 0);
    return ListAnomaliesForInsightRequest;
}(SpeakeasyBase));
export { ListAnomaliesForInsightRequest };
var ListAnomaliesForInsightResponse = /** @class */ (function (_super) {
    __extends(ListAnomaliesForInsightResponse, _super);
    function ListAnomaliesForInsightResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAnomaliesForInsightResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAnomaliesForInsightResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAnomaliesForInsightResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListAnomaliesForInsightResponse)
    ], ListAnomaliesForInsightResponse.prototype, "listAnomaliesForInsightResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAnomaliesForInsightResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAnomaliesForInsightResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAnomaliesForInsightResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAnomaliesForInsightResponse.prototype, "validationException", void 0);
    return ListAnomaliesForInsightResponse;
}(SpeakeasyBase));
export { ListAnomaliesForInsightResponse };
