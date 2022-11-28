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
export var PostDeregisterTargetsActionEnum;
(function (PostDeregisterTargetsActionEnum) {
    PostDeregisterTargetsActionEnum["DeregisterTargets"] = "DeregisterTargets";
})(PostDeregisterTargetsActionEnum || (PostDeregisterTargetsActionEnum = {}));
export var PostDeregisterTargetsVersionEnum;
(function (PostDeregisterTargetsVersionEnum) {
    PostDeregisterTargetsVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(PostDeregisterTargetsVersionEnum || (PostDeregisterTargetsVersionEnum = {}));
var PostDeregisterTargetsQueryParams = /** @class */ (function (_super) {
    __extends(PostDeregisterTargetsQueryParams, _super);
    function PostDeregisterTargetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeregisterTargetsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeregisterTargetsQueryParams.prototype, "version", void 0);
    return PostDeregisterTargetsQueryParams;
}(SpeakeasyBase));
export { PostDeregisterTargetsQueryParams };
var PostDeregisterTargetsHeaders = /** @class */ (function (_super) {
    __extends(PostDeregisterTargetsHeaders, _super);
    function PostDeregisterTargetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeregisterTargetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeregisterTargetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeregisterTargetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeregisterTargetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeregisterTargetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeregisterTargetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeregisterTargetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeregisterTargetsHeaders;
}(SpeakeasyBase));
export { PostDeregisterTargetsHeaders };
var PostDeregisterTargetsRequest = /** @class */ (function (_super) {
    __extends(PostDeregisterTargetsRequest, _super);
    function PostDeregisterTargetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeregisterTargetsQueryParams)
    ], PostDeregisterTargetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeregisterTargetsHeaders)
    ], PostDeregisterTargetsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeregisterTargetsRequest.prototype, "request", void 0);
    return PostDeregisterTargetsRequest;
}(SpeakeasyBase));
export { PostDeregisterTargetsRequest };
var PostDeregisterTargetsResponse = /** @class */ (function (_super) {
    __extends(PostDeregisterTargetsResponse, _super);
    function PostDeregisterTargetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeregisterTargetsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeregisterTargetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeregisterTargetsResponse.prototype, "statusCode", void 0);
    return PostDeregisterTargetsResponse;
}(SpeakeasyBase));
export { PostDeregisterTargetsResponse };
