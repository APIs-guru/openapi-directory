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
var AttachObjectHeaders = /** @class */ (function (_super) {
    __extends(AttachObjectHeaders, _super);
    function AttachObjectHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AttachObjectHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AttachObjectHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AttachObjectHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AttachObjectHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AttachObjectHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AttachObjectHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AttachObjectHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], AttachObjectHeaders.prototype, "xAmzDataPartition", void 0);
    return AttachObjectHeaders;
}(SpeakeasyBase));
export { AttachObjectHeaders };
// AttachObjectRequestBodyChildReference
/**
 * The reference that identifies an object.
**/
var AttachObjectRequestBodyChildReference = /** @class */ (function (_super) {
    __extends(AttachObjectRequestBodyChildReference, _super);
    function AttachObjectRequestBodyChildReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], AttachObjectRequestBodyChildReference.prototype, "selector", void 0);
    return AttachObjectRequestBodyChildReference;
}(SpeakeasyBase));
export { AttachObjectRequestBodyChildReference };
// AttachObjectRequestBodyParentReference
/**
 * The reference that identifies an object.
**/
var AttachObjectRequestBodyParentReference = /** @class */ (function (_super) {
    __extends(AttachObjectRequestBodyParentReference, _super);
    function AttachObjectRequestBodyParentReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], AttachObjectRequestBodyParentReference.prototype, "selector", void 0);
    return AttachObjectRequestBodyParentReference;
}(SpeakeasyBase));
export { AttachObjectRequestBodyParentReference };
var AttachObjectRequestBody = /** @class */ (function (_super) {
    __extends(AttachObjectRequestBody, _super);
    function AttachObjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChildReference" }),
        __metadata("design:type", AttachObjectRequestBodyChildReference)
    ], AttachObjectRequestBody.prototype, "childReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LinkName" }),
        __metadata("design:type", String)
    ], AttachObjectRequestBody.prototype, "linkName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentReference" }),
        __metadata("design:type", AttachObjectRequestBodyParentReference)
    ], AttachObjectRequestBody.prototype, "parentReference", void 0);
    return AttachObjectRequestBody;
}(SpeakeasyBase));
export { AttachObjectRequestBody };
var AttachObjectRequest = /** @class */ (function (_super) {
    __extends(AttachObjectRequest, _super);
    function AttachObjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttachObjectHeaders)
    ], AttachObjectRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AttachObjectRequestBody)
    ], AttachObjectRequest.prototype, "request", void 0);
    return AttachObjectRequest;
}(SpeakeasyBase));
export { AttachObjectRequest };
var AttachObjectResponse = /** @class */ (function (_super) {
    __extends(AttachObjectResponse, _super);
    function AttachObjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], AttachObjectResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AttachObjectResponse)
    ], AttachObjectResponse.prototype, "attachObjectResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AttachObjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], AttachObjectResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FacetValidationException)
    ], AttachObjectResponse.prototype, "facetValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], AttachObjectResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], AttachObjectResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidAttachmentException)
    ], AttachObjectResponse.prototype, "invalidAttachmentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], AttachObjectResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinkNameAlreadyInUseException)
    ], AttachObjectResponse.prototype, "linkNameAlreadyInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], AttachObjectResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], AttachObjectResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AttachObjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], AttachObjectResponse.prototype, "validationException", void 0);
    return AttachObjectResponse;
}(SpeakeasyBase));
export { AttachObjectResponse };
