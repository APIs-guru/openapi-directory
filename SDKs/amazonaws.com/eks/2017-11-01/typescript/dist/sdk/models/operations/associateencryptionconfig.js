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
var AssociateEncryptionConfigPathParams = /** @class */ (function (_super) {
    __extends(AssociateEncryptionConfigPathParams, _super);
    function AssociateEncryptionConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AssociateEncryptionConfigPathParams.prototype, "name", void 0);
    return AssociateEncryptionConfigPathParams;
}(SpeakeasyBase));
export { AssociateEncryptionConfigPathParams };
var AssociateEncryptionConfigHeaders = /** @class */ (function (_super) {
    __extends(AssociateEncryptionConfigHeaders, _super);
    function AssociateEncryptionConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AssociateEncryptionConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AssociateEncryptionConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AssociateEncryptionConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AssociateEncryptionConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AssociateEncryptionConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AssociateEncryptionConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AssociateEncryptionConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AssociateEncryptionConfigHeaders;
}(SpeakeasyBase));
export { AssociateEncryptionConfigHeaders };
var AssociateEncryptionConfigRequestBody = /** @class */ (function (_super) {
    __extends(AssociateEncryptionConfigRequestBody, _super);
    function AssociateEncryptionConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], AssociateEncryptionConfigRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=encryptionConfig", elemType: shared.EncryptionConfig }),
        __metadata("design:type", Array)
    ], AssociateEncryptionConfigRequestBody.prototype, "encryptionConfig", void 0);
    return AssociateEncryptionConfigRequestBody;
}(SpeakeasyBase));
export { AssociateEncryptionConfigRequestBody };
var AssociateEncryptionConfigRequest = /** @class */ (function (_super) {
    __extends(AssociateEncryptionConfigRequest, _super);
    function AssociateEncryptionConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AssociateEncryptionConfigPathParams)
    ], AssociateEncryptionConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AssociateEncryptionConfigHeaders)
    ], AssociateEncryptionConfigRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssociateEncryptionConfigRequestBody)
    ], AssociateEncryptionConfigRequest.prototype, "request", void 0);
    return AssociateEncryptionConfigRequest;
}(SpeakeasyBase));
export { AssociateEncryptionConfigRequest };
var AssociateEncryptionConfigResponse = /** @class */ (function (_super) {
    __extends(AssociateEncryptionConfigResponse, _super);
    function AssociateEncryptionConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AssociateEncryptionConfigResponse)
    ], AssociateEncryptionConfigResponse.prototype, "associateEncryptionConfigResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateEncryptionConfigResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AssociateEncryptionConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateEncryptionConfigResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateEncryptionConfigResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateEncryptionConfigResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateEncryptionConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateEncryptionConfigResponse.prototype, "serverException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AssociateEncryptionConfigResponse.prototype, "statusCode", void 0);
    return AssociateEncryptionConfigResponse;
}(SpeakeasyBase));
export { AssociateEncryptionConfigResponse };
