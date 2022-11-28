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
var UpdateLifecyclePolicyPathParams = /** @class */ (function (_super) {
    __extends(UpdateLifecyclePolicyPathParams, _super);
    function UpdateLifecyclePolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=policyId" }),
        __metadata("design:type", String)
    ], UpdateLifecyclePolicyPathParams.prototype, "policyId", void 0);
    return UpdateLifecyclePolicyPathParams;
}(SpeakeasyBase));
export { UpdateLifecyclePolicyPathParams };
var UpdateLifecyclePolicyHeaders = /** @class */ (function (_super) {
    __extends(UpdateLifecyclePolicyHeaders, _super);
    function UpdateLifecyclePolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateLifecyclePolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateLifecyclePolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateLifecyclePolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateLifecyclePolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateLifecyclePolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateLifecyclePolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateLifecyclePolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateLifecyclePolicyHeaders;
}(SpeakeasyBase));
export { UpdateLifecyclePolicyHeaders };
// UpdateLifecyclePolicyRequestBodyPolicyDetails
/**
 * Specifies the configuration of a lifecycle policy.
**/
var UpdateLifecyclePolicyRequestBodyPolicyDetails = /** @class */ (function (_super) {
    __extends(UpdateLifecyclePolicyRequestBodyPolicyDetails, _super);
    function UpdateLifecyclePolicyRequestBodyPolicyDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Actions", elemType: shared.Action }),
        __metadata("design:type", Array)
    ], UpdateLifecyclePolicyRequestBodyPolicyDetails.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventSource" }),
        __metadata("design:type", shared.EventSource)
    ], UpdateLifecyclePolicyRequestBodyPolicyDetails.prototype, "eventSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", shared.Parameters)
    ], UpdateLifecyclePolicyRequestBodyPolicyDetails.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyType" }),
        __metadata("design:type", String)
    ], UpdateLifecyclePolicyRequestBodyPolicyDetails.prototype, "policyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceLocations" }),
        __metadata("design:type", Array)
    ], UpdateLifecyclePolicyRequestBodyPolicyDetails.prototype, "resourceLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceTypes" }),
        __metadata("design:type", Array)
    ], UpdateLifecyclePolicyRequestBodyPolicyDetails.prototype, "resourceTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedules", elemType: shared.Schedule }),
        __metadata("design:type", Array)
    ], UpdateLifecyclePolicyRequestBodyPolicyDetails.prototype, "schedules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetTags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], UpdateLifecyclePolicyRequestBodyPolicyDetails.prototype, "targetTags", void 0);
    return UpdateLifecyclePolicyRequestBodyPolicyDetails;
}(SpeakeasyBase));
export { UpdateLifecyclePolicyRequestBodyPolicyDetails };
export var UpdateLifecyclePolicyRequestBodyStateEnum;
(function (UpdateLifecyclePolicyRequestBodyStateEnum) {
    UpdateLifecyclePolicyRequestBodyStateEnum["Enabled"] = "ENABLED";
    UpdateLifecyclePolicyRequestBodyStateEnum["Disabled"] = "DISABLED";
})(UpdateLifecyclePolicyRequestBodyStateEnum || (UpdateLifecyclePolicyRequestBodyStateEnum = {}));
var UpdateLifecyclePolicyRequestBody = /** @class */ (function (_super) {
    __extends(UpdateLifecyclePolicyRequestBody, _super);
    function UpdateLifecyclePolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateLifecyclePolicyRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" }),
        __metadata("design:type", String)
    ], UpdateLifecyclePolicyRequestBody.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyDetails" }),
        __metadata("design:type", UpdateLifecyclePolicyRequestBodyPolicyDetails)
    ], UpdateLifecyclePolicyRequestBody.prototype, "policyDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], UpdateLifecyclePolicyRequestBody.prototype, "state", void 0);
    return UpdateLifecyclePolicyRequestBody;
}(SpeakeasyBase));
export { UpdateLifecyclePolicyRequestBody };
var UpdateLifecyclePolicyRequest = /** @class */ (function (_super) {
    __extends(UpdateLifecyclePolicyRequest, _super);
    function UpdateLifecyclePolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLifecyclePolicyPathParams)
    ], UpdateLifecyclePolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLifecyclePolicyHeaders)
    ], UpdateLifecyclePolicyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateLifecyclePolicyRequestBody)
    ], UpdateLifecyclePolicyRequest.prototype, "request", void 0);
    return UpdateLifecyclePolicyRequest;
}(SpeakeasyBase));
export { UpdateLifecyclePolicyRequest };
var UpdateLifecyclePolicyResponse = /** @class */ (function (_super) {
    __extends(UpdateLifecyclePolicyResponse, _super);
    function UpdateLifecyclePolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateLifecyclePolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLifecyclePolicyResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLifecyclePolicyResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLifecyclePolicyResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLifecyclePolicyResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateLifecyclePolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateLifecyclePolicyResponse.prototype, "updateLifecyclePolicyResponse", void 0);
    return UpdateLifecyclePolicyResponse;
}(SpeakeasyBase));
export { UpdateLifecyclePolicyResponse };
