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
var CreateLoggerDefinitionHeaders = /** @class */ (function (_super) {
    __extends(CreateLoggerDefinitionHeaders, _super);
    function CreateLoggerDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionHeaders.prototype, "xAmznClientToken", void 0);
    return CreateLoggerDefinitionHeaders;
}(SpeakeasyBase));
export { CreateLoggerDefinitionHeaders };
// CreateLoggerDefinitionRequestBodyInitialVersion
/**
 * Information about a logger definition version.
**/
var CreateLoggerDefinitionRequestBodyInitialVersion = /** @class */ (function (_super) {
    __extends(CreateLoggerDefinitionRequestBodyInitialVersion, _super);
    function CreateLoggerDefinitionRequestBodyInitialVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Loggers", elemType: shared.Logger }),
        __metadata("design:type", Array)
    ], CreateLoggerDefinitionRequestBodyInitialVersion.prototype, "loggers", void 0);
    return CreateLoggerDefinitionRequestBodyInitialVersion;
}(SpeakeasyBase));
export { CreateLoggerDefinitionRequestBodyInitialVersion };
var CreateLoggerDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(CreateLoggerDefinitionRequestBody, _super);
    function CreateLoggerDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=InitialVersion" }),
        __metadata("design:type", CreateLoggerDefinitionRequestBodyInitialVersion)
    ], CreateLoggerDefinitionRequestBody.prototype, "initialVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateLoggerDefinitionRequestBody.prototype, "tags", void 0);
    return CreateLoggerDefinitionRequestBody;
}(SpeakeasyBase));
export { CreateLoggerDefinitionRequestBody };
var CreateLoggerDefinitionRequest = /** @class */ (function (_super) {
    __extends(CreateLoggerDefinitionRequest, _super);
    function CreateLoggerDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateLoggerDefinitionHeaders)
    ], CreateLoggerDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateLoggerDefinitionRequestBody)
    ], CreateLoggerDefinitionRequest.prototype, "request", void 0);
    return CreateLoggerDefinitionRequest;
}(SpeakeasyBase));
export { CreateLoggerDefinitionRequest };
var CreateLoggerDefinitionResponse = /** @class */ (function (_super) {
    __extends(CreateLoggerDefinitionResponse, _super);
    function CreateLoggerDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateLoggerDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateLoggerDefinitionResponse)
    ], CreateLoggerDefinitionResponse.prototype, "createLoggerDefinitionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateLoggerDefinitionResponse.prototype, "statusCode", void 0);
    return CreateLoggerDefinitionResponse;
}(SpeakeasyBase));
export { CreateLoggerDefinitionResponse };
