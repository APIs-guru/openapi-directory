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
export var PostAssociateInstanceEventWindowActionEnum;
(function (PostAssociateInstanceEventWindowActionEnum) {
    PostAssociateInstanceEventWindowActionEnum["AssociateInstanceEventWindow"] = "AssociateInstanceEventWindow";
})(PostAssociateInstanceEventWindowActionEnum || (PostAssociateInstanceEventWindowActionEnum = {}));
export var PostAssociateInstanceEventWindowVersionEnum;
(function (PostAssociateInstanceEventWindowVersionEnum) {
    PostAssociateInstanceEventWindowVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostAssociateInstanceEventWindowVersionEnum || (PostAssociateInstanceEventWindowVersionEnum = {}));
var PostAssociateInstanceEventWindowQueryParams = /** @class */ (function (_super) {
    __extends(PostAssociateInstanceEventWindowQueryParams, _super);
    function PostAssociateInstanceEventWindowQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAssociateInstanceEventWindowQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAssociateInstanceEventWindowQueryParams.prototype, "version", void 0);
    return PostAssociateInstanceEventWindowQueryParams;
}(SpeakeasyBase));
export { PostAssociateInstanceEventWindowQueryParams };
var PostAssociateInstanceEventWindowHeaders = /** @class */ (function (_super) {
    __extends(PostAssociateInstanceEventWindowHeaders, _super);
    function PostAssociateInstanceEventWindowHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAssociateInstanceEventWindowHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAssociateInstanceEventWindowHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAssociateInstanceEventWindowHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAssociateInstanceEventWindowHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAssociateInstanceEventWindowHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAssociateInstanceEventWindowHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAssociateInstanceEventWindowHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAssociateInstanceEventWindowHeaders;
}(SpeakeasyBase));
export { PostAssociateInstanceEventWindowHeaders };
var PostAssociateInstanceEventWindowRequest = /** @class */ (function (_super) {
    __extends(PostAssociateInstanceEventWindowRequest, _super);
    function PostAssociateInstanceEventWindowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAssociateInstanceEventWindowQueryParams)
    ], PostAssociateInstanceEventWindowRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAssociateInstanceEventWindowHeaders)
    ], PostAssociateInstanceEventWindowRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAssociateInstanceEventWindowRequest.prototype, "request", void 0);
    return PostAssociateInstanceEventWindowRequest;
}(SpeakeasyBase));
export { PostAssociateInstanceEventWindowRequest };
var PostAssociateInstanceEventWindowResponse = /** @class */ (function (_super) {
    __extends(PostAssociateInstanceEventWindowResponse, _super);
    function PostAssociateInstanceEventWindowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAssociateInstanceEventWindowResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAssociateInstanceEventWindowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAssociateInstanceEventWindowResponse.prototype, "statusCode", void 0);
    return PostAssociateInstanceEventWindowResponse;
}(SpeakeasyBase));
export { PostAssociateInstanceEventWindowResponse };
