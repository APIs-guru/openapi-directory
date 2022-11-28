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
var UpdateAssessmentPathParams = /** @class */ (function (_super) {
    __extends(UpdateAssessmentPathParams, _super);
    function UpdateAssessmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], UpdateAssessmentPathParams.prototype, "assessmentId", void 0);
    return UpdateAssessmentPathParams;
}(SpeakeasyBase));
export { UpdateAssessmentPathParams };
var UpdateAssessmentHeaders = /** @class */ (function (_super) {
    __extends(UpdateAssessmentHeaders, _super);
    function UpdateAssessmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAssessmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAssessmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAssessmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAssessmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAssessmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAssessmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAssessmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAssessmentHeaders;
}(SpeakeasyBase));
export { UpdateAssessmentHeaders };
// UpdateAssessmentRequestBodyAssessmentReportsDestination
/**
 *  The location in which Audit Manager saves assessment reports for the given assessment.
**/
var UpdateAssessmentRequestBodyAssessmentReportsDestination = /** @class */ (function (_super) {
    __extends(UpdateAssessmentRequestBodyAssessmentReportsDestination, _super);
    function UpdateAssessmentRequestBodyAssessmentReportsDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], UpdateAssessmentRequestBodyAssessmentReportsDestination.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationType" }),
        __metadata("design:type", String)
    ], UpdateAssessmentRequestBodyAssessmentReportsDestination.prototype, "destinationType", void 0);
    return UpdateAssessmentRequestBodyAssessmentReportsDestination;
}(SpeakeasyBase));
export { UpdateAssessmentRequestBodyAssessmentReportsDestination };
// UpdateAssessmentRequestBodyScope
/**
 *  The wrapper that contains the accounts and services in scope for the assessment.
**/
var UpdateAssessmentRequestBodyScope = /** @class */ (function (_super) {
    __extends(UpdateAssessmentRequestBodyScope, _super);
    function UpdateAssessmentRequestBodyScope() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsAccounts", elemType: shared.AwsAccount }),
        __metadata("design:type", Array)
    ], UpdateAssessmentRequestBodyScope.prototype, "awsAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsServices", elemType: shared.AwsService }),
        __metadata("design:type", Array)
    ], UpdateAssessmentRequestBodyScope.prototype, "awsServices", void 0);
    return UpdateAssessmentRequestBodyScope;
}(SpeakeasyBase));
export { UpdateAssessmentRequestBodyScope };
var UpdateAssessmentRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAssessmentRequestBody, _super);
    function UpdateAssessmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assessmentDescription" }),
        __metadata("design:type", String)
    ], UpdateAssessmentRequestBody.prototype, "assessmentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assessmentName" }),
        __metadata("design:type", String)
    ], UpdateAssessmentRequestBody.prototype, "assessmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assessmentReportsDestination" }),
        __metadata("design:type", UpdateAssessmentRequestBodyAssessmentReportsDestination)
    ], UpdateAssessmentRequestBody.prototype, "assessmentReportsDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles", elemType: shared.Role }),
        __metadata("design:type", Array)
    ], UpdateAssessmentRequestBody.prototype, "roles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", UpdateAssessmentRequestBodyScope)
    ], UpdateAssessmentRequestBody.prototype, "scope", void 0);
    return UpdateAssessmentRequestBody;
}(SpeakeasyBase));
export { UpdateAssessmentRequestBody };
var UpdateAssessmentRequest = /** @class */ (function (_super) {
    __extends(UpdateAssessmentRequest, _super);
    function UpdateAssessmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAssessmentPathParams)
    ], UpdateAssessmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAssessmentHeaders)
    ], UpdateAssessmentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAssessmentRequestBody)
    ], UpdateAssessmentRequest.prototype, "request", void 0);
    return UpdateAssessmentRequest;
}(SpeakeasyBase));
export { UpdateAssessmentRequest };
var UpdateAssessmentResponse = /** @class */ (function (_super) {
    __extends(UpdateAssessmentResponse, _super);
    function UpdateAssessmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAssessmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAssessmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateAssessmentResponse)
    ], UpdateAssessmentResponse.prototype, "updateAssessmentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentResponse.prototype, "validationException", void 0);
    return UpdateAssessmentResponse;
}(SpeakeasyBase));
export { UpdateAssessmentResponse };
