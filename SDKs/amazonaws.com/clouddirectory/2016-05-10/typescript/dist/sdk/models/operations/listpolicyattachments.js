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
var ListPolicyAttachmentsQueryParams = /** @class */ (function (_super) {
    __extends(ListPolicyAttachmentsQueryParams, _super);
    function ListPolicyAttachmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListPolicyAttachmentsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListPolicyAttachmentsQueryParams.prototype, "nextToken", void 0);
    return ListPolicyAttachmentsQueryParams;
}(SpeakeasyBase));
export { ListPolicyAttachmentsQueryParams };
export var ListPolicyAttachmentsXAmzConsistencyLevelEnum;
(function (ListPolicyAttachmentsXAmzConsistencyLevelEnum) {
    ListPolicyAttachmentsXAmzConsistencyLevelEnum["Serializable"] = "SERIALIZABLE";
    ListPolicyAttachmentsXAmzConsistencyLevelEnum["Eventual"] = "EVENTUAL";
})(ListPolicyAttachmentsXAmzConsistencyLevelEnum || (ListPolicyAttachmentsXAmzConsistencyLevelEnum = {}));
var ListPolicyAttachmentsHeaders = /** @class */ (function (_super) {
    __extends(ListPolicyAttachmentsHeaders, _super);
    function ListPolicyAttachmentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListPolicyAttachmentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListPolicyAttachmentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListPolicyAttachmentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListPolicyAttachmentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListPolicyAttachmentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListPolicyAttachmentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListPolicyAttachmentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-consistency-level" }),
        __metadata("design:type", String)
    ], ListPolicyAttachmentsHeaders.prototype, "xAmzConsistencyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], ListPolicyAttachmentsHeaders.prototype, "xAmzDataPartition", void 0);
    return ListPolicyAttachmentsHeaders;
}(SpeakeasyBase));
export { ListPolicyAttachmentsHeaders };
// ListPolicyAttachmentsRequestBodyPolicyReference
/**
 * The reference that identifies an object.
**/
var ListPolicyAttachmentsRequestBodyPolicyReference = /** @class */ (function (_super) {
    __extends(ListPolicyAttachmentsRequestBodyPolicyReference, _super);
    function ListPolicyAttachmentsRequestBodyPolicyReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], ListPolicyAttachmentsRequestBodyPolicyReference.prototype, "selector", void 0);
    return ListPolicyAttachmentsRequestBodyPolicyReference;
}(SpeakeasyBase));
export { ListPolicyAttachmentsRequestBodyPolicyReference };
var ListPolicyAttachmentsRequestBody = /** @class */ (function (_super) {
    __extends(ListPolicyAttachmentsRequestBody, _super);
    function ListPolicyAttachmentsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListPolicyAttachmentsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListPolicyAttachmentsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyReference" }),
        __metadata("design:type", ListPolicyAttachmentsRequestBodyPolicyReference)
    ], ListPolicyAttachmentsRequestBody.prototype, "policyReference", void 0);
    return ListPolicyAttachmentsRequestBody;
}(SpeakeasyBase));
export { ListPolicyAttachmentsRequestBody };
var ListPolicyAttachmentsRequest = /** @class */ (function (_super) {
    __extends(ListPolicyAttachmentsRequest, _super);
    function ListPolicyAttachmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPolicyAttachmentsQueryParams)
    ], ListPolicyAttachmentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPolicyAttachmentsHeaders)
    ], ListPolicyAttachmentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListPolicyAttachmentsRequestBody)
    ], ListPolicyAttachmentsRequest.prototype, "request", void 0);
    return ListPolicyAttachmentsRequest;
}(SpeakeasyBase));
export { ListPolicyAttachmentsRequest };
var ListPolicyAttachmentsResponse = /** @class */ (function (_super) {
    __extends(ListPolicyAttachmentsResponse, _super);
    function ListPolicyAttachmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], ListPolicyAttachmentsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPolicyAttachmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], ListPolicyAttachmentsResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], ListPolicyAttachmentsResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], ListPolicyAttachmentsResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidNextTokenException)
    ], ListPolicyAttachmentsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], ListPolicyAttachmentsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPolicyAttachmentsResponse)
    ], ListPolicyAttachmentsResponse.prototype, "listPolicyAttachmentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotPolicyException)
    ], ListPolicyAttachmentsResponse.prototype, "notPolicyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], ListPolicyAttachmentsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], ListPolicyAttachmentsResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListPolicyAttachmentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], ListPolicyAttachmentsResponse.prototype, "validationException", void 0);
    return ListPolicyAttachmentsResponse;
}(SpeakeasyBase));
export { ListPolicyAttachmentsResponse };
