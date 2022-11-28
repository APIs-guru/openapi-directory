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
var DetachFromIndexHeaders = /** @class */ (function (_super) {
    __extends(DetachFromIndexHeaders, _super);
    function DetachFromIndexHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DetachFromIndexHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DetachFromIndexHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DetachFromIndexHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DetachFromIndexHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DetachFromIndexHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DetachFromIndexHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DetachFromIndexHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], DetachFromIndexHeaders.prototype, "xAmzDataPartition", void 0);
    return DetachFromIndexHeaders;
}(SpeakeasyBase));
export { DetachFromIndexHeaders };
// DetachFromIndexRequestBodyIndexReference
/**
 * The reference that identifies an object.
**/
var DetachFromIndexRequestBodyIndexReference = /** @class */ (function (_super) {
    __extends(DetachFromIndexRequestBodyIndexReference, _super);
    function DetachFromIndexRequestBodyIndexReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], DetachFromIndexRequestBodyIndexReference.prototype, "selector", void 0);
    return DetachFromIndexRequestBodyIndexReference;
}(SpeakeasyBase));
export { DetachFromIndexRequestBodyIndexReference };
// DetachFromIndexRequestBodyTargetReference
/**
 * The reference that identifies an object.
**/
var DetachFromIndexRequestBodyTargetReference = /** @class */ (function (_super) {
    __extends(DetachFromIndexRequestBodyTargetReference, _super);
    function DetachFromIndexRequestBodyTargetReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], DetachFromIndexRequestBodyTargetReference.prototype, "selector", void 0);
    return DetachFromIndexRequestBodyTargetReference;
}(SpeakeasyBase));
export { DetachFromIndexRequestBodyTargetReference };
var DetachFromIndexRequestBody = /** @class */ (function (_super) {
    __extends(DetachFromIndexRequestBody, _super);
    function DetachFromIndexRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexReference" }),
        __metadata("design:type", DetachFromIndexRequestBodyIndexReference)
    ], DetachFromIndexRequestBody.prototype, "indexReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetReference" }),
        __metadata("design:type", DetachFromIndexRequestBodyTargetReference)
    ], DetachFromIndexRequestBody.prototype, "targetReference", void 0);
    return DetachFromIndexRequestBody;
}(SpeakeasyBase));
export { DetachFromIndexRequestBody };
var DetachFromIndexRequest = /** @class */ (function (_super) {
    __extends(DetachFromIndexRequest, _super);
    function DetachFromIndexRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DetachFromIndexHeaders)
    ], DetachFromIndexRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DetachFromIndexRequestBody)
    ], DetachFromIndexRequest.prototype, "request", void 0);
    return DetachFromIndexRequest;
}(SpeakeasyBase));
export { DetachFromIndexRequest };
var DetachFromIndexResponse = /** @class */ (function (_super) {
    __extends(DetachFromIndexResponse, _super);
    function DetachFromIndexResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachFromIndexResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DetachFromIndexResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DetachFromIndexResponse)
    ], DetachFromIndexResponse.prototype, "detachFromIndexResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachFromIndexResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachFromIndexResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachFromIndexResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachFromIndexResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachFromIndexResponse.prototype, "notIndexException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachFromIndexResponse.prototype, "objectAlreadyDetachedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachFromIndexResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachFromIndexResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DetachFromIndexResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachFromIndexResponse.prototype, "validationException", void 0);
    return DetachFromIndexResponse;
}(SpeakeasyBase));
export { DetachFromIndexResponse };
