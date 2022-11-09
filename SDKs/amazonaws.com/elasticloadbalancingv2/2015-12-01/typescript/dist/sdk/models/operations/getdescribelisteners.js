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
export var GetDescribeListenersActionEnum;
(function (GetDescribeListenersActionEnum) {
    GetDescribeListenersActionEnum["DescribeListeners"] = "DescribeListeners";
})(GetDescribeListenersActionEnum || (GetDescribeListenersActionEnum = {}));
export var GetDescribeListenersVersionEnum;
(function (GetDescribeListenersVersionEnum) {
    GetDescribeListenersVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(GetDescribeListenersVersionEnum || (GetDescribeListenersVersionEnum = {}));
var GetDescribeListenersQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeListenersQueryParams, _super);
    function GetDescribeListenersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeListenersQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ListenerArns" }),
        __metadata("design:type", Array)
    ], GetDescribeListenersQueryParams.prototype, "listenerArns", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerArn" }),
        __metadata("design:type", String)
    ], GetDescribeListenersQueryParams.prototype, "loadBalancerArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeListenersQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], GetDescribeListenersQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeListenersQueryParams.prototype, "version", void 0);
    return GetDescribeListenersQueryParams;
}(SpeakeasyBase));
export { GetDescribeListenersQueryParams };
var GetDescribeListenersHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeListenersHeaders, _super);
    function GetDescribeListenersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeListenersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeListenersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeListenersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeListenersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeListenersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeListenersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeListenersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeListenersHeaders;
}(SpeakeasyBase));
export { GetDescribeListenersHeaders };
var GetDescribeListenersRequest = /** @class */ (function (_super) {
    __extends(GetDescribeListenersRequest, _super);
    function GetDescribeListenersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeListenersQueryParams)
    ], GetDescribeListenersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeListenersHeaders)
    ], GetDescribeListenersRequest.prototype, "headers", void 0);
    return GetDescribeListenersRequest;
}(SpeakeasyBase));
export { GetDescribeListenersRequest };
var GetDescribeListenersResponse = /** @class */ (function (_super) {
    __extends(GetDescribeListenersResponse, _super);
    function GetDescribeListenersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeListenersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeListenersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeListenersResponse.prototype, "statusCode", void 0);
    return GetDescribeListenersResponse;
}(SpeakeasyBase));
export { GetDescribeListenersResponse };
