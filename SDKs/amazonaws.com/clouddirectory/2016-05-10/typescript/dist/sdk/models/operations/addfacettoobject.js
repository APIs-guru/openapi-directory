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
var AddFacetToObjectHeaders = /** @class */ (function (_super) {
    __extends(AddFacetToObjectHeaders, _super);
    function AddFacetToObjectHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AddFacetToObjectHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AddFacetToObjectHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AddFacetToObjectHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AddFacetToObjectHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AddFacetToObjectHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AddFacetToObjectHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AddFacetToObjectHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], AddFacetToObjectHeaders.prototype, "xAmzDataPartition", void 0);
    return AddFacetToObjectHeaders;
}(SpeakeasyBase));
export { AddFacetToObjectHeaders };
// AddFacetToObjectRequestBodyObjectReference
/**
 * The reference that identifies an object.
**/
var AddFacetToObjectRequestBodyObjectReference = /** @class */ (function (_super) {
    __extends(AddFacetToObjectRequestBodyObjectReference, _super);
    function AddFacetToObjectRequestBodyObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], AddFacetToObjectRequestBodyObjectReference.prototype, "selector", void 0);
    return AddFacetToObjectRequestBodyObjectReference;
}(SpeakeasyBase));
export { AddFacetToObjectRequestBodyObjectReference };
// AddFacetToObjectRequestBodySchemaFacet
/**
 * A facet.
**/
var AddFacetToObjectRequestBodySchemaFacet = /** @class */ (function (_super) {
    __extends(AddFacetToObjectRequestBodySchemaFacet, _super);
    function AddFacetToObjectRequestBodySchemaFacet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FacetName" }),
        __metadata("design:type", String)
    ], AddFacetToObjectRequestBodySchemaFacet.prototype, "facetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemaArn" }),
        __metadata("design:type", String)
    ], AddFacetToObjectRequestBodySchemaFacet.prototype, "schemaArn", void 0);
    return AddFacetToObjectRequestBodySchemaFacet;
}(SpeakeasyBase));
export { AddFacetToObjectRequestBodySchemaFacet };
var AddFacetToObjectRequestBody = /** @class */ (function (_super) {
    __extends(AddFacetToObjectRequestBody, _super);
    function AddFacetToObjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectAttributeList", elemType: shared.AttributeKeyAndValue }),
        __metadata("design:type", Array)
    ], AddFacetToObjectRequestBody.prototype, "objectAttributeList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectReference" }),
        __metadata("design:type", AddFacetToObjectRequestBodyObjectReference)
    ], AddFacetToObjectRequestBody.prototype, "objectReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemaFacet" }),
        __metadata("design:type", AddFacetToObjectRequestBodySchemaFacet)
    ], AddFacetToObjectRequestBody.prototype, "schemaFacet", void 0);
    return AddFacetToObjectRequestBody;
}(SpeakeasyBase));
export { AddFacetToObjectRequestBody };
var AddFacetToObjectRequest = /** @class */ (function (_super) {
    __extends(AddFacetToObjectRequest, _super);
    function AddFacetToObjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddFacetToObjectHeaders)
    ], AddFacetToObjectRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddFacetToObjectRequestBody)
    ], AddFacetToObjectRequest.prototype, "request", void 0);
    return AddFacetToObjectRequest;
}(SpeakeasyBase));
export { AddFacetToObjectRequest };
var AddFacetToObjectResponse = /** @class */ (function (_super) {
    __extends(AddFacetToObjectResponse, _super);
    function AddFacetToObjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], AddFacetToObjectResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AddFacetToObjectResponse.prototype, "addFacetToObjectResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddFacetToObjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], AddFacetToObjectResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FacetValidationException)
    ], AddFacetToObjectResponse.prototype, "facetValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], AddFacetToObjectResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], AddFacetToObjectResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], AddFacetToObjectResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], AddFacetToObjectResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], AddFacetToObjectResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddFacetToObjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], AddFacetToObjectResponse.prototype, "validationException", void 0);
    return AddFacetToObjectResponse;
}(SpeakeasyBase));
export { AddFacetToObjectResponse };
