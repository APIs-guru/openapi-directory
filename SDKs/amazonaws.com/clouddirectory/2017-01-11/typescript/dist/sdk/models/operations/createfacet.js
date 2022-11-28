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
var CreateFacetHeaders = /** @class */ (function (_super) {
    __extends(CreateFacetHeaders, _super);
    function CreateFacetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateFacetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateFacetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateFacetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateFacetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateFacetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateFacetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateFacetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], CreateFacetHeaders.prototype, "xAmzDataPartition", void 0);
    return CreateFacetHeaders;
}(SpeakeasyBase));
export { CreateFacetHeaders };
export var CreateFacetRequestBodyFacetStyleEnum;
(function (CreateFacetRequestBodyFacetStyleEnum) {
    CreateFacetRequestBodyFacetStyleEnum["Static"] = "STATIC";
    CreateFacetRequestBodyFacetStyleEnum["Dynamic"] = "DYNAMIC";
})(CreateFacetRequestBodyFacetStyleEnum || (CreateFacetRequestBodyFacetStyleEnum = {}));
export var CreateFacetRequestBodyObjectTypeEnum;
(function (CreateFacetRequestBodyObjectTypeEnum) {
    CreateFacetRequestBodyObjectTypeEnum["Node"] = "NODE";
    CreateFacetRequestBodyObjectTypeEnum["LeafNode"] = "LEAF_NODE";
    CreateFacetRequestBodyObjectTypeEnum["Policy"] = "POLICY";
    CreateFacetRequestBodyObjectTypeEnum["Index"] = "INDEX";
})(CreateFacetRequestBodyObjectTypeEnum || (CreateFacetRequestBodyObjectTypeEnum = {}));
var CreateFacetRequestBody = /** @class */ (function (_super) {
    __extends(CreateFacetRequestBody, _super);
    function CreateFacetRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes", elemType: shared.FacetAttribute }),
        __metadata("design:type", Array)
    ], CreateFacetRequestBody.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FacetStyle" }),
        __metadata("design:type", String)
    ], CreateFacetRequestBody.prototype, "facetStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateFacetRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectType" }),
        __metadata("design:type", String)
    ], CreateFacetRequestBody.prototype, "objectType", void 0);
    return CreateFacetRequestBody;
}(SpeakeasyBase));
export { CreateFacetRequestBody };
var CreateFacetRequest = /** @class */ (function (_super) {
    __extends(CreateFacetRequest, _super);
    function CreateFacetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFacetHeaders)
    ], CreateFacetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateFacetRequestBody)
    ], CreateFacetRequest.prototype, "request", void 0);
    return CreateFacetRequest;
}(SpeakeasyBase));
export { CreateFacetRequest };
var CreateFacetResponse = /** @class */ (function (_super) {
    __extends(CreateFacetResponse, _super);
    function CreateFacetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFacetResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFacetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateFacetResponse.prototype, "createFacetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFacetResponse.prototype, "facetAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFacetResponse.prototype, "facetValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFacetResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFacetResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFacetResponse.prototype, "invalidRuleException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFacetResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFacetResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFacetResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFacetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFacetResponse.prototype, "validationException", void 0);
    return CreateFacetResponse;
}(SpeakeasyBase));
export { CreateFacetResponse };
