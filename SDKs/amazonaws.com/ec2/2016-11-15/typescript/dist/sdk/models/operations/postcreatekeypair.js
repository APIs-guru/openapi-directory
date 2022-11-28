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
export var PostCreateKeyPairActionEnum;
(function (PostCreateKeyPairActionEnum) {
    PostCreateKeyPairActionEnum["CreateKeyPair"] = "CreateKeyPair";
})(PostCreateKeyPairActionEnum || (PostCreateKeyPairActionEnum = {}));
export var PostCreateKeyPairVersionEnum;
(function (PostCreateKeyPairVersionEnum) {
    PostCreateKeyPairVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateKeyPairVersionEnum || (PostCreateKeyPairVersionEnum = {}));
var PostCreateKeyPairQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateKeyPairQueryParams, _super);
    function PostCreateKeyPairQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateKeyPairQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateKeyPairQueryParams.prototype, "version", void 0);
    return PostCreateKeyPairQueryParams;
}(SpeakeasyBase));
export { PostCreateKeyPairQueryParams };
var PostCreateKeyPairHeaders = /** @class */ (function (_super) {
    __extends(PostCreateKeyPairHeaders, _super);
    function PostCreateKeyPairHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateKeyPairHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateKeyPairHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateKeyPairHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateKeyPairHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateKeyPairHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateKeyPairHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateKeyPairHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateKeyPairHeaders;
}(SpeakeasyBase));
export { PostCreateKeyPairHeaders };
var PostCreateKeyPairRequest = /** @class */ (function (_super) {
    __extends(PostCreateKeyPairRequest, _super);
    function PostCreateKeyPairRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateKeyPairQueryParams)
    ], PostCreateKeyPairRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateKeyPairHeaders)
    ], PostCreateKeyPairRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateKeyPairRequest.prototype, "request", void 0);
    return PostCreateKeyPairRequest;
}(SpeakeasyBase));
export { PostCreateKeyPairRequest };
var PostCreateKeyPairResponse = /** @class */ (function (_super) {
    __extends(PostCreateKeyPairResponse, _super);
    function PostCreateKeyPairResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateKeyPairResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateKeyPairResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateKeyPairResponse.prototype, "statusCode", void 0);
    return PostCreateKeyPairResponse;
}(SpeakeasyBase));
export { PostCreateKeyPairResponse };
