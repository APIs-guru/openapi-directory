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
var DeleteFunctionDefinitionPathParams = /** @class */ (function (_super) {
    __extends(DeleteFunctionDefinitionPathParams, _super);
    function DeleteFunctionDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionDefinitionId" }),
        __metadata("design:type", String)
    ], DeleteFunctionDefinitionPathParams.prototype, "functionDefinitionId", void 0);
    return DeleteFunctionDefinitionPathParams;
}(SpeakeasyBase));
export { DeleteFunctionDefinitionPathParams };
var DeleteFunctionDefinitionHeaders = /** @class */ (function (_super) {
    __extends(DeleteFunctionDefinitionHeaders, _super);
    function DeleteFunctionDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteFunctionDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteFunctionDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteFunctionDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteFunctionDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteFunctionDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteFunctionDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteFunctionDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteFunctionDefinitionHeaders;
}(SpeakeasyBase));
export { DeleteFunctionDefinitionHeaders };
var DeleteFunctionDefinitionRequest = /** @class */ (function (_super) {
    __extends(DeleteFunctionDefinitionRequest, _super);
    function DeleteFunctionDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteFunctionDefinitionPathParams)
    ], DeleteFunctionDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteFunctionDefinitionHeaders)
    ], DeleteFunctionDefinitionRequest.prototype, "headers", void 0);
    return DeleteFunctionDefinitionRequest;
}(SpeakeasyBase));
export { DeleteFunctionDefinitionRequest };
var DeleteFunctionDefinitionResponse = /** @class */ (function (_super) {
    __extends(DeleteFunctionDefinitionResponse, _super);
    function DeleteFunctionDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteFunctionDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteFunctionDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DeleteFunctionDefinitionResponse.prototype, "deleteFunctionDefinitionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteFunctionDefinitionResponse.prototype, "statusCode", void 0);
    return DeleteFunctionDefinitionResponse;
}(SpeakeasyBase));
export { DeleteFunctionDefinitionResponse };
