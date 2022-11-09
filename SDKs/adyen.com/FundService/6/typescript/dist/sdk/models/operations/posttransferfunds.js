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
var PostTransferFundsSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostTransferFundsSecurityOption1, _super);
    function PostTransferFundsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostTransferFundsSecurityOption1.prototype, "basicAuth", void 0);
    return PostTransferFundsSecurityOption1;
}(SpeakeasyBase));
export { PostTransferFundsSecurityOption1 };
var PostTransferFundsSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostTransferFundsSecurityOption2, _super);
    function PostTransferFundsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostTransferFundsSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostTransferFundsSecurityOption2;
}(SpeakeasyBase));
export { PostTransferFundsSecurityOption2 };
var PostTransferFundsSecurity = /** @class */ (function (_super) {
    __extends(PostTransferFundsSecurity, _super);
    function PostTransferFundsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostTransferFundsSecurityOption1)
    ], PostTransferFundsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostTransferFundsSecurityOption2)
    ], PostTransferFundsSecurity.prototype, "option2", void 0);
    return PostTransferFundsSecurity;
}(SpeakeasyBase));
export { PostTransferFundsSecurity };
var PostTransferFundsRequest = /** @class */ (function (_super) {
    __extends(PostTransferFundsRequest, _super);
    function PostTransferFundsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostTransferFundsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostTransferFundsSecurity)
    ], PostTransferFundsRequest.prototype, "security", void 0);
    return PostTransferFundsRequest;
}(SpeakeasyBase));
export { PostTransferFundsRequest };
var PostTransferFundsResponse = /** @class */ (function (_super) {
    __extends(PostTransferFundsResponse, _super);
    function PostTransferFundsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostTransferFundsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostTransferFundsResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostTransferFundsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostTransferFundsResponse.prototype, "transferFundsResponse", void 0);
    return PostTransferFundsResponse;
}(SpeakeasyBase));
export { PostTransferFundsResponse };
