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
var UpdateFunctionDefinitionPathParams = /** @class */ (function (_super) {
    __extends(UpdateFunctionDefinitionPathParams, _super);
    function UpdateFunctionDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionDefinitionId" }),
        __metadata("design:type", String)
    ], UpdateFunctionDefinitionPathParams.prototype, "functionDefinitionId", void 0);
    return UpdateFunctionDefinitionPathParams;
}(SpeakeasyBase));
export { UpdateFunctionDefinitionPathParams };
var UpdateFunctionDefinitionHeaders = /** @class */ (function (_super) {
    __extends(UpdateFunctionDefinitionHeaders, _super);
    function UpdateFunctionDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateFunctionDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateFunctionDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateFunctionDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateFunctionDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateFunctionDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateFunctionDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateFunctionDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateFunctionDefinitionHeaders;
}(SpeakeasyBase));
export { UpdateFunctionDefinitionHeaders };
var UpdateFunctionDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateFunctionDefinitionRequestBody, _super);
    function UpdateFunctionDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateFunctionDefinitionRequestBody.prototype, "name", void 0);
    return UpdateFunctionDefinitionRequestBody;
}(SpeakeasyBase));
export { UpdateFunctionDefinitionRequestBody };
var UpdateFunctionDefinitionRequest = /** @class */ (function (_super) {
    __extends(UpdateFunctionDefinitionRequest, _super);
    function UpdateFunctionDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFunctionDefinitionPathParams)
    ], UpdateFunctionDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFunctionDefinitionHeaders)
    ], UpdateFunctionDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateFunctionDefinitionRequestBody)
    ], UpdateFunctionDefinitionRequest.prototype, "request", void 0);
    return UpdateFunctionDefinitionRequest;
}(SpeakeasyBase));
export { UpdateFunctionDefinitionRequest };
var UpdateFunctionDefinitionResponse = /** @class */ (function (_super) {
    __extends(UpdateFunctionDefinitionResponse, _super);
    function UpdateFunctionDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFunctionDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFunctionDefinitionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateFunctionDefinitionResponse.prototype, "updateFunctionDefinitionResponse", void 0);
    return UpdateFunctionDefinitionResponse;
}(SpeakeasyBase));
export { UpdateFunctionDefinitionResponse };
