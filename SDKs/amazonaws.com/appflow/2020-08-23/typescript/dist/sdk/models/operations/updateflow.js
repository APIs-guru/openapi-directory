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
var UpdateFlowHeaders = /** @class */ (function (_super) {
    __extends(UpdateFlowHeaders, _super);
    function UpdateFlowHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateFlowHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateFlowHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateFlowHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateFlowHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateFlowHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateFlowHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateFlowHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateFlowHeaders;
}(SpeakeasyBase));
export { UpdateFlowHeaders };
// UpdateFlowRequestBodySourceFlowConfig
/**
 *  Contains information about the configuration of the source connector used in the flow.
**/
var UpdateFlowRequestBodySourceFlowConfig = /** @class */ (function (_super) {
    __extends(UpdateFlowRequestBodySourceFlowConfig, _super);
    function UpdateFlowRequestBodySourceFlowConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorProfileName" }),
        __metadata("design:type", String)
    ], UpdateFlowRequestBodySourceFlowConfig.prototype, "connectorProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorType" }),
        __metadata("design:type", String)
    ], UpdateFlowRequestBodySourceFlowConfig.prototype, "connectorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incrementalPullConfig" }),
        __metadata("design:type", shared.IncrementalPullConfig)
    ], UpdateFlowRequestBodySourceFlowConfig.prototype, "incrementalPullConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceConnectorProperties" }),
        __metadata("design:type", shared.SourceConnectorProperties)
    ], UpdateFlowRequestBodySourceFlowConfig.prototype, "sourceConnectorProperties", void 0);
    return UpdateFlowRequestBodySourceFlowConfig;
}(SpeakeasyBase));
export { UpdateFlowRequestBodySourceFlowConfig };
// UpdateFlowRequestBodyTriggerConfig
/**
 *  The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
**/
var UpdateFlowRequestBodyTriggerConfig = /** @class */ (function (_super) {
    __extends(UpdateFlowRequestBodyTriggerConfig, _super);
    function UpdateFlowRequestBodyTriggerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerProperties" }),
        __metadata("design:type", shared.TriggerProperties)
    ], UpdateFlowRequestBodyTriggerConfig.prototype, "triggerProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerType" }),
        __metadata("design:type", String)
    ], UpdateFlowRequestBodyTriggerConfig.prototype, "triggerType", void 0);
    return UpdateFlowRequestBodyTriggerConfig;
}(SpeakeasyBase));
export { UpdateFlowRequestBodyTriggerConfig };
var UpdateFlowRequestBody = /** @class */ (function (_super) {
    __extends(UpdateFlowRequestBody, _super);
    function UpdateFlowRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateFlowRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationFlowConfigList", elemType: shared.DestinationFlowConfig }),
        __metadata("design:type", Array)
    ], UpdateFlowRequestBody.prototype, "destinationFlowConfigList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flowName" }),
        __metadata("design:type", String)
    ], UpdateFlowRequestBody.prototype, "flowName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceFlowConfig" }),
        __metadata("design:type", UpdateFlowRequestBodySourceFlowConfig)
    ], UpdateFlowRequestBody.prototype, "sourceFlowConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tasks", elemType: shared.Task }),
        __metadata("design:type", Array)
    ], UpdateFlowRequestBody.prototype, "tasks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerConfig" }),
        __metadata("design:type", UpdateFlowRequestBodyTriggerConfig)
    ], UpdateFlowRequestBody.prototype, "triggerConfig", void 0);
    return UpdateFlowRequestBody;
}(SpeakeasyBase));
export { UpdateFlowRequestBody };
var UpdateFlowRequest = /** @class */ (function (_super) {
    __extends(UpdateFlowRequest, _super);
    function UpdateFlowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFlowHeaders)
    ], UpdateFlowRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateFlowRequestBody)
    ], UpdateFlowRequest.prototype, "request", void 0);
    return UpdateFlowRequest;
}(SpeakeasyBase));
export { UpdateFlowRequest };
var UpdateFlowResponse = /** @class */ (function (_super) {
    __extends(UpdateFlowResponse, _super);
    function UpdateFlowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFlowResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFlowResponse.prototype, "connectorAuthenticationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFlowResponse.prototype, "connectorServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFlowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFlowResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFlowResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFlowResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFlowResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateFlowResponse)
    ], UpdateFlowResponse.prototype, "updateFlowResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFlowResponse.prototype, "validationException", void 0);
    return UpdateFlowResponse;
}(SpeakeasyBase));
export { UpdateFlowResponse };
