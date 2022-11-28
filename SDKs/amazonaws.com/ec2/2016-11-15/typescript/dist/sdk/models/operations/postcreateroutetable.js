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
export var PostCreateRouteTableActionEnum;
(function (PostCreateRouteTableActionEnum) {
    PostCreateRouteTableActionEnum["CreateRouteTable"] = "CreateRouteTable";
})(PostCreateRouteTableActionEnum || (PostCreateRouteTableActionEnum = {}));
export var PostCreateRouteTableVersionEnum;
(function (PostCreateRouteTableVersionEnum) {
    PostCreateRouteTableVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateRouteTableVersionEnum || (PostCreateRouteTableVersionEnum = {}));
var PostCreateRouteTableQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateRouteTableQueryParams, _super);
    function PostCreateRouteTableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateRouteTableQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateRouteTableQueryParams.prototype, "version", void 0);
    return PostCreateRouteTableQueryParams;
}(SpeakeasyBase));
export { PostCreateRouteTableQueryParams };
var PostCreateRouteTableHeaders = /** @class */ (function (_super) {
    __extends(PostCreateRouteTableHeaders, _super);
    function PostCreateRouteTableHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateRouteTableHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateRouteTableHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateRouteTableHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateRouteTableHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateRouteTableHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateRouteTableHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateRouteTableHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateRouteTableHeaders;
}(SpeakeasyBase));
export { PostCreateRouteTableHeaders };
var PostCreateRouteTableRequest = /** @class */ (function (_super) {
    __extends(PostCreateRouteTableRequest, _super);
    function PostCreateRouteTableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateRouteTableQueryParams)
    ], PostCreateRouteTableRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateRouteTableHeaders)
    ], PostCreateRouteTableRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateRouteTableRequest.prototype, "request", void 0);
    return PostCreateRouteTableRequest;
}(SpeakeasyBase));
export { PostCreateRouteTableRequest };
var PostCreateRouteTableResponse = /** @class */ (function (_super) {
    __extends(PostCreateRouteTableResponse, _super);
    function PostCreateRouteTableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateRouteTableResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateRouteTableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateRouteTableResponse.prototype, "statusCode", void 0);
    return PostCreateRouteTableResponse;
}(SpeakeasyBase));
export { PostCreateRouteTableResponse };
