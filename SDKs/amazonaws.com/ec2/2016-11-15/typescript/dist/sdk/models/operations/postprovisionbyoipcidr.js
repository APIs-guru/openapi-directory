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
export var PostProvisionByoipCidrActionEnum;
(function (PostProvisionByoipCidrActionEnum) {
    PostProvisionByoipCidrActionEnum["ProvisionByoipCidr"] = "ProvisionByoipCidr";
})(PostProvisionByoipCidrActionEnum || (PostProvisionByoipCidrActionEnum = {}));
export var PostProvisionByoipCidrVersionEnum;
(function (PostProvisionByoipCidrVersionEnum) {
    PostProvisionByoipCidrVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostProvisionByoipCidrVersionEnum || (PostProvisionByoipCidrVersionEnum = {}));
var PostProvisionByoipCidrQueryParams = /** @class */ (function (_super) {
    __extends(PostProvisionByoipCidrQueryParams, _super);
    function PostProvisionByoipCidrQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostProvisionByoipCidrQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostProvisionByoipCidrQueryParams.prototype, "version", void 0);
    return PostProvisionByoipCidrQueryParams;
}(SpeakeasyBase));
export { PostProvisionByoipCidrQueryParams };
var PostProvisionByoipCidrHeaders = /** @class */ (function (_super) {
    __extends(PostProvisionByoipCidrHeaders, _super);
    function PostProvisionByoipCidrHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostProvisionByoipCidrHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostProvisionByoipCidrHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostProvisionByoipCidrHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostProvisionByoipCidrHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostProvisionByoipCidrHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostProvisionByoipCidrHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostProvisionByoipCidrHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostProvisionByoipCidrHeaders;
}(SpeakeasyBase));
export { PostProvisionByoipCidrHeaders };
var PostProvisionByoipCidrRequest = /** @class */ (function (_super) {
    __extends(PostProvisionByoipCidrRequest, _super);
    function PostProvisionByoipCidrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostProvisionByoipCidrQueryParams)
    ], PostProvisionByoipCidrRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostProvisionByoipCidrHeaders)
    ], PostProvisionByoipCidrRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostProvisionByoipCidrRequest.prototype, "request", void 0);
    return PostProvisionByoipCidrRequest;
}(SpeakeasyBase));
export { PostProvisionByoipCidrRequest };
var PostProvisionByoipCidrResponse = /** @class */ (function (_super) {
    __extends(PostProvisionByoipCidrResponse, _super);
    function PostProvisionByoipCidrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostProvisionByoipCidrResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostProvisionByoipCidrResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostProvisionByoipCidrResponse.prototype, "statusCode", void 0);
    return PostProvisionByoipCidrResponse;
}(SpeakeasyBase));
export { PostProvisionByoipCidrResponse };
