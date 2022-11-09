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
export var PostMonitorInstancesActionEnum;
(function (PostMonitorInstancesActionEnum) {
    PostMonitorInstancesActionEnum["MonitorInstances"] = "MonitorInstances";
})(PostMonitorInstancesActionEnum || (PostMonitorInstancesActionEnum = {}));
export var PostMonitorInstancesVersionEnum;
(function (PostMonitorInstancesVersionEnum) {
    PostMonitorInstancesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostMonitorInstancesVersionEnum || (PostMonitorInstancesVersionEnum = {}));
var PostMonitorInstancesQueryParams = /** @class */ (function (_super) {
    __extends(PostMonitorInstancesQueryParams, _super);
    function PostMonitorInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostMonitorInstancesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostMonitorInstancesQueryParams.prototype, "version", void 0);
    return PostMonitorInstancesQueryParams;
}(SpeakeasyBase));
export { PostMonitorInstancesQueryParams };
var PostMonitorInstancesHeaders = /** @class */ (function (_super) {
    __extends(PostMonitorInstancesHeaders, _super);
    function PostMonitorInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostMonitorInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostMonitorInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostMonitorInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostMonitorInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostMonitorInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostMonitorInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostMonitorInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostMonitorInstancesHeaders;
}(SpeakeasyBase));
export { PostMonitorInstancesHeaders };
var PostMonitorInstancesRequest = /** @class */ (function (_super) {
    __extends(PostMonitorInstancesRequest, _super);
    function PostMonitorInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostMonitorInstancesQueryParams)
    ], PostMonitorInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostMonitorInstancesHeaders)
    ], PostMonitorInstancesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostMonitorInstancesRequest.prototype, "request", void 0);
    return PostMonitorInstancesRequest;
}(SpeakeasyBase));
export { PostMonitorInstancesRequest };
var PostMonitorInstancesResponse = /** @class */ (function (_super) {
    __extends(PostMonitorInstancesResponse, _super);
    function PostMonitorInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostMonitorInstancesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostMonitorInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostMonitorInstancesResponse.prototype, "statusCode", void 0);
    return PostMonitorInstancesResponse;
}(SpeakeasyBase));
export { PostMonitorInstancesResponse };
