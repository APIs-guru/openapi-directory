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
var PostDeletePayoutMethodsSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostDeletePayoutMethodsSecurityOption1, _super);
    function PostDeletePayoutMethodsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostDeletePayoutMethodsSecurityOption1.prototype, "basicAuth", void 0);
    return PostDeletePayoutMethodsSecurityOption1;
}(SpeakeasyBase));
export { PostDeletePayoutMethodsSecurityOption1 };
var PostDeletePayoutMethodsSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostDeletePayoutMethodsSecurityOption2, _super);
    function PostDeletePayoutMethodsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostDeletePayoutMethodsSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostDeletePayoutMethodsSecurityOption2;
}(SpeakeasyBase));
export { PostDeletePayoutMethodsSecurityOption2 };
var PostDeletePayoutMethodsSecurity = /** @class */ (function (_super) {
    __extends(PostDeletePayoutMethodsSecurity, _super);
    function PostDeletePayoutMethodsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostDeletePayoutMethodsSecurityOption1)
    ], PostDeletePayoutMethodsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostDeletePayoutMethodsSecurityOption2)
    ], PostDeletePayoutMethodsSecurity.prototype, "option2", void 0);
    return PostDeletePayoutMethodsSecurity;
}(SpeakeasyBase));
export { PostDeletePayoutMethodsSecurity };
var PostDeletePayoutMethodsRequest = /** @class */ (function (_super) {
    __extends(PostDeletePayoutMethodsRequest, _super);
    function PostDeletePayoutMethodsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostDeletePayoutMethodsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeletePayoutMethodsSecurity)
    ], PostDeletePayoutMethodsRequest.prototype, "security", void 0);
    return PostDeletePayoutMethodsRequest;
}(SpeakeasyBase));
export { PostDeletePayoutMethodsRequest };
var PostDeletePayoutMethodsResponse = /** @class */ (function (_super) {
    __extends(PostDeletePayoutMethodsResponse, _super);
    function PostDeletePayoutMethodsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeletePayoutMethodsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostDeletePayoutMethodsResponse.prototype, "genericResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostDeletePayoutMethodsResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeletePayoutMethodsResponse.prototype, "statusCode", void 0);
    return PostDeletePayoutMethodsResponse;
}(SpeakeasyBase));
export { PostDeletePayoutMethodsResponse };
