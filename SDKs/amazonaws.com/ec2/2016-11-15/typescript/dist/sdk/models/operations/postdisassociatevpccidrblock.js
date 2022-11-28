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
export var PostDisassociateVpcCidrBlockActionEnum;
(function (PostDisassociateVpcCidrBlockActionEnum) {
    PostDisassociateVpcCidrBlockActionEnum["DisassociateVpcCidrBlock"] = "DisassociateVpcCidrBlock";
})(PostDisassociateVpcCidrBlockActionEnum || (PostDisassociateVpcCidrBlockActionEnum = {}));
export var PostDisassociateVpcCidrBlockVersionEnum;
(function (PostDisassociateVpcCidrBlockVersionEnum) {
    PostDisassociateVpcCidrBlockVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDisassociateVpcCidrBlockVersionEnum || (PostDisassociateVpcCidrBlockVersionEnum = {}));
var PostDisassociateVpcCidrBlockQueryParams = /** @class */ (function (_super) {
    __extends(PostDisassociateVpcCidrBlockQueryParams, _super);
    function PostDisassociateVpcCidrBlockQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDisassociateVpcCidrBlockQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDisassociateVpcCidrBlockQueryParams.prototype, "version", void 0);
    return PostDisassociateVpcCidrBlockQueryParams;
}(SpeakeasyBase));
export { PostDisassociateVpcCidrBlockQueryParams };
var PostDisassociateVpcCidrBlockHeaders = /** @class */ (function (_super) {
    __extends(PostDisassociateVpcCidrBlockHeaders, _super);
    function PostDisassociateVpcCidrBlockHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDisassociateVpcCidrBlockHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDisassociateVpcCidrBlockHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDisassociateVpcCidrBlockHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDisassociateVpcCidrBlockHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDisassociateVpcCidrBlockHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDisassociateVpcCidrBlockHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDisassociateVpcCidrBlockHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDisassociateVpcCidrBlockHeaders;
}(SpeakeasyBase));
export { PostDisassociateVpcCidrBlockHeaders };
var PostDisassociateVpcCidrBlockRequest = /** @class */ (function (_super) {
    __extends(PostDisassociateVpcCidrBlockRequest, _super);
    function PostDisassociateVpcCidrBlockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDisassociateVpcCidrBlockQueryParams)
    ], PostDisassociateVpcCidrBlockRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDisassociateVpcCidrBlockHeaders)
    ], PostDisassociateVpcCidrBlockRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDisassociateVpcCidrBlockRequest.prototype, "request", void 0);
    return PostDisassociateVpcCidrBlockRequest;
}(SpeakeasyBase));
export { PostDisassociateVpcCidrBlockRequest };
var PostDisassociateVpcCidrBlockResponse = /** @class */ (function (_super) {
    __extends(PostDisassociateVpcCidrBlockResponse, _super);
    function PostDisassociateVpcCidrBlockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDisassociateVpcCidrBlockResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDisassociateVpcCidrBlockResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDisassociateVpcCidrBlockResponse.prototype, "statusCode", void 0);
    return PostDisassociateVpcCidrBlockResponse;
}(SpeakeasyBase));
export { PostDisassociateVpcCidrBlockResponse };
