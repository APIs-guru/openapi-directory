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
var UpdateDomainPathParams = /** @class */ (function (_super) {
    __extends(UpdateDomainPathParams, _super);
    function UpdateDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" }),
        __metadata("design:type", String)
    ], UpdateDomainPathParams.prototype, "domainName", void 0);
    return UpdateDomainPathParams;
}(SpeakeasyBase));
export { UpdateDomainPathParams };
var UpdateDomainHeaders = /** @class */ (function (_super) {
    __extends(UpdateDomainHeaders, _super);
    function UpdateDomainHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDomainHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDomainHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDomainHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDomainHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDomainHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDomainHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDomainHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateDomainHeaders;
}(SpeakeasyBase));
export { UpdateDomainHeaders };
// UpdateDomainRequestBodyMatching
/**
 * The flag that enables the matching process of duplicate profiles.
**/
var UpdateDomainRequestBodyMatching = /** @class */ (function (_super) {
    __extends(UpdateDomainRequestBodyMatching, _super);
    function UpdateDomainRequestBodyMatching() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDomainRequestBodyMatching.prototype, "enabled", void 0);
    return UpdateDomainRequestBodyMatching;
}(SpeakeasyBase));
export { UpdateDomainRequestBodyMatching };
var UpdateDomainRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDomainRequestBody, _super);
    function UpdateDomainRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeadLetterQueueUrl" }),
        __metadata("design:type", String)
    ], UpdateDomainRequestBody.prototype, "deadLetterQueueUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultEncryptionKey" }),
        __metadata("design:type", String)
    ], UpdateDomainRequestBody.prototype, "defaultEncryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultExpirationDays" }),
        __metadata("design:type", Number)
    ], UpdateDomainRequestBody.prototype, "defaultExpirationDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Matching" }),
        __metadata("design:type", UpdateDomainRequestBodyMatching)
    ], UpdateDomainRequestBody.prototype, "matching", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], UpdateDomainRequestBody.prototype, "tags", void 0);
    return UpdateDomainRequestBody;
}(SpeakeasyBase));
export { UpdateDomainRequestBody };
var UpdateDomainRequest = /** @class */ (function (_super) {
    __extends(UpdateDomainRequest, _super);
    function UpdateDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDomainPathParams)
    ], UpdateDomainRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDomainHeaders)
    ], UpdateDomainRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDomainRequestBody)
    ], UpdateDomainRequest.prototype, "request", void 0);
    return UpdateDomainRequest;
}(SpeakeasyBase));
export { UpdateDomainRequest };
var UpdateDomainResponse = /** @class */ (function (_super) {
    __extends(UpdateDomainResponse, _super);
    function UpdateDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDomainResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDomainResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateDomainResponse)
    ], UpdateDomainResponse.prototype, "updateDomainResponse", void 0);
    return UpdateDomainResponse;
}(SpeakeasyBase));
export { UpdateDomainResponse };
