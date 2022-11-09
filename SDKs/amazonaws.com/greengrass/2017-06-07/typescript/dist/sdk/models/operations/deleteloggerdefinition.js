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
var DeleteLoggerDefinitionPathParams = /** @class */ (function (_super) {
    __extends(DeleteLoggerDefinitionPathParams, _super);
    function DeleteLoggerDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=LoggerDefinitionId" }),
        __metadata("design:type", String)
    ], DeleteLoggerDefinitionPathParams.prototype, "loggerDefinitionId", void 0);
    return DeleteLoggerDefinitionPathParams;
}(SpeakeasyBase));
export { DeleteLoggerDefinitionPathParams };
var DeleteLoggerDefinitionHeaders = /** @class */ (function (_super) {
    __extends(DeleteLoggerDefinitionHeaders, _super);
    function DeleteLoggerDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteLoggerDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteLoggerDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteLoggerDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteLoggerDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteLoggerDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteLoggerDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteLoggerDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteLoggerDefinitionHeaders;
}(SpeakeasyBase));
export { DeleteLoggerDefinitionHeaders };
var DeleteLoggerDefinitionRequest = /** @class */ (function (_super) {
    __extends(DeleteLoggerDefinitionRequest, _super);
    function DeleteLoggerDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteLoggerDefinitionPathParams)
    ], DeleteLoggerDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteLoggerDefinitionHeaders)
    ], DeleteLoggerDefinitionRequest.prototype, "headers", void 0);
    return DeleteLoggerDefinitionRequest;
}(SpeakeasyBase));
export { DeleteLoggerDefinitionRequest };
var DeleteLoggerDefinitionResponse = /** @class */ (function (_super) {
    __extends(DeleteLoggerDefinitionResponse, _super);
    function DeleteLoggerDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteLoggerDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteLoggerDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DeleteLoggerDefinitionResponse.prototype, "deleteLoggerDefinitionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteLoggerDefinitionResponse.prototype, "statusCode", void 0);
    return DeleteLoggerDefinitionResponse;
}(SpeakeasyBase));
export { DeleteLoggerDefinitionResponse };
