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
export var GetDeleteLoadBalancerActionEnum;
(function (GetDeleteLoadBalancerActionEnum) {
    GetDeleteLoadBalancerActionEnum["DeleteLoadBalancer"] = "DeleteLoadBalancer";
})(GetDeleteLoadBalancerActionEnum || (GetDeleteLoadBalancerActionEnum = {}));
export var GetDeleteLoadBalancerVersionEnum;
(function (GetDeleteLoadBalancerVersionEnum) {
    GetDeleteLoadBalancerVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(GetDeleteLoadBalancerVersionEnum || (GetDeleteLoadBalancerVersionEnum = {}));
var GetDeleteLoadBalancerQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteLoadBalancerQueryParams, _super);
    function GetDeleteLoadBalancerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerArn" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerQueryParams.prototype, "loadBalancerArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerQueryParams.prototype, "version", void 0);
    return GetDeleteLoadBalancerQueryParams;
}(SpeakeasyBase));
export { GetDeleteLoadBalancerQueryParams };
var GetDeleteLoadBalancerHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteLoadBalancerHeaders, _super);
    function GetDeleteLoadBalancerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteLoadBalancerHeaders;
}(SpeakeasyBase));
export { GetDeleteLoadBalancerHeaders };
var GetDeleteLoadBalancerRequest = /** @class */ (function (_super) {
    __extends(GetDeleteLoadBalancerRequest, _super);
    function GetDeleteLoadBalancerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteLoadBalancerQueryParams)
    ], GetDeleteLoadBalancerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteLoadBalancerHeaders)
    ], GetDeleteLoadBalancerRequest.prototype, "headers", void 0);
    return GetDeleteLoadBalancerRequest;
}(SpeakeasyBase));
export { GetDeleteLoadBalancerRequest };
var GetDeleteLoadBalancerResponse = /** @class */ (function (_super) {
    __extends(GetDeleteLoadBalancerResponse, _super);
    function GetDeleteLoadBalancerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteLoadBalancerResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteLoadBalancerResponse.prototype, "statusCode", void 0);
    return GetDeleteLoadBalancerResponse;
}(SpeakeasyBase));
export { GetDeleteLoadBalancerResponse };
