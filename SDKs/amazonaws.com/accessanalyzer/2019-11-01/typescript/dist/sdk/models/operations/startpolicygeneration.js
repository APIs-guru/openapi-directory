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
var StartPolicyGenerationHeaders = /** @class */ (function (_super) {
    __extends(StartPolicyGenerationHeaders, _super);
    function StartPolicyGenerationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartPolicyGenerationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartPolicyGenerationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartPolicyGenerationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartPolicyGenerationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartPolicyGenerationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartPolicyGenerationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartPolicyGenerationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartPolicyGenerationHeaders;
}(SpeakeasyBase));
export { StartPolicyGenerationHeaders };
// StartPolicyGenerationRequestBodyCloudTrailDetails
/**
 * Contains information about CloudTrail access.
**/
var StartPolicyGenerationRequestBodyCloudTrailDetails = /** @class */ (function (_super) {
    __extends(StartPolicyGenerationRequestBodyCloudTrailDetails, _super);
    function StartPolicyGenerationRequestBodyCloudTrailDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessRole" }),
        __metadata("design:type", String)
    ], StartPolicyGenerationRequestBodyCloudTrailDetails.prototype, "accessRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], StartPolicyGenerationRequestBodyCloudTrailDetails.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], StartPolicyGenerationRequestBodyCloudTrailDetails.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trails", elemType: shared.Trail }),
        __metadata("design:type", Array)
    ], StartPolicyGenerationRequestBodyCloudTrailDetails.prototype, "trails", void 0);
    return StartPolicyGenerationRequestBodyCloudTrailDetails;
}(SpeakeasyBase));
export { StartPolicyGenerationRequestBodyCloudTrailDetails };
// StartPolicyGenerationRequestBodyPolicyGenerationDetails
/**
 * Contains the ARN details about the IAM entity for which the policy is generated.
**/
var StartPolicyGenerationRequestBodyPolicyGenerationDetails = /** @class */ (function (_super) {
    __extends(StartPolicyGenerationRequestBodyPolicyGenerationDetails, _super);
    function StartPolicyGenerationRequestBodyPolicyGenerationDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principalArn" }),
        __metadata("design:type", String)
    ], StartPolicyGenerationRequestBodyPolicyGenerationDetails.prototype, "principalArn", void 0);
    return StartPolicyGenerationRequestBodyPolicyGenerationDetails;
}(SpeakeasyBase));
export { StartPolicyGenerationRequestBodyPolicyGenerationDetails };
var StartPolicyGenerationRequestBody = /** @class */ (function (_super) {
    __extends(StartPolicyGenerationRequestBody, _super);
    function StartPolicyGenerationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], StartPolicyGenerationRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudTrailDetails" }),
        __metadata("design:type", StartPolicyGenerationRequestBodyCloudTrailDetails)
    ], StartPolicyGenerationRequestBody.prototype, "cloudTrailDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyGenerationDetails" }),
        __metadata("design:type", StartPolicyGenerationRequestBodyPolicyGenerationDetails)
    ], StartPolicyGenerationRequestBody.prototype, "policyGenerationDetails", void 0);
    return StartPolicyGenerationRequestBody;
}(SpeakeasyBase));
export { StartPolicyGenerationRequestBody };
var StartPolicyGenerationRequest = /** @class */ (function (_super) {
    __extends(StartPolicyGenerationRequest, _super);
    function StartPolicyGenerationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartPolicyGenerationHeaders)
    ], StartPolicyGenerationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartPolicyGenerationRequestBody)
    ], StartPolicyGenerationRequest.prototype, "request", void 0);
    return StartPolicyGenerationRequest;
}(SpeakeasyBase));
export { StartPolicyGenerationRequest };
var StartPolicyGenerationResponse = /** @class */ (function (_super) {
    __extends(StartPolicyGenerationResponse, _super);
    function StartPolicyGenerationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartPolicyGenerationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartPolicyGenerationResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartPolicyGenerationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartPolicyGenerationResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartPolicyGenerationResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartPolicyGenerationResponse)
    ], StartPolicyGenerationResponse.prototype, "startPolicyGenerationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartPolicyGenerationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartPolicyGenerationResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartPolicyGenerationResponse.prototype, "validationException", void 0);
    return StartPolicyGenerationResponse;
}(SpeakeasyBase));
export { StartPolicyGenerationResponse };
