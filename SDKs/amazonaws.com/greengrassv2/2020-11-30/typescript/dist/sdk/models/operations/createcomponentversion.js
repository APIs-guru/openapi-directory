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
var CreateComponentVersionHeaders = /** @class */ (function (_super) {
    __extends(CreateComponentVersionHeaders, _super);
    function CreateComponentVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateComponentVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateComponentVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateComponentVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateComponentVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateComponentVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateComponentVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateComponentVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateComponentVersionHeaders;
}(SpeakeasyBase));
export { CreateComponentVersionHeaders };
// CreateComponentVersionRequestBodyLambdaFunction
/**
 * Contains information about an Lambda function to import to create a component.
**/
var CreateComponentVersionRequestBodyLambdaFunction = /** @class */ (function (_super) {
    __extends(CreateComponentVersionRequestBodyLambdaFunction, _super);
    function CreateComponentVersionRequestBodyLambdaFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=componentDependencies", elemType: shared.ComponentDependencyRequirement }),
        __metadata("design:type", Map)
    ], CreateComponentVersionRequestBodyLambdaFunction.prototype, "componentDependencies", void 0);
    __decorate([
        Metadata({ data: "json, name=componentLambdaParameters" }),
        __metadata("design:type", shared.LambdaExecutionParameters)
    ], CreateComponentVersionRequestBodyLambdaFunction.prototype, "componentLambdaParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=componentName" }),
        __metadata("design:type", String)
    ], CreateComponentVersionRequestBodyLambdaFunction.prototype, "componentName", void 0);
    __decorate([
        Metadata({ data: "json, name=componentPlatforms", elemType: shared.ComponentPlatform }),
        __metadata("design:type", Array)
    ], CreateComponentVersionRequestBodyLambdaFunction.prototype, "componentPlatforms", void 0);
    __decorate([
        Metadata({ data: "json, name=componentVersion" }),
        __metadata("design:type", String)
    ], CreateComponentVersionRequestBodyLambdaFunction.prototype, "componentVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=lambdaArn" }),
        __metadata("design:type", String)
    ], CreateComponentVersionRequestBodyLambdaFunction.prototype, "lambdaArn", void 0);
    return CreateComponentVersionRequestBodyLambdaFunction;
}(SpeakeasyBase));
export { CreateComponentVersionRequestBodyLambdaFunction };
var CreateComponentVersionRequestBody = /** @class */ (function (_super) {
    __extends(CreateComponentVersionRequestBody, _super);
    function CreateComponentVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateComponentVersionRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=inlineRecipe" }),
        __metadata("design:type", String)
    ], CreateComponentVersionRequestBody.prototype, "inlineRecipe", void 0);
    __decorate([
        Metadata({ data: "json, name=lambdaFunction" }),
        __metadata("design:type", CreateComponentVersionRequestBodyLambdaFunction)
    ], CreateComponentVersionRequestBody.prototype, "lambdaFunction", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateComponentVersionRequestBody.prototype, "tags", void 0);
    return CreateComponentVersionRequestBody;
}(SpeakeasyBase));
export { CreateComponentVersionRequestBody };
var CreateComponentVersionRequest = /** @class */ (function (_super) {
    __extends(CreateComponentVersionRequest, _super);
    function CreateComponentVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateComponentVersionHeaders)
    ], CreateComponentVersionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateComponentVersionRequestBody)
    ], CreateComponentVersionRequest.prototype, "request", void 0);
    return CreateComponentVersionRequest;
}(SpeakeasyBase));
export { CreateComponentVersionRequest };
var CreateComponentVersionResponse = /** @class */ (function (_super) {
    __extends(CreateComponentVersionResponse, _super);
    function CreateComponentVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateComponentVersionResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateComponentVersionResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateComponentVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateComponentVersionResponse)
    ], CreateComponentVersionResponse.prototype, "createComponentVersionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateComponentVersionResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateComponentVersionResponse.prototype, "requestAlreadyInProgressException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateComponentVersionResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateComponentVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateComponentVersionResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateComponentVersionResponse.prototype, "validationException", void 0);
    return CreateComponentVersionResponse;
}(SpeakeasyBase));
export { CreateComponentVersionResponse };
