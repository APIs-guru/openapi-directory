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
var CreateFunctionDefinitionVersionPathParams = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionVersionPathParams, _super);
    function CreateFunctionDefinitionVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionDefinitionId" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionVersionPathParams.prototype, "functionDefinitionId", void 0);
    return CreateFunctionDefinitionVersionPathParams;
}(SpeakeasyBase));
export { CreateFunctionDefinitionVersionPathParams };
var CreateFunctionDefinitionVersionHeaders = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionVersionHeaders, _super);
    function CreateFunctionDefinitionVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionVersionHeaders.prototype, "xAmznClientToken", void 0);
    return CreateFunctionDefinitionVersionHeaders;
}(SpeakeasyBase));
export { CreateFunctionDefinitionVersionHeaders };
// CreateFunctionDefinitionVersionRequestBodyDefaultConfig
/**
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
**/
var CreateFunctionDefinitionVersionRequestBodyDefaultConfig = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionVersionRequestBodyDefaultConfig, _super);
    function CreateFunctionDefinitionVersionRequestBodyDefaultConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Execution" }),
        __metadata("design:type", shared.FunctionDefaultExecutionConfig)
    ], CreateFunctionDefinitionVersionRequestBodyDefaultConfig.prototype, "execution", void 0);
    return CreateFunctionDefinitionVersionRequestBodyDefaultConfig;
}(SpeakeasyBase));
export { CreateFunctionDefinitionVersionRequestBodyDefaultConfig };
var CreateFunctionDefinitionVersionRequestBody = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionVersionRequestBody, _super);
    function CreateFunctionDefinitionVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultConfig" }),
        __metadata("design:type", CreateFunctionDefinitionVersionRequestBodyDefaultConfig)
    ], CreateFunctionDefinitionVersionRequestBody.prototype, "defaultConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Functions", elemType: shared.Function }),
        __metadata("design:type", Array)
    ], CreateFunctionDefinitionVersionRequestBody.prototype, "functions", void 0);
    return CreateFunctionDefinitionVersionRequestBody;
}(SpeakeasyBase));
export { CreateFunctionDefinitionVersionRequestBody };
var CreateFunctionDefinitionVersionRequest = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionVersionRequest, _super);
    function CreateFunctionDefinitionVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFunctionDefinitionVersionPathParams)
    ], CreateFunctionDefinitionVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFunctionDefinitionVersionHeaders)
    ], CreateFunctionDefinitionVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateFunctionDefinitionVersionRequestBody)
    ], CreateFunctionDefinitionVersionRequest.prototype, "request", void 0);
    return CreateFunctionDefinitionVersionRequest;
}(SpeakeasyBase));
export { CreateFunctionDefinitionVersionRequest };
var CreateFunctionDefinitionVersionResponse = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionVersionResponse, _super);
    function CreateFunctionDefinitionVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFunctionDefinitionVersionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateFunctionDefinitionVersionResponse)
    ], CreateFunctionDefinitionVersionResponse.prototype, "createFunctionDefinitionVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFunctionDefinitionVersionResponse.prototype, "statusCode", void 0);
    return CreateFunctionDefinitionVersionResponse;
}(SpeakeasyBase));
export { CreateFunctionDefinitionVersionResponse };
