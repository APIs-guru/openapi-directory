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
export var PostSetInstanceHealthActionEnum;
(function (PostSetInstanceHealthActionEnum) {
    PostSetInstanceHealthActionEnum["SetInstanceHealth"] = "SetInstanceHealth";
})(PostSetInstanceHealthActionEnum || (PostSetInstanceHealthActionEnum = {}));
export var PostSetInstanceHealthVersionEnum;
(function (PostSetInstanceHealthVersionEnum) {
    PostSetInstanceHealthVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostSetInstanceHealthVersionEnum || (PostSetInstanceHealthVersionEnum = {}));
var PostSetInstanceHealthQueryParams = /** @class */ (function (_super) {
    __extends(PostSetInstanceHealthQueryParams, _super);
    function PostSetInstanceHealthQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSetInstanceHealthQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSetInstanceHealthQueryParams.prototype, "version", void 0);
    return PostSetInstanceHealthQueryParams;
}(SpeakeasyBase));
export { PostSetInstanceHealthQueryParams };
var PostSetInstanceHealthHeaders = /** @class */ (function (_super) {
    __extends(PostSetInstanceHealthHeaders, _super);
    function PostSetInstanceHealthHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSetInstanceHealthHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSetInstanceHealthHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSetInstanceHealthHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSetInstanceHealthHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSetInstanceHealthHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSetInstanceHealthHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSetInstanceHealthHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSetInstanceHealthHeaders;
}(SpeakeasyBase));
export { PostSetInstanceHealthHeaders };
var PostSetInstanceHealthRequest = /** @class */ (function (_super) {
    __extends(PostSetInstanceHealthRequest, _super);
    function PostSetInstanceHealthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetInstanceHealthQueryParams)
    ], PostSetInstanceHealthRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetInstanceHealthHeaders)
    ], PostSetInstanceHealthRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSetInstanceHealthRequest.prototype, "request", void 0);
    return PostSetInstanceHealthRequest;
}(SpeakeasyBase));
export { PostSetInstanceHealthRequest };
var PostSetInstanceHealthResponse = /** @class */ (function (_super) {
    __extends(PostSetInstanceHealthResponse, _super);
    function PostSetInstanceHealthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostSetInstanceHealthResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetInstanceHealthResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetInstanceHealthResponse.prototype, "statusCode", void 0);
    return PostSetInstanceHealthResponse;
}(SpeakeasyBase));
export { PostSetInstanceHealthResponse };
