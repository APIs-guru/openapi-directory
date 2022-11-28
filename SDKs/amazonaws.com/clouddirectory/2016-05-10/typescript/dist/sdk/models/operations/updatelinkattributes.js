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
var UpdateLinkAttributesHeaders = /** @class */ (function (_super) {
    __extends(UpdateLinkAttributesHeaders, _super);
    function UpdateLinkAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateLinkAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateLinkAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateLinkAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateLinkAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateLinkAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateLinkAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateLinkAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], UpdateLinkAttributesHeaders.prototype, "xAmzDataPartition", void 0);
    return UpdateLinkAttributesHeaders;
}(SpeakeasyBase));
export { UpdateLinkAttributesHeaders };
// UpdateLinkAttributesRequestBodyTypedLinkSpecifier
/**
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
**/
var UpdateLinkAttributesRequestBodyTypedLinkSpecifier = /** @class */ (function (_super) {
    __extends(UpdateLinkAttributesRequestBodyTypedLinkSpecifier, _super);
    function UpdateLinkAttributesRequestBodyTypedLinkSpecifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdentityAttributeValues", elemType: shared.AttributeNameAndValue }),
        __metadata("design:type", Array)
    ], UpdateLinkAttributesRequestBodyTypedLinkSpecifier.prototype, "identityAttributeValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceObjectReference" }),
        __metadata("design:type", shared.ObjectReference)
    ], UpdateLinkAttributesRequestBodyTypedLinkSpecifier.prototype, "sourceObjectReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetObjectReference" }),
        __metadata("design:type", shared.ObjectReference)
    ], UpdateLinkAttributesRequestBodyTypedLinkSpecifier.prototype, "targetObjectReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TypedLinkFacet" }),
        __metadata("design:type", shared.TypedLinkSchemaAndFacetName)
    ], UpdateLinkAttributesRequestBodyTypedLinkSpecifier.prototype, "typedLinkFacet", void 0);
    return UpdateLinkAttributesRequestBodyTypedLinkSpecifier;
}(SpeakeasyBase));
export { UpdateLinkAttributesRequestBodyTypedLinkSpecifier };
var UpdateLinkAttributesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateLinkAttributesRequestBody, _super);
    function UpdateLinkAttributesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttributeUpdates", elemType: shared.LinkAttributeUpdate }),
        __metadata("design:type", Array)
    ], UpdateLinkAttributesRequestBody.prototype, "attributeUpdates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TypedLinkSpecifier" }),
        __metadata("design:type", UpdateLinkAttributesRequestBodyTypedLinkSpecifier)
    ], UpdateLinkAttributesRequestBody.prototype, "typedLinkSpecifier", void 0);
    return UpdateLinkAttributesRequestBody;
}(SpeakeasyBase));
export { UpdateLinkAttributesRequestBody };
var UpdateLinkAttributesRequest = /** @class */ (function (_super) {
    __extends(UpdateLinkAttributesRequest, _super);
    function UpdateLinkAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLinkAttributesHeaders)
    ], UpdateLinkAttributesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateLinkAttributesRequestBody)
    ], UpdateLinkAttributesRequest.prototype, "request", void 0);
    return UpdateLinkAttributesRequest;
}(SpeakeasyBase));
export { UpdateLinkAttributesRequest };
var UpdateLinkAttributesResponse = /** @class */ (function (_super) {
    __extends(UpdateLinkAttributesResponse, _super);
    function UpdateLinkAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], UpdateLinkAttributesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateLinkAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], UpdateLinkAttributesResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FacetValidationException)
    ], UpdateLinkAttributesResponse.prototype, "facetValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], UpdateLinkAttributesResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], UpdateLinkAttributesResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], UpdateLinkAttributesResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], UpdateLinkAttributesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], UpdateLinkAttributesResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateLinkAttributesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateLinkAttributesResponse.prototype, "updateLinkAttributesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], UpdateLinkAttributesResponse.prototype, "validationException", void 0);
    return UpdateLinkAttributesResponse;
}(SpeakeasyBase));
export { UpdateLinkAttributesResponse };
