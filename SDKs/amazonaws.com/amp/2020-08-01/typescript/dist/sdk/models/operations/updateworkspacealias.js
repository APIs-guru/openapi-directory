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
var UpdateWorkspaceAliasPathParams = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceAliasPathParams, _super);
    function UpdateWorkspaceAliasPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=workspaceId" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceAliasPathParams.prototype, "workspaceId", void 0);
    return UpdateWorkspaceAliasPathParams;
}(SpeakeasyBase));
export { UpdateWorkspaceAliasPathParams };
var UpdateWorkspaceAliasHeaders = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceAliasHeaders, _super);
    function UpdateWorkspaceAliasHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceAliasHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceAliasHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceAliasHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceAliasHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceAliasHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceAliasHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceAliasHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateWorkspaceAliasHeaders;
}(SpeakeasyBase));
export { UpdateWorkspaceAliasHeaders };
var UpdateWorkspaceAliasRequestBody = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceAliasRequestBody, _super);
    function UpdateWorkspaceAliasRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceAliasRequestBody.prototype, "alias", void 0);
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceAliasRequestBody.prototype, "clientToken", void 0);
    return UpdateWorkspaceAliasRequestBody;
}(SpeakeasyBase));
export { UpdateWorkspaceAliasRequestBody };
var UpdateWorkspaceAliasRequest = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceAliasRequest, _super);
    function UpdateWorkspaceAliasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateWorkspaceAliasPathParams)
    ], UpdateWorkspaceAliasRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateWorkspaceAliasHeaders)
    ], UpdateWorkspaceAliasRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateWorkspaceAliasRequestBody)
    ], UpdateWorkspaceAliasRequest.prototype, "request", void 0);
    return UpdateWorkspaceAliasRequest;
}(SpeakeasyBase));
export { UpdateWorkspaceAliasRequest };
var UpdateWorkspaceAliasResponse = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceAliasResponse, _super);
    function UpdateWorkspaceAliasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateWorkspaceAliasResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateWorkspaceAliasResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateWorkspaceAliasResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateWorkspaceAliasResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateWorkspaceAliasResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateWorkspaceAliasResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateWorkspaceAliasResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateWorkspaceAliasResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateWorkspaceAliasResponse.prototype, "validationException", void 0);
    return UpdateWorkspaceAliasResponse;
}(SpeakeasyBase));
export { UpdateWorkspaceAliasResponse };
