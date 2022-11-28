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
var CreateAddonPathParams = /** @class */ (function (_super) {
    __extends(CreateAddonPathParams, _super);
    function CreateAddonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CreateAddonPathParams.prototype, "name", void 0);
    return CreateAddonPathParams;
}(SpeakeasyBase));
export { CreateAddonPathParams };
var CreateAddonHeaders = /** @class */ (function (_super) {
    __extends(CreateAddonHeaders, _super);
    function CreateAddonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateAddonHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateAddonHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateAddonHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateAddonHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateAddonHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateAddonHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateAddonHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateAddonHeaders;
}(SpeakeasyBase));
export { CreateAddonHeaders };
export var CreateAddonRequestBodyResolveConflictsEnum;
(function (CreateAddonRequestBodyResolveConflictsEnum) {
    CreateAddonRequestBodyResolveConflictsEnum["Overwrite"] = "OVERWRITE";
    CreateAddonRequestBodyResolveConflictsEnum["None"] = "NONE";
})(CreateAddonRequestBodyResolveConflictsEnum || (CreateAddonRequestBodyResolveConflictsEnum = {}));
var CreateAddonRequestBody = /** @class */ (function (_super) {
    __extends(CreateAddonRequestBody, _super);
    function CreateAddonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addonName" }),
        __metadata("design:type", String)
    ], CreateAddonRequestBody.prototype, "addonName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addonVersion" }),
        __metadata("design:type", String)
    ], CreateAddonRequestBody.prototype, "addonVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], CreateAddonRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolveConflicts" }),
        __metadata("design:type", String)
    ], CreateAddonRequestBody.prototype, "resolveConflicts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountRoleArn" }),
        __metadata("design:type", String)
    ], CreateAddonRequestBody.prototype, "serviceAccountRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateAddonRequestBody.prototype, "tags", void 0);
    return CreateAddonRequestBody;
}(SpeakeasyBase));
export { CreateAddonRequestBody };
var CreateAddonRequest = /** @class */ (function (_super) {
    __extends(CreateAddonRequest, _super);
    function CreateAddonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAddonPathParams)
    ], CreateAddonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAddonHeaders)
    ], CreateAddonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAddonRequestBody)
    ], CreateAddonRequest.prototype, "request", void 0);
    return CreateAddonRequest;
}(SpeakeasyBase));
export { CreateAddonRequest };
var CreateAddonResponse = /** @class */ (function (_super) {
    __extends(CreateAddonResponse, _super);
    function CreateAddonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAddonResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAddonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateAddonResponse)
    ], CreateAddonResponse.prototype, "createAddonResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAddonResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAddonResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAddonResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAddonResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAddonResponse.prototype, "serverException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAddonResponse.prototype, "statusCode", void 0);
    return CreateAddonResponse;
}(SpeakeasyBase));
export { CreateAddonResponse };
