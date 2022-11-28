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
var StartAuditMitigationActionsTaskPathParams = /** @class */ (function (_super) {
    __extends(StartAuditMitigationActionsTaskPathParams, _super);
    function StartAuditMitigationActionsTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" }),
        __metadata("design:type", String)
    ], StartAuditMitigationActionsTaskPathParams.prototype, "taskId", void 0);
    return StartAuditMitigationActionsTaskPathParams;
}(SpeakeasyBase));
export { StartAuditMitigationActionsTaskPathParams };
var StartAuditMitigationActionsTaskHeaders = /** @class */ (function (_super) {
    __extends(StartAuditMitigationActionsTaskHeaders, _super);
    function StartAuditMitigationActionsTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartAuditMitigationActionsTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartAuditMitigationActionsTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartAuditMitigationActionsTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartAuditMitigationActionsTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartAuditMitigationActionsTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartAuditMitigationActionsTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartAuditMitigationActionsTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartAuditMitigationActionsTaskHeaders;
}(SpeakeasyBase));
export { StartAuditMitigationActionsTaskHeaders };
// StartAuditMitigationActionsTaskRequestBodyTarget
/**
 * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
**/
var StartAuditMitigationActionsTaskRequestBodyTarget = /** @class */ (function (_super) {
    __extends(StartAuditMitigationActionsTaskRequestBodyTarget, _super);
    function StartAuditMitigationActionsTaskRequestBodyTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auditCheckToReasonCodeFilter" }),
        __metadata("design:type", Map)
    ], StartAuditMitigationActionsTaskRequestBodyTarget.prototype, "auditCheckToReasonCodeFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auditTaskId" }),
        __metadata("design:type", String)
    ], StartAuditMitigationActionsTaskRequestBodyTarget.prototype, "auditTaskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findingIds" }),
        __metadata("design:type", Array)
    ], StartAuditMitigationActionsTaskRequestBodyTarget.prototype, "findingIds", void 0);
    return StartAuditMitigationActionsTaskRequestBodyTarget;
}(SpeakeasyBase));
export { StartAuditMitigationActionsTaskRequestBodyTarget };
var StartAuditMitigationActionsTaskRequestBody = /** @class */ (function (_super) {
    __extends(StartAuditMitigationActionsTaskRequestBody, _super);
    function StartAuditMitigationActionsTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auditCheckToActionsMapping" }),
        __metadata("design:type", Map)
    ], StartAuditMitigationActionsTaskRequestBody.prototype, "auditCheckToActionsMapping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], StartAuditMitigationActionsTaskRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", StartAuditMitigationActionsTaskRequestBodyTarget)
    ], StartAuditMitigationActionsTaskRequestBody.prototype, "target", void 0);
    return StartAuditMitigationActionsTaskRequestBody;
}(SpeakeasyBase));
export { StartAuditMitigationActionsTaskRequestBody };
var StartAuditMitigationActionsTaskRequest = /** @class */ (function (_super) {
    __extends(StartAuditMitigationActionsTaskRequest, _super);
    function StartAuditMitigationActionsTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartAuditMitigationActionsTaskPathParams)
    ], StartAuditMitigationActionsTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartAuditMitigationActionsTaskHeaders)
    ], StartAuditMitigationActionsTaskRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartAuditMitigationActionsTaskRequestBody)
    ], StartAuditMitigationActionsTaskRequest.prototype, "request", void 0);
    return StartAuditMitigationActionsTaskRequest;
}(SpeakeasyBase));
export { StartAuditMitigationActionsTaskRequest };
var StartAuditMitigationActionsTaskResponse = /** @class */ (function (_super) {
    __extends(StartAuditMitigationActionsTaskResponse, _super);
    function StartAuditMitigationActionsTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartAuditMitigationActionsTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartAuditMitigationActionsTaskResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartAuditMitigationActionsTaskResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartAuditMitigationActionsTaskResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartAuditMitigationActionsTaskResponse)
    ], StartAuditMitigationActionsTaskResponse.prototype, "startAuditMitigationActionsTaskResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartAuditMitigationActionsTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartAuditMitigationActionsTaskResponse.prototype, "taskAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartAuditMitigationActionsTaskResponse.prototype, "throttlingException", void 0);
    return StartAuditMitigationActionsTaskResponse;
}(SpeakeasyBase));
export { StartAuditMitigationActionsTaskResponse };
