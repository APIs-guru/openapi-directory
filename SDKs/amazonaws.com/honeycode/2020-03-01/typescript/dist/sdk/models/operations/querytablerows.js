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
var QueryTableRowsPathParams = /** @class */ (function (_super) {
    __extends(QueryTableRowsPathParams, _super);
    function QueryTableRowsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tableId" }),
        __metadata("design:type", String)
    ], QueryTableRowsPathParams.prototype, "tableId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=workbookId" }),
        __metadata("design:type", String)
    ], QueryTableRowsPathParams.prototype, "workbookId", void 0);
    return QueryTableRowsPathParams;
}(SpeakeasyBase));
export { QueryTableRowsPathParams };
var QueryTableRowsQueryParams = /** @class */ (function (_super) {
    __extends(QueryTableRowsQueryParams, _super);
    function QueryTableRowsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], QueryTableRowsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], QueryTableRowsQueryParams.prototype, "nextToken", void 0);
    return QueryTableRowsQueryParams;
}(SpeakeasyBase));
export { QueryTableRowsQueryParams };
var QueryTableRowsHeaders = /** @class */ (function (_super) {
    __extends(QueryTableRowsHeaders, _super);
    function QueryTableRowsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], QueryTableRowsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], QueryTableRowsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], QueryTableRowsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], QueryTableRowsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], QueryTableRowsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], QueryTableRowsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], QueryTableRowsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return QueryTableRowsHeaders;
}(SpeakeasyBase));
export { QueryTableRowsHeaders };
// QueryTableRowsRequestBodyFilterFormula
/**
 *  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate.
**/
var QueryTableRowsRequestBodyFilterFormula = /** @class */ (function (_super) {
    __extends(QueryTableRowsRequestBodyFilterFormula, _super);
    function QueryTableRowsRequestBodyFilterFormula() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=contextRowId" }),
        __metadata("design:type", String)
    ], QueryTableRowsRequestBodyFilterFormula.prototype, "contextRowId", void 0);
    __decorate([
        Metadata({ data: "json, name=formula" }),
        __metadata("design:type", String)
    ], QueryTableRowsRequestBodyFilterFormula.prototype, "formula", void 0);
    return QueryTableRowsRequestBodyFilterFormula;
}(SpeakeasyBase));
export { QueryTableRowsRequestBodyFilterFormula };
var QueryTableRowsRequestBody = /** @class */ (function (_super) {
    __extends(QueryTableRowsRequestBody, _super);
    function QueryTableRowsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=filterFormula" }),
        __metadata("design:type", QueryTableRowsRequestBodyFilterFormula)
    ], QueryTableRowsRequestBody.prototype, "filterFormula", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], QueryTableRowsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], QueryTableRowsRequestBody.prototype, "nextToken", void 0);
    return QueryTableRowsRequestBody;
}(SpeakeasyBase));
export { QueryTableRowsRequestBody };
var QueryTableRowsRequest = /** @class */ (function (_super) {
    __extends(QueryTableRowsRequest, _super);
    function QueryTableRowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", QueryTableRowsPathParams)
    ], QueryTableRowsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", QueryTableRowsQueryParams)
    ], QueryTableRowsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", QueryTableRowsHeaders)
    ], QueryTableRowsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", QueryTableRowsRequestBody)
    ], QueryTableRowsRequest.prototype, "request", void 0);
    return QueryTableRowsRequest;
}(SpeakeasyBase));
export { QueryTableRowsRequest };
var QueryTableRowsResponse = /** @class */ (function (_super) {
    __extends(QueryTableRowsResponse, _super);
    function QueryTableRowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], QueryTableRowsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], QueryTableRowsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], QueryTableRowsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.QueryTableRowsResult)
    ], QueryTableRowsResponse.prototype, "queryTableRowsResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], QueryTableRowsResponse.prototype, "requestTimeoutException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], QueryTableRowsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], QueryTableRowsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], QueryTableRowsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], QueryTableRowsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], QueryTableRowsResponse.prototype, "validationException", void 0);
    return QueryTableRowsResponse;
}(SpeakeasyBase));
export { QueryTableRowsResponse };
