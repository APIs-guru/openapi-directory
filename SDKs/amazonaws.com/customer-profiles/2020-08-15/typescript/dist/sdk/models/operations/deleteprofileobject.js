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
var DeleteProfileObjectPathParams = /** @class */ (function (_super) {
    __extends(DeleteProfileObjectPathParams, _super);
    function DeleteProfileObjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" }),
        __metadata("design:type", String)
    ], DeleteProfileObjectPathParams.prototype, "domainName", void 0);
    return DeleteProfileObjectPathParams;
}(SpeakeasyBase));
export { DeleteProfileObjectPathParams };
var DeleteProfileObjectHeaders = /** @class */ (function (_super) {
    __extends(DeleteProfileObjectHeaders, _super);
    function DeleteProfileObjectHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteProfileObjectHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteProfileObjectHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteProfileObjectHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteProfileObjectHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteProfileObjectHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteProfileObjectHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteProfileObjectHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteProfileObjectHeaders;
}(SpeakeasyBase));
export { DeleteProfileObjectHeaders };
var DeleteProfileObjectRequestBody = /** @class */ (function (_super) {
    __extends(DeleteProfileObjectRequestBody, _super);
    function DeleteProfileObjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectTypeName" }),
        __metadata("design:type", String)
    ], DeleteProfileObjectRequestBody.prototype, "objectTypeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProfileId" }),
        __metadata("design:type", String)
    ], DeleteProfileObjectRequestBody.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProfileObjectUniqueKey" }),
        __metadata("design:type", String)
    ], DeleteProfileObjectRequestBody.prototype, "profileObjectUniqueKey", void 0);
    return DeleteProfileObjectRequestBody;
}(SpeakeasyBase));
export { DeleteProfileObjectRequestBody };
var DeleteProfileObjectRequest = /** @class */ (function (_super) {
    __extends(DeleteProfileObjectRequest, _super);
    function DeleteProfileObjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProfileObjectPathParams)
    ], DeleteProfileObjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProfileObjectHeaders)
    ], DeleteProfileObjectRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DeleteProfileObjectRequestBody)
    ], DeleteProfileObjectRequest.prototype, "request", void 0);
    return DeleteProfileObjectRequest;
}(SpeakeasyBase));
export { DeleteProfileObjectRequest };
var DeleteProfileObjectResponse = /** @class */ (function (_super) {
    __extends(DeleteProfileObjectResponse, _super);
    function DeleteProfileObjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProfileObjectResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProfileObjectResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteProfileObjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteProfileObjectResponse)
    ], DeleteProfileObjectResponse.prototype, "deleteProfileObjectResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProfileObjectResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProfileObjectResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteProfileObjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProfileObjectResponse.prototype, "throttlingException", void 0);
    return DeleteProfileObjectResponse;
}(SpeakeasyBase));
export { DeleteProfileObjectResponse };
