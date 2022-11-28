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
var CreateImageRecipeHeaders = /** @class */ (function (_super) {
    __extends(CreateImageRecipeHeaders, _super);
    function CreateImageRecipeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateImageRecipeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateImageRecipeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateImageRecipeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateImageRecipeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateImageRecipeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateImageRecipeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateImageRecipeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateImageRecipeHeaders;
}(SpeakeasyBase));
export { CreateImageRecipeHeaders };
// CreateImageRecipeRequestBodyAdditionalInstanceConfiguration
/**
 * In addition to your infrastruction configuration, these settings provide an extra layer of control over your build instances. For instances where Image Builder installs the SSM agent, you can choose whether to keep it for the AMI that you create. You can also specify commands to run on launch for all of your build instances.
**/
var CreateImageRecipeRequestBodyAdditionalInstanceConfiguration = /** @class */ (function (_super) {
    __extends(CreateImageRecipeRequestBodyAdditionalInstanceConfiguration, _super);
    function CreateImageRecipeRequestBodyAdditionalInstanceConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemsManagerAgent" }),
        __metadata("design:type", shared.SystemsManagerAgent)
    ], CreateImageRecipeRequestBodyAdditionalInstanceConfiguration.prototype, "systemsManagerAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userDataOverride" }),
        __metadata("design:type", String)
    ], CreateImageRecipeRequestBodyAdditionalInstanceConfiguration.prototype, "userDataOverride", void 0);
    return CreateImageRecipeRequestBodyAdditionalInstanceConfiguration;
}(SpeakeasyBase));
export { CreateImageRecipeRequestBodyAdditionalInstanceConfiguration };
var CreateImageRecipeRequestBody = /** @class */ (function (_super) {
    __extends(CreateImageRecipeRequestBody, _super);
    function CreateImageRecipeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalInstanceConfiguration" }),
        __metadata("design:type", CreateImageRecipeRequestBodyAdditionalInstanceConfiguration)
    ], CreateImageRecipeRequestBody.prototype, "additionalInstanceConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockDeviceMappings", elemType: shared.InstanceBlockDeviceMapping }),
        __metadata("design:type", Array)
    ], CreateImageRecipeRequestBody.prototype, "blockDeviceMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateImageRecipeRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=components", elemType: shared.ComponentConfiguration }),
        __metadata("design:type", Array)
    ], CreateImageRecipeRequestBody.prototype, "components", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateImageRecipeRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateImageRecipeRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentImage" }),
        __metadata("design:type", String)
    ], CreateImageRecipeRequestBody.prototype, "parentImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=semanticVersion" }),
        __metadata("design:type", String)
    ], CreateImageRecipeRequestBody.prototype, "semanticVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateImageRecipeRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workingDirectory" }),
        __metadata("design:type", String)
    ], CreateImageRecipeRequestBody.prototype, "workingDirectory", void 0);
    return CreateImageRecipeRequestBody;
}(SpeakeasyBase));
export { CreateImageRecipeRequestBody };
var CreateImageRecipeRequest = /** @class */ (function (_super) {
    __extends(CreateImageRecipeRequest, _super);
    function CreateImageRecipeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateImageRecipeHeaders)
    ], CreateImageRecipeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateImageRecipeRequestBody)
    ], CreateImageRecipeRequest.prototype, "request", void 0);
    return CreateImageRecipeRequest;
}(SpeakeasyBase));
export { CreateImageRecipeRequest };
var CreateImageRecipeResponse = /** @class */ (function (_super) {
    __extends(CreateImageRecipeResponse, _super);
    function CreateImageRecipeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImageRecipeResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImageRecipeResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateImageRecipeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateImageRecipeResponse)
    ], CreateImageRecipeResponse.prototype, "createImageRecipeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImageRecipeResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImageRecipeResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImageRecipeResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImageRecipeResponse.prototype, "invalidVersionNumberException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImageRecipeResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImageRecipeResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImageRecipeResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImageRecipeResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImageRecipeResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateImageRecipeResponse.prototype, "statusCode", void 0);
    return CreateImageRecipeResponse;
}(SpeakeasyBase));
export { CreateImageRecipeResponse };
