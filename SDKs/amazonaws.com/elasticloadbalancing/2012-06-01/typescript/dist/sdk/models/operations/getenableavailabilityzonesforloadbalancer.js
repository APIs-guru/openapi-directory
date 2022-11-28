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
export var GetEnableAvailabilityZonesForLoadBalancerActionEnum;
(function (GetEnableAvailabilityZonesForLoadBalancerActionEnum) {
    GetEnableAvailabilityZonesForLoadBalancerActionEnum["EnableAvailabilityZonesForLoadBalancer"] = "EnableAvailabilityZonesForLoadBalancer";
})(GetEnableAvailabilityZonesForLoadBalancerActionEnum || (GetEnableAvailabilityZonesForLoadBalancerActionEnum = {}));
export var GetEnableAvailabilityZonesForLoadBalancerVersionEnum;
(function (GetEnableAvailabilityZonesForLoadBalancerVersionEnum) {
    GetEnableAvailabilityZonesForLoadBalancerVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(GetEnableAvailabilityZonesForLoadBalancerVersionEnum || (GetEnableAvailabilityZonesForLoadBalancerVersionEnum = {}));
var GetEnableAvailabilityZonesForLoadBalancerQueryParams = /** @class */ (function (_super) {
    __extends(GetEnableAvailabilityZonesForLoadBalancerQueryParams, _super);
    function GetEnableAvailabilityZonesForLoadBalancerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetEnableAvailabilityZonesForLoadBalancerQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZones" }),
        __metadata("design:type", Array)
    ], GetEnableAvailabilityZonesForLoadBalancerQueryParams.prototype, "availabilityZones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" }),
        __metadata("design:type", String)
    ], GetEnableAvailabilityZonesForLoadBalancerQueryParams.prototype, "loadBalancerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetEnableAvailabilityZonesForLoadBalancerQueryParams.prototype, "version", void 0);
    return GetEnableAvailabilityZonesForLoadBalancerQueryParams;
}(SpeakeasyBase));
export { GetEnableAvailabilityZonesForLoadBalancerQueryParams };
var GetEnableAvailabilityZonesForLoadBalancerHeaders = /** @class */ (function (_super) {
    __extends(GetEnableAvailabilityZonesForLoadBalancerHeaders, _super);
    function GetEnableAvailabilityZonesForLoadBalancerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEnableAvailabilityZonesForLoadBalancerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEnableAvailabilityZonesForLoadBalancerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEnableAvailabilityZonesForLoadBalancerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEnableAvailabilityZonesForLoadBalancerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEnableAvailabilityZonesForLoadBalancerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEnableAvailabilityZonesForLoadBalancerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEnableAvailabilityZonesForLoadBalancerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetEnableAvailabilityZonesForLoadBalancerHeaders;
}(SpeakeasyBase));
export { GetEnableAvailabilityZonesForLoadBalancerHeaders };
var GetEnableAvailabilityZonesForLoadBalancerRequest = /** @class */ (function (_super) {
    __extends(GetEnableAvailabilityZonesForLoadBalancerRequest, _super);
    function GetEnableAvailabilityZonesForLoadBalancerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEnableAvailabilityZonesForLoadBalancerQueryParams)
    ], GetEnableAvailabilityZonesForLoadBalancerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEnableAvailabilityZonesForLoadBalancerHeaders)
    ], GetEnableAvailabilityZonesForLoadBalancerRequest.prototype, "headers", void 0);
    return GetEnableAvailabilityZonesForLoadBalancerRequest;
}(SpeakeasyBase));
export { GetEnableAvailabilityZonesForLoadBalancerRequest };
var GetEnableAvailabilityZonesForLoadBalancerResponse = /** @class */ (function (_super) {
    __extends(GetEnableAvailabilityZonesForLoadBalancerResponse, _super);
    function GetEnableAvailabilityZonesForLoadBalancerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetEnableAvailabilityZonesForLoadBalancerResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEnableAvailabilityZonesForLoadBalancerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEnableAvailabilityZonesForLoadBalancerResponse.prototype, "statusCode", void 0);
    return GetEnableAvailabilityZonesForLoadBalancerResponse;
}(SpeakeasyBase));
export { GetEnableAvailabilityZonesForLoadBalancerResponse };
