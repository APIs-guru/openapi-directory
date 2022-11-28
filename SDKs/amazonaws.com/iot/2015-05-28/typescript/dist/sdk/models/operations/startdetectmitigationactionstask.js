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
var StartDetectMitigationActionsTaskPathParams = /** @class */ (function (_super) {
    __extends(StartDetectMitigationActionsTaskPathParams, _super);
    function StartDetectMitigationActionsTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" }),
        __metadata("design:type", String)
    ], StartDetectMitigationActionsTaskPathParams.prototype, "taskId", void 0);
    return StartDetectMitigationActionsTaskPathParams;
}(SpeakeasyBase));
export { StartDetectMitigationActionsTaskPathParams };
var StartDetectMitigationActionsTaskHeaders = /** @class */ (function (_super) {
    __extends(StartDetectMitigationActionsTaskHeaders, _super);
    function StartDetectMitigationActionsTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartDetectMitigationActionsTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartDetectMitigationActionsTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartDetectMitigationActionsTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartDetectMitigationActionsTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartDetectMitigationActionsTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartDetectMitigationActionsTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartDetectMitigationActionsTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartDetectMitigationActionsTaskHeaders;
}(SpeakeasyBase));
export { StartDetectMitigationActionsTaskHeaders };
// StartDetectMitigationActionsTaskRequestBodyTarget
/**
 *  The target of a mitigation action task.
**/
var StartDetectMitigationActionsTaskRequestBodyTarget = /** @class */ (function (_super) {
    __extends(StartDetectMitigationActionsTaskRequestBodyTarget, _super);
    function StartDetectMitigationActionsTaskRequestBodyTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=behaviorName" }),
        __metadata("design:type", String)
    ], StartDetectMitigationActionsTaskRequestBodyTarget.prototype, "behaviorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityProfileName" }),
        __metadata("design:type", String)
    ], StartDetectMitigationActionsTaskRequestBodyTarget.prototype, "securityProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=violationIds" }),
        __metadata("design:type", Array)
    ], StartDetectMitigationActionsTaskRequestBodyTarget.prototype, "violationIds", void 0);
    return StartDetectMitigationActionsTaskRequestBodyTarget;
}(SpeakeasyBase));
export { StartDetectMitigationActionsTaskRequestBodyTarget };
// StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange
/**
 *  Specifies the time period of which violation events occurred between.
**/
var StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange = /** @class */ (function (_super) {
    __extends(StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange, _super);
    function StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange.prototype, "startTime", void 0);
    return StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange;
}(SpeakeasyBase));
export { StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange };
var StartDetectMitigationActionsTaskRequestBody = /** @class */ (function (_super) {
    __extends(StartDetectMitigationActionsTaskRequestBody, _super);
    function StartDetectMitigationActionsTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions" }),
        __metadata("design:type", Array)
    ], StartDetectMitigationActionsTaskRequestBody.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], StartDetectMitigationActionsTaskRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeOnlyActiveViolations" }),
        __metadata("design:type", Boolean)
    ], StartDetectMitigationActionsTaskRequestBody.prototype, "includeOnlyActiveViolations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeSuppressedAlerts" }),
        __metadata("design:type", Boolean)
    ], StartDetectMitigationActionsTaskRequestBody.prototype, "includeSuppressedAlerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", StartDetectMitigationActionsTaskRequestBodyTarget)
    ], StartDetectMitigationActionsTaskRequestBody.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=violationEventOccurrenceRange" }),
        __metadata("design:type", StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange)
    ], StartDetectMitigationActionsTaskRequestBody.prototype, "violationEventOccurrenceRange", void 0);
    return StartDetectMitigationActionsTaskRequestBody;
}(SpeakeasyBase));
export { StartDetectMitigationActionsTaskRequestBody };
var StartDetectMitigationActionsTaskRequest = /** @class */ (function (_super) {
    __extends(StartDetectMitigationActionsTaskRequest, _super);
    function StartDetectMitigationActionsTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartDetectMitigationActionsTaskPathParams)
    ], StartDetectMitigationActionsTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartDetectMitigationActionsTaskHeaders)
    ], StartDetectMitigationActionsTaskRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartDetectMitigationActionsTaskRequestBody)
    ], StartDetectMitigationActionsTaskRequest.prototype, "request", void 0);
    return StartDetectMitigationActionsTaskRequest;
}(SpeakeasyBase));
export { StartDetectMitigationActionsTaskRequest };
var StartDetectMitigationActionsTaskResponse = /** @class */ (function (_super) {
    __extends(StartDetectMitigationActionsTaskResponse, _super);
    function StartDetectMitigationActionsTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartDetectMitigationActionsTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartDetectMitigationActionsTaskResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartDetectMitigationActionsTaskResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartDetectMitigationActionsTaskResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartDetectMitigationActionsTaskResponse)
    ], StartDetectMitigationActionsTaskResponse.prototype, "startDetectMitigationActionsTaskResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartDetectMitigationActionsTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartDetectMitigationActionsTaskResponse.prototype, "taskAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartDetectMitigationActionsTaskResponse.prototype, "throttlingException", void 0);
    return StartDetectMitigationActionsTaskResponse;
}(SpeakeasyBase));
export { StartDetectMitigationActionsTaskResponse };
