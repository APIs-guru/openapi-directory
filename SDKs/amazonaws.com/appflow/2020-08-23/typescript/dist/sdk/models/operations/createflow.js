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
var CreateFlowHeaders = /** @class */ (function (_super) {
    __extends(CreateFlowHeaders, _super);
    function CreateFlowHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateFlowHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateFlowHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateFlowHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateFlowHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateFlowHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateFlowHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateFlowHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateFlowHeaders;
}(SpeakeasyBase));
export { CreateFlowHeaders };
// CreateFlowRequestBodySourceFlowConfig
/**
 *  Contains information about the configuration of the source connector used in the flow.
**/
var CreateFlowRequestBodySourceFlowConfig = /** @class */ (function (_super) {
    __extends(CreateFlowRequestBodySourceFlowConfig, _super);
    function CreateFlowRequestBodySourceFlowConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorProfileName" }),
        __metadata("design:type", String)
    ], CreateFlowRequestBodySourceFlowConfig.prototype, "connectorProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorType" }),
        __metadata("design:type", String)
    ], CreateFlowRequestBodySourceFlowConfig.prototype, "connectorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incrementalPullConfig" }),
        __metadata("design:type", shared.IncrementalPullConfig)
    ], CreateFlowRequestBodySourceFlowConfig.prototype, "incrementalPullConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceConnectorProperties" }),
        __metadata("design:type", shared.SourceConnectorProperties)
    ], CreateFlowRequestBodySourceFlowConfig.prototype, "sourceConnectorProperties", void 0);
    return CreateFlowRequestBodySourceFlowConfig;
}(SpeakeasyBase));
export { CreateFlowRequestBodySourceFlowConfig };
// CreateFlowRequestBodyTriggerConfig
/**
 *  The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
**/
var CreateFlowRequestBodyTriggerConfig = /** @class */ (function (_super) {
    __extends(CreateFlowRequestBodyTriggerConfig, _super);
    function CreateFlowRequestBodyTriggerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerProperties" }),
        __metadata("design:type", shared.TriggerProperties)
    ], CreateFlowRequestBodyTriggerConfig.prototype, "triggerProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerType" }),
        __metadata("design:type", String)
    ], CreateFlowRequestBodyTriggerConfig.prototype, "triggerType", void 0);
    return CreateFlowRequestBodyTriggerConfig;
}(SpeakeasyBase));
export { CreateFlowRequestBodyTriggerConfig };
var CreateFlowRequestBody = /** @class */ (function (_super) {
    __extends(CreateFlowRequestBody, _super);
    function CreateFlowRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateFlowRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationFlowConfigList", elemType: shared.DestinationFlowConfig }),
        __metadata("design:type", Array)
    ], CreateFlowRequestBody.prototype, "destinationFlowConfigList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flowName" }),
        __metadata("design:type", String)
    ], CreateFlowRequestBody.prototype, "flowName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsArn" }),
        __metadata("design:type", String)
    ], CreateFlowRequestBody.prototype, "kmsArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceFlowConfig" }),
        __metadata("design:type", CreateFlowRequestBodySourceFlowConfig)
    ], CreateFlowRequestBody.prototype, "sourceFlowConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateFlowRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tasks", elemType: shared.Task }),
        __metadata("design:type", Array)
    ], CreateFlowRequestBody.prototype, "tasks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerConfig" }),
        __metadata("design:type", CreateFlowRequestBodyTriggerConfig)
    ], CreateFlowRequestBody.prototype, "triggerConfig", void 0);
    return CreateFlowRequestBody;
}(SpeakeasyBase));
export { CreateFlowRequestBody };
var CreateFlowRequest = /** @class */ (function (_super) {
    __extends(CreateFlowRequest, _super);
    function CreateFlowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFlowHeaders)
    ], CreateFlowRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateFlowRequestBody)
    ], CreateFlowRequest.prototype, "request", void 0);
    return CreateFlowRequest;
}(SpeakeasyBase));
export { CreateFlowRequest };
var CreateFlowResponse = /** @class */ (function (_super) {
    __extends(CreateFlowResponse, _super);
    function CreateFlowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFlowResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFlowResponse.prototype, "connectorAuthenticationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFlowResponse.prototype, "connectorServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFlowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateFlowResponse)
    ], CreateFlowResponse.prototype, "createFlowResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFlowResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFlowResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFlowResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFlowResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFlowResponse.prototype, "validationException", void 0);
    return CreateFlowResponse;
}(SpeakeasyBase));
export { CreateFlowResponse };
