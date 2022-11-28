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
var SubmitJobHeaders = /** @class */ (function (_super) {
    __extends(SubmitJobHeaders, _super);
    function SubmitJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SubmitJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SubmitJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SubmitJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SubmitJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SubmitJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SubmitJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SubmitJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SubmitJobHeaders;
}(SpeakeasyBase));
export { SubmitJobHeaders };
// SubmitJobRequestBodyArrayProperties
/**
 * An object representing an Batch array job.
**/
var SubmitJobRequestBodyArrayProperties = /** @class */ (function (_super) {
    __extends(SubmitJobRequestBodyArrayProperties, _super);
    function SubmitJobRequestBodyArrayProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], SubmitJobRequestBodyArrayProperties.prototype, "size", void 0);
    return SubmitJobRequestBodyArrayProperties;
}(SpeakeasyBase));
export { SubmitJobRequestBodyArrayProperties };
// SubmitJobRequestBodyContainerOverrides
/**
 * The overrides that should be sent to a container.
**/
var SubmitJobRequestBodyContainerOverrides = /** @class */ (function (_super) {
    __extends(SubmitJobRequestBodyContainerOverrides, _super);
    function SubmitJobRequestBodyContainerOverrides() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", Array)
    ], SubmitJobRequestBodyContainerOverrides.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment", elemType: shared.KeyValuePair }),
        __metadata("design:type", Array)
    ], SubmitJobRequestBodyContainerOverrides.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceType" }),
        __metadata("design:type", String)
    ], SubmitJobRequestBodyContainerOverrides.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], SubmitJobRequestBodyContainerOverrides.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceRequirements", elemType: shared.ResourceRequirement }),
        __metadata("design:type", Array)
    ], SubmitJobRequestBodyContainerOverrides.prototype, "resourceRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vcpus" }),
        __metadata("design:type", Number)
    ], SubmitJobRequestBodyContainerOverrides.prototype, "vcpus", void 0);
    return SubmitJobRequestBodyContainerOverrides;
}(SpeakeasyBase));
export { SubmitJobRequestBodyContainerOverrides };
// SubmitJobRequestBodyNodeOverrides
/**
 * <p>Object representing any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This isn't applicable to jobs that are running on Fargate resources and shouldn't be provided; use <code>containerOverrides</code> instead.</p> </note>
**/
var SubmitJobRequestBodyNodeOverrides = /** @class */ (function (_super) {
    __extends(SubmitJobRequestBodyNodeOverrides, _super);
    function SubmitJobRequestBodyNodeOverrides() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodePropertyOverrides", elemType: shared.NodePropertyOverride }),
        __metadata("design:type", Array)
    ], SubmitJobRequestBodyNodeOverrides.prototype, "nodePropertyOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numNodes" }),
        __metadata("design:type", Number)
    ], SubmitJobRequestBodyNodeOverrides.prototype, "numNodes", void 0);
    return SubmitJobRequestBodyNodeOverrides;
}(SpeakeasyBase));
export { SubmitJobRequestBodyNodeOverrides };
// SubmitJobRequestBodyRetryStrategy
/**
 * The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
**/
var SubmitJobRequestBodyRetryStrategy = /** @class */ (function (_super) {
    __extends(SubmitJobRequestBodyRetryStrategy, _super);
    function SubmitJobRequestBodyRetryStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attempts" }),
        __metadata("design:type", Number)
    ], SubmitJobRequestBodyRetryStrategy.prototype, "attempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluateOnExit", elemType: shared.EvaluateOnExit }),
        __metadata("design:type", Array)
    ], SubmitJobRequestBodyRetryStrategy.prototype, "evaluateOnExit", void 0);
    return SubmitJobRequestBodyRetryStrategy;
}(SpeakeasyBase));
export { SubmitJobRequestBodyRetryStrategy };
// SubmitJobRequestBodyTimeout
/**
 * An object representing a job timeout configuration.
**/
var SubmitJobRequestBodyTimeout = /** @class */ (function (_super) {
    __extends(SubmitJobRequestBodyTimeout, _super);
    function SubmitJobRequestBodyTimeout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attemptDurationSeconds" }),
        __metadata("design:type", Number)
    ], SubmitJobRequestBodyTimeout.prototype, "attemptDurationSeconds", void 0);
    return SubmitJobRequestBodyTimeout;
}(SpeakeasyBase));
export { SubmitJobRequestBodyTimeout };
var SubmitJobRequestBody = /** @class */ (function (_super) {
    __extends(SubmitJobRequestBody, _super);
    function SubmitJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arrayProperties" }),
        __metadata("design:type", SubmitJobRequestBodyArrayProperties)
    ], SubmitJobRequestBody.prototype, "arrayProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerOverrides" }),
        __metadata("design:type", SubmitJobRequestBodyContainerOverrides)
    ], SubmitJobRequestBody.prototype, "containerOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dependsOn", elemType: shared.JobDependency }),
        __metadata("design:type", Array)
    ], SubmitJobRequestBody.prototype, "dependsOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobDefinition" }),
        __metadata("design:type", String)
    ], SubmitJobRequestBody.prototype, "jobDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobName" }),
        __metadata("design:type", String)
    ], SubmitJobRequestBody.prototype, "jobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobQueue" }),
        __metadata("design:type", String)
    ], SubmitJobRequestBody.prototype, "jobQueue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeOverrides" }),
        __metadata("design:type", SubmitJobRequestBodyNodeOverrides)
    ], SubmitJobRequestBody.prototype, "nodeOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], SubmitJobRequestBody.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propagateTags" }),
        __metadata("design:type", Boolean)
    ], SubmitJobRequestBody.prototype, "propagateTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retryStrategy" }),
        __metadata("design:type", SubmitJobRequestBodyRetryStrategy)
    ], SubmitJobRequestBody.prototype, "retryStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], SubmitJobRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", SubmitJobRequestBodyTimeout)
    ], SubmitJobRequestBody.prototype, "timeout", void 0);
    return SubmitJobRequestBody;
}(SpeakeasyBase));
export { SubmitJobRequestBody };
var SubmitJobRequest = /** @class */ (function (_super) {
    __extends(SubmitJobRequest, _super);
    function SubmitJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubmitJobHeaders)
    ], SubmitJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SubmitJobRequestBody)
    ], SubmitJobRequest.prototype, "request", void 0);
    return SubmitJobRequest;
}(SpeakeasyBase));
export { SubmitJobRequest };
var SubmitJobResponse = /** @class */ (function (_super) {
    __extends(SubmitJobResponse, _super);
    function SubmitJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubmitJobResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SubmitJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubmitJobResponse.prototype, "serverException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SubmitJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubmitJobResponse)
    ], SubmitJobResponse.prototype, "submitJobResponse", void 0);
    return SubmitJobResponse;
}(SpeakeasyBase));
export { SubmitJobResponse };
