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
var UpdateResourceDefinitionPathParams = /** @class */ (function (_super) {
    __extends(UpdateResourceDefinitionPathParams, _super);
    function UpdateResourceDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceDefinitionId" }),
        __metadata("design:type", String)
    ], UpdateResourceDefinitionPathParams.prototype, "resourceDefinitionId", void 0);
    return UpdateResourceDefinitionPathParams;
}(SpeakeasyBase));
export { UpdateResourceDefinitionPathParams };
var UpdateResourceDefinitionHeaders = /** @class */ (function (_super) {
    __extends(UpdateResourceDefinitionHeaders, _super);
    function UpdateResourceDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateResourceDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateResourceDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateResourceDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateResourceDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateResourceDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateResourceDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateResourceDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateResourceDefinitionHeaders;
}(SpeakeasyBase));
export { UpdateResourceDefinitionHeaders };
var UpdateResourceDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateResourceDefinitionRequestBody, _super);
    function UpdateResourceDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateResourceDefinitionRequestBody.prototype, "name", void 0);
    return UpdateResourceDefinitionRequestBody;
}(SpeakeasyBase));
export { UpdateResourceDefinitionRequestBody };
var UpdateResourceDefinitionRequest = /** @class */ (function (_super) {
    __extends(UpdateResourceDefinitionRequest, _super);
    function UpdateResourceDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateResourceDefinitionPathParams)
    ], UpdateResourceDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateResourceDefinitionHeaders)
    ], UpdateResourceDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateResourceDefinitionRequestBody)
    ], UpdateResourceDefinitionRequest.prototype, "request", void 0);
    return UpdateResourceDefinitionRequest;
}(SpeakeasyBase));
export { UpdateResourceDefinitionRequest };
var UpdateResourceDefinitionResponse = /** @class */ (function (_super) {
    __extends(UpdateResourceDefinitionResponse, _super);
    function UpdateResourceDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateResourceDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateResourceDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateResourceDefinitionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateResourceDefinitionResponse.prototype, "updateResourceDefinitionResponse", void 0);
    return UpdateResourceDefinitionResponse;
}(SpeakeasyBase));
export { UpdateResourceDefinitionResponse };
