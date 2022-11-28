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
var ListIncomingTypedLinksHeaders = /** @class */ (function (_super) {
    __extends(ListIncomingTypedLinksHeaders, _super);
    function ListIncomingTypedLinksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzDataPartition", void 0);
    return ListIncomingTypedLinksHeaders;
}(SpeakeasyBase));
export { ListIncomingTypedLinksHeaders };
export var ListIncomingTypedLinksRequestBodyConsistencyLevelEnum;
(function (ListIncomingTypedLinksRequestBodyConsistencyLevelEnum) {
    ListIncomingTypedLinksRequestBodyConsistencyLevelEnum["Serializable"] = "SERIALIZABLE";
    ListIncomingTypedLinksRequestBodyConsistencyLevelEnum["Eventual"] = "EVENTUAL";
})(ListIncomingTypedLinksRequestBodyConsistencyLevelEnum || (ListIncomingTypedLinksRequestBodyConsistencyLevelEnum = {}));
// ListIncomingTypedLinksRequestBodyFilterTypedLink
/**
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
var ListIncomingTypedLinksRequestBodyFilterTypedLink = /** @class */ (function (_super) {
    __extends(ListIncomingTypedLinksRequestBodyFilterTypedLink, _super);
    function ListIncomingTypedLinksRequestBodyFilterTypedLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemaArn" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksRequestBodyFilterTypedLink.prototype, "schemaArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TypedLinkName" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksRequestBodyFilterTypedLink.prototype, "typedLinkName", void 0);
    return ListIncomingTypedLinksRequestBodyFilterTypedLink;
}(SpeakeasyBase));
export { ListIncomingTypedLinksRequestBodyFilterTypedLink };
// ListIncomingTypedLinksRequestBodyObjectReference
/**
 * The reference that identifies an object.
**/
var ListIncomingTypedLinksRequestBodyObjectReference = /** @class */ (function (_super) {
    __extends(ListIncomingTypedLinksRequestBodyObjectReference, _super);
    function ListIncomingTypedLinksRequestBodyObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksRequestBodyObjectReference.prototype, "selector", void 0);
    return ListIncomingTypedLinksRequestBodyObjectReference;
}(SpeakeasyBase));
export { ListIncomingTypedLinksRequestBodyObjectReference };
var ListIncomingTypedLinksRequestBody = /** @class */ (function (_super) {
    __extends(ListIncomingTypedLinksRequestBody, _super);
    function ListIncomingTypedLinksRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsistencyLevel" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksRequestBody.prototype, "consistencyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FilterAttributeRanges", elemType: shared.TypedLinkAttributeRange }),
        __metadata("design:type", Array)
    ], ListIncomingTypedLinksRequestBody.prototype, "filterAttributeRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FilterTypedLink" }),
        __metadata("design:type", ListIncomingTypedLinksRequestBodyFilterTypedLink)
    ], ListIncomingTypedLinksRequestBody.prototype, "filterTypedLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListIncomingTypedLinksRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectReference" }),
        __metadata("design:type", ListIncomingTypedLinksRequestBodyObjectReference)
    ], ListIncomingTypedLinksRequestBody.prototype, "objectReference", void 0);
    return ListIncomingTypedLinksRequestBody;
}(SpeakeasyBase));
export { ListIncomingTypedLinksRequestBody };
var ListIncomingTypedLinksRequest = /** @class */ (function (_super) {
    __extends(ListIncomingTypedLinksRequest, _super);
    function ListIncomingTypedLinksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIncomingTypedLinksHeaders)
    ], ListIncomingTypedLinksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListIncomingTypedLinksRequestBody)
    ], ListIncomingTypedLinksRequest.prototype, "request", void 0);
    return ListIncomingTypedLinksRequest;
}(SpeakeasyBase));
export { ListIncomingTypedLinksRequest };
var ListIncomingTypedLinksResponse = /** @class */ (function (_super) {
    __extends(ListIncomingTypedLinksResponse, _super);
    function ListIncomingTypedLinksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], ListIncomingTypedLinksResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], ListIncomingTypedLinksResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FacetValidationException)
    ], ListIncomingTypedLinksResponse.prototype, "facetValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], ListIncomingTypedLinksResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], ListIncomingTypedLinksResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidNextTokenException)
    ], ListIncomingTypedLinksResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], ListIncomingTypedLinksResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListIncomingTypedLinksResponse)
    ], ListIncomingTypedLinksResponse.prototype, "listIncomingTypedLinksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], ListIncomingTypedLinksResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], ListIncomingTypedLinksResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListIncomingTypedLinksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], ListIncomingTypedLinksResponse.prototype, "validationException", void 0);
    return ListIncomingTypedLinksResponse;
}(SpeakeasyBase));
export { ListIncomingTypedLinksResponse };
