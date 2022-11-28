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
var ListProfileObjectsPathParams = /** @class */ (function (_super) {
    __extends(ListProfileObjectsPathParams, _super);
    function ListProfileObjectsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" }),
        __metadata("design:type", String)
    ], ListProfileObjectsPathParams.prototype, "domainName", void 0);
    return ListProfileObjectsPathParams;
}(SpeakeasyBase));
export { ListProfileObjectsPathParams };
var ListProfileObjectsQueryParams = /** @class */ (function (_super) {
    __extends(ListProfileObjectsQueryParams, _super);
    function ListProfileObjectsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], ListProfileObjectsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next-token" }),
        __metadata("design:type", String)
    ], ListProfileObjectsQueryParams.prototype, "nextToken", void 0);
    return ListProfileObjectsQueryParams;
}(SpeakeasyBase));
export { ListProfileObjectsQueryParams };
var ListProfileObjectsHeaders = /** @class */ (function (_super) {
    __extends(ListProfileObjectsHeaders, _super);
    function ListProfileObjectsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListProfileObjectsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListProfileObjectsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListProfileObjectsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListProfileObjectsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListProfileObjectsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListProfileObjectsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListProfileObjectsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListProfileObjectsHeaders;
}(SpeakeasyBase));
export { ListProfileObjectsHeaders };
// ListProfileObjectsRequestBodyObjectFilter
/**
 * The filter applied to ListProfileObjects response to include profile objects with the specified index values. This filter is only supported for ObjectTypeName _asset and _case.
**/
var ListProfileObjectsRequestBodyObjectFilter = /** @class */ (function (_super) {
    __extends(ListProfileObjectsRequestBodyObjectFilter, _super);
    function ListProfileObjectsRequestBodyObjectFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyName" }),
        __metadata("design:type", String)
    ], ListProfileObjectsRequestBodyObjectFilter.prototype, "keyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Values" }),
        __metadata("design:type", Array)
    ], ListProfileObjectsRequestBodyObjectFilter.prototype, "values", void 0);
    return ListProfileObjectsRequestBodyObjectFilter;
}(SpeakeasyBase));
export { ListProfileObjectsRequestBodyObjectFilter };
var ListProfileObjectsRequestBody = /** @class */ (function (_super) {
    __extends(ListProfileObjectsRequestBody, _super);
    function ListProfileObjectsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectFilter" }),
        __metadata("design:type", ListProfileObjectsRequestBodyObjectFilter)
    ], ListProfileObjectsRequestBody.prototype, "objectFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectTypeName" }),
        __metadata("design:type", String)
    ], ListProfileObjectsRequestBody.prototype, "objectTypeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProfileId" }),
        __metadata("design:type", String)
    ], ListProfileObjectsRequestBody.prototype, "profileId", void 0);
    return ListProfileObjectsRequestBody;
}(SpeakeasyBase));
export { ListProfileObjectsRequestBody };
var ListProfileObjectsRequest = /** @class */ (function (_super) {
    __extends(ListProfileObjectsRequest, _super);
    function ListProfileObjectsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListProfileObjectsPathParams)
    ], ListProfileObjectsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListProfileObjectsQueryParams)
    ], ListProfileObjectsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListProfileObjectsHeaders)
    ], ListProfileObjectsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListProfileObjectsRequestBody)
    ], ListProfileObjectsRequest.prototype, "request", void 0);
    return ListProfileObjectsRequest;
}(SpeakeasyBase));
export { ListProfileObjectsRequest };
var ListProfileObjectsResponse = /** @class */ (function (_super) {
    __extends(ListProfileObjectsResponse, _super);
    function ListProfileObjectsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProfileObjectsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProfileObjectsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListProfileObjectsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProfileObjectsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListProfileObjectsResponse)
    ], ListProfileObjectsResponse.prototype, "listProfileObjectsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProfileObjectsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListProfileObjectsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProfileObjectsResponse.prototype, "throttlingException", void 0);
    return ListProfileObjectsResponse;
}(SpeakeasyBase));
export { ListProfileObjectsResponse };
