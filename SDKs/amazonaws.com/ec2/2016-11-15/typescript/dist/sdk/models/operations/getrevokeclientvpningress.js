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
export var GetRevokeClientVpnIngressActionEnum;
(function (GetRevokeClientVpnIngressActionEnum) {
    GetRevokeClientVpnIngressActionEnum["RevokeClientVpnIngress"] = "RevokeClientVpnIngress";
})(GetRevokeClientVpnIngressActionEnum || (GetRevokeClientVpnIngressActionEnum = {}));
export var GetRevokeClientVpnIngressVersionEnum;
(function (GetRevokeClientVpnIngressVersionEnum) {
    GetRevokeClientVpnIngressVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetRevokeClientVpnIngressVersionEnum || (GetRevokeClientVpnIngressVersionEnum = {}));
var GetRevokeClientVpnIngressQueryParams = /** @class */ (function (_super) {
    __extends(GetRevokeClientVpnIngressQueryParams, _super);
    function GetRevokeClientVpnIngressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AccessGroupId" }),
        __metadata("design:type", String)
    ], GetRevokeClientVpnIngressQueryParams.prototype, "accessGroupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRevokeClientVpnIngressQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" }),
        __metadata("design:type", String)
    ], GetRevokeClientVpnIngressQueryParams.prototype, "clientVpnEndpointId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetRevokeClientVpnIngressQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RevokeAllGroups" }),
        __metadata("design:type", Boolean)
    ], GetRevokeClientVpnIngressQueryParams.prototype, "revokeAllGroups", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TargetNetworkCidr" }),
        __metadata("design:type", String)
    ], GetRevokeClientVpnIngressQueryParams.prototype, "targetNetworkCidr", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRevokeClientVpnIngressQueryParams.prototype, "version", void 0);
    return GetRevokeClientVpnIngressQueryParams;
}(SpeakeasyBase));
export { GetRevokeClientVpnIngressQueryParams };
var GetRevokeClientVpnIngressHeaders = /** @class */ (function (_super) {
    __extends(GetRevokeClientVpnIngressHeaders, _super);
    function GetRevokeClientVpnIngressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRevokeClientVpnIngressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRevokeClientVpnIngressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRevokeClientVpnIngressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRevokeClientVpnIngressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRevokeClientVpnIngressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRevokeClientVpnIngressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRevokeClientVpnIngressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRevokeClientVpnIngressHeaders;
}(SpeakeasyBase));
export { GetRevokeClientVpnIngressHeaders };
var GetRevokeClientVpnIngressRequest = /** @class */ (function (_super) {
    __extends(GetRevokeClientVpnIngressRequest, _super);
    function GetRevokeClientVpnIngressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRevokeClientVpnIngressQueryParams)
    ], GetRevokeClientVpnIngressRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRevokeClientVpnIngressHeaders)
    ], GetRevokeClientVpnIngressRequest.prototype, "headers", void 0);
    return GetRevokeClientVpnIngressRequest;
}(SpeakeasyBase));
export { GetRevokeClientVpnIngressRequest };
var GetRevokeClientVpnIngressResponse = /** @class */ (function (_super) {
    __extends(GetRevokeClientVpnIngressResponse, _super);
    function GetRevokeClientVpnIngressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRevokeClientVpnIngressResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRevokeClientVpnIngressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRevokeClientVpnIngressResponse.prototype, "statusCode", void 0);
    return GetRevokeClientVpnIngressResponse;
}(SpeakeasyBase));
export { GetRevokeClientVpnIngressResponse };
