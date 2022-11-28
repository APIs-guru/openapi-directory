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
var AssociateRepositoryHeaders = /** @class */ (function (_super) {
    __extends(AssociateRepositoryHeaders, _super);
    function AssociateRepositoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AssociateRepositoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AssociateRepositoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AssociateRepositoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AssociateRepositoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AssociateRepositoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AssociateRepositoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AssociateRepositoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AssociateRepositoryHeaders;
}(SpeakeasyBase));
export { AssociateRepositoryHeaders };
// AssociateRepositoryRequestBodyKmsKeyDetails
/**
 * <p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a respository association.</p> </li> </ul>
**/
var AssociateRepositoryRequestBodyKmsKeyDetails = /** @class */ (function (_super) {
    __extends(AssociateRepositoryRequestBodyKmsKeyDetails, _super);
    function AssociateRepositoryRequestBodyKmsKeyDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncryptionOption" }),
        __metadata("design:type", String)
    ], AssociateRepositoryRequestBodyKmsKeyDetails.prototype, "encryptionOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KMSKeyId" }),
        __metadata("design:type", String)
    ], AssociateRepositoryRequestBodyKmsKeyDetails.prototype, "kmsKeyId", void 0);
    return AssociateRepositoryRequestBodyKmsKeyDetails;
}(SpeakeasyBase));
export { AssociateRepositoryRequestBodyKmsKeyDetails };
// AssociateRepositoryRequestBodyRepository
/**
 *  Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository.
**/
var AssociateRepositoryRequestBodyRepository = /** @class */ (function (_super) {
    __extends(AssociateRepositoryRequestBodyRepository, _super);
    function AssociateRepositoryRequestBodyRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Bitbucket" }),
        __metadata("design:type", shared.ThirdPartySourceRepository)
    ], AssociateRepositoryRequestBodyRepository.prototype, "bitbucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodeCommit" }),
        __metadata("design:type", shared.CodeCommitRepository)
    ], AssociateRepositoryRequestBodyRepository.prototype, "codeCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GitHubEnterpriseServer" }),
        __metadata("design:type", shared.ThirdPartySourceRepository)
    ], AssociateRepositoryRequestBodyRepository.prototype, "gitHubEnterpriseServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Bucket" }),
        __metadata("design:type", shared.S3Repository)
    ], AssociateRepositoryRequestBodyRepository.prototype, "s3Bucket", void 0);
    return AssociateRepositoryRequestBodyRepository;
}(SpeakeasyBase));
export { AssociateRepositoryRequestBodyRepository };
var AssociateRepositoryRequestBody = /** @class */ (function (_super) {
    __extends(AssociateRepositoryRequestBody, _super);
    function AssociateRepositoryRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientRequestToken" }),
        __metadata("design:type", String)
    ], AssociateRepositoryRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KMSKeyDetails" }),
        __metadata("design:type", AssociateRepositoryRequestBodyKmsKeyDetails)
    ], AssociateRepositoryRequestBody.prototype, "kmsKeyDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Repository" }),
        __metadata("design:type", AssociateRepositoryRequestBodyRepository)
    ], AssociateRepositoryRequestBody.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], AssociateRepositoryRequestBody.prototype, "tags", void 0);
    return AssociateRepositoryRequestBody;
}(SpeakeasyBase));
export { AssociateRepositoryRequestBody };
var AssociateRepositoryRequest = /** @class */ (function (_super) {
    __extends(AssociateRepositoryRequest, _super);
    function AssociateRepositoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssociateRepositoryHeaders)
    ], AssociateRepositoryRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssociateRepositoryRequestBody)
    ], AssociateRepositoryRequest.prototype, "request", void 0);
    return AssociateRepositoryRequest;
}(SpeakeasyBase));
export { AssociateRepositoryRequest };
var AssociateRepositoryResponse = /** @class */ (function (_super) {
    __extends(AssociateRepositoryResponse, _super);
    function AssociateRepositoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateRepositoryResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssociateRepositoryResponse)
    ], AssociateRepositoryResponse.prototype, "associateRepositoryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateRepositoryResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AssociateRepositoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateRepositoryResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AssociateRepositoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateRepositoryResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateRepositoryResponse.prototype, "validationException", void 0);
    return AssociateRepositoryResponse;
}(SpeakeasyBase));
export { AssociateRepositoryResponse };
