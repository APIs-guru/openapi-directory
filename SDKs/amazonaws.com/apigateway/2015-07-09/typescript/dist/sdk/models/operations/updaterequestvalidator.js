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
var UpdateRequestValidatorPathParams = /** @class */ (function (_super) {
    __extends(UpdateRequestValidatorPathParams, _super);
    function UpdateRequestValidatorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=requestvalidator_id" }),
        __metadata("design:type", String)
    ], UpdateRequestValidatorPathParams.prototype, "requestvalidatorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], UpdateRequestValidatorPathParams.prototype, "restapiId", void 0);
    return UpdateRequestValidatorPathParams;
}(SpeakeasyBase));
export { UpdateRequestValidatorPathParams };
var UpdateRequestValidatorHeaders = /** @class */ (function (_super) {
    __extends(UpdateRequestValidatorHeaders, _super);
    function UpdateRequestValidatorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateRequestValidatorHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateRequestValidatorHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateRequestValidatorHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateRequestValidatorHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateRequestValidatorHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateRequestValidatorHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateRequestValidatorHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateRequestValidatorHeaders;
}(SpeakeasyBase));
export { UpdateRequestValidatorHeaders };
var UpdateRequestValidatorRequestBody = /** @class */ (function (_super) {
    __extends(UpdateRequestValidatorRequestBody, _super);
    function UpdateRequestValidatorRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patchOperations", elemType: shared.PatchOperation }),
        __metadata("design:type", Array)
    ], UpdateRequestValidatorRequestBody.prototype, "patchOperations", void 0);
    return UpdateRequestValidatorRequestBody;
}(SpeakeasyBase));
export { UpdateRequestValidatorRequestBody };
var UpdateRequestValidatorRequest = /** @class */ (function (_super) {
    __extends(UpdateRequestValidatorRequest, _super);
    function UpdateRequestValidatorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRequestValidatorPathParams)
    ], UpdateRequestValidatorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRequestValidatorHeaders)
    ], UpdateRequestValidatorRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateRequestValidatorRequestBody)
    ], UpdateRequestValidatorRequest.prototype, "request", void 0);
    return UpdateRequestValidatorRequest;
}(SpeakeasyBase));
export { UpdateRequestValidatorRequest };
var UpdateRequestValidatorResponse = /** @class */ (function (_super) {
    __extends(UpdateRequestValidatorResponse, _super);
    function UpdateRequestValidatorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRequestValidatorResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRequestValidatorResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateRequestValidatorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRequestValidatorResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRequestValidatorResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RequestValidator)
    ], UpdateRequestValidatorResponse.prototype, "requestValidator", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateRequestValidatorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRequestValidatorResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRequestValidatorResponse.prototype, "unauthorizedException", void 0);
    return UpdateRequestValidatorResponse;
}(SpeakeasyBase));
export { UpdateRequestValidatorResponse };
