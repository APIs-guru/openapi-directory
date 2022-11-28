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
export var GetObjectAttributesXAmzConsistencyLevelEnum;
(function (GetObjectAttributesXAmzConsistencyLevelEnum) {
    GetObjectAttributesXAmzConsistencyLevelEnum["Serializable"] = "SERIALIZABLE";
    GetObjectAttributesXAmzConsistencyLevelEnum["Eventual"] = "EVENTUAL";
})(GetObjectAttributesXAmzConsistencyLevelEnum || (GetObjectAttributesXAmzConsistencyLevelEnum = {}));
var GetObjectAttributesHeaders = /** @class */ (function (_super) {
    __extends(GetObjectAttributesHeaders, _super);
    function GetObjectAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetObjectAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetObjectAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetObjectAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetObjectAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetObjectAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetObjectAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetObjectAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-consistency-level" }),
        __metadata("design:type", String)
    ], GetObjectAttributesHeaders.prototype, "xAmzConsistencyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], GetObjectAttributesHeaders.prototype, "xAmzDataPartition", void 0);
    return GetObjectAttributesHeaders;
}(SpeakeasyBase));
export { GetObjectAttributesHeaders };
// GetObjectAttributesRequestBodyObjectReference
/**
 * The reference that identifies an object.
**/
var GetObjectAttributesRequestBodyObjectReference = /** @class */ (function (_super) {
    __extends(GetObjectAttributesRequestBodyObjectReference, _super);
    function GetObjectAttributesRequestBodyObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], GetObjectAttributesRequestBodyObjectReference.prototype, "selector", void 0);
    return GetObjectAttributesRequestBodyObjectReference;
}(SpeakeasyBase));
export { GetObjectAttributesRequestBodyObjectReference };
// GetObjectAttributesRequestBodySchemaFacet
/**
 * A facet.
**/
var GetObjectAttributesRequestBodySchemaFacet = /** @class */ (function (_super) {
    __extends(GetObjectAttributesRequestBodySchemaFacet, _super);
    function GetObjectAttributesRequestBodySchemaFacet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FacetName" }),
        __metadata("design:type", String)
    ], GetObjectAttributesRequestBodySchemaFacet.prototype, "facetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemaArn" }),
        __metadata("design:type", String)
    ], GetObjectAttributesRequestBodySchemaFacet.prototype, "schemaArn", void 0);
    return GetObjectAttributesRequestBodySchemaFacet;
}(SpeakeasyBase));
export { GetObjectAttributesRequestBodySchemaFacet };
var GetObjectAttributesRequestBody = /** @class */ (function (_super) {
    __extends(GetObjectAttributesRequestBody, _super);
    function GetObjectAttributesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttributeNames" }),
        __metadata("design:type", Array)
    ], GetObjectAttributesRequestBody.prototype, "attributeNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectReference" }),
        __metadata("design:type", GetObjectAttributesRequestBodyObjectReference)
    ], GetObjectAttributesRequestBody.prototype, "objectReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemaFacet" }),
        __metadata("design:type", GetObjectAttributesRequestBodySchemaFacet)
    ], GetObjectAttributesRequestBody.prototype, "schemaFacet", void 0);
    return GetObjectAttributesRequestBody;
}(SpeakeasyBase));
export { GetObjectAttributesRequestBody };
var GetObjectAttributesRequest = /** @class */ (function (_super) {
    __extends(GetObjectAttributesRequest, _super);
    function GetObjectAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectAttributesHeaders)
    ], GetObjectAttributesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetObjectAttributesRequestBody)
    ], GetObjectAttributesRequest.prototype, "request", void 0);
    return GetObjectAttributesRequest;
}(SpeakeasyBase));
export { GetObjectAttributesRequest };
var GetObjectAttributesResponse = /** @class */ (function (_super) {
    __extends(GetObjectAttributesResponse, _super);
    function GetObjectAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], GetObjectAttributesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], GetObjectAttributesResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FacetValidationException)
    ], GetObjectAttributesResponse.prototype, "facetValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetObjectAttributesResponse)
    ], GetObjectAttributesResponse.prototype, "getObjectAttributesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], GetObjectAttributesResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], GetObjectAttributesResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], GetObjectAttributesResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], GetObjectAttributesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], GetObjectAttributesResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetObjectAttributesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], GetObjectAttributesResponse.prototype, "validationException", void 0);
    return GetObjectAttributesResponse;
}(SpeakeasyBase));
export { GetObjectAttributesResponse };
