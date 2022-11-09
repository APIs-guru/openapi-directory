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
export var GetAttachLoadBalancerTargetGroupsActionEnum;
(function (GetAttachLoadBalancerTargetGroupsActionEnum) {
    GetAttachLoadBalancerTargetGroupsActionEnum["AttachLoadBalancerTargetGroups"] = "AttachLoadBalancerTargetGroups";
})(GetAttachLoadBalancerTargetGroupsActionEnum || (GetAttachLoadBalancerTargetGroupsActionEnum = {}));
export var GetAttachLoadBalancerTargetGroupsVersionEnum;
(function (GetAttachLoadBalancerTargetGroupsVersionEnum) {
    GetAttachLoadBalancerTargetGroupsVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetAttachLoadBalancerTargetGroupsVersionEnum || (GetAttachLoadBalancerTargetGroupsVersionEnum = {}));
var GetAttachLoadBalancerTargetGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetAttachLoadBalancerTargetGroupsQueryParams, _super);
    function GetAttachLoadBalancerTargetGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerTargetGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerTargetGroupsQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TargetGroupARNs" }),
        __metadata("design:type", Array)
    ], GetAttachLoadBalancerTargetGroupsQueryParams.prototype, "targetGroupArNs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerTargetGroupsQueryParams.prototype, "version", void 0);
    return GetAttachLoadBalancerTargetGroupsQueryParams;
}(SpeakeasyBase));
export { GetAttachLoadBalancerTargetGroupsQueryParams };
var GetAttachLoadBalancerTargetGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetAttachLoadBalancerTargetGroupsHeaders, _super);
    function GetAttachLoadBalancerTargetGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerTargetGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerTargetGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerTargetGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerTargetGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerTargetGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerTargetGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerTargetGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAttachLoadBalancerTargetGroupsHeaders;
}(SpeakeasyBase));
export { GetAttachLoadBalancerTargetGroupsHeaders };
var GetAttachLoadBalancerTargetGroupsRequest = /** @class */ (function (_super) {
    __extends(GetAttachLoadBalancerTargetGroupsRequest, _super);
    function GetAttachLoadBalancerTargetGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAttachLoadBalancerTargetGroupsQueryParams)
    ], GetAttachLoadBalancerTargetGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAttachLoadBalancerTargetGroupsHeaders)
    ], GetAttachLoadBalancerTargetGroupsRequest.prototype, "headers", void 0);
    return GetAttachLoadBalancerTargetGroupsRequest;
}(SpeakeasyBase));
export { GetAttachLoadBalancerTargetGroupsRequest };
var GetAttachLoadBalancerTargetGroupsResponse = /** @class */ (function (_super) {
    __extends(GetAttachLoadBalancerTargetGroupsResponse, _super);
    function GetAttachLoadBalancerTargetGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAttachLoadBalancerTargetGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerTargetGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAttachLoadBalancerTargetGroupsResponse.prototype, "statusCode", void 0);
    return GetAttachLoadBalancerTargetGroupsResponse;
}(SpeakeasyBase));
export { GetAttachLoadBalancerTargetGroupsResponse };
