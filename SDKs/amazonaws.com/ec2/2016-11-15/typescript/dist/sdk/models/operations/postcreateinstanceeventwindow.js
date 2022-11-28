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
export var PostCreateInstanceEventWindowActionEnum;
(function (PostCreateInstanceEventWindowActionEnum) {
    PostCreateInstanceEventWindowActionEnum["CreateInstanceEventWindow"] = "CreateInstanceEventWindow";
})(PostCreateInstanceEventWindowActionEnum || (PostCreateInstanceEventWindowActionEnum = {}));
export var PostCreateInstanceEventWindowVersionEnum;
(function (PostCreateInstanceEventWindowVersionEnum) {
    PostCreateInstanceEventWindowVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateInstanceEventWindowVersionEnum || (PostCreateInstanceEventWindowVersionEnum = {}));
var PostCreateInstanceEventWindowQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateInstanceEventWindowQueryParams, _super);
    function PostCreateInstanceEventWindowQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateInstanceEventWindowQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateInstanceEventWindowQueryParams.prototype, "version", void 0);
    return PostCreateInstanceEventWindowQueryParams;
}(SpeakeasyBase));
export { PostCreateInstanceEventWindowQueryParams };
var PostCreateInstanceEventWindowHeaders = /** @class */ (function (_super) {
    __extends(PostCreateInstanceEventWindowHeaders, _super);
    function PostCreateInstanceEventWindowHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateInstanceEventWindowHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateInstanceEventWindowHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateInstanceEventWindowHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateInstanceEventWindowHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateInstanceEventWindowHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateInstanceEventWindowHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateInstanceEventWindowHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateInstanceEventWindowHeaders;
}(SpeakeasyBase));
export { PostCreateInstanceEventWindowHeaders };
var PostCreateInstanceEventWindowRequest = /** @class */ (function (_super) {
    __extends(PostCreateInstanceEventWindowRequest, _super);
    function PostCreateInstanceEventWindowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateInstanceEventWindowQueryParams)
    ], PostCreateInstanceEventWindowRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateInstanceEventWindowHeaders)
    ], PostCreateInstanceEventWindowRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateInstanceEventWindowRequest.prototype, "request", void 0);
    return PostCreateInstanceEventWindowRequest;
}(SpeakeasyBase));
export { PostCreateInstanceEventWindowRequest };
var PostCreateInstanceEventWindowResponse = /** @class */ (function (_super) {
    __extends(PostCreateInstanceEventWindowResponse, _super);
    function PostCreateInstanceEventWindowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateInstanceEventWindowResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateInstanceEventWindowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateInstanceEventWindowResponse.prototype, "statusCode", void 0);
    return PostCreateInstanceEventWindowResponse;
}(SpeakeasyBase));
export { PostCreateInstanceEventWindowResponse };
