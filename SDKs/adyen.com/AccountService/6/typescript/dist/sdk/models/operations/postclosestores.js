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
var PostCloseStoresSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostCloseStoresSecurityOption1, _super);
    function PostCloseStoresSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostCloseStoresSecurityOption1.prototype, "basicAuth", void 0);
    return PostCloseStoresSecurityOption1;
}(SpeakeasyBase));
export { PostCloseStoresSecurityOption1 };
var PostCloseStoresSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostCloseStoresSecurityOption2, _super);
    function PostCloseStoresSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostCloseStoresSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostCloseStoresSecurityOption2;
}(SpeakeasyBase));
export { PostCloseStoresSecurityOption2 };
var PostCloseStoresSecurity = /** @class */ (function (_super) {
    __extends(PostCloseStoresSecurity, _super);
    function PostCloseStoresSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCloseStoresSecurityOption1)
    ], PostCloseStoresSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCloseStoresSecurityOption2)
    ], PostCloseStoresSecurity.prototype, "option2", void 0);
    return PostCloseStoresSecurity;
}(SpeakeasyBase));
export { PostCloseStoresSecurity };
var PostCloseStoresRequest = /** @class */ (function (_super) {
    __extends(PostCloseStoresRequest, _super);
    function PostCloseStoresRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostCloseStoresRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCloseStoresSecurity)
    ], PostCloseStoresRequest.prototype, "security", void 0);
    return PostCloseStoresRequest;
}(SpeakeasyBase));
export { PostCloseStoresRequest };
var PostCloseStoresResponse = /** @class */ (function (_super) {
    __extends(PostCloseStoresResponse, _super);
    function PostCloseStoresResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCloseStoresResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostCloseStoresResponse.prototype, "genericResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostCloseStoresResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCloseStoresResponse.prototype, "statusCode", void 0);
    return PostCloseStoresResponse;
}(SpeakeasyBase));
export { PostCloseStoresResponse };
