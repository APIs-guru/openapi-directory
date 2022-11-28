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
var CreateInfrastructureConfigurationHeaders = /** @class */ (function (_super) {
    __extends(CreateInfrastructureConfigurationHeaders, _super);
    function CreateInfrastructureConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateInfrastructureConfigurationHeaders;
}(SpeakeasyBase));
export { CreateInfrastructureConfigurationHeaders };
// CreateInfrastructureConfigurationRequestBodyLogging
/**
 * Logging configuration defines where Image Builder uploads your logs.
**/
var CreateInfrastructureConfigurationRequestBodyLogging = /** @class */ (function (_super) {
    __extends(CreateInfrastructureConfigurationRequestBodyLogging, _super);
    function CreateInfrastructureConfigurationRequestBodyLogging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3Logs" }),
        __metadata("design:type", shared.S3Logs)
    ], CreateInfrastructureConfigurationRequestBodyLogging.prototype, "s3Logs", void 0);
    return CreateInfrastructureConfigurationRequestBodyLogging;
}(SpeakeasyBase));
export { CreateInfrastructureConfigurationRequestBodyLogging };
var CreateInfrastructureConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(CreateInfrastructureConfigurationRequestBody, _super);
    function CreateInfrastructureConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceProfileName" }),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationRequestBody.prototype, "instanceProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceTypes" }),
        __metadata("design:type", Array)
    ], CreateInfrastructureConfigurationRequestBody.prototype, "instanceTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyPair" }),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationRequestBody.prototype, "keyPair", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logging" }),
        __metadata("design:type", CreateInfrastructureConfigurationRequestBodyLogging)
    ], CreateInfrastructureConfigurationRequestBody.prototype, "logging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceTags" }),
        __metadata("design:type", Map)
    ], CreateInfrastructureConfigurationRequestBody.prototype, "resourceTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityGroupIds" }),
        __metadata("design:type", Array)
    ], CreateInfrastructureConfigurationRequestBody.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snsTopicArn" }),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationRequestBody.prototype, "snsTopicArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetId" }),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationRequestBody.prototype, "subnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateInfrastructureConfigurationRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terminateInstanceOnFailure" }),
        __metadata("design:type", Boolean)
    ], CreateInfrastructureConfigurationRequestBody.prototype, "terminateInstanceOnFailure", void 0);
    return CreateInfrastructureConfigurationRequestBody;
}(SpeakeasyBase));
export { CreateInfrastructureConfigurationRequestBody };
var CreateInfrastructureConfigurationRequest = /** @class */ (function (_super) {
    __extends(CreateInfrastructureConfigurationRequest, _super);
    function CreateInfrastructureConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInfrastructureConfigurationHeaders)
    ], CreateInfrastructureConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateInfrastructureConfigurationRequestBody)
    ], CreateInfrastructureConfigurationRequest.prototype, "request", void 0);
    return CreateInfrastructureConfigurationRequest;
}(SpeakeasyBase));
export { CreateInfrastructureConfigurationRequest };
var CreateInfrastructureConfigurationResponse = /** @class */ (function (_super) {
    __extends(CreateInfrastructureConfigurationResponse, _super);
    function CreateInfrastructureConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInfrastructureConfigurationResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInfrastructureConfigurationResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateInfrastructureConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateInfrastructureConfigurationResponse)
    ], CreateInfrastructureConfigurationResponse.prototype, "createInfrastructureConfigurationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInfrastructureConfigurationResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInfrastructureConfigurationResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInfrastructureConfigurationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInfrastructureConfigurationResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInfrastructureConfigurationResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInfrastructureConfigurationResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInfrastructureConfigurationResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInfrastructureConfigurationResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateInfrastructureConfigurationResponse.prototype, "statusCode", void 0);
    return CreateInfrastructureConfigurationResponse;
}(SpeakeasyBase));
export { CreateInfrastructureConfigurationResponse };
