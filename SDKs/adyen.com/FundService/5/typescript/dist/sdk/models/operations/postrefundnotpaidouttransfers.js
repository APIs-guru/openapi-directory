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
var PostRefundNotPaidOutTransfersSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostRefundNotPaidOutTransfersSecurityOption1, _super);
    function PostRefundNotPaidOutTransfersSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostRefundNotPaidOutTransfersSecurityOption1.prototype, "basicAuth", void 0);
    return PostRefundNotPaidOutTransfersSecurityOption1;
}(SpeakeasyBase));
export { PostRefundNotPaidOutTransfersSecurityOption1 };
var PostRefundNotPaidOutTransfersSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostRefundNotPaidOutTransfersSecurityOption2, _super);
    function PostRefundNotPaidOutTransfersSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostRefundNotPaidOutTransfersSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostRefundNotPaidOutTransfersSecurityOption2;
}(SpeakeasyBase));
export { PostRefundNotPaidOutTransfersSecurityOption2 };
var PostRefundNotPaidOutTransfersSecurity = /** @class */ (function (_super) {
    __extends(PostRefundNotPaidOutTransfersSecurity, _super);
    function PostRefundNotPaidOutTransfersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostRefundNotPaidOutTransfersSecurityOption1)
    ], PostRefundNotPaidOutTransfersSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostRefundNotPaidOutTransfersSecurityOption2)
    ], PostRefundNotPaidOutTransfersSecurity.prototype, "option2", void 0);
    return PostRefundNotPaidOutTransfersSecurity;
}(SpeakeasyBase));
export { PostRefundNotPaidOutTransfersSecurity };
var PostRefundNotPaidOutTransfersRequest = /** @class */ (function (_super) {
    __extends(PostRefundNotPaidOutTransfersRequest, _super);
    function PostRefundNotPaidOutTransfersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostRefundNotPaidOutTransfersRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostRefundNotPaidOutTransfersSecurity)
    ], PostRefundNotPaidOutTransfersRequest.prototype, "security", void 0);
    return PostRefundNotPaidOutTransfersRequest;
}(SpeakeasyBase));
export { PostRefundNotPaidOutTransfersRequest };
var PostRefundNotPaidOutTransfersResponse = /** @class */ (function (_super) {
    __extends(PostRefundNotPaidOutTransfersResponse, _super);
    function PostRefundNotPaidOutTransfersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostRefundNotPaidOutTransfersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostRefundNotPaidOutTransfersResponse.prototype, "refundNotPaidOutTransfersResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostRefundNotPaidOutTransfersResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostRefundNotPaidOutTransfersResponse.prototype, "statusCode", void 0);
    return PostRefundNotPaidOutTransfersResponse;
}(SpeakeasyBase));
export { PostRefundNotPaidOutTransfersResponse };
