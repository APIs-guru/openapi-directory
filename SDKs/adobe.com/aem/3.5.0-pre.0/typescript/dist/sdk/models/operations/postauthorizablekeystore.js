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
var PostAuthorizableKeystorePathParams = /** @class */ (function (_super) {
    __extends(PostAuthorizableKeystorePathParams, _super);
    function PostAuthorizableKeystorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorizableId" }),
        __metadata("design:type", String)
    ], PostAuthorizableKeystorePathParams.prototype, "authorizableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=intermediatePath" }),
        __metadata("design:type", String)
    ], PostAuthorizableKeystorePathParams.prototype, "intermediatePath", void 0);
    return PostAuthorizableKeystorePathParams;
}(SpeakeasyBase));
export { PostAuthorizableKeystorePathParams };
var PostAuthorizableKeystoreQueryParams = /** @class */ (function (_super) {
    __extends(PostAuthorizableKeystoreQueryParams, _super);
    function PostAuthorizableKeystoreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=:operation" }),
        __metadata("design:type", String)
    ], PostAuthorizableKeystoreQueryParams.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alias" }),
        __metadata("design:type", String)
    ], PostAuthorizableKeystoreQueryParams.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPassword" }),
        __metadata("design:type", String)
    ], PostAuthorizableKeystoreQueryParams.prototype, "currentPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyPassword" }),
        __metadata("design:type", String)
    ], PostAuthorizableKeystoreQueryParams.prototype, "keyPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyStorePass" }),
        __metadata("design:type", String)
    ], PostAuthorizableKeystoreQueryParams.prototype, "keyStorePass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newAlias" }),
        __metadata("design:type", String)
    ], PostAuthorizableKeystoreQueryParams.prototype, "newAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newPassword" }),
        __metadata("design:type", String)
    ], PostAuthorizableKeystoreQueryParams.prototype, "newPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rePassword" }),
        __metadata("design:type", String)
    ], PostAuthorizableKeystoreQueryParams.prototype, "rePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=removeAlias" }),
        __metadata("design:type", String)
    ], PostAuthorizableKeystoreQueryParams.prototype, "removeAlias", void 0);
    return PostAuthorizableKeystoreQueryParams;
}(SpeakeasyBase));
export { PostAuthorizableKeystoreQueryParams };
var PostAuthorizableKeystoreRequestBodyCertChain = /** @class */ (function (_super) {
    __extends(PostAuthorizableKeystoreRequestBodyCertChain, _super);
    function PostAuthorizableKeystoreRequestBodyCertChain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=cert-chain" }),
        __metadata("design:type", String)
    ], PostAuthorizableKeystoreRequestBodyCertChain.prototype, "certChain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostAuthorizableKeystoreRequestBodyCertChain.prototype, "content", void 0);
    return PostAuthorizableKeystoreRequestBodyCertChain;
}(SpeakeasyBase));
export { PostAuthorizableKeystoreRequestBodyCertChain };
var PostAuthorizableKeystoreRequestBodyKeyStore = /** @class */ (function (_super) {
    __extends(PostAuthorizableKeystoreRequestBodyKeyStore, _super);
    function PostAuthorizableKeystoreRequestBodyKeyStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostAuthorizableKeystoreRequestBodyKeyStore.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=keyStore" }),
        __metadata("design:type", String)
    ], PostAuthorizableKeystoreRequestBodyKeyStore.prototype, "keyStore", void 0);
    return PostAuthorizableKeystoreRequestBodyKeyStore;
}(SpeakeasyBase));
export { PostAuthorizableKeystoreRequestBodyKeyStore };
var PostAuthorizableKeystoreRequestBodyPk = /** @class */ (function (_super) {
    __extends(PostAuthorizableKeystoreRequestBodyPk, _super);
    function PostAuthorizableKeystoreRequestBodyPk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostAuthorizableKeystoreRequestBodyPk.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=pk" }),
        __metadata("design:type", String)
    ], PostAuthorizableKeystoreRequestBodyPk.prototype, "pk", void 0);
    return PostAuthorizableKeystoreRequestBodyPk;
}(SpeakeasyBase));
export { PostAuthorizableKeystoreRequestBodyPk };
var PostAuthorizableKeystoreRequestBody = /** @class */ (function (_super) {
    __extends(PostAuthorizableKeystoreRequestBody, _super);
    function PostAuthorizableKeystoreRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostAuthorizableKeystoreRequestBodyCertChain)
    ], PostAuthorizableKeystoreRequestBody.prototype, "certChain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostAuthorizableKeystoreRequestBodyKeyStore)
    ], PostAuthorizableKeystoreRequestBody.prototype, "keyStore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostAuthorizableKeystoreRequestBodyPk)
    ], PostAuthorizableKeystoreRequestBody.prototype, "pk", void 0);
    return PostAuthorizableKeystoreRequestBody;
}(SpeakeasyBase));
export { PostAuthorizableKeystoreRequestBody };
var PostAuthorizableKeystoreRequest = /** @class */ (function (_super) {
    __extends(PostAuthorizableKeystoreRequest, _super);
    function PostAuthorizableKeystoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAuthorizableKeystorePathParams)
    ], PostAuthorizableKeystoreRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAuthorizableKeystoreQueryParams)
    ], PostAuthorizableKeystoreRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostAuthorizableKeystoreRequestBody)
    ], PostAuthorizableKeystoreRequest.prototype, "request", void 0);
    return PostAuthorizableKeystoreRequest;
}(SpeakeasyBase));
export { PostAuthorizableKeystoreRequest };
var PostAuthorizableKeystoreResponse = /** @class */ (function (_super) {
    __extends(PostAuthorizableKeystoreResponse, _super);
    function PostAuthorizableKeystoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAuthorizableKeystoreResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAuthorizableKeystoreResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAuthorizableKeystoreResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAuthorizableKeystoreResponse.prototype, "postAuthorizableKeystoreDefaultTextPlainString", void 0);
    return PostAuthorizableKeystoreResponse;
}(SpeakeasyBase));
export { PostAuthorizableKeystoreResponse };
