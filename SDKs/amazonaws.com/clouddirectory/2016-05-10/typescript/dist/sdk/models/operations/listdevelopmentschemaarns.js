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
var ListDevelopmentSchemaArnsQueryParams = /** @class */ (function (_super) {
    __extends(ListDevelopmentSchemaArnsQueryParams, _super);
    function ListDevelopmentSchemaArnsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListDevelopmentSchemaArnsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListDevelopmentSchemaArnsQueryParams.prototype, "nextToken", void 0);
    return ListDevelopmentSchemaArnsQueryParams;
}(SpeakeasyBase));
export { ListDevelopmentSchemaArnsQueryParams };
var ListDevelopmentSchemaArnsHeaders = /** @class */ (function (_super) {
    __extends(ListDevelopmentSchemaArnsHeaders, _super);
    function ListDevelopmentSchemaArnsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDevelopmentSchemaArnsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDevelopmentSchemaArnsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDevelopmentSchemaArnsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDevelopmentSchemaArnsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDevelopmentSchemaArnsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDevelopmentSchemaArnsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDevelopmentSchemaArnsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListDevelopmentSchemaArnsHeaders;
}(SpeakeasyBase));
export { ListDevelopmentSchemaArnsHeaders };
var ListDevelopmentSchemaArnsRequestBody = /** @class */ (function (_super) {
    __extends(ListDevelopmentSchemaArnsRequestBody, _super);
    function ListDevelopmentSchemaArnsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListDevelopmentSchemaArnsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListDevelopmentSchemaArnsRequestBody.prototype, "nextToken", void 0);
    return ListDevelopmentSchemaArnsRequestBody;
}(SpeakeasyBase));
export { ListDevelopmentSchemaArnsRequestBody };
var ListDevelopmentSchemaArnsRequest = /** @class */ (function (_super) {
    __extends(ListDevelopmentSchemaArnsRequest, _super);
    function ListDevelopmentSchemaArnsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDevelopmentSchemaArnsQueryParams)
    ], ListDevelopmentSchemaArnsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDevelopmentSchemaArnsHeaders)
    ], ListDevelopmentSchemaArnsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListDevelopmentSchemaArnsRequestBody)
    ], ListDevelopmentSchemaArnsRequest.prototype, "request", void 0);
    return ListDevelopmentSchemaArnsRequest;
}(SpeakeasyBase));
export { ListDevelopmentSchemaArnsRequest };
var ListDevelopmentSchemaArnsResponse = /** @class */ (function (_super) {
    __extends(ListDevelopmentSchemaArnsResponse, _super);
    function ListDevelopmentSchemaArnsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], ListDevelopmentSchemaArnsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDevelopmentSchemaArnsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], ListDevelopmentSchemaArnsResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], ListDevelopmentSchemaArnsResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidNextTokenException)
    ], ListDevelopmentSchemaArnsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], ListDevelopmentSchemaArnsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDevelopmentSchemaArnsResponse)
    ], ListDevelopmentSchemaArnsResponse.prototype, "listDevelopmentSchemaArnsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], ListDevelopmentSchemaArnsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], ListDevelopmentSchemaArnsResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDevelopmentSchemaArnsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], ListDevelopmentSchemaArnsResponse.prototype, "validationException", void 0);
    return ListDevelopmentSchemaArnsResponse;
}(SpeakeasyBase));
export { ListDevelopmentSchemaArnsResponse };
