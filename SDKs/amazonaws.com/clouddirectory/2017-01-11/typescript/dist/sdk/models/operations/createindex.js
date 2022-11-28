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
var CreateIndexHeaders = /** @class */ (function (_super) {
    __extends(CreateIndexHeaders, _super);
    function CreateIndexHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateIndexHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateIndexHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateIndexHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateIndexHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateIndexHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateIndexHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateIndexHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], CreateIndexHeaders.prototype, "xAmzDataPartition", void 0);
    return CreateIndexHeaders;
}(SpeakeasyBase));
export { CreateIndexHeaders };
// CreateIndexRequestBodyParentReference
/**
 * The reference that identifies an object.
**/
var CreateIndexRequestBodyParentReference = /** @class */ (function (_super) {
    __extends(CreateIndexRequestBodyParentReference, _super);
    function CreateIndexRequestBodyParentReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], CreateIndexRequestBodyParentReference.prototype, "selector", void 0);
    return CreateIndexRequestBodyParentReference;
}(SpeakeasyBase));
export { CreateIndexRequestBodyParentReference };
var CreateIndexRequestBody = /** @class */ (function (_super) {
    __extends(CreateIndexRequestBody, _super);
    function CreateIndexRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsUnique" }),
        __metadata("design:type", Boolean)
    ], CreateIndexRequestBody.prototype, "isUnique", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LinkName" }),
        __metadata("design:type", String)
    ], CreateIndexRequestBody.prototype, "linkName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderedIndexedAttributeList", elemType: shared.AttributeKey }),
        __metadata("design:type", Array)
    ], CreateIndexRequestBody.prototype, "orderedIndexedAttributeList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentReference" }),
        __metadata("design:type", CreateIndexRequestBodyParentReference)
    ], CreateIndexRequestBody.prototype, "parentReference", void 0);
    return CreateIndexRequestBody;
}(SpeakeasyBase));
export { CreateIndexRequestBody };
var CreateIndexRequest = /** @class */ (function (_super) {
    __extends(CreateIndexRequest, _super);
    function CreateIndexRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateIndexHeaders)
    ], CreateIndexRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateIndexRequestBody)
    ], CreateIndexRequest.prototype, "request", void 0);
    return CreateIndexRequest;
}(SpeakeasyBase));
export { CreateIndexRequest };
var CreateIndexResponse = /** @class */ (function (_super) {
    __extends(CreateIndexResponse, _super);
    function CreateIndexResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIndexResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateIndexResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateIndexResponse)
    ], CreateIndexResponse.prototype, "createIndexResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIndexResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIndexResponse.prototype, "facetValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIndexResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIndexResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIndexResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIndexResponse.prototype, "linkNameAlreadyInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIndexResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIndexResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateIndexResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIndexResponse.prototype, "unsupportedIndexTypeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIndexResponse.prototype, "validationException", void 0);
    return CreateIndexResponse;
}(SpeakeasyBase));
export { CreateIndexResponse };
