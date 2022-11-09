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
var PostGetTaxFormSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostGetTaxFormSecurityOption1, _super);
    function PostGetTaxFormSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostGetTaxFormSecurityOption1.prototype, "basicAuth", void 0);
    return PostGetTaxFormSecurityOption1;
}(SpeakeasyBase));
export { PostGetTaxFormSecurityOption1 };
var PostGetTaxFormSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostGetTaxFormSecurityOption2, _super);
    function PostGetTaxFormSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostGetTaxFormSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostGetTaxFormSecurityOption2;
}(SpeakeasyBase));
export { PostGetTaxFormSecurityOption2 };
var PostGetTaxFormSecurity = /** @class */ (function (_super) {
    __extends(PostGetTaxFormSecurity, _super);
    function PostGetTaxFormSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostGetTaxFormSecurityOption1)
    ], PostGetTaxFormSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostGetTaxFormSecurityOption2)
    ], PostGetTaxFormSecurity.prototype, "option2", void 0);
    return PostGetTaxFormSecurity;
}(SpeakeasyBase));
export { PostGetTaxFormSecurity };
var PostGetTaxFormRequest = /** @class */ (function (_super) {
    __extends(PostGetTaxFormRequest, _super);
    function PostGetTaxFormRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostGetTaxFormRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetTaxFormSecurity)
    ], PostGetTaxFormRequest.prototype, "security", void 0);
    return PostGetTaxFormRequest;
}(SpeakeasyBase));
export { PostGetTaxFormRequest };
var PostGetTaxFormResponse = /** @class */ (function (_super) {
    __extends(PostGetTaxFormResponse, _super);
    function PostGetTaxFormResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostGetTaxFormResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostGetTaxFormResponse.prototype, "getTaxFormResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostGetTaxFormResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostGetTaxFormResponse.prototype, "statusCode", void 0);
    return PostGetTaxFormResponse;
}(SpeakeasyBase));
export { PostGetTaxFormResponse };
