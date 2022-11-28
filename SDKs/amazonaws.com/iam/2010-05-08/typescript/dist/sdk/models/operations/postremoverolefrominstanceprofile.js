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
export var PostRemoveRoleFromInstanceProfileActionEnum;
(function (PostRemoveRoleFromInstanceProfileActionEnum) {
    PostRemoveRoleFromInstanceProfileActionEnum["RemoveRoleFromInstanceProfile"] = "RemoveRoleFromInstanceProfile";
})(PostRemoveRoleFromInstanceProfileActionEnum || (PostRemoveRoleFromInstanceProfileActionEnum = {}));
export var PostRemoveRoleFromInstanceProfileVersionEnum;
(function (PostRemoveRoleFromInstanceProfileVersionEnum) {
    PostRemoveRoleFromInstanceProfileVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostRemoveRoleFromInstanceProfileVersionEnum || (PostRemoveRoleFromInstanceProfileVersionEnum = {}));
var PostRemoveRoleFromInstanceProfileQueryParams = /** @class */ (function (_super) {
    __extends(PostRemoveRoleFromInstanceProfileQueryParams, _super);
    function PostRemoveRoleFromInstanceProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromInstanceProfileQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromInstanceProfileQueryParams.prototype, "version", void 0);
    return PostRemoveRoleFromInstanceProfileQueryParams;
}(SpeakeasyBase));
export { PostRemoveRoleFromInstanceProfileQueryParams };
var PostRemoveRoleFromInstanceProfileHeaders = /** @class */ (function (_super) {
    __extends(PostRemoveRoleFromInstanceProfileHeaders, _super);
    function PostRemoveRoleFromInstanceProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromInstanceProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromInstanceProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromInstanceProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromInstanceProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromInstanceProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromInstanceProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromInstanceProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRemoveRoleFromInstanceProfileHeaders;
}(SpeakeasyBase));
export { PostRemoveRoleFromInstanceProfileHeaders };
var PostRemoveRoleFromInstanceProfileRequest = /** @class */ (function (_super) {
    __extends(PostRemoveRoleFromInstanceProfileRequest, _super);
    function PostRemoveRoleFromInstanceProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRemoveRoleFromInstanceProfileQueryParams)
    ], PostRemoveRoleFromInstanceProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRemoveRoleFromInstanceProfileHeaders)
    ], PostRemoveRoleFromInstanceProfileRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRemoveRoleFromInstanceProfileRequest.prototype, "request", void 0);
    return PostRemoveRoleFromInstanceProfileRequest;
}(SpeakeasyBase));
export { PostRemoveRoleFromInstanceProfileRequest };
var PostRemoveRoleFromInstanceProfileResponse = /** @class */ (function (_super) {
    __extends(PostRemoveRoleFromInstanceProfileResponse, _super);
    function PostRemoveRoleFromInstanceProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostRemoveRoleFromInstanceProfileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRemoveRoleFromInstanceProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRemoveRoleFromInstanceProfileResponse.prototype, "statusCode", void 0);
    return PostRemoveRoleFromInstanceProfileResponse;
}(SpeakeasyBase));
export { PostRemoveRoleFromInstanceProfileResponse };
