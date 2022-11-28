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
export var GetAuthorizeCacheSecurityGroupIngressActionEnum;
(function (GetAuthorizeCacheSecurityGroupIngressActionEnum) {
    GetAuthorizeCacheSecurityGroupIngressActionEnum["AuthorizeCacheSecurityGroupIngress"] = "AuthorizeCacheSecurityGroupIngress";
})(GetAuthorizeCacheSecurityGroupIngressActionEnum || (GetAuthorizeCacheSecurityGroupIngressActionEnum = {}));
export var GetAuthorizeCacheSecurityGroupIngressVersionEnum;
(function (GetAuthorizeCacheSecurityGroupIngressVersionEnum) {
    GetAuthorizeCacheSecurityGroupIngressVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetAuthorizeCacheSecurityGroupIngressVersionEnum || (GetAuthorizeCacheSecurityGroupIngressVersionEnum = {}));
var GetAuthorizeCacheSecurityGroupIngressQueryParams = /** @class */ (function (_super) {
    __extends(GetAuthorizeCacheSecurityGroupIngressQueryParams, _super);
    function GetAuthorizeCacheSecurityGroupIngressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAuthorizeCacheSecurityGroupIngressQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheSecurityGroupName" }),
        __metadata("design:type", String)
    ], GetAuthorizeCacheSecurityGroupIngressQueryParams.prototype, "cacheSecurityGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupName" }),
        __metadata("design:type", String)
    ], GetAuthorizeCacheSecurityGroupIngressQueryParams.prototype, "ec2SecurityGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupOwnerId" }),
        __metadata("design:type", String)
    ], GetAuthorizeCacheSecurityGroupIngressQueryParams.prototype, "ec2SecurityGroupOwnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAuthorizeCacheSecurityGroupIngressQueryParams.prototype, "version", void 0);
    return GetAuthorizeCacheSecurityGroupIngressQueryParams;
}(SpeakeasyBase));
export { GetAuthorizeCacheSecurityGroupIngressQueryParams };
var GetAuthorizeCacheSecurityGroupIngressHeaders = /** @class */ (function (_super) {
    __extends(GetAuthorizeCacheSecurityGroupIngressHeaders, _super);
    function GetAuthorizeCacheSecurityGroupIngressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAuthorizeCacheSecurityGroupIngressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAuthorizeCacheSecurityGroupIngressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAuthorizeCacheSecurityGroupIngressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAuthorizeCacheSecurityGroupIngressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAuthorizeCacheSecurityGroupIngressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAuthorizeCacheSecurityGroupIngressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAuthorizeCacheSecurityGroupIngressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAuthorizeCacheSecurityGroupIngressHeaders;
}(SpeakeasyBase));
export { GetAuthorizeCacheSecurityGroupIngressHeaders };
var GetAuthorizeCacheSecurityGroupIngressRequest = /** @class */ (function (_super) {
    __extends(GetAuthorizeCacheSecurityGroupIngressRequest, _super);
    function GetAuthorizeCacheSecurityGroupIngressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorizeCacheSecurityGroupIngressQueryParams)
    ], GetAuthorizeCacheSecurityGroupIngressRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorizeCacheSecurityGroupIngressHeaders)
    ], GetAuthorizeCacheSecurityGroupIngressRequest.prototype, "headers", void 0);
    return GetAuthorizeCacheSecurityGroupIngressRequest;
}(SpeakeasyBase));
export { GetAuthorizeCacheSecurityGroupIngressRequest };
var GetAuthorizeCacheSecurityGroupIngressResponse = /** @class */ (function (_super) {
    __extends(GetAuthorizeCacheSecurityGroupIngressResponse, _super);
    function GetAuthorizeCacheSecurityGroupIngressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAuthorizeCacheSecurityGroupIngressResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAuthorizeCacheSecurityGroupIngressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAuthorizeCacheSecurityGroupIngressResponse.prototype, "statusCode", void 0);
    return GetAuthorizeCacheSecurityGroupIngressResponse;
}(SpeakeasyBase));
export { GetAuthorizeCacheSecurityGroupIngressResponse };
