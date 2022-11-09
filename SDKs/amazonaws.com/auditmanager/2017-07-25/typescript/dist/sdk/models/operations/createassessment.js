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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CreateAssessmentHeaders = /** @class */ (function (_super) {
    __extends(CreateAssessmentHeaders, _super);
    function CreateAssessmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateAssessmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateAssessmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateAssessmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateAssessmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateAssessmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateAssessmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateAssessmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateAssessmentHeaders;
}(SpeakeasyBase));
export { CreateAssessmentHeaders };
// CreateAssessmentRequestBodyAssessmentReportsDestination
/**
 *  The location in which Audit Manager saves assessment reports for the given assessment.
**/
var CreateAssessmentRequestBodyAssessmentReportsDestination = /** @class */ (function (_super) {
    __extends(CreateAssessmentRequestBodyAssessmentReportsDestination, _super);
    function CreateAssessmentRequestBodyAssessmentReportsDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], CreateAssessmentRequestBodyAssessmentReportsDestination.prototype, "destination", void 0);
    __decorate([
        Metadata({ data: "json, name=destinationType" }),
        __metadata("design:type", String)
    ], CreateAssessmentRequestBodyAssessmentReportsDestination.prototype, "destinationType", void 0);
    return CreateAssessmentRequestBodyAssessmentReportsDestination;
}(SpeakeasyBase));
export { CreateAssessmentRequestBodyAssessmentReportsDestination };
// CreateAssessmentRequestBodyScope
/**
 *  The wrapper that contains the accounts and services in scope for the assessment.
**/
var CreateAssessmentRequestBodyScope = /** @class */ (function (_super) {
    __extends(CreateAssessmentRequestBodyScope, _super);
    function CreateAssessmentRequestBodyScope() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=awsAccounts", elemType: shared.AwsAccount }),
        __metadata("design:type", Array)
    ], CreateAssessmentRequestBodyScope.prototype, "awsAccounts", void 0);
    __decorate([
        Metadata({ data: "json, name=awsServices", elemType: shared.AwsService }),
        __metadata("design:type", Array)
    ], CreateAssessmentRequestBodyScope.prototype, "awsServices", void 0);
    return CreateAssessmentRequestBodyScope;
}(SpeakeasyBase));
export { CreateAssessmentRequestBodyScope };
var CreateAssessmentRequestBody = /** @class */ (function (_super) {
    __extends(CreateAssessmentRequestBody, _super);
    function CreateAssessmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=assessmentReportsDestination" }),
        __metadata("design:type", CreateAssessmentRequestBodyAssessmentReportsDestination)
    ], CreateAssessmentRequestBody.prototype, "assessmentReportsDestination", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateAssessmentRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=frameworkId" }),
        __metadata("design:type", String)
    ], CreateAssessmentRequestBody.prototype, "frameworkId", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateAssessmentRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=roles", elemType: shared.Role }),
        __metadata("design:type", Array)
    ], CreateAssessmentRequestBody.prototype, "roles", void 0);
    __decorate([
        Metadata({ data: "json, name=scope" }),
        __metadata("design:type", CreateAssessmentRequestBodyScope)
    ], CreateAssessmentRequestBody.prototype, "scope", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateAssessmentRequestBody.prototype, "tags", void 0);
    return CreateAssessmentRequestBody;
}(SpeakeasyBase));
export { CreateAssessmentRequestBody };
var CreateAssessmentRequest = /** @class */ (function (_super) {
    __extends(CreateAssessmentRequest, _super);
    function CreateAssessmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateAssessmentHeaders)
    ], CreateAssessmentRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAssessmentRequestBody)
    ], CreateAssessmentRequest.prototype, "request", void 0);
    return CreateAssessmentRequest;
}(SpeakeasyBase));
export { CreateAssessmentRequest };
var CreateAssessmentResponse = /** @class */ (function (_super) {
    __extends(CreateAssessmentResponse, _super);
    function CreateAssessmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssessmentResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateAssessmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateAssessmentResponse)
    ], CreateAssessmentResponse.prototype, "createAssessmentResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssessmentResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssessmentResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateAssessmentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssessmentResponse.prototype, "validationException", void 0);
    return CreateAssessmentResponse;
}(SpeakeasyBase));
export { CreateAssessmentResponse };
