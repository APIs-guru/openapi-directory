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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var PostRegisterTargetsActionEnum;
(function (PostRegisterTargetsActionEnum) {
    PostRegisterTargetsActionEnum["RegisterTargets"] = "RegisterTargets";
})(PostRegisterTargetsActionEnum || (PostRegisterTargetsActionEnum = {}));
export var PostRegisterTargetsVersionEnum;
(function (PostRegisterTargetsVersionEnum) {
    PostRegisterTargetsVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(PostRegisterTargetsVersionEnum || (PostRegisterTargetsVersionEnum = {}));
var PostRegisterTargetsQueryParams = /** @class */ (function (_super) {
    __extends(PostRegisterTargetsQueryParams, _super);
    function PostRegisterTargetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRegisterTargetsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRegisterTargetsQueryParams.prototype, "version", void 0);
    return PostRegisterTargetsQueryParams;
}(SpeakeasyBase));
export { PostRegisterTargetsQueryParams };
var PostRegisterTargetsHeaders = /** @class */ (function (_super) {
    __extends(PostRegisterTargetsHeaders, _super);
    function PostRegisterTargetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRegisterTargetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRegisterTargetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRegisterTargetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRegisterTargetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRegisterTargetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRegisterTargetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRegisterTargetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRegisterTargetsHeaders;
}(SpeakeasyBase));
export { PostRegisterTargetsHeaders };
var PostRegisterTargetsRequest = /** @class */ (function (_super) {
    __extends(PostRegisterTargetsRequest, _super);
    function PostRegisterTargetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRegisterTargetsQueryParams)
    ], PostRegisterTargetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRegisterTargetsHeaders)
    ], PostRegisterTargetsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRegisterTargetsRequest.prototype, "request", void 0);
    return PostRegisterTargetsRequest;
}(SpeakeasyBase));
export { PostRegisterTargetsRequest };
var PostRegisterTargetsResponse = /** @class */ (function (_super) {
    __extends(PostRegisterTargetsResponse, _super);
    function PostRegisterTargetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostRegisterTargetsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRegisterTargetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRegisterTargetsResponse.prototype, "statusCode", void 0);
    return PostRegisterTargetsResponse;
}(SpeakeasyBase));
export { PostRegisterTargetsResponse };
