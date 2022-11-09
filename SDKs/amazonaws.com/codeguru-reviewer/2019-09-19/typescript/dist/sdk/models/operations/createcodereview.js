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
var CreateCodeReviewHeaders = /** @class */ (function (_super) {
    __extends(CreateCodeReviewHeaders, _super);
    function CreateCodeReviewHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateCodeReviewHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateCodeReviewHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateCodeReviewHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateCodeReviewHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateCodeReviewHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateCodeReviewHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateCodeReviewHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateCodeReviewHeaders;
}(SpeakeasyBase));
export { CreateCodeReviewHeaders };
// CreateCodeReviewRequestBodyType
/**
 * <p> The type of a code review. There are two code review types: </p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository. </p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>. </p> </li> </ul>
**/
var CreateCodeReviewRequestBodyType = /** @class */ (function (_super) {
    __extends(CreateCodeReviewRequestBodyType, _super);
    function CreateCodeReviewRequestBodyType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AnalysisTypes" }),
        __metadata("design:type", Array)
    ], CreateCodeReviewRequestBodyType.prototype, "analysisTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=RepositoryAnalysis" }),
        __metadata("design:type", shared.RepositoryAnalysis)
    ], CreateCodeReviewRequestBodyType.prototype, "repositoryAnalysis", void 0);
    return CreateCodeReviewRequestBodyType;
}(SpeakeasyBase));
export { CreateCodeReviewRequestBodyType };
var CreateCodeReviewRequestBody = /** @class */ (function (_super) {
    __extends(CreateCodeReviewRequestBody, _super);
    function CreateCodeReviewRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ClientRequestToken" }),
        __metadata("design:type", String)
    ], CreateCodeReviewRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateCodeReviewRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=RepositoryAssociationArn" }),
        __metadata("design:type", String)
    ], CreateCodeReviewRequestBody.prototype, "repositoryAssociationArn", void 0);
    __decorate([
        Metadata({ data: "json, name=Type" }),
        __metadata("design:type", CreateCodeReviewRequestBodyType)
    ], CreateCodeReviewRequestBody.prototype, "type", void 0);
    return CreateCodeReviewRequestBody;
}(SpeakeasyBase));
export { CreateCodeReviewRequestBody };
var CreateCodeReviewRequest = /** @class */ (function (_super) {
    __extends(CreateCodeReviewRequest, _super);
    function CreateCodeReviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateCodeReviewHeaders)
    ], CreateCodeReviewRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCodeReviewRequestBody)
    ], CreateCodeReviewRequest.prototype, "request", void 0);
    return CreateCodeReviewRequest;
}(SpeakeasyBase));
export { CreateCodeReviewRequest };
var CreateCodeReviewResponse = /** @class */ (function (_super) {
    __extends(CreateCodeReviewResponse, _super);
    function CreateCodeReviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateCodeReviewResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateCodeReviewResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateCodeReviewResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateCodeReviewResponse)
    ], CreateCodeReviewResponse.prototype, "createCodeReviewResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateCodeReviewResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateCodeReviewResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateCodeReviewResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateCodeReviewResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateCodeReviewResponse.prototype, "validationException", void 0);
    return CreateCodeReviewResponse;
}(SpeakeasyBase));
export { CreateCodeReviewResponse };
