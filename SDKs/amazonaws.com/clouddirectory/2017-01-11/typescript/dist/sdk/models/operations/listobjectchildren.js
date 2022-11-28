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
var ListObjectChildrenQueryParams = /** @class */ (function (_super) {
    __extends(ListObjectChildrenQueryParams, _super);
    function ListObjectChildrenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListObjectChildrenQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListObjectChildrenQueryParams.prototype, "nextToken", void 0);
    return ListObjectChildrenQueryParams;
}(SpeakeasyBase));
export { ListObjectChildrenQueryParams };
export var ListObjectChildrenXAmzConsistencyLevelEnum;
(function (ListObjectChildrenXAmzConsistencyLevelEnum) {
    ListObjectChildrenXAmzConsistencyLevelEnum["Serializable"] = "SERIALIZABLE";
    ListObjectChildrenXAmzConsistencyLevelEnum["Eventual"] = "EVENTUAL";
})(ListObjectChildrenXAmzConsistencyLevelEnum || (ListObjectChildrenXAmzConsistencyLevelEnum = {}));
var ListObjectChildrenHeaders = /** @class */ (function (_super) {
    __extends(ListObjectChildrenHeaders, _super);
    function ListObjectChildrenHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListObjectChildrenHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListObjectChildrenHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListObjectChildrenHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListObjectChildrenHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListObjectChildrenHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListObjectChildrenHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListObjectChildrenHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-consistency-level" }),
        __metadata("design:type", String)
    ], ListObjectChildrenHeaders.prototype, "xAmzConsistencyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], ListObjectChildrenHeaders.prototype, "xAmzDataPartition", void 0);
    return ListObjectChildrenHeaders;
}(SpeakeasyBase));
export { ListObjectChildrenHeaders };
// ListObjectChildrenRequestBodyObjectReference
/**
 * The reference that identifies an object.
**/
var ListObjectChildrenRequestBodyObjectReference = /** @class */ (function (_super) {
    __extends(ListObjectChildrenRequestBodyObjectReference, _super);
    function ListObjectChildrenRequestBodyObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], ListObjectChildrenRequestBodyObjectReference.prototype, "selector", void 0);
    return ListObjectChildrenRequestBodyObjectReference;
}(SpeakeasyBase));
export { ListObjectChildrenRequestBodyObjectReference };
var ListObjectChildrenRequestBody = /** @class */ (function (_super) {
    __extends(ListObjectChildrenRequestBody, _super);
    function ListObjectChildrenRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListObjectChildrenRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListObjectChildrenRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectReference" }),
        __metadata("design:type", ListObjectChildrenRequestBodyObjectReference)
    ], ListObjectChildrenRequestBody.prototype, "objectReference", void 0);
    return ListObjectChildrenRequestBody;
}(SpeakeasyBase));
export { ListObjectChildrenRequestBody };
var ListObjectChildrenRequest = /** @class */ (function (_super) {
    __extends(ListObjectChildrenRequest, _super);
    function ListObjectChildrenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListObjectChildrenQueryParams)
    ], ListObjectChildrenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListObjectChildrenHeaders)
    ], ListObjectChildrenRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListObjectChildrenRequestBody)
    ], ListObjectChildrenRequest.prototype, "request", void 0);
    return ListObjectChildrenRequest;
}(SpeakeasyBase));
export { ListObjectChildrenRequest };
var ListObjectChildrenResponse = /** @class */ (function (_super) {
    __extends(ListObjectChildrenResponse, _super);
    function ListObjectChildrenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectChildrenResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListObjectChildrenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectChildrenResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectChildrenResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectChildrenResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectChildrenResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectChildrenResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListObjectChildrenResponse)
    ], ListObjectChildrenResponse.prototype, "listObjectChildrenResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectChildrenResponse.prototype, "notNodeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectChildrenResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectChildrenResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListObjectChildrenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListObjectChildrenResponse.prototype, "validationException", void 0);
    return ListObjectChildrenResponse;
}(SpeakeasyBase));
export { ListObjectChildrenResponse };
