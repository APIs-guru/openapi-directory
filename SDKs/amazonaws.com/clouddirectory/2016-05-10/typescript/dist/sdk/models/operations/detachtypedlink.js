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
var DetachTypedLinkHeaders = /** @class */ (function (_super) {
    __extends(DetachTypedLinkHeaders, _super);
    function DetachTypedLinkHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DetachTypedLinkHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DetachTypedLinkHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DetachTypedLinkHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DetachTypedLinkHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DetachTypedLinkHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DetachTypedLinkHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DetachTypedLinkHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], DetachTypedLinkHeaders.prototype, "xAmzDataPartition", void 0);
    return DetachTypedLinkHeaders;
}(SpeakeasyBase));
export { DetachTypedLinkHeaders };
// DetachTypedLinkRequestBodyTypedLinkSpecifier
/**
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
**/
var DetachTypedLinkRequestBodyTypedLinkSpecifier = /** @class */ (function (_super) {
    __extends(DetachTypedLinkRequestBodyTypedLinkSpecifier, _super);
    function DetachTypedLinkRequestBodyTypedLinkSpecifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdentityAttributeValues", elemType: shared.AttributeNameAndValue }),
        __metadata("design:type", Array)
    ], DetachTypedLinkRequestBodyTypedLinkSpecifier.prototype, "identityAttributeValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceObjectReference" }),
        __metadata("design:type", shared.ObjectReference)
    ], DetachTypedLinkRequestBodyTypedLinkSpecifier.prototype, "sourceObjectReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetObjectReference" }),
        __metadata("design:type", shared.ObjectReference)
    ], DetachTypedLinkRequestBodyTypedLinkSpecifier.prototype, "targetObjectReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TypedLinkFacet" }),
        __metadata("design:type", shared.TypedLinkSchemaAndFacetName)
    ], DetachTypedLinkRequestBodyTypedLinkSpecifier.prototype, "typedLinkFacet", void 0);
    return DetachTypedLinkRequestBodyTypedLinkSpecifier;
}(SpeakeasyBase));
export { DetachTypedLinkRequestBodyTypedLinkSpecifier };
var DetachTypedLinkRequestBody = /** @class */ (function (_super) {
    __extends(DetachTypedLinkRequestBody, _super);
    function DetachTypedLinkRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TypedLinkSpecifier" }),
        __metadata("design:type", DetachTypedLinkRequestBodyTypedLinkSpecifier)
    ], DetachTypedLinkRequestBody.prototype, "typedLinkSpecifier", void 0);
    return DetachTypedLinkRequestBody;
}(SpeakeasyBase));
export { DetachTypedLinkRequestBody };
var DetachTypedLinkRequest = /** @class */ (function (_super) {
    __extends(DetachTypedLinkRequest, _super);
    function DetachTypedLinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DetachTypedLinkHeaders)
    ], DetachTypedLinkRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DetachTypedLinkRequestBody)
    ], DetachTypedLinkRequest.prototype, "request", void 0);
    return DetachTypedLinkRequest;
}(SpeakeasyBase));
export { DetachTypedLinkRequest };
var DetachTypedLinkResponse = /** @class */ (function (_super) {
    __extends(DetachTypedLinkResponse, _super);
    function DetachTypedLinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], DetachTypedLinkResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DetachTypedLinkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], DetachTypedLinkResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FacetValidationException)
    ], DetachTypedLinkResponse.prototype, "facetValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], DetachTypedLinkResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], DetachTypedLinkResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], DetachTypedLinkResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], DetachTypedLinkResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], DetachTypedLinkResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DetachTypedLinkResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], DetachTypedLinkResponse.prototype, "validationException", void 0);
    return DetachTypedLinkResponse;
}(SpeakeasyBase));
export { DetachTypedLinkResponse };
