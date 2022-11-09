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
export var PostGetCoipPoolUsageActionEnum;
(function (PostGetCoipPoolUsageActionEnum) {
    PostGetCoipPoolUsageActionEnum["GetCoipPoolUsage"] = "GetCoipPoolUsage";
})(PostGetCoipPoolUsageActionEnum || (PostGetCoipPoolUsageActionEnum = {}));
export var PostGetCoipPoolUsageVersionEnum;
(function (PostGetCoipPoolUsageVersionEnum) {
    PostGetCoipPoolUsageVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostGetCoipPoolUsageVersionEnum || (PostGetCoipPoolUsageVersionEnum = {}));
var PostGetCoipPoolUsageQueryParams = /** @class */ (function (_super) {
    __extends(PostGetCoipPoolUsageQueryParams, _super);
    function PostGetCoipPoolUsageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetCoipPoolUsageQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetCoipPoolUsageQueryParams.prototype, "version", void 0);
    return PostGetCoipPoolUsageQueryParams;
}(SpeakeasyBase));
export { PostGetCoipPoolUsageQueryParams };
var PostGetCoipPoolUsageHeaders = /** @class */ (function (_super) {
    __extends(PostGetCoipPoolUsageHeaders, _super);
    function PostGetCoipPoolUsageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetCoipPoolUsageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetCoipPoolUsageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetCoipPoolUsageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetCoipPoolUsageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetCoipPoolUsageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetCoipPoolUsageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetCoipPoolUsageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetCoipPoolUsageHeaders;
}(SpeakeasyBase));
export { PostGetCoipPoolUsageHeaders };
var PostGetCoipPoolUsageRequest = /** @class */ (function (_super) {
    __extends(PostGetCoipPoolUsageRequest, _super);
    function PostGetCoipPoolUsageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetCoipPoolUsageQueryParams)
    ], PostGetCoipPoolUsageRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetCoipPoolUsageHeaders)
    ], PostGetCoipPoolUsageRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetCoipPoolUsageRequest.prototype, "request", void 0);
    return PostGetCoipPoolUsageRequest;
}(SpeakeasyBase));
export { PostGetCoipPoolUsageRequest };
var PostGetCoipPoolUsageResponse = /** @class */ (function (_super) {
    __extends(PostGetCoipPoolUsageResponse, _super);
    function PostGetCoipPoolUsageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetCoipPoolUsageResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostGetCoipPoolUsageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostGetCoipPoolUsageResponse.prototype, "statusCode", void 0);
    return PostGetCoipPoolUsageResponse;
}(SpeakeasyBase));
export { PostGetCoipPoolUsageResponse };
