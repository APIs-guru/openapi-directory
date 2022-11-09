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
var PostRefundFundsTransferSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostRefundFundsTransferSecurityOption1, _super);
    function PostRefundFundsTransferSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostRefundFundsTransferSecurityOption1.prototype, "basicAuth", void 0);
    return PostRefundFundsTransferSecurityOption1;
}(SpeakeasyBase));
export { PostRefundFundsTransferSecurityOption1 };
var PostRefundFundsTransferSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostRefundFundsTransferSecurityOption2, _super);
    function PostRefundFundsTransferSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostRefundFundsTransferSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostRefundFundsTransferSecurityOption2;
}(SpeakeasyBase));
export { PostRefundFundsTransferSecurityOption2 };
var PostRefundFundsTransferSecurity = /** @class */ (function (_super) {
    __extends(PostRefundFundsTransferSecurity, _super);
    function PostRefundFundsTransferSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostRefundFundsTransferSecurityOption1)
    ], PostRefundFundsTransferSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostRefundFundsTransferSecurityOption2)
    ], PostRefundFundsTransferSecurity.prototype, "option2", void 0);
    return PostRefundFundsTransferSecurity;
}(SpeakeasyBase));
export { PostRefundFundsTransferSecurity };
var PostRefundFundsTransferRequest = /** @class */ (function (_super) {
    __extends(PostRefundFundsTransferRequest, _super);
    function PostRefundFundsTransferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostRefundFundsTransferRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostRefundFundsTransferSecurity)
    ], PostRefundFundsTransferRequest.prototype, "security", void 0);
    return PostRefundFundsTransferRequest;
}(SpeakeasyBase));
export { PostRefundFundsTransferRequest };
var PostRefundFundsTransferResponse = /** @class */ (function (_super) {
    __extends(PostRefundFundsTransferResponse, _super);
    function PostRefundFundsTransferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostRefundFundsTransferResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostRefundFundsTransferResponse.prototype, "refundFundsTransferResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostRefundFundsTransferResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostRefundFundsTransferResponse.prototype, "statusCode", void 0);
    return PostRefundFundsTransferResponse;
}(SpeakeasyBase));
export { PostRefundFundsTransferResponse };
