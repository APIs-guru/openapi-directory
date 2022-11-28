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
var CreateLifecyclePolicyHeaders = /** @class */ (function (_super) {
    __extends(CreateLifecyclePolicyHeaders, _super);
    function CreateLifecyclePolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateLifecyclePolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateLifecyclePolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateLifecyclePolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateLifecyclePolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateLifecyclePolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateLifecyclePolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateLifecyclePolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateLifecyclePolicyHeaders;
}(SpeakeasyBase));
export { CreateLifecyclePolicyHeaders };
// CreateLifecyclePolicyRequestBodyPolicyDetails
/**
 * Specifies the configuration of a lifecycle policy.
**/
var CreateLifecyclePolicyRequestBodyPolicyDetails = /** @class */ (function (_super) {
    __extends(CreateLifecyclePolicyRequestBodyPolicyDetails, _super);
    function CreateLifecyclePolicyRequestBodyPolicyDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Actions", elemType: shared.Action }),
        __metadata("design:type", Array)
    ], CreateLifecyclePolicyRequestBodyPolicyDetails.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventSource" }),
        __metadata("design:type", shared.EventSource)
    ], CreateLifecyclePolicyRequestBodyPolicyDetails.prototype, "eventSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", shared.Parameters)
    ], CreateLifecyclePolicyRequestBodyPolicyDetails.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyType" }),
        __metadata("design:type", String)
    ], CreateLifecyclePolicyRequestBodyPolicyDetails.prototype, "policyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceLocations" }),
        __metadata("design:type", Array)
    ], CreateLifecyclePolicyRequestBodyPolicyDetails.prototype, "resourceLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceTypes" }),
        __metadata("design:type", Array)
    ], CreateLifecyclePolicyRequestBodyPolicyDetails.prototype, "resourceTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedules", elemType: shared.Schedule }),
        __metadata("design:type", Array)
    ], CreateLifecyclePolicyRequestBodyPolicyDetails.prototype, "schedules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetTags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateLifecyclePolicyRequestBodyPolicyDetails.prototype, "targetTags", void 0);
    return CreateLifecyclePolicyRequestBodyPolicyDetails;
}(SpeakeasyBase));
export { CreateLifecyclePolicyRequestBodyPolicyDetails };
export var CreateLifecyclePolicyRequestBodyStateEnum;
(function (CreateLifecyclePolicyRequestBodyStateEnum) {
    CreateLifecyclePolicyRequestBodyStateEnum["Enabled"] = "ENABLED";
    CreateLifecyclePolicyRequestBodyStateEnum["Disabled"] = "DISABLED";
})(CreateLifecyclePolicyRequestBodyStateEnum || (CreateLifecyclePolicyRequestBodyStateEnum = {}));
var CreateLifecyclePolicyRequestBody = /** @class */ (function (_super) {
    __extends(CreateLifecyclePolicyRequestBody, _super);
    function CreateLifecyclePolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateLifecyclePolicyRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" }),
        __metadata("design:type", String)
    ], CreateLifecyclePolicyRequestBody.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyDetails" }),
        __metadata("design:type", CreateLifecyclePolicyRequestBodyPolicyDetails)
    ], CreateLifecyclePolicyRequestBody.prototype, "policyDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], CreateLifecyclePolicyRequestBody.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], CreateLifecyclePolicyRequestBody.prototype, "tags", void 0);
    return CreateLifecyclePolicyRequestBody;
}(SpeakeasyBase));
export { CreateLifecyclePolicyRequestBody };
var CreateLifecyclePolicyRequest = /** @class */ (function (_super) {
    __extends(CreateLifecyclePolicyRequest, _super);
    function CreateLifecyclePolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateLifecyclePolicyHeaders)
    ], CreateLifecyclePolicyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateLifecyclePolicyRequestBody)
    ], CreateLifecyclePolicyRequest.prototype, "request", void 0);
    return CreateLifecyclePolicyRequest;
}(SpeakeasyBase));
export { CreateLifecyclePolicyRequest };
var CreateLifecyclePolicyResponse = /** @class */ (function (_super) {
    __extends(CreateLifecyclePolicyResponse, _super);
    function CreateLifecyclePolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateLifecyclePolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateLifecyclePolicyResponse)
    ], CreateLifecyclePolicyResponse.prototype, "createLifecyclePolicyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLifecyclePolicyResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLifecyclePolicyResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLifecyclePolicyResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateLifecyclePolicyResponse.prototype, "statusCode", void 0);
    return CreateLifecyclePolicyResponse;
}(SpeakeasyBase));
export { CreateLifecyclePolicyResponse };
