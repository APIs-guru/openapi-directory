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
var UpdateAddonPathParams = /** @class */ (function (_super) {
    __extends(UpdateAddonPathParams, _super);
    function UpdateAddonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=addonName" }),
        __metadata("design:type", String)
    ], UpdateAddonPathParams.prototype, "addonName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], UpdateAddonPathParams.prototype, "name", void 0);
    return UpdateAddonPathParams;
}(SpeakeasyBase));
export { UpdateAddonPathParams };
var UpdateAddonHeaders = /** @class */ (function (_super) {
    __extends(UpdateAddonHeaders, _super);
    function UpdateAddonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAddonHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAddonHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAddonHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAddonHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAddonHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAddonHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAddonHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAddonHeaders;
}(SpeakeasyBase));
export { UpdateAddonHeaders };
export var UpdateAddonRequestBodyResolveConflictsEnum;
(function (UpdateAddonRequestBodyResolveConflictsEnum) {
    UpdateAddonRequestBodyResolveConflictsEnum["Overwrite"] = "OVERWRITE";
    UpdateAddonRequestBodyResolveConflictsEnum["None"] = "NONE";
})(UpdateAddonRequestBodyResolveConflictsEnum || (UpdateAddonRequestBodyResolveConflictsEnum = {}));
var UpdateAddonRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAddonRequestBody, _super);
    function UpdateAddonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=addonVersion" }),
        __metadata("design:type", String)
    ], UpdateAddonRequestBody.prototype, "addonVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], UpdateAddonRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=resolveConflicts" }),
        __metadata("design:type", String)
    ], UpdateAddonRequestBody.prototype, "resolveConflicts", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceAccountRoleArn" }),
        __metadata("design:type", String)
    ], UpdateAddonRequestBody.prototype, "serviceAccountRoleArn", void 0);
    return UpdateAddonRequestBody;
}(SpeakeasyBase));
export { UpdateAddonRequestBody };
var UpdateAddonRequest = /** @class */ (function (_super) {
    __extends(UpdateAddonRequest, _super);
    function UpdateAddonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAddonPathParams)
    ], UpdateAddonRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAddonHeaders)
    ], UpdateAddonRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAddonRequestBody)
    ], UpdateAddonRequest.prototype, "request", void 0);
    return UpdateAddonRequest;
}(SpeakeasyBase));
export { UpdateAddonRequest };
var UpdateAddonResponse = /** @class */ (function (_super) {
    __extends(UpdateAddonResponse, _super);
    function UpdateAddonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAddonResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateAddonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAddonResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAddonResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAddonResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAddonResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAddonResponse.prototype, "serverException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateAddonResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateAddonResponse)
    ], UpdateAddonResponse.prototype, "updateAddonResponse", void 0);
    return UpdateAddonResponse;
}(SpeakeasyBase));
export { UpdateAddonResponse };
