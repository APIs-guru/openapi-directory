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
var UpdateLoggerDefinitionPathParams = /** @class */ (function (_super) {
    __extends(UpdateLoggerDefinitionPathParams, _super);
    function UpdateLoggerDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=LoggerDefinitionId" }),
        __metadata("design:type", String)
    ], UpdateLoggerDefinitionPathParams.prototype, "loggerDefinitionId", void 0);
    return UpdateLoggerDefinitionPathParams;
}(SpeakeasyBase));
export { UpdateLoggerDefinitionPathParams };
var UpdateLoggerDefinitionHeaders = /** @class */ (function (_super) {
    __extends(UpdateLoggerDefinitionHeaders, _super);
    function UpdateLoggerDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateLoggerDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateLoggerDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateLoggerDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateLoggerDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateLoggerDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateLoggerDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateLoggerDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateLoggerDefinitionHeaders;
}(SpeakeasyBase));
export { UpdateLoggerDefinitionHeaders };
var UpdateLoggerDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateLoggerDefinitionRequestBody, _super);
    function UpdateLoggerDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateLoggerDefinitionRequestBody.prototype, "name", void 0);
    return UpdateLoggerDefinitionRequestBody;
}(SpeakeasyBase));
export { UpdateLoggerDefinitionRequestBody };
var UpdateLoggerDefinitionRequest = /** @class */ (function (_super) {
    __extends(UpdateLoggerDefinitionRequest, _super);
    function UpdateLoggerDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateLoggerDefinitionPathParams)
    ], UpdateLoggerDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateLoggerDefinitionHeaders)
    ], UpdateLoggerDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateLoggerDefinitionRequestBody)
    ], UpdateLoggerDefinitionRequest.prototype, "request", void 0);
    return UpdateLoggerDefinitionRequest;
}(SpeakeasyBase));
export { UpdateLoggerDefinitionRequest };
var UpdateLoggerDefinitionResponse = /** @class */ (function (_super) {
    __extends(UpdateLoggerDefinitionResponse, _super);
    function UpdateLoggerDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateLoggerDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateLoggerDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateLoggerDefinitionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], UpdateLoggerDefinitionResponse.prototype, "updateLoggerDefinitionResponse", void 0);
    return UpdateLoggerDefinitionResponse;
}(SpeakeasyBase));
export { UpdateLoggerDefinitionResponse };
