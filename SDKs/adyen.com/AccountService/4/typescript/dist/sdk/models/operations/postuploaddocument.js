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
var PostUploadDocumentSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostUploadDocumentSecurityOption1, _super);
    function PostUploadDocumentSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostUploadDocumentSecurityOption1.prototype, "basicAuth", void 0);
    return PostUploadDocumentSecurityOption1;
}(SpeakeasyBase));
export { PostUploadDocumentSecurityOption1 };
var PostUploadDocumentSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostUploadDocumentSecurityOption2, _super);
    function PostUploadDocumentSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostUploadDocumentSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostUploadDocumentSecurityOption2;
}(SpeakeasyBase));
export { PostUploadDocumentSecurityOption2 };
var PostUploadDocumentSecurity = /** @class */ (function (_super) {
    __extends(PostUploadDocumentSecurity, _super);
    function PostUploadDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostUploadDocumentSecurityOption1)
    ], PostUploadDocumentSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostUploadDocumentSecurityOption2)
    ], PostUploadDocumentSecurity.prototype, "option2", void 0);
    return PostUploadDocumentSecurity;
}(SpeakeasyBase));
export { PostUploadDocumentSecurity };
var PostUploadDocumentRequest = /** @class */ (function (_super) {
    __extends(PostUploadDocumentRequest, _super);
    function PostUploadDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostUploadDocumentRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUploadDocumentSecurity)
    ], PostUploadDocumentRequest.prototype, "security", void 0);
    return PostUploadDocumentRequest;
}(SpeakeasyBase));
export { PostUploadDocumentRequest };
var PostUploadDocumentResponse = /** @class */ (function (_super) {
    __extends(PostUploadDocumentResponse, _super);
    function PostUploadDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUploadDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostUploadDocumentResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUploadDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostUploadDocumentResponse.prototype, "updateAccountHolderResponse", void 0);
    return PostUploadDocumentResponse;
}(SpeakeasyBase));
export { PostUploadDocumentResponse };
