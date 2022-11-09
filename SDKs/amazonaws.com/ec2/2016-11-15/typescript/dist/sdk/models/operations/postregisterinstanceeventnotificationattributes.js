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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var PostRegisterInstanceEventNotificationAttributesActionEnum;
(function (PostRegisterInstanceEventNotificationAttributesActionEnum) {
    PostRegisterInstanceEventNotificationAttributesActionEnum["RegisterInstanceEventNotificationAttributes"] = "RegisterInstanceEventNotificationAttributes";
})(PostRegisterInstanceEventNotificationAttributesActionEnum || (PostRegisterInstanceEventNotificationAttributesActionEnum = {}));
export var PostRegisterInstanceEventNotificationAttributesVersionEnum;
(function (PostRegisterInstanceEventNotificationAttributesVersionEnum) {
    PostRegisterInstanceEventNotificationAttributesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostRegisterInstanceEventNotificationAttributesVersionEnum || (PostRegisterInstanceEventNotificationAttributesVersionEnum = {}));
var PostRegisterInstanceEventNotificationAttributesQueryParams = /** @class */ (function (_super) {
    __extends(PostRegisterInstanceEventNotificationAttributesQueryParams, _super);
    function PostRegisterInstanceEventNotificationAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRegisterInstanceEventNotificationAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRegisterInstanceEventNotificationAttributesQueryParams.prototype, "version", void 0);
    return PostRegisterInstanceEventNotificationAttributesQueryParams;
}(SpeakeasyBase));
export { PostRegisterInstanceEventNotificationAttributesQueryParams };
var PostRegisterInstanceEventNotificationAttributesHeaders = /** @class */ (function (_super) {
    __extends(PostRegisterInstanceEventNotificationAttributesHeaders, _super);
    function PostRegisterInstanceEventNotificationAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRegisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRegisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRegisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRegisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRegisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRegisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRegisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRegisterInstanceEventNotificationAttributesHeaders;
}(SpeakeasyBase));
export { PostRegisterInstanceEventNotificationAttributesHeaders };
var PostRegisterInstanceEventNotificationAttributesRequest = /** @class */ (function (_super) {
    __extends(PostRegisterInstanceEventNotificationAttributesRequest, _super);
    function PostRegisterInstanceEventNotificationAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostRegisterInstanceEventNotificationAttributesQueryParams)
    ], PostRegisterInstanceEventNotificationAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostRegisterInstanceEventNotificationAttributesHeaders)
    ], PostRegisterInstanceEventNotificationAttributesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRegisterInstanceEventNotificationAttributesRequest.prototype, "request", void 0);
    return PostRegisterInstanceEventNotificationAttributesRequest;
}(SpeakeasyBase));
export { PostRegisterInstanceEventNotificationAttributesRequest };
var PostRegisterInstanceEventNotificationAttributesResponse = /** @class */ (function (_super) {
    __extends(PostRegisterInstanceEventNotificationAttributesResponse, _super);
    function PostRegisterInstanceEventNotificationAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostRegisterInstanceEventNotificationAttributesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostRegisterInstanceEventNotificationAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostRegisterInstanceEventNotificationAttributesResponse.prototype, "statusCode", void 0);
    return PostRegisterInstanceEventNotificationAttributesResponse;
}(SpeakeasyBase));
export { PostRegisterInstanceEventNotificationAttributesResponse };
