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
var RegisterJobDefinitionHeaders = /** @class */ (function (_super) {
    __extends(RegisterJobDefinitionHeaders, _super);
    function RegisterJobDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RegisterJobDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RegisterJobDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RegisterJobDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RegisterJobDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RegisterJobDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RegisterJobDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RegisterJobDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RegisterJobDefinitionHeaders;
}(SpeakeasyBase));
export { RegisterJobDefinitionHeaders };
// RegisterJobDefinitionRequestBodyContainerProperties
/**
 * Container properties are used in job definitions to describe the container that's launched as part of a job.
**/
var RegisterJobDefinitionRequestBodyContainerProperties = /** @class */ (function (_super) {
    __extends(RegisterJobDefinitionRequestBodyContainerProperties, _super);
    function RegisterJobDefinitionRequestBodyContainerProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=command" }),
        __metadata("design:type", Array)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "command", void 0);
    __decorate([
        Metadata({ data: "json, name=environment", elemType: shared.KeyValuePair }),
        __metadata("design:type", Array)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "environment", void 0);
    __decorate([
        Metadata({ data: "json, name=executionRoleArn" }),
        __metadata("design:type", String)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "executionRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=fargatePlatformConfiguration" }),
        __metadata("design:type", shared.FargatePlatformConfiguration)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "fargatePlatformConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "image", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceType" }),
        __metadata("design:type", String)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "instanceType", void 0);
    __decorate([
        Metadata({ data: "json, name=jobRoleArn" }),
        __metadata("design:type", String)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "jobRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=linuxParameters" }),
        __metadata("design:type", shared.LinuxParameters)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "linuxParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=logConfiguration" }),
        __metadata("design:type", shared.LogConfiguration)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "logConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "memory", void 0);
    __decorate([
        Metadata({ data: "json, name=mountPoints", elemType: shared.MountPoint }),
        __metadata("design:type", Array)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "mountPoints", void 0);
    __decorate([
        Metadata({ data: "json, name=networkConfiguration" }),
        __metadata("design:type", shared.NetworkConfiguration)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "networkConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=privileged" }),
        __metadata("design:type", Boolean)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "privileged", void 0);
    __decorate([
        Metadata({ data: "json, name=readonlyRootFilesystem" }),
        __metadata("design:type", Boolean)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "readonlyRootFilesystem", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceRequirements", elemType: shared.ResourceRequirement }),
        __metadata("design:type", Array)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "resourceRequirements", void 0);
    __decorate([
        Metadata({ data: "json, name=secrets", elemType: shared.Secret }),
        __metadata("design:type", Array)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "secrets", void 0);
    __decorate([
        Metadata({ data: "json, name=ulimits", elemType: shared.Ulimit }),
        __metadata("design:type", Array)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "ulimits", void 0);
    __decorate([
        Metadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "user", void 0);
    __decorate([
        Metadata({ data: "json, name=vcpus" }),
        __metadata("design:type", Number)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "vcpus", void 0);
    __decorate([
        Metadata({ data: "json, name=volumes", elemType: shared.Volume }),
        __metadata("design:type", Array)
    ], RegisterJobDefinitionRequestBodyContainerProperties.prototype, "volumes", void 0);
    return RegisterJobDefinitionRequestBodyContainerProperties;
}(SpeakeasyBase));
export { RegisterJobDefinitionRequestBodyContainerProperties };
// RegisterJobDefinitionRequestBodyNodeProperties
/**
 * An object representing the node properties of a multi-node parallel job.
**/
var RegisterJobDefinitionRequestBodyNodeProperties = /** @class */ (function (_super) {
    __extends(RegisterJobDefinitionRequestBodyNodeProperties, _super);
    function RegisterJobDefinitionRequestBodyNodeProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=mainNode" }),
        __metadata("design:type", Number)
    ], RegisterJobDefinitionRequestBodyNodeProperties.prototype, "mainNode", void 0);
    __decorate([
        Metadata({ data: "json, name=nodeRangeProperties", elemType: shared.NodeRangeProperty }),
        __metadata("design:type", Array)
    ], RegisterJobDefinitionRequestBodyNodeProperties.prototype, "nodeRangeProperties", void 0);
    __decorate([
        Metadata({ data: "json, name=numNodes" }),
        __metadata("design:type", Number)
    ], RegisterJobDefinitionRequestBodyNodeProperties.prototype, "numNodes", void 0);
    return RegisterJobDefinitionRequestBodyNodeProperties;
}(SpeakeasyBase));
export { RegisterJobDefinitionRequestBodyNodeProperties };
// RegisterJobDefinitionRequestBodyRetryStrategy
/**
 * The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
**/
var RegisterJobDefinitionRequestBodyRetryStrategy = /** @class */ (function (_super) {
    __extends(RegisterJobDefinitionRequestBodyRetryStrategy, _super);
    function RegisterJobDefinitionRequestBodyRetryStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=attempts" }),
        __metadata("design:type", Number)
    ], RegisterJobDefinitionRequestBodyRetryStrategy.prototype, "attempts", void 0);
    __decorate([
        Metadata({ data: "json, name=evaluateOnExit", elemType: shared.EvaluateOnExit }),
        __metadata("design:type", Array)
    ], RegisterJobDefinitionRequestBodyRetryStrategy.prototype, "evaluateOnExit", void 0);
    return RegisterJobDefinitionRequestBodyRetryStrategy;
}(SpeakeasyBase));
export { RegisterJobDefinitionRequestBodyRetryStrategy };
// RegisterJobDefinitionRequestBodyTimeout
/**
 * An object representing a job timeout configuration.
**/
var RegisterJobDefinitionRequestBodyTimeout = /** @class */ (function (_super) {
    __extends(RegisterJobDefinitionRequestBodyTimeout, _super);
    function RegisterJobDefinitionRequestBodyTimeout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=attemptDurationSeconds" }),
        __metadata("design:type", Number)
    ], RegisterJobDefinitionRequestBodyTimeout.prototype, "attemptDurationSeconds", void 0);
    return RegisterJobDefinitionRequestBodyTimeout;
}(SpeakeasyBase));
export { RegisterJobDefinitionRequestBodyTimeout };
export var RegisterJobDefinitionRequestBodyTypeEnum;
(function (RegisterJobDefinitionRequestBodyTypeEnum) {
    RegisterJobDefinitionRequestBodyTypeEnum["Container"] = "container";
    RegisterJobDefinitionRequestBodyTypeEnum["Multinode"] = "multinode";
})(RegisterJobDefinitionRequestBodyTypeEnum || (RegisterJobDefinitionRequestBodyTypeEnum = {}));
var RegisterJobDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(RegisterJobDefinitionRequestBody, _super);
    function RegisterJobDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=containerProperties" }),
        __metadata("design:type", RegisterJobDefinitionRequestBodyContainerProperties)
    ], RegisterJobDefinitionRequestBody.prototype, "containerProperties", void 0);
    __decorate([
        Metadata({ data: "json, name=jobDefinitionName" }),
        __metadata("design:type", String)
    ], RegisterJobDefinitionRequestBody.prototype, "jobDefinitionName", void 0);
    __decorate([
        Metadata({ data: "json, name=nodeProperties" }),
        __metadata("design:type", RegisterJobDefinitionRequestBodyNodeProperties)
    ], RegisterJobDefinitionRequestBody.prototype, "nodeProperties", void 0);
    __decorate([
        Metadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], RegisterJobDefinitionRequestBody.prototype, "parameters", void 0);
    __decorate([
        Metadata({ data: "json, name=platformCapabilities" }),
        __metadata("design:type", Array)
    ], RegisterJobDefinitionRequestBody.prototype, "platformCapabilities", void 0);
    __decorate([
        Metadata({ data: "json, name=propagateTags" }),
        __metadata("design:type", Boolean)
    ], RegisterJobDefinitionRequestBody.prototype, "propagateTags", void 0);
    __decorate([
        Metadata({ data: "json, name=retryStrategy" }),
        __metadata("design:type", RegisterJobDefinitionRequestBodyRetryStrategy)
    ], RegisterJobDefinitionRequestBody.prototype, "retryStrategy", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], RegisterJobDefinitionRequestBody.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=timeout" }),
        __metadata("design:type", RegisterJobDefinitionRequestBodyTimeout)
    ], RegisterJobDefinitionRequestBody.prototype, "timeout", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RegisterJobDefinitionRequestBody.prototype, "type", void 0);
    return RegisterJobDefinitionRequestBody;
}(SpeakeasyBase));
export { RegisterJobDefinitionRequestBody };
var RegisterJobDefinitionRequest = /** @class */ (function (_super) {
    __extends(RegisterJobDefinitionRequest, _super);
    function RegisterJobDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RegisterJobDefinitionHeaders)
    ], RegisterJobDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RegisterJobDefinitionRequestBody)
    ], RegisterJobDefinitionRequest.prototype, "request", void 0);
    return RegisterJobDefinitionRequest;
}(SpeakeasyBase));
export { RegisterJobDefinitionRequest };
var RegisterJobDefinitionResponse = /** @class */ (function (_super) {
    __extends(RegisterJobDefinitionResponse, _super);
    function RegisterJobDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegisterJobDefinitionResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RegisterJobDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RegisterJobDefinitionResponse)
    ], RegisterJobDefinitionResponse.prototype, "registerJobDefinitionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegisterJobDefinitionResponse.prototype, "serverException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RegisterJobDefinitionResponse.prototype, "statusCode", void 0);
    return RegisterJobDefinitionResponse;
}(SpeakeasyBase));
export { RegisterJobDefinitionResponse };
