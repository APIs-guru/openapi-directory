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
export var PostAllocateHostsActionEnum;
(function (PostAllocateHostsActionEnum) {
    PostAllocateHostsActionEnum["AllocateHosts"] = "AllocateHosts";
})(PostAllocateHostsActionEnum || (PostAllocateHostsActionEnum = {}));
export var PostAllocateHostsVersionEnum;
(function (PostAllocateHostsVersionEnum) {
    PostAllocateHostsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostAllocateHostsVersionEnum || (PostAllocateHostsVersionEnum = {}));
var PostAllocateHostsQueryParams = /** @class */ (function (_super) {
    __extends(PostAllocateHostsQueryParams, _super);
    function PostAllocateHostsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAllocateHostsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAllocateHostsQueryParams.prototype, "version", void 0);
    return PostAllocateHostsQueryParams;
}(SpeakeasyBase));
export { PostAllocateHostsQueryParams };
var PostAllocateHostsHeaders = /** @class */ (function (_super) {
    __extends(PostAllocateHostsHeaders, _super);
    function PostAllocateHostsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAllocateHostsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAllocateHostsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAllocateHostsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAllocateHostsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAllocateHostsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAllocateHostsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAllocateHostsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAllocateHostsHeaders;
}(SpeakeasyBase));
export { PostAllocateHostsHeaders };
var PostAllocateHostsRequest = /** @class */ (function (_super) {
    __extends(PostAllocateHostsRequest, _super);
    function PostAllocateHostsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAllocateHostsQueryParams)
    ], PostAllocateHostsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAllocateHostsHeaders)
    ], PostAllocateHostsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAllocateHostsRequest.prototype, "request", void 0);
    return PostAllocateHostsRequest;
}(SpeakeasyBase));
export { PostAllocateHostsRequest };
var PostAllocateHostsResponse = /** @class */ (function (_super) {
    __extends(PostAllocateHostsResponse, _super);
    function PostAllocateHostsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAllocateHostsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAllocateHostsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAllocateHostsResponse.prototype, "statusCode", void 0);
    return PostAllocateHostsResponse;
}(SpeakeasyBase));
export { PostAllocateHostsResponse };
