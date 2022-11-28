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
var DetachPolicyHeaders = /** @class */ (function (_super) {
    __extends(DetachPolicyHeaders, _super);
    function DetachPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DetachPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DetachPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DetachPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DetachPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DetachPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DetachPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DetachPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], DetachPolicyHeaders.prototype, "xAmzDataPartition", void 0);
    return DetachPolicyHeaders;
}(SpeakeasyBase));
export { DetachPolicyHeaders };
// DetachPolicyRequestBodyObjectReference
/**
 * The reference that identifies an object.
**/
var DetachPolicyRequestBodyObjectReference = /** @class */ (function (_super) {
    __extends(DetachPolicyRequestBodyObjectReference, _super);
    function DetachPolicyRequestBodyObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], DetachPolicyRequestBodyObjectReference.prototype, "selector", void 0);
    return DetachPolicyRequestBodyObjectReference;
}(SpeakeasyBase));
export { DetachPolicyRequestBodyObjectReference };
// DetachPolicyRequestBodyPolicyReference
/**
 * The reference that identifies an object.
**/
var DetachPolicyRequestBodyPolicyReference = /** @class */ (function (_super) {
    __extends(DetachPolicyRequestBodyPolicyReference, _super);
    function DetachPolicyRequestBodyPolicyReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], DetachPolicyRequestBodyPolicyReference.prototype, "selector", void 0);
    return DetachPolicyRequestBodyPolicyReference;
}(SpeakeasyBase));
export { DetachPolicyRequestBodyPolicyReference };
var DetachPolicyRequestBody = /** @class */ (function (_super) {
    __extends(DetachPolicyRequestBody, _super);
    function DetachPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectReference" }),
        __metadata("design:type", DetachPolicyRequestBodyObjectReference)
    ], DetachPolicyRequestBody.prototype, "objectReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyReference" }),
        __metadata("design:type", DetachPolicyRequestBodyPolicyReference)
    ], DetachPolicyRequestBody.prototype, "policyReference", void 0);
    return DetachPolicyRequestBody;
}(SpeakeasyBase));
export { DetachPolicyRequestBody };
var DetachPolicyRequest = /** @class */ (function (_super) {
    __extends(DetachPolicyRequest, _super);
    function DetachPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DetachPolicyHeaders)
    ], DetachPolicyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DetachPolicyRequestBody)
    ], DetachPolicyRequest.prototype, "request", void 0);
    return DetachPolicyRequest;
}(SpeakeasyBase));
export { DetachPolicyRequest };
var DetachPolicyResponse = /** @class */ (function (_super) {
    __extends(DetachPolicyResponse, _super);
    function DetachPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], DetachPolicyResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DetachPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DetachPolicyResponse.prototype, "detachPolicyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], DetachPolicyResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], DetachPolicyResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], DetachPolicyResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], DetachPolicyResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotPolicyException)
    ], DetachPolicyResponse.prototype, "notPolicyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], DetachPolicyResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], DetachPolicyResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DetachPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], DetachPolicyResponse.prototype, "validationException", void 0);
    return DetachPolicyResponse;
}(SpeakeasyBase));
export { DetachPolicyResponse };
