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
var CreateImagePipelineHeaders = /** @class */ (function (_super) {
    __extends(CreateImagePipelineHeaders, _super);
    function CreateImagePipelineHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateImagePipelineHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateImagePipelineHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateImagePipelineHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateImagePipelineHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateImagePipelineHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateImagePipelineHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateImagePipelineHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateImagePipelineHeaders;
}(SpeakeasyBase));
export { CreateImagePipelineHeaders };
// CreateImagePipelineRequestBodyImageTestsConfiguration
/**
 * Image tests configuration.
**/
var CreateImagePipelineRequestBodyImageTestsConfiguration = /** @class */ (function (_super) {
    __extends(CreateImagePipelineRequestBodyImageTestsConfiguration, _super);
    function CreateImagePipelineRequestBodyImageTestsConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageTestsEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateImagePipelineRequestBodyImageTestsConfiguration.prototype, "imageTestsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutMinutes" }),
        __metadata("design:type", Number)
    ], CreateImagePipelineRequestBodyImageTestsConfiguration.prototype, "timeoutMinutes", void 0);
    return CreateImagePipelineRequestBodyImageTestsConfiguration;
}(SpeakeasyBase));
export { CreateImagePipelineRequestBodyImageTestsConfiguration };
// CreateImagePipelineRequestBodySchedule
/**
 * A schedule configures how often and when a pipeline will automatically create a new image.
**/
var CreateImagePipelineRequestBodySchedule = /** @class */ (function (_super) {
    __extends(CreateImagePipelineRequestBodySchedule, _super);
    function CreateImagePipelineRequestBodySchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pipelineExecutionStartCondition" }),
        __metadata("design:type", String)
    ], CreateImagePipelineRequestBodySchedule.prototype, "pipelineExecutionStartCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleExpression" }),
        __metadata("design:type", String)
    ], CreateImagePipelineRequestBodySchedule.prototype, "scheduleExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], CreateImagePipelineRequestBodySchedule.prototype, "timezone", void 0);
    return CreateImagePipelineRequestBodySchedule;
}(SpeakeasyBase));
export { CreateImagePipelineRequestBodySchedule };
export var CreateImagePipelineRequestBodyStatusEnum;
(function (CreateImagePipelineRequestBodyStatusEnum) {
    CreateImagePipelineRequestBodyStatusEnum["Disabled"] = "DISABLED";
    CreateImagePipelineRequestBodyStatusEnum["Enabled"] = "ENABLED";
})(CreateImagePipelineRequestBodyStatusEnum || (CreateImagePipelineRequestBodyStatusEnum = {}));
var CreateImagePipelineRequestBody = /** @class */ (function (_super) {
    __extends(CreateImagePipelineRequestBody, _super);
    function CreateImagePipelineRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateImagePipelineRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerRecipeArn" }),
        __metadata("design:type", String)
    ], CreateImagePipelineRequestBody.prototype, "containerRecipeArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateImagePipelineRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributionConfigurationArn" }),
        __metadata("design:type", String)
    ], CreateImagePipelineRequestBody.prototype, "distributionConfigurationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enhancedImageMetadataEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateImagePipelineRequestBody.prototype, "enhancedImageMetadataEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageRecipeArn" }),
        __metadata("design:type", String)
    ], CreateImagePipelineRequestBody.prototype, "imageRecipeArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageTestsConfiguration" }),
        __metadata("design:type", CreateImagePipelineRequestBodyImageTestsConfiguration)
    ], CreateImagePipelineRequestBody.prototype, "imageTestsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infrastructureConfigurationArn" }),
        __metadata("design:type", String)
    ], CreateImagePipelineRequestBody.prototype, "infrastructureConfigurationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateImagePipelineRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", CreateImagePipelineRequestBodySchedule)
    ], CreateImagePipelineRequestBody.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CreateImagePipelineRequestBody.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateImagePipelineRequestBody.prototype, "tags", void 0);
    return CreateImagePipelineRequestBody;
}(SpeakeasyBase));
export { CreateImagePipelineRequestBody };
var CreateImagePipelineRequest = /** @class */ (function (_super) {
    __extends(CreateImagePipelineRequest, _super);
    function CreateImagePipelineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateImagePipelineHeaders)
    ], CreateImagePipelineRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateImagePipelineRequestBody)
    ], CreateImagePipelineRequest.prototype, "request", void 0);
    return CreateImagePipelineRequest;
}(SpeakeasyBase));
export { CreateImagePipelineRequest };
var CreateImagePipelineResponse = /** @class */ (function (_super) {
    __extends(CreateImagePipelineResponse, _super);
    function CreateImagePipelineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImagePipelineResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImagePipelineResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateImagePipelineResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateImagePipelineResponse)
    ], CreateImagePipelineResponse.prototype, "createImagePipelineResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImagePipelineResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImagePipelineResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImagePipelineResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImagePipelineResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImagePipelineResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImagePipelineResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImagePipelineResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImagePipelineResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateImagePipelineResponse.prototype, "statusCode", void 0);
    return CreateImagePipelineResponse;
}(SpeakeasyBase));
export { CreateImagePipelineResponse };
