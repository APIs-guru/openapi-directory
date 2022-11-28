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
var AttachToIndexHeaders = /** @class */ (function (_super) {
    __extends(AttachToIndexHeaders, _super);
    function AttachToIndexHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AttachToIndexHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AttachToIndexHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AttachToIndexHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AttachToIndexHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AttachToIndexHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AttachToIndexHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AttachToIndexHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], AttachToIndexHeaders.prototype, "xAmzDataPartition", void 0);
    return AttachToIndexHeaders;
}(SpeakeasyBase));
export { AttachToIndexHeaders };
// AttachToIndexRequestBodyIndexReference
/**
 * The reference that identifies an object.
**/
var AttachToIndexRequestBodyIndexReference = /** @class */ (function (_super) {
    __extends(AttachToIndexRequestBodyIndexReference, _super);
    function AttachToIndexRequestBodyIndexReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], AttachToIndexRequestBodyIndexReference.prototype, "selector", void 0);
    return AttachToIndexRequestBodyIndexReference;
}(SpeakeasyBase));
export { AttachToIndexRequestBodyIndexReference };
// AttachToIndexRequestBodyTargetReference
/**
 * The reference that identifies an object.
**/
var AttachToIndexRequestBodyTargetReference = /** @class */ (function (_super) {
    __extends(AttachToIndexRequestBodyTargetReference, _super);
    function AttachToIndexRequestBodyTargetReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], AttachToIndexRequestBodyTargetReference.prototype, "selector", void 0);
    return AttachToIndexRequestBodyTargetReference;
}(SpeakeasyBase));
export { AttachToIndexRequestBodyTargetReference };
var AttachToIndexRequestBody = /** @class */ (function (_super) {
    __extends(AttachToIndexRequestBody, _super);
    function AttachToIndexRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexReference" }),
        __metadata("design:type", AttachToIndexRequestBodyIndexReference)
    ], AttachToIndexRequestBody.prototype, "indexReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetReference" }),
        __metadata("design:type", AttachToIndexRequestBodyTargetReference)
    ], AttachToIndexRequestBody.prototype, "targetReference", void 0);
    return AttachToIndexRequestBody;
}(SpeakeasyBase));
export { AttachToIndexRequestBody };
var AttachToIndexRequest = /** @class */ (function (_super) {
    __extends(AttachToIndexRequest, _super);
    function AttachToIndexRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttachToIndexHeaders)
    ], AttachToIndexRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AttachToIndexRequestBody)
    ], AttachToIndexRequest.prototype, "request", void 0);
    return AttachToIndexRequest;
}(SpeakeasyBase));
export { AttachToIndexRequest };
var AttachToIndexResponse = /** @class */ (function (_super) {
    __extends(AttachToIndexResponse, _super);
    function AttachToIndexResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachToIndexResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AttachToIndexResponse)
    ], AttachToIndexResponse.prototype, "attachToIndexResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AttachToIndexResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachToIndexResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachToIndexResponse.prototype, "indexedAttributeMissingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachToIndexResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachToIndexResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachToIndexResponse.prototype, "invalidAttachmentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachToIndexResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachToIndexResponse.prototype, "linkNameAlreadyInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachToIndexResponse.prototype, "notIndexException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachToIndexResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachToIndexResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AttachToIndexResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachToIndexResponse.prototype, "validationException", void 0);
    return AttachToIndexResponse;
}(SpeakeasyBase));
export { AttachToIndexResponse };
