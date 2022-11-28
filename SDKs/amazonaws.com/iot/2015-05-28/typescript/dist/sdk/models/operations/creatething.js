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
var CreateThingPathParams = /** @class */ (function (_super) {
    __extends(CreateThingPathParams, _super);
    function CreateThingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingName" }),
        __metadata("design:type", String)
    ], CreateThingPathParams.prototype, "thingName", void 0);
    return CreateThingPathParams;
}(SpeakeasyBase));
export { CreateThingPathParams };
var CreateThingHeaders = /** @class */ (function (_super) {
    __extends(CreateThingHeaders, _super);
    function CreateThingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateThingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateThingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateThingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateThingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateThingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateThingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateThingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateThingHeaders;
}(SpeakeasyBase));
export { CreateThingHeaders };
// CreateThingRequestBodyAttributePayload
/**
 * The attribute payload.
**/
var CreateThingRequestBodyAttributePayload = /** @class */ (function (_super) {
    __extends(CreateThingRequestBodyAttributePayload, _super);
    function CreateThingRequestBodyAttributePayload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Map)
    ], CreateThingRequestBodyAttributePayload.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merge" }),
        __metadata("design:type", Boolean)
    ], CreateThingRequestBodyAttributePayload.prototype, "merge", void 0);
    return CreateThingRequestBodyAttributePayload;
}(SpeakeasyBase));
export { CreateThingRequestBodyAttributePayload };
var CreateThingRequestBody = /** @class */ (function (_super) {
    __extends(CreateThingRequestBody, _super);
    function CreateThingRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributePayload" }),
        __metadata("design:type", CreateThingRequestBodyAttributePayload)
    ], CreateThingRequestBody.prototype, "attributePayload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingGroupName" }),
        __metadata("design:type", String)
    ], CreateThingRequestBody.prototype, "billingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingTypeName" }),
        __metadata("design:type", String)
    ], CreateThingRequestBody.prototype, "thingTypeName", void 0);
    return CreateThingRequestBody;
}(SpeakeasyBase));
export { CreateThingRequestBody };
var CreateThingRequest = /** @class */ (function (_super) {
    __extends(CreateThingRequest, _super);
    function CreateThingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateThingPathParams)
    ], CreateThingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateThingHeaders)
    ], CreateThingRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateThingRequestBody)
    ], CreateThingRequest.prototype, "request", void 0);
    return CreateThingRequest;
}(SpeakeasyBase));
export { CreateThingRequest };
var CreateThingResponse = /** @class */ (function (_super) {
    __extends(CreateThingResponse, _super);
    function CreateThingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateThingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateThingResponse)
    ], CreateThingResponse.prototype, "createThingResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateThingResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateThingResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateThingResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateThingResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateThingResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateThingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateThingResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateThingResponse.prototype, "unauthorizedException", void 0);
    return CreateThingResponse;
}(SpeakeasyBase));
export { CreateThingResponse };
