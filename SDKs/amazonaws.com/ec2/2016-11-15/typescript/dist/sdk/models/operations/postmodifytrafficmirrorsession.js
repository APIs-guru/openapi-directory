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
export var PostModifyTrafficMirrorSessionActionEnum;
(function (PostModifyTrafficMirrorSessionActionEnum) {
    PostModifyTrafficMirrorSessionActionEnum["ModifyTrafficMirrorSession"] = "ModifyTrafficMirrorSession";
})(PostModifyTrafficMirrorSessionActionEnum || (PostModifyTrafficMirrorSessionActionEnum = {}));
export var PostModifyTrafficMirrorSessionVersionEnum;
(function (PostModifyTrafficMirrorSessionVersionEnum) {
    PostModifyTrafficMirrorSessionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostModifyTrafficMirrorSessionVersionEnum || (PostModifyTrafficMirrorSessionVersionEnum = {}));
var PostModifyTrafficMirrorSessionQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyTrafficMirrorSessionQueryParams, _super);
    function PostModifyTrafficMirrorSessionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyTrafficMirrorSessionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyTrafficMirrorSessionQueryParams.prototype, "version", void 0);
    return PostModifyTrafficMirrorSessionQueryParams;
}(SpeakeasyBase));
export { PostModifyTrafficMirrorSessionQueryParams };
var PostModifyTrafficMirrorSessionHeaders = /** @class */ (function (_super) {
    __extends(PostModifyTrafficMirrorSessionHeaders, _super);
    function PostModifyTrafficMirrorSessionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyTrafficMirrorSessionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyTrafficMirrorSessionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyTrafficMirrorSessionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyTrafficMirrorSessionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyTrafficMirrorSessionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyTrafficMirrorSessionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyTrafficMirrorSessionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyTrafficMirrorSessionHeaders;
}(SpeakeasyBase));
export { PostModifyTrafficMirrorSessionHeaders };
var PostModifyTrafficMirrorSessionRequest = /** @class */ (function (_super) {
    __extends(PostModifyTrafficMirrorSessionRequest, _super);
    function PostModifyTrafficMirrorSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyTrafficMirrorSessionQueryParams)
    ], PostModifyTrafficMirrorSessionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyTrafficMirrorSessionHeaders)
    ], PostModifyTrafficMirrorSessionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyTrafficMirrorSessionRequest.prototype, "request", void 0);
    return PostModifyTrafficMirrorSessionRequest;
}(SpeakeasyBase));
export { PostModifyTrafficMirrorSessionRequest };
var PostModifyTrafficMirrorSessionResponse = /** @class */ (function (_super) {
    __extends(PostModifyTrafficMirrorSessionResponse, _super);
    function PostModifyTrafficMirrorSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyTrafficMirrorSessionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostModifyTrafficMirrorSessionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostModifyTrafficMirrorSessionResponse.prototype, "statusCode", void 0);
    return PostModifyTrafficMirrorSessionResponse;
}(SpeakeasyBase));
export { PostModifyTrafficMirrorSessionResponse };
