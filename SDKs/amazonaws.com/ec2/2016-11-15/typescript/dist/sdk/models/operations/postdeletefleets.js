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
export var PostDeleteFleetsActionEnum;
(function (PostDeleteFleetsActionEnum) {
    PostDeleteFleetsActionEnum["DeleteFleets"] = "DeleteFleets";
})(PostDeleteFleetsActionEnum || (PostDeleteFleetsActionEnum = {}));
export var PostDeleteFleetsVersionEnum;
(function (PostDeleteFleetsVersionEnum) {
    PostDeleteFleetsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDeleteFleetsVersionEnum || (PostDeleteFleetsVersionEnum = {}));
var PostDeleteFleetsQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteFleetsQueryParams, _super);
    function PostDeleteFleetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteFleetsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteFleetsQueryParams.prototype, "version", void 0);
    return PostDeleteFleetsQueryParams;
}(SpeakeasyBase));
export { PostDeleteFleetsQueryParams };
var PostDeleteFleetsHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteFleetsHeaders, _super);
    function PostDeleteFleetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteFleetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteFleetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteFleetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteFleetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteFleetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteFleetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteFleetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteFleetsHeaders;
}(SpeakeasyBase));
export { PostDeleteFleetsHeaders };
var PostDeleteFleetsRequest = /** @class */ (function (_super) {
    __extends(PostDeleteFleetsRequest, _super);
    function PostDeleteFleetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteFleetsQueryParams)
    ], PostDeleteFleetsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteFleetsHeaders)
    ], PostDeleteFleetsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteFleetsRequest.prototype, "request", void 0);
    return PostDeleteFleetsRequest;
}(SpeakeasyBase));
export { PostDeleteFleetsRequest };
var PostDeleteFleetsResponse = /** @class */ (function (_super) {
    __extends(PostDeleteFleetsResponse, _super);
    function PostDeleteFleetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteFleetsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteFleetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteFleetsResponse.prototype, "statusCode", void 0);
    return PostDeleteFleetsResponse;
}(SpeakeasyBase));
export { PostDeleteFleetsResponse };
