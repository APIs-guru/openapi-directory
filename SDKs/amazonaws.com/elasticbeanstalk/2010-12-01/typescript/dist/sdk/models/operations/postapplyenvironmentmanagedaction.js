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
export var PostApplyEnvironmentManagedActionActionEnum;
(function (PostApplyEnvironmentManagedActionActionEnum) {
    PostApplyEnvironmentManagedActionActionEnum["ApplyEnvironmentManagedAction"] = "ApplyEnvironmentManagedAction";
})(PostApplyEnvironmentManagedActionActionEnum || (PostApplyEnvironmentManagedActionActionEnum = {}));
export var PostApplyEnvironmentManagedActionVersionEnum;
(function (PostApplyEnvironmentManagedActionVersionEnum) {
    PostApplyEnvironmentManagedActionVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostApplyEnvironmentManagedActionVersionEnum || (PostApplyEnvironmentManagedActionVersionEnum = {}));
var PostApplyEnvironmentManagedActionQueryParams = /** @class */ (function (_super) {
    __extends(PostApplyEnvironmentManagedActionQueryParams, _super);
    function PostApplyEnvironmentManagedActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostApplyEnvironmentManagedActionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostApplyEnvironmentManagedActionQueryParams.prototype, "version", void 0);
    return PostApplyEnvironmentManagedActionQueryParams;
}(SpeakeasyBase));
export { PostApplyEnvironmentManagedActionQueryParams };
var PostApplyEnvironmentManagedActionHeaders = /** @class */ (function (_super) {
    __extends(PostApplyEnvironmentManagedActionHeaders, _super);
    function PostApplyEnvironmentManagedActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostApplyEnvironmentManagedActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostApplyEnvironmentManagedActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostApplyEnvironmentManagedActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostApplyEnvironmentManagedActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostApplyEnvironmentManagedActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostApplyEnvironmentManagedActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostApplyEnvironmentManagedActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostApplyEnvironmentManagedActionHeaders;
}(SpeakeasyBase));
export { PostApplyEnvironmentManagedActionHeaders };
var PostApplyEnvironmentManagedActionRequest = /** @class */ (function (_super) {
    __extends(PostApplyEnvironmentManagedActionRequest, _super);
    function PostApplyEnvironmentManagedActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApplyEnvironmentManagedActionQueryParams)
    ], PostApplyEnvironmentManagedActionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApplyEnvironmentManagedActionHeaders)
    ], PostApplyEnvironmentManagedActionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostApplyEnvironmentManagedActionRequest.prototype, "request", void 0);
    return PostApplyEnvironmentManagedActionRequest;
}(SpeakeasyBase));
export { PostApplyEnvironmentManagedActionRequest };
var PostApplyEnvironmentManagedActionResponse = /** @class */ (function (_super) {
    __extends(PostApplyEnvironmentManagedActionResponse, _super);
    function PostApplyEnvironmentManagedActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostApplyEnvironmentManagedActionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApplyEnvironmentManagedActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApplyEnvironmentManagedActionResponse.prototype, "statusCode", void 0);
    return PostApplyEnvironmentManagedActionResponse;
}(SpeakeasyBase));
export { PostApplyEnvironmentManagedActionResponse };
