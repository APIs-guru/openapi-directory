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
export var GetSetSecurityGroupsActionEnum;
(function (GetSetSecurityGroupsActionEnum) {
    GetSetSecurityGroupsActionEnum["SetSecurityGroups"] = "SetSecurityGroups";
})(GetSetSecurityGroupsActionEnum || (GetSetSecurityGroupsActionEnum = {}));
export var GetSetSecurityGroupsVersionEnum;
(function (GetSetSecurityGroupsVersionEnum) {
    GetSetSecurityGroupsVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(GetSetSecurityGroupsVersionEnum || (GetSetSecurityGroupsVersionEnum = {}));
var GetSetSecurityGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetSetSecurityGroupsQueryParams, _super);
    function GetSetSecurityGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetSecurityGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerArn" }),
        __metadata("design:type", String)
    ], GetSetSecurityGroupsQueryParams.prototype, "loadBalancerArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SecurityGroups" }),
        __metadata("design:type", Array)
    ], GetSetSecurityGroupsQueryParams.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetSecurityGroupsQueryParams.prototype, "version", void 0);
    return GetSetSecurityGroupsQueryParams;
}(SpeakeasyBase));
export { GetSetSecurityGroupsQueryParams };
var GetSetSecurityGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetSetSecurityGroupsHeaders, _super);
    function GetSetSecurityGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetSecurityGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetSecurityGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetSecurityGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetSecurityGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetSecurityGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetSecurityGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetSecurityGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetSecurityGroupsHeaders;
}(SpeakeasyBase));
export { GetSetSecurityGroupsHeaders };
var GetSetSecurityGroupsRequest = /** @class */ (function (_super) {
    __extends(GetSetSecurityGroupsRequest, _super);
    function GetSetSecurityGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetSecurityGroupsQueryParams)
    ], GetSetSecurityGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetSecurityGroupsHeaders)
    ], GetSetSecurityGroupsRequest.prototype, "headers", void 0);
    return GetSetSecurityGroupsRequest;
}(SpeakeasyBase));
export { GetSetSecurityGroupsRequest };
var GetSetSecurityGroupsResponse = /** @class */ (function (_super) {
    __extends(GetSetSecurityGroupsResponse, _super);
    function GetSetSecurityGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSetSecurityGroupsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetSecurityGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetSecurityGroupsResponse.prototype, "statusCode", void 0);
    return GetSetSecurityGroupsResponse;
}(SpeakeasyBase));
export { GetSetSecurityGroupsResponse };
