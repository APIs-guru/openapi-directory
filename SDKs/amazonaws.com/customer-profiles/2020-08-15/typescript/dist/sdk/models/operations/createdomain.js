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
var CreateDomainPathParams = /** @class */ (function (_super) {
    __extends(CreateDomainPathParams, _super);
    function CreateDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" }),
        __metadata("design:type", String)
    ], CreateDomainPathParams.prototype, "domainName", void 0);
    return CreateDomainPathParams;
}(SpeakeasyBase));
export { CreateDomainPathParams };
var CreateDomainHeaders = /** @class */ (function (_super) {
    __extends(CreateDomainHeaders, _super);
    function CreateDomainHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDomainHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDomainHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDomainHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDomainHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDomainHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDomainHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDomainHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDomainHeaders;
}(SpeakeasyBase));
export { CreateDomainHeaders };
// CreateDomainRequestBodyMatching
/**
 * The flag that enables the matching process of duplicate profiles.
**/
var CreateDomainRequestBodyMatching = /** @class */ (function (_super) {
    __extends(CreateDomainRequestBodyMatching, _super);
    function CreateDomainRequestBodyMatching() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], CreateDomainRequestBodyMatching.prototype, "enabled", void 0);
    return CreateDomainRequestBodyMatching;
}(SpeakeasyBase));
export { CreateDomainRequestBodyMatching };
var CreateDomainRequestBody = /** @class */ (function (_super) {
    __extends(CreateDomainRequestBody, _super);
    function CreateDomainRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeadLetterQueueUrl" }),
        __metadata("design:type", String)
    ], CreateDomainRequestBody.prototype, "deadLetterQueueUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultEncryptionKey" }),
        __metadata("design:type", String)
    ], CreateDomainRequestBody.prototype, "defaultEncryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultExpirationDays" }),
        __metadata("design:type", Number)
    ], CreateDomainRequestBody.prototype, "defaultExpirationDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Matching" }),
        __metadata("design:type", CreateDomainRequestBodyMatching)
    ], CreateDomainRequestBody.prototype, "matching", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], CreateDomainRequestBody.prototype, "tags", void 0);
    return CreateDomainRequestBody;
}(SpeakeasyBase));
export { CreateDomainRequestBody };
var CreateDomainRequest = /** @class */ (function (_super) {
    __extends(CreateDomainRequest, _super);
    function CreateDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomainPathParams)
    ], CreateDomainRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomainHeaders)
    ], CreateDomainRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDomainRequestBody)
    ], CreateDomainRequest.prototype, "request", void 0);
    return CreateDomainRequest;
}(SpeakeasyBase));
export { CreateDomainRequest };
var CreateDomainResponse = /** @class */ (function (_super) {
    __extends(CreateDomainResponse, _super);
    function CreateDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDomainResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateDomainResponse)
    ], CreateDomainResponse.prototype, "createDomainResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDomainResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainResponse.prototype, "throttlingException", void 0);
    return CreateDomainResponse;
}(SpeakeasyBase));
export { CreateDomainResponse };
