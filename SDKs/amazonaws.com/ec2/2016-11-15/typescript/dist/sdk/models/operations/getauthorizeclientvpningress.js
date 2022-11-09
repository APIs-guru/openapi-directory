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
export var GetAuthorizeClientVpnIngressActionEnum;
(function (GetAuthorizeClientVpnIngressActionEnum) {
    GetAuthorizeClientVpnIngressActionEnum["AuthorizeClientVpnIngress"] = "AuthorizeClientVpnIngress";
})(GetAuthorizeClientVpnIngressActionEnum || (GetAuthorizeClientVpnIngressActionEnum = {}));
export var GetAuthorizeClientVpnIngressVersionEnum;
(function (GetAuthorizeClientVpnIngressVersionEnum) {
    GetAuthorizeClientVpnIngressVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAuthorizeClientVpnIngressVersionEnum || (GetAuthorizeClientVpnIngressVersionEnum = {}));
var GetAuthorizeClientVpnIngressQueryParams = /** @class */ (function (_super) {
    __extends(GetAuthorizeClientVpnIngressQueryParams, _super);
    function GetAuthorizeClientVpnIngressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AccessGroupId" }),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressQueryParams.prototype, "accessGroupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AuthorizeAllGroups" }),
        __metadata("design:type", Boolean)
    ], GetAuthorizeClientVpnIngressQueryParams.prototype, "authorizeAllGroups", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClientToken" }),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressQueryParams.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" }),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressQueryParams.prototype, "clientVpnEndpointId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Description" }),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetAuthorizeClientVpnIngressQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TargetNetworkCidr" }),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressQueryParams.prototype, "targetNetworkCidr", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressQueryParams.prototype, "version", void 0);
    return GetAuthorizeClientVpnIngressQueryParams;
}(SpeakeasyBase));
export { GetAuthorizeClientVpnIngressQueryParams };
var GetAuthorizeClientVpnIngressHeaders = /** @class */ (function (_super) {
    __extends(GetAuthorizeClientVpnIngressHeaders, _super);
    function GetAuthorizeClientVpnIngressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAuthorizeClientVpnIngressHeaders;
}(SpeakeasyBase));
export { GetAuthorizeClientVpnIngressHeaders };
var GetAuthorizeClientVpnIngressRequest = /** @class */ (function (_super) {
    __extends(GetAuthorizeClientVpnIngressRequest, _super);
    function GetAuthorizeClientVpnIngressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAuthorizeClientVpnIngressQueryParams)
    ], GetAuthorizeClientVpnIngressRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAuthorizeClientVpnIngressHeaders)
    ], GetAuthorizeClientVpnIngressRequest.prototype, "headers", void 0);
    return GetAuthorizeClientVpnIngressRequest;
}(SpeakeasyBase));
export { GetAuthorizeClientVpnIngressRequest };
var GetAuthorizeClientVpnIngressResponse = /** @class */ (function (_super) {
    __extends(GetAuthorizeClientVpnIngressResponse, _super);
    function GetAuthorizeClientVpnIngressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAuthorizeClientVpnIngressResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAuthorizeClientVpnIngressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAuthorizeClientVpnIngressResponse.prototype, "statusCode", void 0);
    return GetAuthorizeClientVpnIngressResponse;
}(SpeakeasyBase));
export { GetAuthorizeClientVpnIngressResponse };
