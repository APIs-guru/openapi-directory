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
var UpdateObjectAttributesHeaders = /** @class */ (function (_super) {
    __extends(UpdateObjectAttributesHeaders, _super);
    function UpdateObjectAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateObjectAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateObjectAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateObjectAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateObjectAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateObjectAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateObjectAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateObjectAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], UpdateObjectAttributesHeaders.prototype, "xAmzDataPartition", void 0);
    return UpdateObjectAttributesHeaders;
}(SpeakeasyBase));
export { UpdateObjectAttributesHeaders };
// UpdateObjectAttributesRequestBodyObjectReference
/**
 * The reference that identifies an object.
**/
var UpdateObjectAttributesRequestBodyObjectReference = /** @class */ (function (_super) {
    __extends(UpdateObjectAttributesRequestBodyObjectReference, _super);
    function UpdateObjectAttributesRequestBodyObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], UpdateObjectAttributesRequestBodyObjectReference.prototype, "selector", void 0);
    return UpdateObjectAttributesRequestBodyObjectReference;
}(SpeakeasyBase));
export { UpdateObjectAttributesRequestBodyObjectReference };
var UpdateObjectAttributesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateObjectAttributesRequestBody, _super);
    function UpdateObjectAttributesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttributeUpdates", elemType: shared.ObjectAttributeUpdate }),
        __metadata("design:type", Array)
    ], UpdateObjectAttributesRequestBody.prototype, "attributeUpdates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectReference" }),
        __metadata("design:type", UpdateObjectAttributesRequestBodyObjectReference)
    ], UpdateObjectAttributesRequestBody.prototype, "objectReference", void 0);
    return UpdateObjectAttributesRequestBody;
}(SpeakeasyBase));
export { UpdateObjectAttributesRequestBody };
var UpdateObjectAttributesRequest = /** @class */ (function (_super) {
    __extends(UpdateObjectAttributesRequest, _super);
    function UpdateObjectAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateObjectAttributesHeaders)
    ], UpdateObjectAttributesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateObjectAttributesRequestBody)
    ], UpdateObjectAttributesRequest.prototype, "request", void 0);
    return UpdateObjectAttributesRequest;
}(SpeakeasyBase));
export { UpdateObjectAttributesRequest };
var UpdateObjectAttributesResponse = /** @class */ (function (_super) {
    __extends(UpdateObjectAttributesResponse, _super);
    function UpdateObjectAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateObjectAttributesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateObjectAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateObjectAttributesResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateObjectAttributesResponse.prototype, "facetValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateObjectAttributesResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateObjectAttributesResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateObjectAttributesResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateObjectAttributesResponse.prototype, "linkNameAlreadyInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateObjectAttributesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateObjectAttributesResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateObjectAttributesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateObjectAttributesResponse)
    ], UpdateObjectAttributesResponse.prototype, "updateObjectAttributesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateObjectAttributesResponse.prototype, "validationException", void 0);
    return UpdateObjectAttributesResponse;
}(SpeakeasyBase));
export { UpdateObjectAttributesResponse };
