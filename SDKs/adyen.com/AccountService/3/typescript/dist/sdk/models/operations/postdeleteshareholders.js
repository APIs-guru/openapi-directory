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
var PostDeleteShareholdersSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostDeleteShareholdersSecurityOption1, _super);
    function PostDeleteShareholdersSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostDeleteShareholdersSecurityOption1.prototype, "basicAuth", void 0);
    return PostDeleteShareholdersSecurityOption1;
}(SpeakeasyBase));
export { PostDeleteShareholdersSecurityOption1 };
var PostDeleteShareholdersSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostDeleteShareholdersSecurityOption2, _super);
    function PostDeleteShareholdersSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostDeleteShareholdersSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostDeleteShareholdersSecurityOption2;
}(SpeakeasyBase));
export { PostDeleteShareholdersSecurityOption2 };
var PostDeleteShareholdersSecurity = /** @class */ (function (_super) {
    __extends(PostDeleteShareholdersSecurity, _super);
    function PostDeleteShareholdersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostDeleteShareholdersSecurityOption1)
    ], PostDeleteShareholdersSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostDeleteShareholdersSecurityOption2)
    ], PostDeleteShareholdersSecurity.prototype, "option2", void 0);
    return PostDeleteShareholdersSecurity;
}(SpeakeasyBase));
export { PostDeleteShareholdersSecurity };
var PostDeleteShareholdersRequest = /** @class */ (function (_super) {
    __extends(PostDeleteShareholdersRequest, _super);
    function PostDeleteShareholdersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostDeleteShareholdersRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteShareholdersSecurity)
    ], PostDeleteShareholdersRequest.prototype, "security", void 0);
    return PostDeleteShareholdersRequest;
}(SpeakeasyBase));
export { PostDeleteShareholdersRequest };
var PostDeleteShareholdersResponse = /** @class */ (function (_super) {
    __extends(PostDeleteShareholdersResponse, _super);
    function PostDeleteShareholdersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteShareholdersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostDeleteShareholdersResponse.prototype, "genericResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostDeleteShareholdersResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteShareholdersResponse.prototype, "statusCode", void 0);
    return PostDeleteShareholdersResponse;
}(SpeakeasyBase));
export { PostDeleteShareholdersResponse };
