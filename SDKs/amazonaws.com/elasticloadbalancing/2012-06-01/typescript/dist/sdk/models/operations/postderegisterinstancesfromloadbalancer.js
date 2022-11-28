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
export var PostDeregisterInstancesFromLoadBalancerActionEnum;
(function (PostDeregisterInstancesFromLoadBalancerActionEnum) {
    PostDeregisterInstancesFromLoadBalancerActionEnum["DeregisterInstancesFromLoadBalancer"] = "DeregisterInstancesFromLoadBalancer";
})(PostDeregisterInstancesFromLoadBalancerActionEnum || (PostDeregisterInstancesFromLoadBalancerActionEnum = {}));
export var PostDeregisterInstancesFromLoadBalancerVersionEnum;
(function (PostDeregisterInstancesFromLoadBalancerVersionEnum) {
    PostDeregisterInstancesFromLoadBalancerVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(PostDeregisterInstancesFromLoadBalancerVersionEnum || (PostDeregisterInstancesFromLoadBalancerVersionEnum = {}));
var PostDeregisterInstancesFromLoadBalancerQueryParams = /** @class */ (function (_super) {
    __extends(PostDeregisterInstancesFromLoadBalancerQueryParams, _super);
    function PostDeregisterInstancesFromLoadBalancerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeregisterInstancesFromLoadBalancerQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeregisterInstancesFromLoadBalancerQueryParams.prototype, "version", void 0);
    return PostDeregisterInstancesFromLoadBalancerQueryParams;
}(SpeakeasyBase));
export { PostDeregisterInstancesFromLoadBalancerQueryParams };
var PostDeregisterInstancesFromLoadBalancerHeaders = /** @class */ (function (_super) {
    __extends(PostDeregisterInstancesFromLoadBalancerHeaders, _super);
    function PostDeregisterInstancesFromLoadBalancerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeregisterInstancesFromLoadBalancerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeregisterInstancesFromLoadBalancerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeregisterInstancesFromLoadBalancerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeregisterInstancesFromLoadBalancerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeregisterInstancesFromLoadBalancerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeregisterInstancesFromLoadBalancerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeregisterInstancesFromLoadBalancerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeregisterInstancesFromLoadBalancerHeaders;
}(SpeakeasyBase));
export { PostDeregisterInstancesFromLoadBalancerHeaders };
var PostDeregisterInstancesFromLoadBalancerRequest = /** @class */ (function (_super) {
    __extends(PostDeregisterInstancesFromLoadBalancerRequest, _super);
    function PostDeregisterInstancesFromLoadBalancerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeregisterInstancesFromLoadBalancerQueryParams)
    ], PostDeregisterInstancesFromLoadBalancerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeregisterInstancesFromLoadBalancerHeaders)
    ], PostDeregisterInstancesFromLoadBalancerRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeregisterInstancesFromLoadBalancerRequest.prototype, "request", void 0);
    return PostDeregisterInstancesFromLoadBalancerRequest;
}(SpeakeasyBase));
export { PostDeregisterInstancesFromLoadBalancerRequest };
var PostDeregisterInstancesFromLoadBalancerResponse = /** @class */ (function (_super) {
    __extends(PostDeregisterInstancesFromLoadBalancerResponse, _super);
    function PostDeregisterInstancesFromLoadBalancerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeregisterInstancesFromLoadBalancerResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeregisterInstancesFromLoadBalancerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeregisterInstancesFromLoadBalancerResponse.prototype, "statusCode", void 0);
    return PostDeregisterInstancesFromLoadBalancerResponse;
}(SpeakeasyBase));
export { PostDeregisterInstancesFromLoadBalancerResponse };
