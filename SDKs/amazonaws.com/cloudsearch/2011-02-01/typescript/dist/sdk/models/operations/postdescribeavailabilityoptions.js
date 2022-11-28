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
export var PostDescribeAvailabilityOptionsActionEnum;
(function (PostDescribeAvailabilityOptionsActionEnum) {
    PostDescribeAvailabilityOptionsActionEnum["DescribeAvailabilityOptions"] = "DescribeAvailabilityOptions";
})(PostDescribeAvailabilityOptionsActionEnum || (PostDescribeAvailabilityOptionsActionEnum = {}));
export var PostDescribeAvailabilityOptionsVersionEnum;
(function (PostDescribeAvailabilityOptionsVersionEnum) {
    PostDescribeAvailabilityOptionsVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(PostDescribeAvailabilityOptionsVersionEnum || (PostDescribeAvailabilityOptionsVersionEnum = {}));
var PostDescribeAvailabilityOptionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeAvailabilityOptionsQueryParams, _super);
    function PostDescribeAvailabilityOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeAvailabilityOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeAvailabilityOptionsQueryParams.prototype, "version", void 0);
    return PostDescribeAvailabilityOptionsQueryParams;
}(SpeakeasyBase));
export { PostDescribeAvailabilityOptionsQueryParams };
var PostDescribeAvailabilityOptionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeAvailabilityOptionsHeaders, _super);
    function PostDescribeAvailabilityOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeAvailabilityOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeAvailabilityOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeAvailabilityOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeAvailabilityOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeAvailabilityOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeAvailabilityOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeAvailabilityOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeAvailabilityOptionsHeaders;
}(SpeakeasyBase));
export { PostDescribeAvailabilityOptionsHeaders };
var PostDescribeAvailabilityOptionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeAvailabilityOptionsRequest, _super);
    function PostDescribeAvailabilityOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeAvailabilityOptionsQueryParams)
    ], PostDescribeAvailabilityOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeAvailabilityOptionsHeaders)
    ], PostDescribeAvailabilityOptionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAvailabilityOptionsRequest.prototype, "request", void 0);
    return PostDescribeAvailabilityOptionsRequest;
}(SpeakeasyBase));
export { PostDescribeAvailabilityOptionsRequest };
var PostDescribeAvailabilityOptionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeAvailabilityOptionsResponse, _super);
    function PostDescribeAvailabilityOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAvailabilityOptionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeAvailabilityOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeAvailabilityOptionsResponse.prototype, "statusCode", void 0);
    return PostDescribeAvailabilityOptionsResponse;
}(SpeakeasyBase));
export { PostDescribeAvailabilityOptionsResponse };
