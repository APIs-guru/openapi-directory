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
var CreateObjectHeaders = /** @class */ (function (_super) {
    __extends(CreateObjectHeaders, _super);
    function CreateObjectHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateObjectHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateObjectHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateObjectHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateObjectHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateObjectHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateObjectHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateObjectHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], CreateObjectHeaders.prototype, "xAmzDataPartition", void 0);
    return CreateObjectHeaders;
}(SpeakeasyBase));
export { CreateObjectHeaders };
// CreateObjectRequestBodyParentReference
/**
 * The reference that identifies an object.
**/
var CreateObjectRequestBodyParentReference = /** @class */ (function (_super) {
    __extends(CreateObjectRequestBodyParentReference, _super);
    function CreateObjectRequestBodyParentReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], CreateObjectRequestBodyParentReference.prototype, "selector", void 0);
    return CreateObjectRequestBodyParentReference;
}(SpeakeasyBase));
export { CreateObjectRequestBodyParentReference };
var CreateObjectRequestBody = /** @class */ (function (_super) {
    __extends(CreateObjectRequestBody, _super);
    function CreateObjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LinkName" }),
        __metadata("design:type", String)
    ], CreateObjectRequestBody.prototype, "linkName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectAttributeList", elemType: shared.AttributeKeyAndValue }),
        __metadata("design:type", Array)
    ], CreateObjectRequestBody.prototype, "objectAttributeList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentReference" }),
        __metadata("design:type", CreateObjectRequestBodyParentReference)
    ], CreateObjectRequestBody.prototype, "parentReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemaFacets", elemType: shared.SchemaFacet }),
        __metadata("design:type", Array)
    ], CreateObjectRequestBody.prototype, "schemaFacets", void 0);
    return CreateObjectRequestBody;
}(SpeakeasyBase));
export { CreateObjectRequestBody };
var CreateObjectRequest = /** @class */ (function (_super) {
    __extends(CreateObjectRequest, _super);
    function CreateObjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateObjectHeaders)
    ], CreateObjectRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateObjectRequestBody)
    ], CreateObjectRequest.prototype, "request", void 0);
    return CreateObjectRequest;
}(SpeakeasyBase));
export { CreateObjectRequest };
var CreateObjectResponse = /** @class */ (function (_super) {
    __extends(CreateObjectResponse, _super);
    function CreateObjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], CreateObjectResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateObjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateObjectResponse)
    ], CreateObjectResponse.prototype, "createObjectResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], CreateObjectResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FacetValidationException)
    ], CreateObjectResponse.prototype, "facetValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], CreateObjectResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], CreateObjectResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], CreateObjectResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinkNameAlreadyInUseException)
    ], CreateObjectResponse.prototype, "linkNameAlreadyInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], CreateObjectResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], CreateObjectResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateObjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnsupportedIndexTypeException)
    ], CreateObjectResponse.prototype, "unsupportedIndexTypeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], CreateObjectResponse.prototype, "validationException", void 0);
    return CreateObjectResponse;
}(SpeakeasyBase));
export { CreateObjectResponse };
