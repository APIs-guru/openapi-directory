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
var ListTypedLinkFacetNamesQueryParams = /** @class */ (function (_super) {
    __extends(ListTypedLinkFacetNamesQueryParams, _super);
    function ListTypedLinkFacetNamesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListTypedLinkFacetNamesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListTypedLinkFacetNamesQueryParams.prototype, "nextToken", void 0);
    return ListTypedLinkFacetNamesQueryParams;
}(SpeakeasyBase));
export { ListTypedLinkFacetNamesQueryParams };
var ListTypedLinkFacetNamesHeaders = /** @class */ (function (_super) {
    __extends(ListTypedLinkFacetNamesHeaders, _super);
    function ListTypedLinkFacetNamesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListTypedLinkFacetNamesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListTypedLinkFacetNamesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListTypedLinkFacetNamesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListTypedLinkFacetNamesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListTypedLinkFacetNamesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListTypedLinkFacetNamesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListTypedLinkFacetNamesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], ListTypedLinkFacetNamesHeaders.prototype, "xAmzDataPartition", void 0);
    return ListTypedLinkFacetNamesHeaders;
}(SpeakeasyBase));
export { ListTypedLinkFacetNamesHeaders };
var ListTypedLinkFacetNamesRequestBody = /** @class */ (function (_super) {
    __extends(ListTypedLinkFacetNamesRequestBody, _super);
    function ListTypedLinkFacetNamesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListTypedLinkFacetNamesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListTypedLinkFacetNamesRequestBody.prototype, "nextToken", void 0);
    return ListTypedLinkFacetNamesRequestBody;
}(SpeakeasyBase));
export { ListTypedLinkFacetNamesRequestBody };
var ListTypedLinkFacetNamesRequest = /** @class */ (function (_super) {
    __extends(ListTypedLinkFacetNamesRequest, _super);
    function ListTypedLinkFacetNamesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTypedLinkFacetNamesQueryParams)
    ], ListTypedLinkFacetNamesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTypedLinkFacetNamesHeaders)
    ], ListTypedLinkFacetNamesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListTypedLinkFacetNamesRequestBody)
    ], ListTypedLinkFacetNamesRequest.prototype, "request", void 0);
    return ListTypedLinkFacetNamesRequest;
}(SpeakeasyBase));
export { ListTypedLinkFacetNamesRequest };
var ListTypedLinkFacetNamesResponse = /** @class */ (function (_super) {
    __extends(ListTypedLinkFacetNamesResponse, _super);
    function ListTypedLinkFacetNamesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], ListTypedLinkFacetNamesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTypedLinkFacetNamesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], ListTypedLinkFacetNamesResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], ListTypedLinkFacetNamesResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidNextTokenException)
    ], ListTypedLinkFacetNamesResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], ListTypedLinkFacetNamesResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTypedLinkFacetNamesResponse)
    ], ListTypedLinkFacetNamesResponse.prototype, "listTypedLinkFacetNamesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], ListTypedLinkFacetNamesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], ListTypedLinkFacetNamesResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTypedLinkFacetNamesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], ListTypedLinkFacetNamesResponse.prototype, "validationException", void 0);
    return ListTypedLinkFacetNamesResponse;
}(SpeakeasyBase));
export { ListTypedLinkFacetNamesResponse };
