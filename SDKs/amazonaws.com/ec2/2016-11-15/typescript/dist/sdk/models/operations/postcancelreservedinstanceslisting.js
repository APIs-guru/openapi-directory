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
export var PostCancelReservedInstancesListingActionEnum;
(function (PostCancelReservedInstancesListingActionEnum) {
    PostCancelReservedInstancesListingActionEnum["CancelReservedInstancesListing"] = "CancelReservedInstancesListing";
})(PostCancelReservedInstancesListingActionEnum || (PostCancelReservedInstancesListingActionEnum = {}));
export var PostCancelReservedInstancesListingVersionEnum;
(function (PostCancelReservedInstancesListingVersionEnum) {
    PostCancelReservedInstancesListingVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCancelReservedInstancesListingVersionEnum || (PostCancelReservedInstancesListingVersionEnum = {}));
var PostCancelReservedInstancesListingQueryParams = /** @class */ (function (_super) {
    __extends(PostCancelReservedInstancesListingQueryParams, _super);
    function PostCancelReservedInstancesListingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCancelReservedInstancesListingQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCancelReservedInstancesListingQueryParams.prototype, "version", void 0);
    return PostCancelReservedInstancesListingQueryParams;
}(SpeakeasyBase));
export { PostCancelReservedInstancesListingQueryParams };
var PostCancelReservedInstancesListingHeaders = /** @class */ (function (_super) {
    __extends(PostCancelReservedInstancesListingHeaders, _super);
    function PostCancelReservedInstancesListingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCancelReservedInstancesListingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCancelReservedInstancesListingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCancelReservedInstancesListingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCancelReservedInstancesListingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCancelReservedInstancesListingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCancelReservedInstancesListingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCancelReservedInstancesListingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCancelReservedInstancesListingHeaders;
}(SpeakeasyBase));
export { PostCancelReservedInstancesListingHeaders };
var PostCancelReservedInstancesListingRequest = /** @class */ (function (_super) {
    __extends(PostCancelReservedInstancesListingRequest, _super);
    function PostCancelReservedInstancesListingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCancelReservedInstancesListingQueryParams)
    ], PostCancelReservedInstancesListingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCancelReservedInstancesListingHeaders)
    ], PostCancelReservedInstancesListingRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCancelReservedInstancesListingRequest.prototype, "request", void 0);
    return PostCancelReservedInstancesListingRequest;
}(SpeakeasyBase));
export { PostCancelReservedInstancesListingRequest };
var PostCancelReservedInstancesListingResponse = /** @class */ (function (_super) {
    __extends(PostCancelReservedInstancesListingResponse, _super);
    function PostCancelReservedInstancesListingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCancelReservedInstancesListingResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCancelReservedInstancesListingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCancelReservedInstancesListingResponse.prototype, "statusCode", void 0);
    return PostCancelReservedInstancesListingResponse;
}(SpeakeasyBase));
export { PostCancelReservedInstancesListingResponse };
