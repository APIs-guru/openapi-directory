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
export var PostTestFailoverActionEnum;
(function (PostTestFailoverActionEnum) {
    PostTestFailoverActionEnum["TestFailover"] = "TestFailover";
})(PostTestFailoverActionEnum || (PostTestFailoverActionEnum = {}));
export var PostTestFailoverVersionEnum;
(function (PostTestFailoverVersionEnum) {
    PostTestFailoverVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostTestFailoverVersionEnum || (PostTestFailoverVersionEnum = {}));
var PostTestFailoverQueryParams = /** @class */ (function (_super) {
    __extends(PostTestFailoverQueryParams, _super);
    function PostTestFailoverQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostTestFailoverQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostTestFailoverQueryParams.prototype, "version", void 0);
    return PostTestFailoverQueryParams;
}(SpeakeasyBase));
export { PostTestFailoverQueryParams };
var PostTestFailoverHeaders = /** @class */ (function (_super) {
    __extends(PostTestFailoverHeaders, _super);
    function PostTestFailoverHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostTestFailoverHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostTestFailoverHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostTestFailoverHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostTestFailoverHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostTestFailoverHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostTestFailoverHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostTestFailoverHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostTestFailoverHeaders;
}(SpeakeasyBase));
export { PostTestFailoverHeaders };
var PostTestFailoverRequest = /** @class */ (function (_super) {
    __extends(PostTestFailoverRequest, _super);
    function PostTestFailoverRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTestFailoverQueryParams)
    ], PostTestFailoverRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTestFailoverHeaders)
    ], PostTestFailoverRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostTestFailoverRequest.prototype, "request", void 0);
    return PostTestFailoverRequest;
}(SpeakeasyBase));
export { PostTestFailoverRequest };
var PostTestFailoverResponse = /** @class */ (function (_super) {
    __extends(PostTestFailoverResponse, _super);
    function PostTestFailoverResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostTestFailoverResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTestFailoverResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTestFailoverResponse.prototype, "statusCode", void 0);
    return PostTestFailoverResponse;
}(SpeakeasyBase));
export { PostTestFailoverResponse };
