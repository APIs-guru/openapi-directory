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
var CreateDeploymentHeaders = /** @class */ (function (_super) {
    __extends(CreateDeploymentHeaders, _super);
    function CreateDeploymentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDeploymentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDeploymentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDeploymentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDeploymentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDeploymentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDeploymentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDeploymentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDeploymentHeaders;
}(SpeakeasyBase));
export { CreateDeploymentHeaders };
// CreateDeploymentRequestBodyDeploymentPolicies
/**
 * Contains information about policies that define how a deployment updates components and handles failure.
**/
var CreateDeploymentRequestBodyDeploymentPolicies = /** @class */ (function (_super) {
    __extends(CreateDeploymentRequestBodyDeploymentPolicies, _super);
    function CreateDeploymentRequestBodyDeploymentPolicies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=componentUpdatePolicy" }),
        __metadata("design:type", shared.DeploymentComponentUpdatePolicy)
    ], CreateDeploymentRequestBodyDeploymentPolicies.prototype, "componentUpdatePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurationValidationPolicy" }),
        __metadata("design:type", shared.DeploymentConfigurationValidationPolicy)
    ], CreateDeploymentRequestBodyDeploymentPolicies.prototype, "configurationValidationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureHandlingPolicy" }),
        __metadata("design:type", String)
    ], CreateDeploymentRequestBodyDeploymentPolicies.prototype, "failureHandlingPolicy", void 0);
    return CreateDeploymentRequestBodyDeploymentPolicies;
}(SpeakeasyBase));
export { CreateDeploymentRequestBodyDeploymentPolicies };
// CreateDeploymentRequestBodyIotJobConfiguration
/**
 * Contains information about an IoT job configuration.
**/
var CreateDeploymentRequestBodyIotJobConfiguration = /** @class */ (function (_super) {
    __extends(CreateDeploymentRequestBodyIotJobConfiguration, _super);
    function CreateDeploymentRequestBodyIotJobConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abortConfig" }),
        __metadata("design:type", shared.IoTJobAbortConfig)
    ], CreateDeploymentRequestBodyIotJobConfiguration.prototype, "abortConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobExecutionsRolloutConfig" }),
        __metadata("design:type", shared.IoTJobExecutionsRolloutConfig)
    ], CreateDeploymentRequestBodyIotJobConfiguration.prototype, "jobExecutionsRolloutConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutConfig" }),
        __metadata("design:type", shared.IoTJobTimeoutConfig)
    ], CreateDeploymentRequestBodyIotJobConfiguration.prototype, "timeoutConfig", void 0);
    return CreateDeploymentRequestBodyIotJobConfiguration;
}(SpeakeasyBase));
export { CreateDeploymentRequestBodyIotJobConfiguration };
var CreateDeploymentRequestBody = /** @class */ (function (_super) {
    __extends(CreateDeploymentRequestBody, _super);
    function CreateDeploymentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateDeploymentRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=components", elemType: shared.ComponentDeploymentSpecification }),
        __metadata("design:type", Map)
    ], CreateDeploymentRequestBody.prototype, "components", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentName" }),
        __metadata("design:type", String)
    ], CreateDeploymentRequestBody.prototype, "deploymentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentPolicies" }),
        __metadata("design:type", CreateDeploymentRequestBodyDeploymentPolicies)
    ], CreateDeploymentRequestBody.prototype, "deploymentPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iotJobConfiguration" }),
        __metadata("design:type", CreateDeploymentRequestBodyIotJobConfiguration)
    ], CreateDeploymentRequestBody.prototype, "iotJobConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateDeploymentRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetArn" }),
        __metadata("design:type", String)
    ], CreateDeploymentRequestBody.prototype, "targetArn", void 0);
    return CreateDeploymentRequestBody;
}(SpeakeasyBase));
export { CreateDeploymentRequestBody };
var CreateDeploymentRequest = /** @class */ (function (_super) {
    __extends(CreateDeploymentRequest, _super);
    function CreateDeploymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDeploymentHeaders)
    ], CreateDeploymentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDeploymentRequestBody)
    ], CreateDeploymentRequest.prototype, "request", void 0);
    return CreateDeploymentRequest;
}(SpeakeasyBase));
export { CreateDeploymentRequest };
var CreateDeploymentResponse = /** @class */ (function (_super) {
    __extends(CreateDeploymentResponse, _super);
    function CreateDeploymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDeploymentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateDeploymentResponse)
    ], CreateDeploymentResponse.prototype, "createDeploymentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentResponse.prototype, "requestAlreadyInProgressException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDeploymentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentResponse.prototype, "validationException", void 0);
    return CreateDeploymentResponse;
}(SpeakeasyBase));
export { CreateDeploymentResponse };
