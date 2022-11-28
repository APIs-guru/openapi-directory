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
var ListAttachedIndicesQueryParams = /** @class */ (function (_super) {
    __extends(ListAttachedIndicesQueryParams, _super);
    function ListAttachedIndicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesQueryParams.prototype, "nextToken", void 0);
    return ListAttachedIndicesQueryParams;
}(SpeakeasyBase));
export { ListAttachedIndicesQueryParams };
export var ListAttachedIndicesXAmzConsistencyLevelEnum;
(function (ListAttachedIndicesXAmzConsistencyLevelEnum) {
    ListAttachedIndicesXAmzConsistencyLevelEnum["Serializable"] = "SERIALIZABLE";
    ListAttachedIndicesXAmzConsistencyLevelEnum["Eventual"] = "EVENTUAL";
})(ListAttachedIndicesXAmzConsistencyLevelEnum || (ListAttachedIndicesXAmzConsistencyLevelEnum = {}));
var ListAttachedIndicesHeaders = /** @class */ (function (_super) {
    __extends(ListAttachedIndicesHeaders, _super);
    function ListAttachedIndicesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-consistency-level" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzConsistencyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzDataPartition", void 0);
    return ListAttachedIndicesHeaders;
}(SpeakeasyBase));
export { ListAttachedIndicesHeaders };
// ListAttachedIndicesRequestBodyTargetReference
/**
 * The reference that identifies an object.
**/
var ListAttachedIndicesRequestBodyTargetReference = /** @class */ (function (_super) {
    __extends(ListAttachedIndicesRequestBodyTargetReference, _super);
    function ListAttachedIndicesRequestBodyTargetReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesRequestBodyTargetReference.prototype, "selector", void 0);
    return ListAttachedIndicesRequestBodyTargetReference;
}(SpeakeasyBase));
export { ListAttachedIndicesRequestBodyTargetReference };
var ListAttachedIndicesRequestBody = /** @class */ (function (_super) {
    __extends(ListAttachedIndicesRequestBody, _super);
    function ListAttachedIndicesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListAttachedIndicesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetReference" }),
        __metadata("design:type", ListAttachedIndicesRequestBodyTargetReference)
    ], ListAttachedIndicesRequestBody.prototype, "targetReference", void 0);
    return ListAttachedIndicesRequestBody;
}(SpeakeasyBase));
export { ListAttachedIndicesRequestBody };
var ListAttachedIndicesRequest = /** @class */ (function (_super) {
    __extends(ListAttachedIndicesRequest, _super);
    function ListAttachedIndicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAttachedIndicesQueryParams)
    ], ListAttachedIndicesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAttachedIndicesHeaders)
    ], ListAttachedIndicesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListAttachedIndicesRequestBody)
    ], ListAttachedIndicesRequest.prototype, "request", void 0);
    return ListAttachedIndicesRequest;
}(SpeakeasyBase));
export { ListAttachedIndicesRequest };
var ListAttachedIndicesResponse = /** @class */ (function (_super) {
    __extends(ListAttachedIndicesResponse, _super);
    function ListAttachedIndicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], ListAttachedIndicesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAttachedIndicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], ListAttachedIndicesResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], ListAttachedIndicesResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], ListAttachedIndicesResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], ListAttachedIndicesResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAttachedIndicesResponse)
    ], ListAttachedIndicesResponse.prototype, "listAttachedIndicesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], ListAttachedIndicesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], ListAttachedIndicesResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAttachedIndicesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], ListAttachedIndicesResponse.prototype, "validationException", void 0);
    return ListAttachedIndicesResponse;
}(SpeakeasyBase));
export { ListAttachedIndicesResponse };
