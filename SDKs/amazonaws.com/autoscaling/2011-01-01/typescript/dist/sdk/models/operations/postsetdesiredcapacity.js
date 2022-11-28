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
export var PostSetDesiredCapacityActionEnum;
(function (PostSetDesiredCapacityActionEnum) {
    PostSetDesiredCapacityActionEnum["SetDesiredCapacity"] = "SetDesiredCapacity";
})(PostSetDesiredCapacityActionEnum || (PostSetDesiredCapacityActionEnum = {}));
export var PostSetDesiredCapacityVersionEnum;
(function (PostSetDesiredCapacityVersionEnum) {
    PostSetDesiredCapacityVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostSetDesiredCapacityVersionEnum || (PostSetDesiredCapacityVersionEnum = {}));
var PostSetDesiredCapacityQueryParams = /** @class */ (function (_super) {
    __extends(PostSetDesiredCapacityQueryParams, _super);
    function PostSetDesiredCapacityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSetDesiredCapacityQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSetDesiredCapacityQueryParams.prototype, "version", void 0);
    return PostSetDesiredCapacityQueryParams;
}(SpeakeasyBase));
export { PostSetDesiredCapacityQueryParams };
var PostSetDesiredCapacityHeaders = /** @class */ (function (_super) {
    __extends(PostSetDesiredCapacityHeaders, _super);
    function PostSetDesiredCapacityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSetDesiredCapacityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSetDesiredCapacityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSetDesiredCapacityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSetDesiredCapacityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSetDesiredCapacityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSetDesiredCapacityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSetDesiredCapacityHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSetDesiredCapacityHeaders;
}(SpeakeasyBase));
export { PostSetDesiredCapacityHeaders };
var PostSetDesiredCapacityRequest = /** @class */ (function (_super) {
    __extends(PostSetDesiredCapacityRequest, _super);
    function PostSetDesiredCapacityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetDesiredCapacityQueryParams)
    ], PostSetDesiredCapacityRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetDesiredCapacityHeaders)
    ], PostSetDesiredCapacityRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSetDesiredCapacityRequest.prototype, "request", void 0);
    return PostSetDesiredCapacityRequest;
}(SpeakeasyBase));
export { PostSetDesiredCapacityRequest };
var PostSetDesiredCapacityResponse = /** @class */ (function (_super) {
    __extends(PostSetDesiredCapacityResponse, _super);
    function PostSetDesiredCapacityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostSetDesiredCapacityResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetDesiredCapacityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetDesiredCapacityResponse.prototype, "statusCode", void 0);
    return PostSetDesiredCapacityResponse;
}(SpeakeasyBase));
export { PostSetDesiredCapacityResponse };
