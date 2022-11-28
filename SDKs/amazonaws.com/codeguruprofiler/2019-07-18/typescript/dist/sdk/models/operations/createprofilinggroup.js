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
var CreateProfilingGroupQueryParams = /** @class */ (function (_super) {
    __extends(CreateProfilingGroupQueryParams, _super);
    function CreateProfilingGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientToken" }),
        __metadata("design:type", String)
    ], CreateProfilingGroupQueryParams.prototype, "clientToken", void 0);
    return CreateProfilingGroupQueryParams;
}(SpeakeasyBase));
export { CreateProfilingGroupQueryParams };
var CreateProfilingGroupHeaders = /** @class */ (function (_super) {
    __extends(CreateProfilingGroupHeaders, _super);
    function CreateProfilingGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateProfilingGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateProfilingGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateProfilingGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateProfilingGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateProfilingGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateProfilingGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateProfilingGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateProfilingGroupHeaders;
}(SpeakeasyBase));
export { CreateProfilingGroupHeaders };
// CreateProfilingGroupRequestBodyAgentOrchestrationConfig
/**
 *  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group.
**/
var CreateProfilingGroupRequestBodyAgentOrchestrationConfig = /** @class */ (function (_super) {
    __extends(CreateProfilingGroupRequestBodyAgentOrchestrationConfig, _super);
    function CreateProfilingGroupRequestBodyAgentOrchestrationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profilingEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateProfilingGroupRequestBodyAgentOrchestrationConfig.prototype, "profilingEnabled", void 0);
    return CreateProfilingGroupRequestBodyAgentOrchestrationConfig;
}(SpeakeasyBase));
export { CreateProfilingGroupRequestBodyAgentOrchestrationConfig };
export var CreateProfilingGroupRequestBodyComputePlatformEnum;
(function (CreateProfilingGroupRequestBodyComputePlatformEnum) {
    CreateProfilingGroupRequestBodyComputePlatformEnum["Default"] = "Default";
    CreateProfilingGroupRequestBodyComputePlatformEnum["AwsLambda"] = "AWSLambda";
})(CreateProfilingGroupRequestBodyComputePlatformEnum || (CreateProfilingGroupRequestBodyComputePlatformEnum = {}));
var CreateProfilingGroupRequestBody = /** @class */ (function (_super) {
    __extends(CreateProfilingGroupRequestBody, _super);
    function CreateProfilingGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agentOrchestrationConfig" }),
        __metadata("design:type", CreateProfilingGroupRequestBodyAgentOrchestrationConfig)
    ], CreateProfilingGroupRequestBody.prototype, "agentOrchestrationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computePlatform" }),
        __metadata("design:type", String)
    ], CreateProfilingGroupRequestBody.prototype, "computePlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profilingGroupName" }),
        __metadata("design:type", String)
    ], CreateProfilingGroupRequestBody.prototype, "profilingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateProfilingGroupRequestBody.prototype, "tags", void 0);
    return CreateProfilingGroupRequestBody;
}(SpeakeasyBase));
export { CreateProfilingGroupRequestBody };
var CreateProfilingGroupRequest = /** @class */ (function (_super) {
    __extends(CreateProfilingGroupRequest, _super);
    function CreateProfilingGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProfilingGroupQueryParams)
    ], CreateProfilingGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProfilingGroupHeaders)
    ], CreateProfilingGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateProfilingGroupRequestBody)
    ], CreateProfilingGroupRequest.prototype, "request", void 0);
    return CreateProfilingGroupRequest;
}(SpeakeasyBase));
export { CreateProfilingGroupRequest };
var CreateProfilingGroupResponse = /** @class */ (function (_super) {
    __extends(CreateProfilingGroupResponse, _super);
    function CreateProfilingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProfilingGroupResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateProfilingGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateProfilingGroupResponse)
    ], CreateProfilingGroupResponse.prototype, "createProfilingGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProfilingGroupResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProfilingGroupResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateProfilingGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProfilingGroupResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProfilingGroupResponse.prototype, "validationException", void 0);
    return CreateProfilingGroupResponse;
}(SpeakeasyBase));
export { CreateProfilingGroupResponse };
