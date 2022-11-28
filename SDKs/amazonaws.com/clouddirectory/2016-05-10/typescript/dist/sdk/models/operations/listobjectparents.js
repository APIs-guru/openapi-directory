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
var ListObjectParentsQueryParams = /** @class */ (function (_super) {
    __extends(ListObjectParentsQueryParams, _super);
    function ListObjectParentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListObjectParentsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListObjectParentsQueryParams.prototype, "nextToken", void 0);
    return ListObjectParentsQueryParams;
}(SpeakeasyBase));
export { ListObjectParentsQueryParams };
export var ListObjectParentsXAmzConsistencyLevelEnum;
(function (ListObjectParentsXAmzConsistencyLevelEnum) {
    ListObjectParentsXAmzConsistencyLevelEnum["Serializable"] = "SERIALIZABLE";
    ListObjectParentsXAmzConsistencyLevelEnum["Eventual"] = "EVENTUAL";
})(ListObjectParentsXAmzConsistencyLevelEnum || (ListObjectParentsXAmzConsistencyLevelEnum = {}));
var ListObjectParentsHeaders = /** @class */ (function (_super) {
    __extends(ListObjectParentsHeaders, _super);
    function ListObjectParentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListObjectParentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListObjectParentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListObjectParentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListObjectParentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListObjectParentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListObjectParentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListObjectParentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-consistency-level" }),
        __metadata("design:type", String)
    ], ListObjectParentsHeaders.prototype, "xAmzConsistencyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], ListObjectParentsHeaders.prototype, "xAmzDataPartition", void 0);
    return ListObjectParentsHeaders;
}(SpeakeasyBase));
export { ListObjectParentsHeaders };
// ListObjectParentsRequestBodyObjectReference
/**
 * The reference that identifies an object.
**/
var ListObjectParentsRequestBodyObjectReference = /** @class */ (function (_super) {
    __extends(ListObjectParentsRequestBodyObjectReference, _super);
    function ListObjectParentsRequestBodyObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], ListObjectParentsRequestBodyObjectReference.prototype, "selector", void 0);
    return ListObjectParentsRequestBodyObjectReference;
}(SpeakeasyBase));
export { ListObjectParentsRequestBodyObjectReference };
var ListObjectParentsRequestBody = /** @class */ (function (_super) {
    __extends(ListObjectParentsRequestBody, _super);
    function ListObjectParentsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListObjectParentsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListObjectParentsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectReference" }),
        __metadata("design:type", ListObjectParentsRequestBodyObjectReference)
    ], ListObjectParentsRequestBody.prototype, "objectReference", void 0);
    return ListObjectParentsRequestBody;
}(SpeakeasyBase));
export { ListObjectParentsRequestBody };
var ListObjectParentsRequest = /** @class */ (function (_super) {
    __extends(ListObjectParentsRequest, _super);
    function ListObjectParentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListObjectParentsQueryParams)
    ], ListObjectParentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListObjectParentsHeaders)
    ], ListObjectParentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListObjectParentsRequestBody)
    ], ListObjectParentsRequest.prototype, "request", void 0);
    return ListObjectParentsRequest;
}(SpeakeasyBase));
export { ListObjectParentsRequest };
var ListObjectParentsResponse = /** @class */ (function (_super) {
    __extends(ListObjectParentsResponse, _super);
    function ListObjectParentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], ListObjectParentsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CannotListParentOfRootException)
    ], ListObjectParentsResponse.prototype, "cannotListParentOfRootException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListObjectParentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], ListObjectParentsResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], ListObjectParentsResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], ListObjectParentsResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidNextTokenException)
    ], ListObjectParentsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], ListObjectParentsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListObjectParentsResponse)
    ], ListObjectParentsResponse.prototype, "listObjectParentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], ListObjectParentsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], ListObjectParentsResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListObjectParentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], ListObjectParentsResponse.prototype, "validationException", void 0);
    return ListObjectParentsResponse;
}(SpeakeasyBase));
export { ListObjectParentsResponse };
