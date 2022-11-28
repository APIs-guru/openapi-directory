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
export var PostCreateManagedPrefixListActionEnum;
(function (PostCreateManagedPrefixListActionEnum) {
    PostCreateManagedPrefixListActionEnum["CreateManagedPrefixList"] = "CreateManagedPrefixList";
})(PostCreateManagedPrefixListActionEnum || (PostCreateManagedPrefixListActionEnum = {}));
export var PostCreateManagedPrefixListVersionEnum;
(function (PostCreateManagedPrefixListVersionEnum) {
    PostCreateManagedPrefixListVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateManagedPrefixListVersionEnum || (PostCreateManagedPrefixListVersionEnum = {}));
var PostCreateManagedPrefixListQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateManagedPrefixListQueryParams, _super);
    function PostCreateManagedPrefixListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateManagedPrefixListQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateManagedPrefixListQueryParams.prototype, "version", void 0);
    return PostCreateManagedPrefixListQueryParams;
}(SpeakeasyBase));
export { PostCreateManagedPrefixListQueryParams };
var PostCreateManagedPrefixListHeaders = /** @class */ (function (_super) {
    __extends(PostCreateManagedPrefixListHeaders, _super);
    function PostCreateManagedPrefixListHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateManagedPrefixListHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateManagedPrefixListHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateManagedPrefixListHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateManagedPrefixListHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateManagedPrefixListHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateManagedPrefixListHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateManagedPrefixListHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateManagedPrefixListHeaders;
}(SpeakeasyBase));
export { PostCreateManagedPrefixListHeaders };
var PostCreateManagedPrefixListRequest = /** @class */ (function (_super) {
    __extends(PostCreateManagedPrefixListRequest, _super);
    function PostCreateManagedPrefixListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateManagedPrefixListQueryParams)
    ], PostCreateManagedPrefixListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateManagedPrefixListHeaders)
    ], PostCreateManagedPrefixListRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateManagedPrefixListRequest.prototype, "request", void 0);
    return PostCreateManagedPrefixListRequest;
}(SpeakeasyBase));
export { PostCreateManagedPrefixListRequest };
var PostCreateManagedPrefixListResponse = /** @class */ (function (_super) {
    __extends(PostCreateManagedPrefixListResponse, _super);
    function PostCreateManagedPrefixListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateManagedPrefixListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateManagedPrefixListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateManagedPrefixListResponse.prototype, "statusCode", void 0);
    return PostCreateManagedPrefixListResponse;
}(SpeakeasyBase));
export { PostCreateManagedPrefixListResponse };
