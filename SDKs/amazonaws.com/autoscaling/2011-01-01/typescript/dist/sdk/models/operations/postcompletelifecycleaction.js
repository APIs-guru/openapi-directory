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
export var PostCompleteLifecycleActionActionEnum;
(function (PostCompleteLifecycleActionActionEnum) {
    PostCompleteLifecycleActionActionEnum["CompleteLifecycleAction"] = "CompleteLifecycleAction";
})(PostCompleteLifecycleActionActionEnum || (PostCompleteLifecycleActionActionEnum = {}));
export var PostCompleteLifecycleActionVersionEnum;
(function (PostCompleteLifecycleActionVersionEnum) {
    PostCompleteLifecycleActionVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostCompleteLifecycleActionVersionEnum || (PostCompleteLifecycleActionVersionEnum = {}));
var PostCompleteLifecycleActionQueryParams = /** @class */ (function (_super) {
    __extends(PostCompleteLifecycleActionQueryParams, _super);
    function PostCompleteLifecycleActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCompleteLifecycleActionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCompleteLifecycleActionQueryParams.prototype, "version", void 0);
    return PostCompleteLifecycleActionQueryParams;
}(SpeakeasyBase));
export { PostCompleteLifecycleActionQueryParams };
var PostCompleteLifecycleActionHeaders = /** @class */ (function (_super) {
    __extends(PostCompleteLifecycleActionHeaders, _super);
    function PostCompleteLifecycleActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCompleteLifecycleActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCompleteLifecycleActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCompleteLifecycleActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCompleteLifecycleActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCompleteLifecycleActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCompleteLifecycleActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCompleteLifecycleActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCompleteLifecycleActionHeaders;
}(SpeakeasyBase));
export { PostCompleteLifecycleActionHeaders };
var PostCompleteLifecycleActionRequest = /** @class */ (function (_super) {
    __extends(PostCompleteLifecycleActionRequest, _super);
    function PostCompleteLifecycleActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCompleteLifecycleActionQueryParams)
    ], PostCompleteLifecycleActionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCompleteLifecycleActionHeaders)
    ], PostCompleteLifecycleActionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCompleteLifecycleActionRequest.prototype, "request", void 0);
    return PostCompleteLifecycleActionRequest;
}(SpeakeasyBase));
export { PostCompleteLifecycleActionRequest };
var PostCompleteLifecycleActionResponse = /** @class */ (function (_super) {
    __extends(PostCompleteLifecycleActionResponse, _super);
    function PostCompleteLifecycleActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCompleteLifecycleActionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCompleteLifecycleActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCompleteLifecycleActionResponse.prototype, "statusCode", void 0);
    return PostCompleteLifecycleActionResponse;
}(SpeakeasyBase));
export { PostCompleteLifecycleActionResponse };
