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
export var PostDescribeSuggestersActionEnum;
(function (PostDescribeSuggestersActionEnum) {
    PostDescribeSuggestersActionEnum["DescribeSuggesters"] = "DescribeSuggesters";
})(PostDescribeSuggestersActionEnum || (PostDescribeSuggestersActionEnum = {}));
export var PostDescribeSuggestersVersionEnum;
(function (PostDescribeSuggestersVersionEnum) {
    PostDescribeSuggestersVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(PostDescribeSuggestersVersionEnum || (PostDescribeSuggestersVersionEnum = {}));
var PostDescribeSuggestersQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeSuggestersQueryParams, _super);
    function PostDescribeSuggestersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeSuggestersQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeSuggestersQueryParams.prototype, "version", void 0);
    return PostDescribeSuggestersQueryParams;
}(SpeakeasyBase));
export { PostDescribeSuggestersQueryParams };
var PostDescribeSuggestersHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeSuggestersHeaders, _super);
    function PostDescribeSuggestersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeSuggestersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeSuggestersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeSuggestersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeSuggestersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeSuggestersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeSuggestersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeSuggestersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeSuggestersHeaders;
}(SpeakeasyBase));
export { PostDescribeSuggestersHeaders };
var PostDescribeSuggestersRequest = /** @class */ (function (_super) {
    __extends(PostDescribeSuggestersRequest, _super);
    function PostDescribeSuggestersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeSuggestersQueryParams)
    ], PostDescribeSuggestersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeSuggestersHeaders)
    ], PostDescribeSuggestersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSuggestersRequest.prototype, "request", void 0);
    return PostDescribeSuggestersRequest;
}(SpeakeasyBase));
export { PostDescribeSuggestersRequest };
var PostDescribeSuggestersResponse = /** @class */ (function (_super) {
    __extends(PostDescribeSuggestersResponse, _super);
    function PostDescribeSuggestersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSuggestersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeSuggestersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeSuggestersResponse.prototype, "statusCode", void 0);
    return PostDescribeSuggestersResponse;
}(SpeakeasyBase));
export { PostDescribeSuggestersResponse };
