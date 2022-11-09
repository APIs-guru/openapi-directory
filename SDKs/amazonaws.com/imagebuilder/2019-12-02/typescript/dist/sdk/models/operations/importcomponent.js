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
var ImportComponentHeaders = /** @class */ (function (_super) {
    __extends(ImportComponentHeaders, _super);
    function ImportComponentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ImportComponentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ImportComponentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ImportComponentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ImportComponentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ImportComponentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ImportComponentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ImportComponentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ImportComponentHeaders;
}(SpeakeasyBase));
export { ImportComponentHeaders };
export var ImportComponentRequestBodyFormatEnum;
(function (ImportComponentRequestBodyFormatEnum) {
    ImportComponentRequestBodyFormatEnum["Shell"] = "SHELL";
})(ImportComponentRequestBodyFormatEnum || (ImportComponentRequestBodyFormatEnum = {}));
export var ImportComponentRequestBodyPlatformEnum;
(function (ImportComponentRequestBodyPlatformEnum) {
    ImportComponentRequestBodyPlatformEnum["Windows"] = "Windows";
    ImportComponentRequestBodyPlatformEnum["Linux"] = "Linux";
})(ImportComponentRequestBodyPlatformEnum || (ImportComponentRequestBodyPlatformEnum = {}));
export var ImportComponentRequestBodyTypeEnum;
(function (ImportComponentRequestBodyTypeEnum) {
    ImportComponentRequestBodyTypeEnum["Build"] = "BUILD";
    ImportComponentRequestBodyTypeEnum["Test"] = "TEST";
})(ImportComponentRequestBodyTypeEnum || (ImportComponentRequestBodyTypeEnum = {}));
var ImportComponentRequestBody = /** @class */ (function (_super) {
    __extends(ImportComponentRequestBody, _super);
    function ImportComponentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=changeDescription" }),
        __metadata("design:type", String)
    ], ImportComponentRequestBody.prototype, "changeDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], ImportComponentRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], ImportComponentRequestBody.prototype, "data", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ImportComponentRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ImportComponentRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=kmsKeyId" }),
        __metadata("design:type", String)
    ], ImportComponentRequestBody.prototype, "kmsKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImportComponentRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], ImportComponentRequestBody.prototype, "platform", void 0);
    __decorate([
        Metadata({ data: "json, name=semanticVersion" }),
        __metadata("design:type", String)
    ], ImportComponentRequestBody.prototype, "semanticVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], ImportComponentRequestBody.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ImportComponentRequestBody.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ImportComponentRequestBody.prototype, "uri", void 0);
    return ImportComponentRequestBody;
}(SpeakeasyBase));
export { ImportComponentRequestBody };
var ImportComponentRequest = /** @class */ (function (_super) {
    __extends(ImportComponentRequest, _super);
    function ImportComponentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ImportComponentHeaders)
    ], ImportComponentRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ImportComponentRequestBody)
    ], ImportComponentRequest.prototype, "request", void 0);
    return ImportComponentRequest;
}(SpeakeasyBase));
export { ImportComponentRequest };
var ImportComponentResponse = /** @class */ (function (_super) {
    __extends(ImportComponentResponse, _super);
    function ImportComponentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportComponentResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportComponentResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ImportComponentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportComponentResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportComponentResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ImportComponentResponse)
    ], ImportComponentResponse.prototype, "importComponentResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportComponentResponse.prototype, "invalidParameterCombinationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportComponentResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportComponentResponse.prototype, "invalidVersionNumberException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportComponentResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportComponentResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportComponentResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ImportComponentResponse.prototype, "statusCode", void 0);
    return ImportComponentResponse;
}(SpeakeasyBase));
export { ImportComponentResponse };
