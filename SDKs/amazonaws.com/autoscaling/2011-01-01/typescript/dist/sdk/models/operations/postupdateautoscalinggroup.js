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
export var PostUpdateAutoScalingGroupActionEnum;
(function (PostUpdateAutoScalingGroupActionEnum) {
    PostUpdateAutoScalingGroupActionEnum["UpdateAutoScalingGroup"] = "UpdateAutoScalingGroup";
})(PostUpdateAutoScalingGroupActionEnum || (PostUpdateAutoScalingGroupActionEnum = {}));
export var PostUpdateAutoScalingGroupVersionEnum;
(function (PostUpdateAutoScalingGroupVersionEnum) {
    PostUpdateAutoScalingGroupVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostUpdateAutoScalingGroupVersionEnum || (PostUpdateAutoScalingGroupVersionEnum = {}));
var PostUpdateAutoScalingGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateAutoScalingGroupQueryParams, _super);
    function PostUpdateAutoScalingGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateAutoScalingGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateAutoScalingGroupQueryParams.prototype, "version", void 0);
    return PostUpdateAutoScalingGroupQueryParams;
}(SpeakeasyBase));
export { PostUpdateAutoScalingGroupQueryParams };
var PostUpdateAutoScalingGroupHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateAutoScalingGroupHeaders, _super);
    function PostUpdateAutoScalingGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateAutoScalingGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateAutoScalingGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateAutoScalingGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateAutoScalingGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateAutoScalingGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateAutoScalingGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateAutoScalingGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateAutoScalingGroupHeaders;
}(SpeakeasyBase));
export { PostUpdateAutoScalingGroupHeaders };
var PostUpdateAutoScalingGroupRequest = /** @class */ (function (_super) {
    __extends(PostUpdateAutoScalingGroupRequest, _super);
    function PostUpdateAutoScalingGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUpdateAutoScalingGroupQueryParams)
    ], PostUpdateAutoScalingGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUpdateAutoScalingGroupHeaders)
    ], PostUpdateAutoScalingGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateAutoScalingGroupRequest.prototype, "request", void 0);
    return PostUpdateAutoScalingGroupRequest;
}(SpeakeasyBase));
export { PostUpdateAutoScalingGroupRequest };
var PostUpdateAutoScalingGroupResponse = /** @class */ (function (_super) {
    __extends(PostUpdateAutoScalingGroupResponse, _super);
    function PostUpdateAutoScalingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateAutoScalingGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUpdateAutoScalingGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUpdateAutoScalingGroupResponse.prototype, "statusCode", void 0);
    return PostUpdateAutoScalingGroupResponse;
}(SpeakeasyBase));
export { PostUpdateAutoScalingGroupResponse };
