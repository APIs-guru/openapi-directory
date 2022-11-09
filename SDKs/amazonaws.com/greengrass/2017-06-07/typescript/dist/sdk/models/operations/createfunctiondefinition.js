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
var CreateFunctionDefinitionHeaders = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionHeaders, _super);
    function CreateFunctionDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmznClientToken", void 0);
    return CreateFunctionDefinitionHeaders;
}(SpeakeasyBase));
export { CreateFunctionDefinitionHeaders };
// CreateFunctionDefinitionRequestBodyInitialVersion
/**
 * Information about a function definition version.
**/
var CreateFunctionDefinitionRequestBodyInitialVersion = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionRequestBodyInitialVersion, _super);
    function CreateFunctionDefinitionRequestBodyInitialVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DefaultConfig" }),
        __metadata("design:type", shared.FunctionDefaultConfig)
    ], CreateFunctionDefinitionRequestBodyInitialVersion.prototype, "defaultConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=Functions", elemType: shared.Function }),
        __metadata("design:type", Array)
    ], CreateFunctionDefinitionRequestBodyInitialVersion.prototype, "functions", void 0);
    return CreateFunctionDefinitionRequestBodyInitialVersion;
}(SpeakeasyBase));
export { CreateFunctionDefinitionRequestBodyInitialVersion };
var CreateFunctionDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionRequestBody, _super);
    function CreateFunctionDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=InitialVersion" }),
        __metadata("design:type", CreateFunctionDefinitionRequestBodyInitialVersion)
    ], CreateFunctionDefinitionRequestBody.prototype, "initialVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateFunctionDefinitionRequestBody.prototype, "tags", void 0);
    return CreateFunctionDefinitionRequestBody;
}(SpeakeasyBase));
export { CreateFunctionDefinitionRequestBody };
var CreateFunctionDefinitionRequest = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionRequest, _super);
    function CreateFunctionDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateFunctionDefinitionHeaders)
    ], CreateFunctionDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateFunctionDefinitionRequestBody)
    ], CreateFunctionDefinitionRequest.prototype, "request", void 0);
    return CreateFunctionDefinitionRequest;
}(SpeakeasyBase));
export { CreateFunctionDefinitionRequest };
var CreateFunctionDefinitionResponse = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionResponse, _super);
    function CreateFunctionDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFunctionDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateFunctionDefinitionResponse)
    ], CreateFunctionDefinitionResponse.prototype, "createFunctionDefinitionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateFunctionDefinitionResponse.prototype, "statusCode", void 0);
    return CreateFunctionDefinitionResponse;
}(SpeakeasyBase));
export { CreateFunctionDefinitionResponse };
