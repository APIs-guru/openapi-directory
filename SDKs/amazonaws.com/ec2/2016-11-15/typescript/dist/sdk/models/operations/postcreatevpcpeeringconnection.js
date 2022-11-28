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
export var PostCreateVpcPeeringConnectionActionEnum;
(function (PostCreateVpcPeeringConnectionActionEnum) {
    PostCreateVpcPeeringConnectionActionEnum["CreateVpcPeeringConnection"] = "CreateVpcPeeringConnection";
})(PostCreateVpcPeeringConnectionActionEnum || (PostCreateVpcPeeringConnectionActionEnum = {}));
export var PostCreateVpcPeeringConnectionVersionEnum;
(function (PostCreateVpcPeeringConnectionVersionEnum) {
    PostCreateVpcPeeringConnectionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateVpcPeeringConnectionVersionEnum || (PostCreateVpcPeeringConnectionVersionEnum = {}));
var PostCreateVpcPeeringConnectionQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateVpcPeeringConnectionQueryParams, _super);
    function PostCreateVpcPeeringConnectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateVpcPeeringConnectionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateVpcPeeringConnectionQueryParams.prototype, "version", void 0);
    return PostCreateVpcPeeringConnectionQueryParams;
}(SpeakeasyBase));
export { PostCreateVpcPeeringConnectionQueryParams };
var PostCreateVpcPeeringConnectionHeaders = /** @class */ (function (_super) {
    __extends(PostCreateVpcPeeringConnectionHeaders, _super);
    function PostCreateVpcPeeringConnectionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateVpcPeeringConnectionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateVpcPeeringConnectionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateVpcPeeringConnectionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateVpcPeeringConnectionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateVpcPeeringConnectionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateVpcPeeringConnectionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateVpcPeeringConnectionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateVpcPeeringConnectionHeaders;
}(SpeakeasyBase));
export { PostCreateVpcPeeringConnectionHeaders };
var PostCreateVpcPeeringConnectionRequest = /** @class */ (function (_super) {
    __extends(PostCreateVpcPeeringConnectionRequest, _super);
    function PostCreateVpcPeeringConnectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateVpcPeeringConnectionQueryParams)
    ], PostCreateVpcPeeringConnectionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateVpcPeeringConnectionHeaders)
    ], PostCreateVpcPeeringConnectionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateVpcPeeringConnectionRequest.prototype, "request", void 0);
    return PostCreateVpcPeeringConnectionRequest;
}(SpeakeasyBase));
export { PostCreateVpcPeeringConnectionRequest };
var PostCreateVpcPeeringConnectionResponse = /** @class */ (function (_super) {
    __extends(PostCreateVpcPeeringConnectionResponse, _super);
    function PostCreateVpcPeeringConnectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateVpcPeeringConnectionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateVpcPeeringConnectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateVpcPeeringConnectionResponse.prototype, "statusCode", void 0);
    return PostCreateVpcPeeringConnectionResponse;
}(SpeakeasyBase));
export { PostCreateVpcPeeringConnectionResponse };
