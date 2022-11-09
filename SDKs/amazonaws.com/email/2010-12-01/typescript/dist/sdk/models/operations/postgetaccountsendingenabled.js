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
export var PostGetAccountSendingEnabledActionEnum;
(function (PostGetAccountSendingEnabledActionEnum) {
    PostGetAccountSendingEnabledActionEnum["GetAccountSendingEnabled"] = "GetAccountSendingEnabled";
})(PostGetAccountSendingEnabledActionEnum || (PostGetAccountSendingEnabledActionEnum = {}));
export var PostGetAccountSendingEnabledVersionEnum;
(function (PostGetAccountSendingEnabledVersionEnum) {
    PostGetAccountSendingEnabledVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostGetAccountSendingEnabledVersionEnum || (PostGetAccountSendingEnabledVersionEnum = {}));
var PostGetAccountSendingEnabledQueryParams = /** @class */ (function (_super) {
    __extends(PostGetAccountSendingEnabledQueryParams, _super);
    function PostGetAccountSendingEnabledQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetAccountSendingEnabledQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetAccountSendingEnabledQueryParams.prototype, "version", void 0);
    return PostGetAccountSendingEnabledQueryParams;
}(SpeakeasyBase));
export { PostGetAccountSendingEnabledQueryParams };
var PostGetAccountSendingEnabledHeaders = /** @class */ (function (_super) {
    __extends(PostGetAccountSendingEnabledHeaders, _super);
    function PostGetAccountSendingEnabledHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetAccountSendingEnabledHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetAccountSendingEnabledHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetAccountSendingEnabledHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetAccountSendingEnabledHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetAccountSendingEnabledHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetAccountSendingEnabledHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetAccountSendingEnabledHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetAccountSendingEnabledHeaders;
}(SpeakeasyBase));
export { PostGetAccountSendingEnabledHeaders };
var PostGetAccountSendingEnabledRequest = /** @class */ (function (_super) {
    __extends(PostGetAccountSendingEnabledRequest, _super);
    function PostGetAccountSendingEnabledRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetAccountSendingEnabledQueryParams)
    ], PostGetAccountSendingEnabledRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetAccountSendingEnabledHeaders)
    ], PostGetAccountSendingEnabledRequest.prototype, "headers", void 0);
    return PostGetAccountSendingEnabledRequest;
}(SpeakeasyBase));
export { PostGetAccountSendingEnabledRequest };
var PostGetAccountSendingEnabledResponse = /** @class */ (function (_super) {
    __extends(PostGetAccountSendingEnabledResponse, _super);
    function PostGetAccountSendingEnabledResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetAccountSendingEnabledResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostGetAccountSendingEnabledResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostGetAccountSendingEnabledResponse.prototype, "statusCode", void 0);
    return PostGetAccountSendingEnabledResponse;
}(SpeakeasyBase));
export { PostGetAccountSendingEnabledResponse };
