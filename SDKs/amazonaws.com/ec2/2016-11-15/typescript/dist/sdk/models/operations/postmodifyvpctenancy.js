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
export var PostModifyVpcTenancyActionEnum;
(function (PostModifyVpcTenancyActionEnum) {
    PostModifyVpcTenancyActionEnum["ModifyVpcTenancy"] = "ModifyVpcTenancy";
})(PostModifyVpcTenancyActionEnum || (PostModifyVpcTenancyActionEnum = {}));
export var PostModifyVpcTenancyVersionEnum;
(function (PostModifyVpcTenancyVersionEnum) {
    PostModifyVpcTenancyVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostModifyVpcTenancyVersionEnum || (PostModifyVpcTenancyVersionEnum = {}));
var PostModifyVpcTenancyQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyVpcTenancyQueryParams, _super);
    function PostModifyVpcTenancyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyVpcTenancyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyVpcTenancyQueryParams.prototype, "version", void 0);
    return PostModifyVpcTenancyQueryParams;
}(SpeakeasyBase));
export { PostModifyVpcTenancyQueryParams };
var PostModifyVpcTenancyHeaders = /** @class */ (function (_super) {
    __extends(PostModifyVpcTenancyHeaders, _super);
    function PostModifyVpcTenancyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyVpcTenancyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyVpcTenancyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyVpcTenancyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyVpcTenancyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyVpcTenancyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyVpcTenancyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyVpcTenancyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyVpcTenancyHeaders;
}(SpeakeasyBase));
export { PostModifyVpcTenancyHeaders };
var PostModifyVpcTenancyRequest = /** @class */ (function (_super) {
    __extends(PostModifyVpcTenancyRequest, _super);
    function PostModifyVpcTenancyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyVpcTenancyQueryParams)
    ], PostModifyVpcTenancyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyVpcTenancyHeaders)
    ], PostModifyVpcTenancyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyVpcTenancyRequest.prototype, "request", void 0);
    return PostModifyVpcTenancyRequest;
}(SpeakeasyBase));
export { PostModifyVpcTenancyRequest };
var PostModifyVpcTenancyResponse = /** @class */ (function (_super) {
    __extends(PostModifyVpcTenancyResponse, _super);
    function PostModifyVpcTenancyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyVpcTenancyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostModifyVpcTenancyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostModifyVpcTenancyResponse.prototype, "statusCode", void 0);
    return PostModifyVpcTenancyResponse;
}(SpeakeasyBase));
export { PostModifyVpcTenancyResponse };
