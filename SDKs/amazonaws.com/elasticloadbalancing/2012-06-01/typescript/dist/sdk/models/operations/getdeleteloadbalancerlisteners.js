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
export var GetDeleteLoadBalancerListenersActionEnum;
(function (GetDeleteLoadBalancerListenersActionEnum) {
    GetDeleteLoadBalancerListenersActionEnum["DeleteLoadBalancerListeners"] = "DeleteLoadBalancerListeners";
})(GetDeleteLoadBalancerListenersActionEnum || (GetDeleteLoadBalancerListenersActionEnum = {}));
export var GetDeleteLoadBalancerListenersVersionEnum;
(function (GetDeleteLoadBalancerListenersVersionEnum) {
    GetDeleteLoadBalancerListenersVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(GetDeleteLoadBalancerListenersVersionEnum || (GetDeleteLoadBalancerListenersVersionEnum = {}));
var GetDeleteLoadBalancerListenersQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteLoadBalancerListenersQueryParams, _super);
    function GetDeleteLoadBalancerListenersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerListenersQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerListenersQueryParams.prototype, "loadBalancerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerPorts" }),
        __metadata("design:type", Array)
    ], GetDeleteLoadBalancerListenersQueryParams.prototype, "loadBalancerPorts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerListenersQueryParams.prototype, "version", void 0);
    return GetDeleteLoadBalancerListenersQueryParams;
}(SpeakeasyBase));
export { GetDeleteLoadBalancerListenersQueryParams };
var GetDeleteLoadBalancerListenersHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteLoadBalancerListenersHeaders, _super);
    function GetDeleteLoadBalancerListenersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerListenersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerListenersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerListenersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerListenersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerListenersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerListenersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerListenersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteLoadBalancerListenersHeaders;
}(SpeakeasyBase));
export { GetDeleteLoadBalancerListenersHeaders };
var GetDeleteLoadBalancerListenersRequest = /** @class */ (function (_super) {
    __extends(GetDeleteLoadBalancerListenersRequest, _super);
    function GetDeleteLoadBalancerListenersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteLoadBalancerListenersQueryParams)
    ], GetDeleteLoadBalancerListenersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteLoadBalancerListenersHeaders)
    ], GetDeleteLoadBalancerListenersRequest.prototype, "headers", void 0);
    return GetDeleteLoadBalancerListenersRequest;
}(SpeakeasyBase));
export { GetDeleteLoadBalancerListenersRequest };
var GetDeleteLoadBalancerListenersResponse = /** @class */ (function (_super) {
    __extends(GetDeleteLoadBalancerListenersResponse, _super);
    function GetDeleteLoadBalancerListenersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteLoadBalancerListenersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerListenersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteLoadBalancerListenersResponse.prototype, "statusCode", void 0);
    return GetDeleteLoadBalancerListenersResponse;
}(SpeakeasyBase));
export { GetDeleteLoadBalancerListenersResponse };
