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
export var GetSetLoadBalancerPoliciesForBackendServerActionEnum;
(function (GetSetLoadBalancerPoliciesForBackendServerActionEnum) {
    GetSetLoadBalancerPoliciesForBackendServerActionEnum["SetLoadBalancerPoliciesForBackendServer"] = "SetLoadBalancerPoliciesForBackendServer";
})(GetSetLoadBalancerPoliciesForBackendServerActionEnum || (GetSetLoadBalancerPoliciesForBackendServerActionEnum = {}));
export var GetSetLoadBalancerPoliciesForBackendServerVersionEnum;
(function (GetSetLoadBalancerPoliciesForBackendServerVersionEnum) {
    GetSetLoadBalancerPoliciesForBackendServerVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(GetSetLoadBalancerPoliciesForBackendServerVersionEnum || (GetSetLoadBalancerPoliciesForBackendServerVersionEnum = {}));
var GetSetLoadBalancerPoliciesForBackendServerQueryParams = /** @class */ (function (_super) {
    __extends(GetSetLoadBalancerPoliciesForBackendServerQueryParams, _super);
    function GetSetLoadBalancerPoliciesForBackendServerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesForBackendServerQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstancePort" }),
        __metadata("design:type", Number)
    ], GetSetLoadBalancerPoliciesForBackendServerQueryParams.prototype, "instancePort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesForBackendServerQueryParams.prototype, "loadBalancerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyNames" }),
        __metadata("design:type", Array)
    ], GetSetLoadBalancerPoliciesForBackendServerQueryParams.prototype, "policyNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesForBackendServerQueryParams.prototype, "version", void 0);
    return GetSetLoadBalancerPoliciesForBackendServerQueryParams;
}(SpeakeasyBase));
export { GetSetLoadBalancerPoliciesForBackendServerQueryParams };
var GetSetLoadBalancerPoliciesForBackendServerHeaders = /** @class */ (function (_super) {
    __extends(GetSetLoadBalancerPoliciesForBackendServerHeaders, _super);
    function GetSetLoadBalancerPoliciesForBackendServerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesForBackendServerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesForBackendServerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesForBackendServerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesForBackendServerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesForBackendServerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesForBackendServerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesForBackendServerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetLoadBalancerPoliciesForBackendServerHeaders;
}(SpeakeasyBase));
export { GetSetLoadBalancerPoliciesForBackendServerHeaders };
var GetSetLoadBalancerPoliciesForBackendServerRequest = /** @class */ (function (_super) {
    __extends(GetSetLoadBalancerPoliciesForBackendServerRequest, _super);
    function GetSetLoadBalancerPoliciesForBackendServerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetLoadBalancerPoliciesForBackendServerQueryParams)
    ], GetSetLoadBalancerPoliciesForBackendServerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetLoadBalancerPoliciesForBackendServerHeaders)
    ], GetSetLoadBalancerPoliciesForBackendServerRequest.prototype, "headers", void 0);
    return GetSetLoadBalancerPoliciesForBackendServerRequest;
}(SpeakeasyBase));
export { GetSetLoadBalancerPoliciesForBackendServerRequest };
var GetSetLoadBalancerPoliciesForBackendServerResponse = /** @class */ (function (_super) {
    __extends(GetSetLoadBalancerPoliciesForBackendServerResponse, _super);
    function GetSetLoadBalancerPoliciesForBackendServerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSetLoadBalancerPoliciesForBackendServerResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesForBackendServerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetLoadBalancerPoliciesForBackendServerResponse.prototype, "statusCode", void 0);
    return GetSetLoadBalancerPoliciesForBackendServerResponse;
}(SpeakeasyBase));
export { GetSetLoadBalancerPoliciesForBackendServerResponse };
