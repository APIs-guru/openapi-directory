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
export var GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum;
(function (GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum) {
    GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum["ApplySecurityGroupsToClientVpnTargetNetwork"] = "ApplySecurityGroupsToClientVpnTargetNetwork";
})(GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum || (GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum = {}));
export var GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum;
(function (GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum) {
    GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum || (GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum = {}));
var GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams = /** @class */ (function (_super) {
    __extends(GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams, _super);
    function GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams.prototype, "clientVpnEndpointId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SecurityGroupId" }),
        __metadata("design:type", Array)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams.prototype, "securityGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcId" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams.prototype, "vpcId", void 0);
    return GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams;
}(SpeakeasyBase));
export { GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams };
var GetApplySecurityGroupsToClientVpnTargetNetworkHeaders = /** @class */ (function (_super) {
    __extends(GetApplySecurityGroupsToClientVpnTargetNetworkHeaders, _super);
    function GetApplySecurityGroupsToClientVpnTargetNetworkHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetApplySecurityGroupsToClientVpnTargetNetworkHeaders;
}(SpeakeasyBase));
export { GetApplySecurityGroupsToClientVpnTargetNetworkHeaders };
var GetApplySecurityGroupsToClientVpnTargetNetworkRequest = /** @class */ (function (_super) {
    __extends(GetApplySecurityGroupsToClientVpnTargetNetworkRequest, _super);
    function GetApplySecurityGroupsToClientVpnTargetNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApplySecurityGroupsToClientVpnTargetNetworkHeaders)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkRequest.prototype, "headers", void 0);
    return GetApplySecurityGroupsToClientVpnTargetNetworkRequest;
}(SpeakeasyBase));
export { GetApplySecurityGroupsToClientVpnTargetNetworkRequest };
var GetApplySecurityGroupsToClientVpnTargetNetworkResponse = /** @class */ (function (_super) {
    __extends(GetApplySecurityGroupsToClientVpnTargetNetworkResponse, _super);
    function GetApplySecurityGroupsToClientVpnTargetNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApplySecurityGroupsToClientVpnTargetNetworkResponse.prototype, "statusCode", void 0);
    return GetApplySecurityGroupsToClientVpnTargetNetworkResponse;
}(SpeakeasyBase));
export { GetApplySecurityGroupsToClientVpnTargetNetworkResponse };
