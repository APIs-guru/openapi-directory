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
var ListOutgoingTypedLinksHeaders = /** @class */ (function (_super) {
    __extends(ListOutgoingTypedLinksHeaders, _super);
    function ListOutgoingTypedLinksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListOutgoingTypedLinksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListOutgoingTypedLinksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListOutgoingTypedLinksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListOutgoingTypedLinksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListOutgoingTypedLinksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListOutgoingTypedLinksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListOutgoingTypedLinksHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], ListOutgoingTypedLinksHeaders.prototype, "xAmzDataPartition", void 0);
    return ListOutgoingTypedLinksHeaders;
}(SpeakeasyBase));
export { ListOutgoingTypedLinksHeaders };
export var ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum;
(function (ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum) {
    ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum["Serializable"] = "SERIALIZABLE";
    ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum["Eventual"] = "EVENTUAL";
})(ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum || (ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum = {}));
// ListOutgoingTypedLinksRequestBodyFilterTypedLink
/**
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
var ListOutgoingTypedLinksRequestBodyFilterTypedLink = /** @class */ (function (_super) {
    __extends(ListOutgoingTypedLinksRequestBodyFilterTypedLink, _super);
    function ListOutgoingTypedLinksRequestBodyFilterTypedLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemaArn" }),
        __metadata("design:type", String)
    ], ListOutgoingTypedLinksRequestBodyFilterTypedLink.prototype, "schemaArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TypedLinkName" }),
        __metadata("design:type", String)
    ], ListOutgoingTypedLinksRequestBodyFilterTypedLink.prototype, "typedLinkName", void 0);
    return ListOutgoingTypedLinksRequestBodyFilterTypedLink;
}(SpeakeasyBase));
export { ListOutgoingTypedLinksRequestBodyFilterTypedLink };
// ListOutgoingTypedLinksRequestBodyObjectReference
/**
 * The reference that identifies an object.
**/
var ListOutgoingTypedLinksRequestBodyObjectReference = /** @class */ (function (_super) {
    __extends(ListOutgoingTypedLinksRequestBodyObjectReference, _super);
    function ListOutgoingTypedLinksRequestBodyObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], ListOutgoingTypedLinksRequestBodyObjectReference.prototype, "selector", void 0);
    return ListOutgoingTypedLinksRequestBodyObjectReference;
}(SpeakeasyBase));
export { ListOutgoingTypedLinksRequestBodyObjectReference };
var ListOutgoingTypedLinksRequestBody = /** @class */ (function (_super) {
    __extends(ListOutgoingTypedLinksRequestBody, _super);
    function ListOutgoingTypedLinksRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsistencyLevel" }),
        __metadata("design:type", String)
    ], ListOutgoingTypedLinksRequestBody.prototype, "consistencyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FilterAttributeRanges", elemType: shared.TypedLinkAttributeRange }),
        __metadata("design:type", Array)
    ], ListOutgoingTypedLinksRequestBody.prototype, "filterAttributeRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FilterTypedLink" }),
        __metadata("design:type", ListOutgoingTypedLinksRequestBodyFilterTypedLink)
    ], ListOutgoingTypedLinksRequestBody.prototype, "filterTypedLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListOutgoingTypedLinksRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListOutgoingTypedLinksRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectReference" }),
        __metadata("design:type", ListOutgoingTypedLinksRequestBodyObjectReference)
    ], ListOutgoingTypedLinksRequestBody.prototype, "objectReference", void 0);
    return ListOutgoingTypedLinksRequestBody;
}(SpeakeasyBase));
export { ListOutgoingTypedLinksRequestBody };
var ListOutgoingTypedLinksRequest = /** @class */ (function (_super) {
    __extends(ListOutgoingTypedLinksRequest, _super);
    function ListOutgoingTypedLinksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListOutgoingTypedLinksHeaders)
    ], ListOutgoingTypedLinksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListOutgoingTypedLinksRequestBody)
    ], ListOutgoingTypedLinksRequest.prototype, "request", void 0);
    return ListOutgoingTypedLinksRequest;
}(SpeakeasyBase));
export { ListOutgoingTypedLinksRequest };
var ListOutgoingTypedLinksResponse = /** @class */ (function (_super) {
    __extends(ListOutgoingTypedLinksResponse, _super);
    function ListOutgoingTypedLinksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], ListOutgoingTypedLinksResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListOutgoingTypedLinksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], ListOutgoingTypedLinksResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FacetValidationException)
    ], ListOutgoingTypedLinksResponse.prototype, "facetValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], ListOutgoingTypedLinksResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], ListOutgoingTypedLinksResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidNextTokenException)
    ], ListOutgoingTypedLinksResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], ListOutgoingTypedLinksResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListOutgoingTypedLinksResponse)
    ], ListOutgoingTypedLinksResponse.prototype, "listOutgoingTypedLinksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], ListOutgoingTypedLinksResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], ListOutgoingTypedLinksResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListOutgoingTypedLinksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], ListOutgoingTypedLinksResponse.prototype, "validationException", void 0);
    return ListOutgoingTypedLinksResponse;
}(SpeakeasyBase));
export { ListOutgoingTypedLinksResponse };
