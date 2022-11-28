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
var CreateContainerRecipeHeaders = /** @class */ (function (_super) {
    __extends(CreateContainerRecipeHeaders, _super);
    function CreateContainerRecipeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateContainerRecipeHeaders;
}(SpeakeasyBase));
export { CreateContainerRecipeHeaders };
export var CreateContainerRecipeRequestBodyContainerTypeEnum;
(function (CreateContainerRecipeRequestBodyContainerTypeEnum) {
    CreateContainerRecipeRequestBodyContainerTypeEnum["Docker"] = "DOCKER";
})(CreateContainerRecipeRequestBodyContainerTypeEnum || (CreateContainerRecipeRequestBodyContainerTypeEnum = {}));
// CreateContainerRecipeRequestBodyInstanceConfiguration
/**
 * Defines a custom source AMI and block device mapping configurations of an instance used for building and testing container images.
**/
var CreateContainerRecipeRequestBodyInstanceConfiguration = /** @class */ (function (_super) {
    __extends(CreateContainerRecipeRequestBodyInstanceConfiguration, _super);
    function CreateContainerRecipeRequestBodyInstanceConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockDeviceMappings", elemType: shared.InstanceBlockDeviceMapping }),
        __metadata("design:type", Array)
    ], CreateContainerRecipeRequestBodyInstanceConfiguration.prototype, "blockDeviceMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBodyInstanceConfiguration.prototype, "image", void 0);
    return CreateContainerRecipeRequestBodyInstanceConfiguration;
}(SpeakeasyBase));
export { CreateContainerRecipeRequestBodyInstanceConfiguration };
export var CreateContainerRecipeRequestBodyPlatformOverrideEnum;
(function (CreateContainerRecipeRequestBodyPlatformOverrideEnum) {
    CreateContainerRecipeRequestBodyPlatformOverrideEnum["Windows"] = "Windows";
    CreateContainerRecipeRequestBodyPlatformOverrideEnum["Linux"] = "Linux";
})(CreateContainerRecipeRequestBodyPlatformOverrideEnum || (CreateContainerRecipeRequestBodyPlatformOverrideEnum = {}));
// CreateContainerRecipeRequestBodyTargetRepository
/**
 * The container repository where the output container image is stored.
**/
var CreateContainerRecipeRequestBodyTargetRepository = /** @class */ (function (_super) {
    __extends(CreateContainerRecipeRequestBodyTargetRepository, _super);
    function CreateContainerRecipeRequestBodyTargetRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositoryName" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBodyTargetRepository.prototype, "repositoryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBodyTargetRepository.prototype, "service", void 0);
    return CreateContainerRecipeRequestBodyTargetRepository;
}(SpeakeasyBase));
export { CreateContainerRecipeRequestBodyTargetRepository };
var CreateContainerRecipeRequestBody = /** @class */ (function (_super) {
    __extends(CreateContainerRecipeRequestBody, _super);
    function CreateContainerRecipeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=components", elemType: shared.ComponentConfiguration }),
        __metadata("design:type", Array)
    ], CreateContainerRecipeRequestBody.prototype, "components", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerType" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBody.prototype, "containerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerfileTemplateData" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBody.prototype, "dockerfileTemplateData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerfileTemplateUri" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBody.prototype, "dockerfileTemplateUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageOsVersionOverride" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBody.prototype, "imageOsVersionOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceConfiguration" }),
        __metadata("design:type", CreateContainerRecipeRequestBodyInstanceConfiguration)
    ], CreateContainerRecipeRequestBody.prototype, "instanceConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKeyId" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBody.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentImage" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBody.prototype, "parentImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformOverride" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBody.prototype, "platformOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=semanticVersion" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBody.prototype, "semanticVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateContainerRecipeRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetRepository" }),
        __metadata("design:type", CreateContainerRecipeRequestBodyTargetRepository)
    ], CreateContainerRecipeRequestBody.prototype, "targetRepository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workingDirectory" }),
        __metadata("design:type", String)
    ], CreateContainerRecipeRequestBody.prototype, "workingDirectory", void 0);
    return CreateContainerRecipeRequestBody;
}(SpeakeasyBase));
export { CreateContainerRecipeRequestBody };
var CreateContainerRecipeRequest = /** @class */ (function (_super) {
    __extends(CreateContainerRecipeRequest, _super);
    function CreateContainerRecipeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateContainerRecipeHeaders)
    ], CreateContainerRecipeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateContainerRecipeRequestBody)
    ], CreateContainerRecipeRequest.prototype, "request", void 0);
    return CreateContainerRecipeRequest;
}(SpeakeasyBase));
export { CreateContainerRecipeRequest };
var CreateContainerRecipeResponse = /** @class */ (function (_super) {
    __extends(CreateContainerRecipeResponse, _super);
    function CreateContainerRecipeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateContainerRecipeResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateContainerRecipeResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateContainerRecipeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateContainerRecipeResponse)
    ], CreateContainerRecipeResponse.prototype, "createContainerRecipeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateContainerRecipeResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateContainerRecipeResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateContainerRecipeResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateContainerRecipeResponse.prototype, "invalidVersionNumberException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateContainerRecipeResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateContainerRecipeResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateContainerRecipeResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateContainerRecipeResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateContainerRecipeResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateContainerRecipeResponse.prototype, "statusCode", void 0);
    return CreateContainerRecipeResponse;
}(SpeakeasyBase));
export { CreateContainerRecipeResponse };
