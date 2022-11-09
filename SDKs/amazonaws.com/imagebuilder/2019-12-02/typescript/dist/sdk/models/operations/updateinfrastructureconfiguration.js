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
var UpdateInfrastructureConfigurationHeaders = /** @class */ (function (_super) {
    __extends(UpdateInfrastructureConfigurationHeaders, _super);
    function UpdateInfrastructureConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateInfrastructureConfigurationHeaders;
}(SpeakeasyBase));
export { UpdateInfrastructureConfigurationHeaders };
// UpdateInfrastructureConfigurationRequestBodyLogging
/**
 * Logging configuration defines where Image Builder uploads your logs.
**/
var UpdateInfrastructureConfigurationRequestBodyLogging = /** @class */ (function (_super) {
    __extends(UpdateInfrastructureConfigurationRequestBodyLogging, _super);
    function UpdateInfrastructureConfigurationRequestBodyLogging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=s3Logs" }),
        __metadata("design:type", shared.S3Logs)
    ], UpdateInfrastructureConfigurationRequestBodyLogging.prototype, "s3Logs", void 0);
    return UpdateInfrastructureConfigurationRequestBodyLogging;
}(SpeakeasyBase));
export { UpdateInfrastructureConfigurationRequestBodyLogging };
var UpdateInfrastructureConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateInfrastructureConfigurationRequestBody, _super);
    function UpdateInfrastructureConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=infrastructureConfigurationArn" }),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationRequestBody.prototype, "infrastructureConfigurationArn", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceProfileName" }),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationRequestBody.prototype, "instanceProfileName", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceTypes" }),
        __metadata("design:type", Array)
    ], UpdateInfrastructureConfigurationRequestBody.prototype, "instanceTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=keyPair" }),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationRequestBody.prototype, "keyPair", void 0);
    __decorate([
        Metadata({ data: "json, name=logging" }),
        __metadata("design:type", UpdateInfrastructureConfigurationRequestBodyLogging)
    ], UpdateInfrastructureConfigurationRequestBody.prototype, "logging", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceTags" }),
        __metadata("design:type", Map)
    ], UpdateInfrastructureConfigurationRequestBody.prototype, "resourceTags", void 0);
    __decorate([
        Metadata({ data: "json, name=securityGroupIds" }),
        __metadata("design:type", Array)
    ], UpdateInfrastructureConfigurationRequestBody.prototype, "securityGroupIds", void 0);
    __decorate([
        Metadata({ data: "json, name=snsTopicArn" }),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationRequestBody.prototype, "snsTopicArn", void 0);
    __decorate([
        Metadata({ data: "json, name=subnetId" }),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationRequestBody.prototype, "subnetId", void 0);
    __decorate([
        Metadata({ data: "json, name=terminateInstanceOnFailure" }),
        __metadata("design:type", Boolean)
    ], UpdateInfrastructureConfigurationRequestBody.prototype, "terminateInstanceOnFailure", void 0);
    return UpdateInfrastructureConfigurationRequestBody;
}(SpeakeasyBase));
export { UpdateInfrastructureConfigurationRequestBody };
var UpdateInfrastructureConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateInfrastructureConfigurationRequest, _super);
    function UpdateInfrastructureConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateInfrastructureConfigurationHeaders)
    ], UpdateInfrastructureConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateInfrastructureConfigurationRequestBody)
    ], UpdateInfrastructureConfigurationRequest.prototype, "request", void 0);
    return UpdateInfrastructureConfigurationRequest;
}(SpeakeasyBase));
export { UpdateInfrastructureConfigurationRequest };
var UpdateInfrastructureConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateInfrastructureConfigurationResponse, _super);
    function UpdateInfrastructureConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateInfrastructureConfigurationResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateInfrastructureConfigurationResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateInfrastructureConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateInfrastructureConfigurationResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateInfrastructureConfigurationResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateInfrastructureConfigurationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateInfrastructureConfigurationResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateInfrastructureConfigurationResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateInfrastructureConfigurationResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateInfrastructureConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateInfrastructureConfigurationResponse)
    ], UpdateInfrastructureConfigurationResponse.prototype, "updateInfrastructureConfigurationResponse", void 0);
    return UpdateInfrastructureConfigurationResponse;
}(SpeakeasyBase));
export { UpdateInfrastructureConfigurationResponse };
