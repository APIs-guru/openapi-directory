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
var CreateBackendEnvironmentPathParams = /** @class */ (function (_super) {
    __extends(CreateBackendEnvironmentPathParams, _super);
    function CreateBackendEnvironmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], CreateBackendEnvironmentPathParams.prototype, "appId", void 0);
    return CreateBackendEnvironmentPathParams;
}(SpeakeasyBase));
export { CreateBackendEnvironmentPathParams };
var CreateBackendEnvironmentHeaders = /** @class */ (function (_super) {
    __extends(CreateBackendEnvironmentHeaders, _super);
    function CreateBackendEnvironmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateBackendEnvironmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateBackendEnvironmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateBackendEnvironmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateBackendEnvironmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateBackendEnvironmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateBackendEnvironmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateBackendEnvironmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateBackendEnvironmentHeaders;
}(SpeakeasyBase));
export { CreateBackendEnvironmentHeaders };
var CreateBackendEnvironmentRequestBody = /** @class */ (function (_super) {
    __extends(CreateBackendEnvironmentRequestBody, _super);
    function CreateBackendEnvironmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=deploymentArtifacts" }),
        __metadata("design:type", String)
    ], CreateBackendEnvironmentRequestBody.prototype, "deploymentArtifacts", void 0);
    __decorate([
        Metadata({ data: "json, name=environmentName" }),
        __metadata("design:type", String)
    ], CreateBackendEnvironmentRequestBody.prototype, "environmentName", void 0);
    __decorate([
        Metadata({ data: "json, name=stackName" }),
        __metadata("design:type", String)
    ], CreateBackendEnvironmentRequestBody.prototype, "stackName", void 0);
    return CreateBackendEnvironmentRequestBody;
}(SpeakeasyBase));
export { CreateBackendEnvironmentRequestBody };
var CreateBackendEnvironmentRequest = /** @class */ (function (_super) {
    __extends(CreateBackendEnvironmentRequest, _super);
    function CreateBackendEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateBackendEnvironmentPathParams)
    ], CreateBackendEnvironmentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateBackendEnvironmentHeaders)
    ], CreateBackendEnvironmentRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBackendEnvironmentRequestBody)
    ], CreateBackendEnvironmentRequest.prototype, "request", void 0);
    return CreateBackendEnvironmentRequest;
}(SpeakeasyBase));
export { CreateBackendEnvironmentRequest };
var CreateBackendEnvironmentResponse = /** @class */ (function (_super) {
    __extends(CreateBackendEnvironmentResponse, _super);
    function CreateBackendEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBackendEnvironmentResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateBackendEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateBackendEnvironmentResult)
    ], CreateBackendEnvironmentResponse.prototype, "createBackendEnvironmentResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBackendEnvironmentResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBackendEnvironmentResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBackendEnvironmentResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateBackendEnvironmentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBackendEnvironmentResponse.prototype, "unauthorizedException", void 0);
    return CreateBackendEnvironmentResponse;
}(SpeakeasyBase));
export { CreateBackendEnvironmentResponse };
