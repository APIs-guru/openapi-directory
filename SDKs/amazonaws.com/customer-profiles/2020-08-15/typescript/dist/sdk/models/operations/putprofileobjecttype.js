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
var PutProfileObjectTypePathParams = /** @class */ (function (_super) {
    __extends(PutProfileObjectTypePathParams, _super);
    function PutProfileObjectTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" }),
        __metadata("design:type", String)
    ], PutProfileObjectTypePathParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ObjectTypeName" }),
        __metadata("design:type", String)
    ], PutProfileObjectTypePathParams.prototype, "objectTypeName", void 0);
    return PutProfileObjectTypePathParams;
}(SpeakeasyBase));
export { PutProfileObjectTypePathParams };
var PutProfileObjectTypeHeaders = /** @class */ (function (_super) {
    __extends(PutProfileObjectTypeHeaders, _super);
    function PutProfileObjectTypeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutProfileObjectTypeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutProfileObjectTypeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutProfileObjectTypeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutProfileObjectTypeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutProfileObjectTypeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutProfileObjectTypeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutProfileObjectTypeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutProfileObjectTypeHeaders;
}(SpeakeasyBase));
export { PutProfileObjectTypeHeaders };
var PutProfileObjectTypeRequestBody = /** @class */ (function (_super) {
    __extends(PutProfileObjectTypeRequestBody, _super);
    function PutProfileObjectTypeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowProfileCreation" }),
        __metadata("design:type", Boolean)
    ], PutProfileObjectTypeRequestBody.prototype, "allowProfileCreation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], PutProfileObjectTypeRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncryptionKey" }),
        __metadata("design:type", String)
    ], PutProfileObjectTypeRequestBody.prototype, "encryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDays" }),
        __metadata("design:type", Number)
    ], PutProfileObjectTypeRequestBody.prototype, "expirationDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Fields", elemType: shared.ObjectTypeField }),
        __metadata("design:type", Map)
    ], PutProfileObjectTypeRequestBody.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Keys", elemType: shared.ObjectTypeKey, elemDepth: 2 }),
        __metadata("design:type", Map)
    ], PutProfileObjectTypeRequestBody.prototype, "keys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], PutProfileObjectTypeRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateId" }),
        __metadata("design:type", String)
    ], PutProfileObjectTypeRequestBody.prototype, "templateId", void 0);
    return PutProfileObjectTypeRequestBody;
}(SpeakeasyBase));
export { PutProfileObjectTypeRequestBody };
var PutProfileObjectTypeRequest = /** @class */ (function (_super) {
    __extends(PutProfileObjectTypeRequest, _super);
    function PutProfileObjectTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutProfileObjectTypePathParams)
    ], PutProfileObjectTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutProfileObjectTypeHeaders)
    ], PutProfileObjectTypeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutProfileObjectTypeRequestBody)
    ], PutProfileObjectTypeRequest.prototype, "request", void 0);
    return PutProfileObjectTypeRequest;
}(SpeakeasyBase));
export { PutProfileObjectTypeRequest };
var PutProfileObjectTypeResponse = /** @class */ (function (_super) {
    __extends(PutProfileObjectTypeResponse, _super);
    function PutProfileObjectTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutProfileObjectTypeResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutProfileObjectTypeResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutProfileObjectTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutProfileObjectTypeResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PutProfileObjectTypeResponse)
    ], PutProfileObjectTypeResponse.prototype, "putProfileObjectTypeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutProfileObjectTypeResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutProfileObjectTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutProfileObjectTypeResponse.prototype, "throttlingException", void 0);
    return PutProfileObjectTypeResponse;
}(SpeakeasyBase));
export { PutProfileObjectTypeResponse };
