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
var ListObjectPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(ListObjectPoliciesQueryParams, _super);
    function ListObjectPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListObjectPoliciesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListObjectPoliciesQueryParams.prototype, "nextToken", void 0);
    return ListObjectPoliciesQueryParams;
}(SpeakeasyBase));
export { ListObjectPoliciesQueryParams };
export var ListObjectPoliciesXAmzConsistencyLevelEnum;
(function (ListObjectPoliciesXAmzConsistencyLevelEnum) {
    ListObjectPoliciesXAmzConsistencyLevelEnum["Serializable"] = "SERIALIZABLE";
    ListObjectPoliciesXAmzConsistencyLevelEnum["Eventual"] = "EVENTUAL";
})(ListObjectPoliciesXAmzConsistencyLevelEnum || (ListObjectPoliciesXAmzConsistencyLevelEnum = {}));
var ListObjectPoliciesHeaders = /** @class */ (function (_super) {
    __extends(ListObjectPoliciesHeaders, _super);
    function ListObjectPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListObjectPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListObjectPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListObjectPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListObjectPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListObjectPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListObjectPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListObjectPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-consistency-level" }),
        __metadata("design:type", String)
    ], ListObjectPoliciesHeaders.prototype, "xAmzConsistencyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], ListObjectPoliciesHeaders.prototype, "xAmzDataPartition", void 0);
    return ListObjectPoliciesHeaders;
}(SpeakeasyBase));
export { ListObjectPoliciesHeaders };
// ListObjectPoliciesRequestBodyObjectReference
/**
 * The reference that identifies an object.
**/
var ListObjectPoliciesRequestBodyObjectReference = /** @class */ (function (_super) {
    __extends(ListObjectPoliciesRequestBodyObjectReference, _super);
    function ListObjectPoliciesRequestBodyObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], ListObjectPoliciesRequestBodyObjectReference.prototype, "selector", void 0);
    return ListObjectPoliciesRequestBodyObjectReference;
}(SpeakeasyBase));
export { ListObjectPoliciesRequestBodyObjectReference };
var ListObjectPoliciesRequestBody = /** @class */ (function (_super) {
    __extends(ListObjectPoliciesRequestBody, _super);
    function ListObjectPoliciesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListObjectPoliciesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListObjectPoliciesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectReference" }),
        __metadata("design:type", ListObjectPoliciesRequestBodyObjectReference)
    ], ListObjectPoliciesRequestBody.prototype, "objectReference", void 0);
    return ListObjectPoliciesRequestBody;
}(SpeakeasyBase));
export { ListObjectPoliciesRequestBody };
var ListObjectPoliciesRequest = /** @class */ (function (_super) {
    __extends(ListObjectPoliciesRequest, _super);
    function ListObjectPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListObjectPoliciesQueryParams)
    ], ListObjectPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListObjectPoliciesHeaders)
    ], ListObjectPoliciesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListObjectPoliciesRequestBody)
    ], ListObjectPoliciesRequest.prototype, "request", void 0);
    return ListObjectPoliciesRequest;
}(SpeakeasyBase));
export { ListObjectPoliciesRequest };
var ListObjectPoliciesResponse = /** @class */ (function (_super) {
    __extends(ListObjectPoliciesResponse, _super);
    function ListObjectPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectPoliciesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListObjectPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectPoliciesResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectPoliciesResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectPoliciesResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectPoliciesResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectPoliciesResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListObjectPoliciesResponse)
    ], ListObjectPoliciesResponse.prototype, "listObjectPoliciesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectPoliciesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectPoliciesResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListObjectPoliciesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectPoliciesResponse.prototype, "validationException", void 0);
    return ListObjectPoliciesResponse;
}(SpeakeasyBase));
export { ListObjectPoliciesResponse };
