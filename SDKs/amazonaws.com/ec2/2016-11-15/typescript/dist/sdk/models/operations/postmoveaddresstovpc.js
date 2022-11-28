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
export var PostMoveAddressToVpcActionEnum;
(function (PostMoveAddressToVpcActionEnum) {
    PostMoveAddressToVpcActionEnum["MoveAddressToVpc"] = "MoveAddressToVpc";
})(PostMoveAddressToVpcActionEnum || (PostMoveAddressToVpcActionEnum = {}));
export var PostMoveAddressToVpcVersionEnum;
(function (PostMoveAddressToVpcVersionEnum) {
    PostMoveAddressToVpcVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostMoveAddressToVpcVersionEnum || (PostMoveAddressToVpcVersionEnum = {}));
var PostMoveAddressToVpcQueryParams = /** @class */ (function (_super) {
    __extends(PostMoveAddressToVpcQueryParams, _super);
    function PostMoveAddressToVpcQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostMoveAddressToVpcQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostMoveAddressToVpcQueryParams.prototype, "version", void 0);
    return PostMoveAddressToVpcQueryParams;
}(SpeakeasyBase));
export { PostMoveAddressToVpcQueryParams };
var PostMoveAddressToVpcHeaders = /** @class */ (function (_super) {
    __extends(PostMoveAddressToVpcHeaders, _super);
    function PostMoveAddressToVpcHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostMoveAddressToVpcHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostMoveAddressToVpcHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostMoveAddressToVpcHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostMoveAddressToVpcHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostMoveAddressToVpcHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostMoveAddressToVpcHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostMoveAddressToVpcHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostMoveAddressToVpcHeaders;
}(SpeakeasyBase));
export { PostMoveAddressToVpcHeaders };
var PostMoveAddressToVpcRequest = /** @class */ (function (_super) {
    __extends(PostMoveAddressToVpcRequest, _super);
    function PostMoveAddressToVpcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMoveAddressToVpcQueryParams)
    ], PostMoveAddressToVpcRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMoveAddressToVpcHeaders)
    ], PostMoveAddressToVpcRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostMoveAddressToVpcRequest.prototype, "request", void 0);
    return PostMoveAddressToVpcRequest;
}(SpeakeasyBase));
export { PostMoveAddressToVpcRequest };
var PostMoveAddressToVpcResponse = /** @class */ (function (_super) {
    __extends(PostMoveAddressToVpcResponse, _super);
    function PostMoveAddressToVpcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostMoveAddressToVpcResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMoveAddressToVpcResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMoveAddressToVpcResponse.prototype, "statusCode", void 0);
    return PostMoveAddressToVpcResponse;
}(SpeakeasyBase));
export { PostMoveAddressToVpcResponse };
