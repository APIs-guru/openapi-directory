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
var PostSetupBeneficiarySecurityOption1 = /** @class */ (function (_super) {
    __extends(PostSetupBeneficiarySecurityOption1, _super);
    function PostSetupBeneficiarySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostSetupBeneficiarySecurityOption1.prototype, "basicAuth", void 0);
    return PostSetupBeneficiarySecurityOption1;
}(SpeakeasyBase));
export { PostSetupBeneficiarySecurityOption1 };
var PostSetupBeneficiarySecurityOption2 = /** @class */ (function (_super) {
    __extends(PostSetupBeneficiarySecurityOption2, _super);
    function PostSetupBeneficiarySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostSetupBeneficiarySecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostSetupBeneficiarySecurityOption2;
}(SpeakeasyBase));
export { PostSetupBeneficiarySecurityOption2 };
var PostSetupBeneficiarySecurity = /** @class */ (function (_super) {
    __extends(PostSetupBeneficiarySecurity, _super);
    function PostSetupBeneficiarySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostSetupBeneficiarySecurityOption1)
    ], PostSetupBeneficiarySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostSetupBeneficiarySecurityOption2)
    ], PostSetupBeneficiarySecurity.prototype, "option2", void 0);
    return PostSetupBeneficiarySecurity;
}(SpeakeasyBase));
export { PostSetupBeneficiarySecurity };
var PostSetupBeneficiaryRequest = /** @class */ (function (_super) {
    __extends(PostSetupBeneficiaryRequest, _super);
    function PostSetupBeneficiaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostSetupBeneficiaryRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostSetupBeneficiarySecurity)
    ], PostSetupBeneficiaryRequest.prototype, "security", void 0);
    return PostSetupBeneficiaryRequest;
}(SpeakeasyBase));
export { PostSetupBeneficiaryRequest };
var PostSetupBeneficiaryResponse = /** @class */ (function (_super) {
    __extends(PostSetupBeneficiaryResponse, _super);
    function PostSetupBeneficiaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostSetupBeneficiaryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostSetupBeneficiaryResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostSetupBeneficiaryResponse.prototype, "setupBeneficiaryResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostSetupBeneficiaryResponse.prototype, "statusCode", void 0);
    return PostSetupBeneficiaryResponse;
}(SpeakeasyBase));
export { PostSetupBeneficiaryResponse };
