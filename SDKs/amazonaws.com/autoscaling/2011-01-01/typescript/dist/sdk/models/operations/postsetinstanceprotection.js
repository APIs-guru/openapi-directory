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
export var PostSetInstanceProtectionActionEnum;
(function (PostSetInstanceProtectionActionEnum) {
    PostSetInstanceProtectionActionEnum["SetInstanceProtection"] = "SetInstanceProtection";
})(PostSetInstanceProtectionActionEnum || (PostSetInstanceProtectionActionEnum = {}));
export var PostSetInstanceProtectionVersionEnum;
(function (PostSetInstanceProtectionVersionEnum) {
    PostSetInstanceProtectionVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostSetInstanceProtectionVersionEnum || (PostSetInstanceProtectionVersionEnum = {}));
var PostSetInstanceProtectionQueryParams = /** @class */ (function (_super) {
    __extends(PostSetInstanceProtectionQueryParams, _super);
    function PostSetInstanceProtectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSetInstanceProtectionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSetInstanceProtectionQueryParams.prototype, "version", void 0);
    return PostSetInstanceProtectionQueryParams;
}(SpeakeasyBase));
export { PostSetInstanceProtectionQueryParams };
var PostSetInstanceProtectionHeaders = /** @class */ (function (_super) {
    __extends(PostSetInstanceProtectionHeaders, _super);
    function PostSetInstanceProtectionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSetInstanceProtectionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSetInstanceProtectionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSetInstanceProtectionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSetInstanceProtectionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSetInstanceProtectionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSetInstanceProtectionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSetInstanceProtectionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSetInstanceProtectionHeaders;
}(SpeakeasyBase));
export { PostSetInstanceProtectionHeaders };
var PostSetInstanceProtectionRequest = /** @class */ (function (_super) {
    __extends(PostSetInstanceProtectionRequest, _super);
    function PostSetInstanceProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetInstanceProtectionQueryParams)
    ], PostSetInstanceProtectionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetInstanceProtectionHeaders)
    ], PostSetInstanceProtectionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSetInstanceProtectionRequest.prototype, "request", void 0);
    return PostSetInstanceProtectionRequest;
}(SpeakeasyBase));
export { PostSetInstanceProtectionRequest };
var PostSetInstanceProtectionResponse = /** @class */ (function (_super) {
    __extends(PostSetInstanceProtectionResponse, _super);
    function PostSetInstanceProtectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostSetInstanceProtectionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetInstanceProtectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetInstanceProtectionResponse.prototype, "statusCode", void 0);
    return PostSetInstanceProtectionResponse;
}(SpeakeasyBase));
export { PostSetInstanceProtectionResponse };
