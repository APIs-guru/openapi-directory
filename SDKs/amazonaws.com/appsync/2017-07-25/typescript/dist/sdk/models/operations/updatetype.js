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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var UpdateTypePathParams = /** @class */ (function (_super) {
    __extends(UpdateTypePathParams, _super);
    function UpdateTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateTypePathParams.prototype, "apiId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=typeName" }),
        __metadata("design:type", String)
    ], UpdateTypePathParams.prototype, "typeName", void 0);
    return UpdateTypePathParams;
}(SpeakeasyBase));
export { UpdateTypePathParams };
var UpdateTypeHeaders = /** @class */ (function (_super) {
    __extends(UpdateTypeHeaders, _super);
    function UpdateTypeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateTypeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateTypeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateTypeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateTypeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateTypeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateTypeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateTypeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateTypeHeaders;
}(SpeakeasyBase));
export { UpdateTypeHeaders };
export var UpdateTypeRequestBodyFormatEnum;
(function (UpdateTypeRequestBodyFormatEnum) {
    UpdateTypeRequestBodyFormatEnum["Sdl"] = "SDL";
    UpdateTypeRequestBodyFormatEnum["Json"] = "JSON";
})(UpdateTypeRequestBodyFormatEnum || (UpdateTypeRequestBodyFormatEnum = {}));
var UpdateTypeRequestBody = /** @class */ (function (_super) {
    __extends(UpdateTypeRequestBody, _super);
    function UpdateTypeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=definition" }),
        __metadata("design:type", String)
    ], UpdateTypeRequestBody.prototype, "definition", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], UpdateTypeRequestBody.prototype, "format", void 0);
    return UpdateTypeRequestBody;
}(SpeakeasyBase));
export { UpdateTypeRequestBody };
var UpdateTypeRequest = /** @class */ (function (_super) {
    __extends(UpdateTypeRequest, _super);
    function UpdateTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateTypePathParams)
    ], UpdateTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateTypeHeaders)
    ], UpdateTypeRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateTypeRequestBody)
    ], UpdateTypeRequest.prototype, "request", void 0);
    return UpdateTypeRequest;
}(SpeakeasyBase));
export { UpdateTypeRequest };
var UpdateTypeResponse = /** @class */ (function (_super) {
    __extends(UpdateTypeResponse, _super);
    function UpdateTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateTypeResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateTypeResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateTypeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateTypeResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateTypeResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateTypeResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateTypeResponse)
    ], UpdateTypeResponse.prototype, "updateTypeResponse", void 0);
    return UpdateTypeResponse;
}(SpeakeasyBase));
export { UpdateTypeResponse };
