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
var ListPublishedSchemaArnsQueryParams = /** @class */ (function (_super) {
    __extends(ListPublishedSchemaArnsQueryParams, _super);
    function ListPublishedSchemaArnsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListPublishedSchemaArnsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListPublishedSchemaArnsQueryParams.prototype, "nextToken", void 0);
    return ListPublishedSchemaArnsQueryParams;
}(SpeakeasyBase));
export { ListPublishedSchemaArnsQueryParams };
var ListPublishedSchemaArnsHeaders = /** @class */ (function (_super) {
    __extends(ListPublishedSchemaArnsHeaders, _super);
    function ListPublishedSchemaArnsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListPublishedSchemaArnsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListPublishedSchemaArnsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListPublishedSchemaArnsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListPublishedSchemaArnsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListPublishedSchemaArnsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListPublishedSchemaArnsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListPublishedSchemaArnsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListPublishedSchemaArnsHeaders;
}(SpeakeasyBase));
export { ListPublishedSchemaArnsHeaders };
var ListPublishedSchemaArnsRequestBody = /** @class */ (function (_super) {
    __extends(ListPublishedSchemaArnsRequestBody, _super);
    function ListPublishedSchemaArnsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListPublishedSchemaArnsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListPublishedSchemaArnsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemaArn" }),
        __metadata("design:type", String)
    ], ListPublishedSchemaArnsRequestBody.prototype, "schemaArn", void 0);
    return ListPublishedSchemaArnsRequestBody;
}(SpeakeasyBase));
export { ListPublishedSchemaArnsRequestBody };
var ListPublishedSchemaArnsRequest = /** @class */ (function (_super) {
    __extends(ListPublishedSchemaArnsRequest, _super);
    function ListPublishedSchemaArnsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPublishedSchemaArnsQueryParams)
    ], ListPublishedSchemaArnsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPublishedSchemaArnsHeaders)
    ], ListPublishedSchemaArnsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListPublishedSchemaArnsRequestBody)
    ], ListPublishedSchemaArnsRequest.prototype, "request", void 0);
    return ListPublishedSchemaArnsRequest;
}(SpeakeasyBase));
export { ListPublishedSchemaArnsRequest };
var ListPublishedSchemaArnsResponse = /** @class */ (function (_super) {
    __extends(ListPublishedSchemaArnsResponse, _super);
    function ListPublishedSchemaArnsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], ListPublishedSchemaArnsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPublishedSchemaArnsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], ListPublishedSchemaArnsResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], ListPublishedSchemaArnsResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidNextTokenException)
    ], ListPublishedSchemaArnsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], ListPublishedSchemaArnsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPublishedSchemaArnsResponse)
    ], ListPublishedSchemaArnsResponse.prototype, "listPublishedSchemaArnsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], ListPublishedSchemaArnsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], ListPublishedSchemaArnsResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListPublishedSchemaArnsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], ListPublishedSchemaArnsResponse.prototype, "validationException", void 0);
    return ListPublishedSchemaArnsResponse;
}(SpeakeasyBase));
export { ListPublishedSchemaArnsResponse };
