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
export var PostCreateReservedInstancesListingActionEnum;
(function (PostCreateReservedInstancesListingActionEnum) {
    PostCreateReservedInstancesListingActionEnum["CreateReservedInstancesListing"] = "CreateReservedInstancesListing";
})(PostCreateReservedInstancesListingActionEnum || (PostCreateReservedInstancesListingActionEnum = {}));
export var PostCreateReservedInstancesListingVersionEnum;
(function (PostCreateReservedInstancesListingVersionEnum) {
    PostCreateReservedInstancesListingVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateReservedInstancesListingVersionEnum || (PostCreateReservedInstancesListingVersionEnum = {}));
var PostCreateReservedInstancesListingQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateReservedInstancesListingQueryParams, _super);
    function PostCreateReservedInstancesListingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateReservedInstancesListingQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateReservedInstancesListingQueryParams.prototype, "version", void 0);
    return PostCreateReservedInstancesListingQueryParams;
}(SpeakeasyBase));
export { PostCreateReservedInstancesListingQueryParams };
var PostCreateReservedInstancesListingHeaders = /** @class */ (function (_super) {
    __extends(PostCreateReservedInstancesListingHeaders, _super);
    function PostCreateReservedInstancesListingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateReservedInstancesListingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateReservedInstancesListingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateReservedInstancesListingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateReservedInstancesListingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateReservedInstancesListingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateReservedInstancesListingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateReservedInstancesListingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateReservedInstancesListingHeaders;
}(SpeakeasyBase));
export { PostCreateReservedInstancesListingHeaders };
var PostCreateReservedInstancesListingRequest = /** @class */ (function (_super) {
    __extends(PostCreateReservedInstancesListingRequest, _super);
    function PostCreateReservedInstancesListingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateReservedInstancesListingQueryParams)
    ], PostCreateReservedInstancesListingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateReservedInstancesListingHeaders)
    ], PostCreateReservedInstancesListingRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateReservedInstancesListingRequest.prototype, "request", void 0);
    return PostCreateReservedInstancesListingRequest;
}(SpeakeasyBase));
export { PostCreateReservedInstancesListingRequest };
var PostCreateReservedInstancesListingResponse = /** @class */ (function (_super) {
    __extends(PostCreateReservedInstancesListingResponse, _super);
    function PostCreateReservedInstancesListingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateReservedInstancesListingResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateReservedInstancesListingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateReservedInstancesListingResponse.prototype, "statusCode", void 0);
    return PostCreateReservedInstancesListingResponse;
}(SpeakeasyBase));
export { PostCreateReservedInstancesListingResponse };
