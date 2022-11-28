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
export var PostModifyVpnConnectionActionEnum;
(function (PostModifyVpnConnectionActionEnum) {
    PostModifyVpnConnectionActionEnum["ModifyVpnConnection"] = "ModifyVpnConnection";
})(PostModifyVpnConnectionActionEnum || (PostModifyVpnConnectionActionEnum = {}));
export var PostModifyVpnConnectionVersionEnum;
(function (PostModifyVpnConnectionVersionEnum) {
    PostModifyVpnConnectionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostModifyVpnConnectionVersionEnum || (PostModifyVpnConnectionVersionEnum = {}));
var PostModifyVpnConnectionQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyVpnConnectionQueryParams, _super);
    function PostModifyVpnConnectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyVpnConnectionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyVpnConnectionQueryParams.prototype, "version", void 0);
    return PostModifyVpnConnectionQueryParams;
}(SpeakeasyBase));
export { PostModifyVpnConnectionQueryParams };
var PostModifyVpnConnectionHeaders = /** @class */ (function (_super) {
    __extends(PostModifyVpnConnectionHeaders, _super);
    function PostModifyVpnConnectionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyVpnConnectionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyVpnConnectionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyVpnConnectionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyVpnConnectionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyVpnConnectionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyVpnConnectionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyVpnConnectionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyVpnConnectionHeaders;
}(SpeakeasyBase));
export { PostModifyVpnConnectionHeaders };
var PostModifyVpnConnectionRequest = /** @class */ (function (_super) {
    __extends(PostModifyVpnConnectionRequest, _super);
    function PostModifyVpnConnectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyVpnConnectionQueryParams)
    ], PostModifyVpnConnectionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyVpnConnectionHeaders)
    ], PostModifyVpnConnectionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyVpnConnectionRequest.prototype, "request", void 0);
    return PostModifyVpnConnectionRequest;
}(SpeakeasyBase));
export { PostModifyVpnConnectionRequest };
var PostModifyVpnConnectionResponse = /** @class */ (function (_super) {
    __extends(PostModifyVpnConnectionResponse, _super);
    function PostModifyVpnConnectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyVpnConnectionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostModifyVpnConnectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostModifyVpnConnectionResponse.prototype, "statusCode", void 0);
    return PostModifyVpnConnectionResponse;
}(SpeakeasyBase));
export { PostModifyVpnConnectionResponse };
