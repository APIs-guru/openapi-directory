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
var CreateImageHeaders = /** @class */ (function (_super) {
    __extends(CreateImageHeaders, _super);
    function CreateImageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateImageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateImageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateImageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateImageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateImageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateImageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateImageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateImageHeaders;
}(SpeakeasyBase));
export { CreateImageHeaders };
// CreateImageRequestBodyImageTestsConfiguration
/**
 * Image tests configuration.
**/
var CreateImageRequestBodyImageTestsConfiguration = /** @class */ (function (_super) {
    __extends(CreateImageRequestBodyImageTestsConfiguration, _super);
    function CreateImageRequestBodyImageTestsConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=imageTestsEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateImageRequestBodyImageTestsConfiguration.prototype, "imageTestsEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=timeoutMinutes" }),
        __metadata("design:type", Number)
    ], CreateImageRequestBodyImageTestsConfiguration.prototype, "timeoutMinutes", void 0);
    return CreateImageRequestBodyImageTestsConfiguration;
}(SpeakeasyBase));
export { CreateImageRequestBodyImageTestsConfiguration };
var CreateImageRequestBody = /** @class */ (function (_super) {
    __extends(CreateImageRequestBody, _super);
    function CreateImageRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateImageRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=containerRecipeArn" }),
        __metadata("design:type", String)
    ], CreateImageRequestBody.prototype, "containerRecipeArn", void 0);
    __decorate([
        Metadata({ data: "json, name=distributionConfigurationArn" }),
        __metadata("design:type", String)
    ], CreateImageRequestBody.prototype, "distributionConfigurationArn", void 0);
    __decorate([
        Metadata({ data: "json, name=enhancedImageMetadataEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateImageRequestBody.prototype, "enhancedImageMetadataEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=imageRecipeArn" }),
        __metadata("design:type", String)
    ], CreateImageRequestBody.prototype, "imageRecipeArn", void 0);
    __decorate([
        Metadata({ data: "json, name=imageTestsConfiguration" }),
        __metadata("design:type", CreateImageRequestBodyImageTestsConfiguration)
    ], CreateImageRequestBody.prototype, "imageTestsConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=infrastructureConfigurationArn" }),
        __metadata("design:type", String)
    ], CreateImageRequestBody.prototype, "infrastructureConfigurationArn", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateImageRequestBody.prototype, "tags", void 0);
    return CreateImageRequestBody;
}(SpeakeasyBase));
export { CreateImageRequestBody };
var CreateImageRequest = /** @class */ (function (_super) {
    __extends(CreateImageRequest, _super);
    function CreateImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateImageHeaders)
    ], CreateImageRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateImageRequestBody)
    ], CreateImageRequest.prototype, "request", void 0);
    return CreateImageRequest;
}(SpeakeasyBase));
export { CreateImageRequest };
var CreateImageResponse = /** @class */ (function (_super) {
    __extends(CreateImageResponse, _super);
    function CreateImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateImageResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateImageResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateImageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateImageResponse)
    ], CreateImageResponse.prototype, "createImageResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateImageResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateImageResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateImageResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateImageResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateImageResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateImageResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateImageResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateImageResponse.prototype, "statusCode", void 0);
    return CreateImageResponse;
}(SpeakeasyBase));
export { CreateImageResponse };
