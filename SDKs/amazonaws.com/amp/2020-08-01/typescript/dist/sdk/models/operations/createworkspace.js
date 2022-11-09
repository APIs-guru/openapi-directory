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
var CreateWorkspaceHeaders = /** @class */ (function (_super) {
    __extends(CreateWorkspaceHeaders, _super);
    function CreateWorkspaceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateWorkspaceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateWorkspaceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateWorkspaceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateWorkspaceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateWorkspaceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateWorkspaceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateWorkspaceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateWorkspaceHeaders;
}(SpeakeasyBase));
export { CreateWorkspaceHeaders };
var CreateWorkspaceRequestBody = /** @class */ (function (_super) {
    __extends(CreateWorkspaceRequestBody, _super);
    function CreateWorkspaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], CreateWorkspaceRequestBody.prototype, "alias", void 0);
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateWorkspaceRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateWorkspaceRequestBody.prototype, "tags", void 0);
    return CreateWorkspaceRequestBody;
}(SpeakeasyBase));
export { CreateWorkspaceRequestBody };
var CreateWorkspaceRequest = /** @class */ (function (_super) {
    __extends(CreateWorkspaceRequest, _super);
    function CreateWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateWorkspaceHeaders)
    ], CreateWorkspaceRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateWorkspaceRequestBody)
    ], CreateWorkspaceRequest.prototype, "request", void 0);
    return CreateWorkspaceRequest;
}(SpeakeasyBase));
export { CreateWorkspaceRequest };
var CreateWorkspaceResponse = /** @class */ (function (_super) {
    __extends(CreateWorkspaceResponse, _super);
    function CreateWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkspaceResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkspaceResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateWorkspaceResponse)
    ], CreateWorkspaceResponse.prototype, "createWorkspaceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkspaceResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkspaceResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkspaceResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkspaceResponse.prototype, "validationException", void 0);
    return CreateWorkspaceResponse;
}(SpeakeasyBase));
export { CreateWorkspaceResponse };
