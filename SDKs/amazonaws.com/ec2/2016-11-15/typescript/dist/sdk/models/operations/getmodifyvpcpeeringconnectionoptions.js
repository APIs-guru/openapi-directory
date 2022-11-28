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
// GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions
/**
 * The VPC peering connection options.
**/
var GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions = /** @class */ (function (_super) {
    __extends(GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions, _super);
    function GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=AllowDnsResolutionFromRemoteVpc" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions.prototype, "allowDnsResolutionFromRemoteVpc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=AllowEgressFromLocalClassicLinkToRemoteVpc" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions.prototype, "allowEgressFromLocalClassicLinkToRemoteVpc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=AllowEgressFromLocalVpcToRemoteClassicLink" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions.prototype, "allowEgressFromLocalVpcToRemoteClassicLink", void 0);
    return GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions;
}(SpeakeasyBase));
export { GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions };
export var GetModifyVpcPeeringConnectionOptionsActionEnum;
(function (GetModifyVpcPeeringConnectionOptionsActionEnum) {
    GetModifyVpcPeeringConnectionOptionsActionEnum["ModifyVpcPeeringConnectionOptions"] = "ModifyVpcPeeringConnectionOptions";
})(GetModifyVpcPeeringConnectionOptionsActionEnum || (GetModifyVpcPeeringConnectionOptionsActionEnum = {}));
// GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions
/**
 * The VPC peering connection options.
**/
var GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions = /** @class */ (function (_super) {
    __extends(GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions, _super);
    function GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=AllowDnsResolutionFromRemoteVpc" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions.prototype, "allowDnsResolutionFromRemoteVpc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=AllowEgressFromLocalClassicLinkToRemoteVpc" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions.prototype, "allowEgressFromLocalClassicLinkToRemoteVpc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=AllowEgressFromLocalVpcToRemoteClassicLink" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions.prototype, "allowEgressFromLocalVpcToRemoteClassicLink", void 0);
    return GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions;
}(SpeakeasyBase));
export { GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions };
export var GetModifyVpcPeeringConnectionOptionsVersionEnum;
(function (GetModifyVpcPeeringConnectionOptionsVersionEnum) {
    GetModifyVpcPeeringConnectionOptionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyVpcPeeringConnectionOptionsVersionEnum || (GetModifyVpcPeeringConnectionOptionsVersionEnum = {}));
var GetModifyVpcPeeringConnectionOptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyVpcPeeringConnectionOptionsQueryParams, _super);
    function GetModifyVpcPeeringConnectionOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AccepterPeeringConnectionOptions" }),
        __metadata("design:type", GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions)
    ], GetModifyVpcPeeringConnectionOptionsQueryParams.prototype, "accepterPeeringConnectionOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyVpcPeeringConnectionOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcPeeringConnectionOptionsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RequesterPeeringConnectionOptions" }),
        __metadata("design:type", GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions)
    ], GetModifyVpcPeeringConnectionOptionsQueryParams.prototype, "requesterPeeringConnectionOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyVpcPeeringConnectionOptionsQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcPeeringConnectionId" }),
        __metadata("design:type", String)
    ], GetModifyVpcPeeringConnectionOptionsQueryParams.prototype, "vpcPeeringConnectionId", void 0);
    return GetModifyVpcPeeringConnectionOptionsQueryParams;
}(SpeakeasyBase));
export { GetModifyVpcPeeringConnectionOptionsQueryParams };
var GetModifyVpcPeeringConnectionOptionsHeaders = /** @class */ (function (_super) {
    __extends(GetModifyVpcPeeringConnectionOptionsHeaders, _super);
    function GetModifyVpcPeeringConnectionOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyVpcPeeringConnectionOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyVpcPeeringConnectionOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyVpcPeeringConnectionOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyVpcPeeringConnectionOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyVpcPeeringConnectionOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyVpcPeeringConnectionOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyVpcPeeringConnectionOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyVpcPeeringConnectionOptionsHeaders;
}(SpeakeasyBase));
export { GetModifyVpcPeeringConnectionOptionsHeaders };
var GetModifyVpcPeeringConnectionOptionsRequest = /** @class */ (function (_super) {
    __extends(GetModifyVpcPeeringConnectionOptionsRequest, _super);
    function GetModifyVpcPeeringConnectionOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVpcPeeringConnectionOptionsQueryParams)
    ], GetModifyVpcPeeringConnectionOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVpcPeeringConnectionOptionsHeaders)
    ], GetModifyVpcPeeringConnectionOptionsRequest.prototype, "headers", void 0);
    return GetModifyVpcPeeringConnectionOptionsRequest;
}(SpeakeasyBase));
export { GetModifyVpcPeeringConnectionOptionsRequest };
var GetModifyVpcPeeringConnectionOptionsResponse = /** @class */ (function (_super) {
    __extends(GetModifyVpcPeeringConnectionOptionsResponse, _super);
    function GetModifyVpcPeeringConnectionOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyVpcPeeringConnectionOptionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyVpcPeeringConnectionOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyVpcPeeringConnectionOptionsResponse.prototype, "statusCode", void 0);
    return GetModifyVpcPeeringConnectionOptionsResponse;
}(SpeakeasyBase));
export { GetModifyVpcPeeringConnectionOptionsResponse };
