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
export var GetEnableVpcClassicLinkDnsSupportActionEnum;
(function (GetEnableVpcClassicLinkDnsSupportActionEnum) {
    GetEnableVpcClassicLinkDnsSupportActionEnum["EnableVpcClassicLinkDnsSupport"] = "EnableVpcClassicLinkDnsSupport";
})(GetEnableVpcClassicLinkDnsSupportActionEnum || (GetEnableVpcClassicLinkDnsSupportActionEnum = {}));
export var GetEnableVpcClassicLinkDnsSupportVersionEnum;
(function (GetEnableVpcClassicLinkDnsSupportVersionEnum) {
    GetEnableVpcClassicLinkDnsSupportVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetEnableVpcClassicLinkDnsSupportVersionEnum || (GetEnableVpcClassicLinkDnsSupportVersionEnum = {}));
var GetEnableVpcClassicLinkDnsSupportQueryParams = /** @class */ (function (_super) {
    __extends(GetEnableVpcClassicLinkDnsSupportQueryParams, _super);
    function GetEnableVpcClassicLinkDnsSupportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetEnableVpcClassicLinkDnsSupportQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetEnableVpcClassicLinkDnsSupportQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpcId" }),
        __metadata("design:type", String)
    ], GetEnableVpcClassicLinkDnsSupportQueryParams.prototype, "vpcId", void 0);
    return GetEnableVpcClassicLinkDnsSupportQueryParams;
}(SpeakeasyBase));
export { GetEnableVpcClassicLinkDnsSupportQueryParams };
var GetEnableVpcClassicLinkDnsSupportHeaders = /** @class */ (function (_super) {
    __extends(GetEnableVpcClassicLinkDnsSupportHeaders, _super);
    function GetEnableVpcClassicLinkDnsSupportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEnableVpcClassicLinkDnsSupportHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEnableVpcClassicLinkDnsSupportHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEnableVpcClassicLinkDnsSupportHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEnableVpcClassicLinkDnsSupportHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEnableVpcClassicLinkDnsSupportHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEnableVpcClassicLinkDnsSupportHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEnableVpcClassicLinkDnsSupportHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetEnableVpcClassicLinkDnsSupportHeaders;
}(SpeakeasyBase));
export { GetEnableVpcClassicLinkDnsSupportHeaders };
var GetEnableVpcClassicLinkDnsSupportRequest = /** @class */ (function (_super) {
    __extends(GetEnableVpcClassicLinkDnsSupportRequest, _super);
    function GetEnableVpcClassicLinkDnsSupportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEnableVpcClassicLinkDnsSupportQueryParams)
    ], GetEnableVpcClassicLinkDnsSupportRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetEnableVpcClassicLinkDnsSupportHeaders)
    ], GetEnableVpcClassicLinkDnsSupportRequest.prototype, "headers", void 0);
    return GetEnableVpcClassicLinkDnsSupportRequest;
}(SpeakeasyBase));
export { GetEnableVpcClassicLinkDnsSupportRequest };
var GetEnableVpcClassicLinkDnsSupportResponse = /** @class */ (function (_super) {
    __extends(GetEnableVpcClassicLinkDnsSupportResponse, _super);
    function GetEnableVpcClassicLinkDnsSupportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetEnableVpcClassicLinkDnsSupportResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEnableVpcClassicLinkDnsSupportResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEnableVpcClassicLinkDnsSupportResponse.prototype, "statusCode", void 0);
    return GetEnableVpcClassicLinkDnsSupportResponse;
}(SpeakeasyBase));
export { GetEnableVpcClassicLinkDnsSupportResponse };
