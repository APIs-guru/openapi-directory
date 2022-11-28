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
var UpdateThingPathParams = /** @class */ (function (_super) {
    __extends(UpdateThingPathParams, _super);
    function UpdateThingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingName" }),
        __metadata("design:type", String)
    ], UpdateThingPathParams.prototype, "thingName", void 0);
    return UpdateThingPathParams;
}(SpeakeasyBase));
export { UpdateThingPathParams };
var UpdateThingHeaders = /** @class */ (function (_super) {
    __extends(UpdateThingHeaders, _super);
    function UpdateThingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateThingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateThingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateThingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateThingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateThingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateThingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateThingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateThingHeaders;
}(SpeakeasyBase));
export { UpdateThingHeaders };
// UpdateThingRequestBodyAttributePayload
/**
 * The attribute payload.
**/
var UpdateThingRequestBodyAttributePayload = /** @class */ (function (_super) {
    __extends(UpdateThingRequestBodyAttributePayload, _super);
    function UpdateThingRequestBodyAttributePayload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Map)
    ], UpdateThingRequestBodyAttributePayload.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merge" }),
        __metadata("design:type", Boolean)
    ], UpdateThingRequestBodyAttributePayload.prototype, "merge", void 0);
    return UpdateThingRequestBodyAttributePayload;
}(SpeakeasyBase));
export { UpdateThingRequestBodyAttributePayload };
var UpdateThingRequestBody = /** @class */ (function (_super) {
    __extends(UpdateThingRequestBody, _super);
    function UpdateThingRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributePayload" }),
        __metadata("design:type", UpdateThingRequestBodyAttributePayload)
    ], UpdateThingRequestBody.prototype, "attributePayload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedVersion" }),
        __metadata("design:type", Number)
    ], UpdateThingRequestBody.prototype, "expectedVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=removeThingType" }),
        __metadata("design:type", Boolean)
    ], UpdateThingRequestBody.prototype, "removeThingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingTypeName" }),
        __metadata("design:type", String)
    ], UpdateThingRequestBody.prototype, "thingTypeName", void 0);
    return UpdateThingRequestBody;
}(SpeakeasyBase));
export { UpdateThingRequestBody };
var UpdateThingRequest = /** @class */ (function (_super) {
    __extends(UpdateThingRequest, _super);
    function UpdateThingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateThingPathParams)
    ], UpdateThingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateThingHeaders)
    ], UpdateThingRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateThingRequestBody)
    ], UpdateThingRequest.prototype, "request", void 0);
    return UpdateThingRequest;
}(SpeakeasyBase));
export { UpdateThingRequest };
var UpdateThingResponse = /** @class */ (function (_super) {
    __extends(UpdateThingResponse, _super);
    function UpdateThingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateThingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateThingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateThingResponse.prototype, "updateThingResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingResponse.prototype, "versionConflictException", void 0);
    return UpdateThingResponse;
}(SpeakeasyBase));
export { UpdateThingResponse };
