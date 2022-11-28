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
var ListEventsQueryParams = /** @class */ (function (_super) {
    __extends(ListEventsQueryParams, _super);
    function ListEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListEventsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListEventsQueryParams.prototype, "nextToken", void 0);
    return ListEventsQueryParams;
}(SpeakeasyBase));
export { ListEventsQueryParams };
var ListEventsHeaders = /** @class */ (function (_super) {
    __extends(ListEventsHeaders, _super);
    function ListEventsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListEventsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListEventsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListEventsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListEventsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListEventsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListEventsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListEventsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListEventsHeaders;
}(SpeakeasyBase));
export { ListEventsHeaders };
// ListEventsRequestBodyFilters
/**
 *  Filters you can use to specify which events are returned when <code>ListEvents</code> is called.
**/
var ListEventsRequestBodyFilters = /** @class */ (function (_super) {
    __extends(ListEventsRequestBodyFilters, _super);
    function ListEventsRequestBodyFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataSource" }),
        __metadata("design:type", String)
    ], ListEventsRequestBodyFilters.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventClass" }),
        __metadata("design:type", String)
    ], ListEventsRequestBodyFilters.prototype, "eventClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventSource" }),
        __metadata("design:type", String)
    ], ListEventsRequestBodyFilters.prototype, "eventSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventTimeRange" }),
        __metadata("design:type", shared.EventTimeRange)
    ], ListEventsRequestBodyFilters.prototype, "eventTimeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InsightId" }),
        __metadata("design:type", String)
    ], ListEventsRequestBodyFilters.prototype, "insightId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceCollection" }),
        __metadata("design:type", shared.ResourceCollection)
    ], ListEventsRequestBodyFilters.prototype, "resourceCollection", void 0);
    return ListEventsRequestBodyFilters;
}(SpeakeasyBase));
export { ListEventsRequestBodyFilters };
var ListEventsRequestBody = /** @class */ (function (_super) {
    __extends(ListEventsRequestBody, _super);
    function ListEventsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Filters" }),
        __metadata("design:type", ListEventsRequestBodyFilters)
    ], ListEventsRequestBody.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListEventsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListEventsRequestBody.prototype, "nextToken", void 0);
    return ListEventsRequestBody;
}(SpeakeasyBase));
export { ListEventsRequestBody };
var ListEventsRequest = /** @class */ (function (_super) {
    __extends(ListEventsRequest, _super);
    function ListEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEventsQueryParams)
    ], ListEventsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEventsHeaders)
    ], ListEventsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListEventsRequestBody)
    ], ListEventsRequest.prototype, "request", void 0);
    return ListEventsRequest;
}(SpeakeasyBase));
export { ListEventsRequest };
var ListEventsResponse = /** @class */ (function (_super) {
    __extends(ListEventsResponse, _super);
    function ListEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListEventsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListEventsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListEventsResponse)
    ], ListEventsResponse.prototype, "listEventsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListEventsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListEventsResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListEventsResponse.prototype, "validationException", void 0);
    return ListEventsResponse;
}(SpeakeasyBase));
export { ListEventsResponse };
