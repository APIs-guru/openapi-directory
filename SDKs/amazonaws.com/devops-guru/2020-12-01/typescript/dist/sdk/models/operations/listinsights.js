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
var ListInsightsQueryParams = /** @class */ (function (_super) {
    __extends(ListInsightsQueryParams, _super);
    function ListInsightsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListInsightsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListInsightsQueryParams.prototype, "nextToken", void 0);
    return ListInsightsQueryParams;
}(SpeakeasyBase));
export { ListInsightsQueryParams };
var ListInsightsHeaders = /** @class */ (function (_super) {
    __extends(ListInsightsHeaders, _super);
    function ListInsightsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListInsightsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListInsightsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListInsightsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListInsightsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListInsightsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListInsightsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListInsightsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListInsightsHeaders;
}(SpeakeasyBase));
export { ListInsightsHeaders };
// ListInsightsRequestBodyStatusFilter
/**
 *  A filter used by <code>ListInsights</code> to specify which insights to return.
**/
var ListInsightsRequestBodyStatusFilter = /** @class */ (function (_super) {
    __extends(ListInsightsRequestBodyStatusFilter, _super);
    function ListInsightsRequestBodyStatusFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Any" }),
        __metadata("design:type", shared.ListInsightsAnyStatusFilter)
    ], ListInsightsRequestBodyStatusFilter.prototype, "any", void 0);
    __decorate([
        Metadata({ data: "json, name=Closed" }),
        __metadata("design:type", shared.ListInsightsClosedStatusFilter)
    ], ListInsightsRequestBodyStatusFilter.prototype, "closed", void 0);
    __decorate([
        Metadata({ data: "json, name=Ongoing" }),
        __metadata("design:type", shared.ListInsightsOngoingStatusFilter)
    ], ListInsightsRequestBodyStatusFilter.prototype, "ongoing", void 0);
    return ListInsightsRequestBodyStatusFilter;
}(SpeakeasyBase));
export { ListInsightsRequestBodyStatusFilter };
var ListInsightsRequestBody = /** @class */ (function (_super) {
    __extends(ListInsightsRequestBody, _super);
    function ListInsightsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListInsightsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListInsightsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=StatusFilter" }),
        __metadata("design:type", ListInsightsRequestBodyStatusFilter)
    ], ListInsightsRequestBody.prototype, "statusFilter", void 0);
    return ListInsightsRequestBody;
}(SpeakeasyBase));
export { ListInsightsRequestBody };
var ListInsightsRequest = /** @class */ (function (_super) {
    __extends(ListInsightsRequest, _super);
    function ListInsightsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListInsightsQueryParams)
    ], ListInsightsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListInsightsHeaders)
    ], ListInsightsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListInsightsRequestBody)
    ], ListInsightsRequest.prototype, "request", void 0);
    return ListInsightsRequest;
}(SpeakeasyBase));
export { ListInsightsRequest };
var ListInsightsResponse = /** @class */ (function (_super) {
    __extends(ListInsightsResponse, _super);
    function ListInsightsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListInsightsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListInsightsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListInsightsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListInsightsResponse)
    ], ListInsightsResponse.prototype, "listInsightsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListInsightsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListInsightsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListInsightsResponse.prototype, "validationException", void 0);
    return ListInsightsResponse;
}(SpeakeasyBase));
export { ListInsightsResponse };
