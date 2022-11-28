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
var DeleteProfileKeyPathParams = /** @class */ (function (_super) {
    __extends(DeleteProfileKeyPathParams, _super);
    function DeleteProfileKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" }),
        __metadata("design:type", String)
    ], DeleteProfileKeyPathParams.prototype, "domainName", void 0);
    return DeleteProfileKeyPathParams;
}(SpeakeasyBase));
export { DeleteProfileKeyPathParams };
var DeleteProfileKeyHeaders = /** @class */ (function (_super) {
    __extends(DeleteProfileKeyHeaders, _super);
    function DeleteProfileKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteProfileKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteProfileKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteProfileKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteProfileKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteProfileKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteProfileKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteProfileKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteProfileKeyHeaders;
}(SpeakeasyBase));
export { DeleteProfileKeyHeaders };
var DeleteProfileKeyRequestBody = /** @class */ (function (_super) {
    __extends(DeleteProfileKeyRequestBody, _super);
    function DeleteProfileKeyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyName" }),
        __metadata("design:type", String)
    ], DeleteProfileKeyRequestBody.prototype, "keyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProfileId" }),
        __metadata("design:type", String)
    ], DeleteProfileKeyRequestBody.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Values" }),
        __metadata("design:type", Array)
    ], DeleteProfileKeyRequestBody.prototype, "values", void 0);
    return DeleteProfileKeyRequestBody;
}(SpeakeasyBase));
export { DeleteProfileKeyRequestBody };
var DeleteProfileKeyRequest = /** @class */ (function (_super) {
    __extends(DeleteProfileKeyRequest, _super);
    function DeleteProfileKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProfileKeyPathParams)
    ], DeleteProfileKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProfileKeyHeaders)
    ], DeleteProfileKeyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DeleteProfileKeyRequestBody)
    ], DeleteProfileKeyRequest.prototype, "request", void 0);
    return DeleteProfileKeyRequest;
}(SpeakeasyBase));
export { DeleteProfileKeyRequest };
var DeleteProfileKeyResponse = /** @class */ (function (_super) {
    __extends(DeleteProfileKeyResponse, _super);
    function DeleteProfileKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProfileKeyResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProfileKeyResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteProfileKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteProfileKeyResponse)
    ], DeleteProfileKeyResponse.prototype, "deleteProfileKeyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProfileKeyResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProfileKeyResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteProfileKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProfileKeyResponse.prototype, "throttlingException", void 0);
    return DeleteProfileKeyResponse;
}(SpeakeasyBase));
export { DeleteProfileKeyResponse };
