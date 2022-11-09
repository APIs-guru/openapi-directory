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
var UpdateImagePipelineHeaders = /** @class */ (function (_super) {
    __extends(UpdateImagePipelineHeaders, _super);
    function UpdateImagePipelineHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateImagePipelineHeaders;
}(SpeakeasyBase));
export { UpdateImagePipelineHeaders };
// UpdateImagePipelineRequestBodyImageTestsConfiguration
/**
 * Image tests configuration.
**/
var UpdateImagePipelineRequestBodyImageTestsConfiguration = /** @class */ (function (_super) {
    __extends(UpdateImagePipelineRequestBodyImageTestsConfiguration, _super);
    function UpdateImagePipelineRequestBodyImageTestsConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=imageTestsEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateImagePipelineRequestBodyImageTestsConfiguration.prototype, "imageTestsEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=timeoutMinutes" }),
        __metadata("design:type", Number)
    ], UpdateImagePipelineRequestBodyImageTestsConfiguration.prototype, "timeoutMinutes", void 0);
    return UpdateImagePipelineRequestBodyImageTestsConfiguration;
}(SpeakeasyBase));
export { UpdateImagePipelineRequestBodyImageTestsConfiguration };
// UpdateImagePipelineRequestBodySchedule
/**
 * A schedule configures how often and when a pipeline will automatically create a new image.
**/
var UpdateImagePipelineRequestBodySchedule = /** @class */ (function (_super) {
    __extends(UpdateImagePipelineRequestBodySchedule, _super);
    function UpdateImagePipelineRequestBodySchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=pipelineExecutionStartCondition" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineRequestBodySchedule.prototype, "pipelineExecutionStartCondition", void 0);
    __decorate([
        Metadata({ data: "json, name=scheduleExpression" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineRequestBodySchedule.prototype, "scheduleExpression", void 0);
    __decorate([
        Metadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineRequestBodySchedule.prototype, "timezone", void 0);
    return UpdateImagePipelineRequestBodySchedule;
}(SpeakeasyBase));
export { UpdateImagePipelineRequestBodySchedule };
export var UpdateImagePipelineRequestBodyStatusEnum;
(function (UpdateImagePipelineRequestBodyStatusEnum) {
    UpdateImagePipelineRequestBodyStatusEnum["Disabled"] = "DISABLED";
    UpdateImagePipelineRequestBodyStatusEnum["Enabled"] = "ENABLED";
})(UpdateImagePipelineRequestBodyStatusEnum || (UpdateImagePipelineRequestBodyStatusEnum = {}));
var UpdateImagePipelineRequestBody = /** @class */ (function (_super) {
    __extends(UpdateImagePipelineRequestBody, _super);
    function UpdateImagePipelineRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=containerRecipeArn" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineRequestBody.prototype, "containerRecipeArn", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=distributionConfigurationArn" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineRequestBody.prototype, "distributionConfigurationArn", void 0);
    __decorate([
        Metadata({ data: "json, name=enhancedImageMetadataEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateImagePipelineRequestBody.prototype, "enhancedImageMetadataEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=imagePipelineArn" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineRequestBody.prototype, "imagePipelineArn", void 0);
    __decorate([
        Metadata({ data: "json, name=imageRecipeArn" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineRequestBody.prototype, "imageRecipeArn", void 0);
    __decorate([
        Metadata({ data: "json, name=imageTestsConfiguration" }),
        __metadata("design:type", UpdateImagePipelineRequestBodyImageTestsConfiguration)
    ], UpdateImagePipelineRequestBody.prototype, "imageTestsConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=infrastructureConfigurationArn" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineRequestBody.prototype, "infrastructureConfigurationArn", void 0);
    __decorate([
        Metadata({ data: "json, name=schedule" }),
        __metadata("design:type", UpdateImagePipelineRequestBodySchedule)
    ], UpdateImagePipelineRequestBody.prototype, "schedule", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateImagePipelineRequestBody.prototype, "status", void 0);
    return UpdateImagePipelineRequestBody;
}(SpeakeasyBase));
export { UpdateImagePipelineRequestBody };
var UpdateImagePipelineRequest = /** @class */ (function (_super) {
    __extends(UpdateImagePipelineRequest, _super);
    function UpdateImagePipelineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateImagePipelineHeaders)
    ], UpdateImagePipelineRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateImagePipelineRequestBody)
    ], UpdateImagePipelineRequest.prototype, "request", void 0);
    return UpdateImagePipelineRequest;
}(SpeakeasyBase));
export { UpdateImagePipelineRequest };
var UpdateImagePipelineResponse = /** @class */ (function (_super) {
    __extends(UpdateImagePipelineResponse, _super);
    function UpdateImagePipelineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateImagePipelineResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateImagePipelineResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateImagePipelineResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateImagePipelineResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateImagePipelineResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateImagePipelineResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateImagePipelineResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateImagePipelineResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateImagePipelineResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateImagePipelineResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateImagePipelineResponse)
    ], UpdateImagePipelineResponse.prototype, "updateImagePipelineResponse", void 0);
    return UpdateImagePipelineResponse;
}(SpeakeasyBase));
export { UpdateImagePipelineResponse };
