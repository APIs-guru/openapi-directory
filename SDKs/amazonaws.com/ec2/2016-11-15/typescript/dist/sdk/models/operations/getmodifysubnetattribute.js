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
export var GetModifySubnetAttributeActionEnum;
(function (GetModifySubnetAttributeActionEnum) {
    GetModifySubnetAttributeActionEnum["ModifySubnetAttribute"] = "ModifySubnetAttribute";
})(GetModifySubnetAttributeActionEnum || (GetModifySubnetAttributeActionEnum = {}));
// GetModifySubnetAttributeAssignIpv6AddressOnCreation
/**
 * Describes a value for a resource attribute that is a Boolean value.
**/
var GetModifySubnetAttributeAssignIpv6AddressOnCreation = /** @class */ (function (_super) {
    __extends(GetModifySubnetAttributeAssignIpv6AddressOnCreation, _super);
    function GetModifySubnetAttributeAssignIpv6AddressOnCreation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=Value" }),
        __metadata("design:type", Boolean)
    ], GetModifySubnetAttributeAssignIpv6AddressOnCreation.prototype, "value", void 0);
    return GetModifySubnetAttributeAssignIpv6AddressOnCreation;
}(SpeakeasyBase));
export { GetModifySubnetAttributeAssignIpv6AddressOnCreation };
// GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch
/**
 * Describes a value for a resource attribute that is a Boolean value.
**/
var GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch = /** @class */ (function (_super) {
    __extends(GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch, _super);
    function GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=Value" }),
        __metadata("design:type", Boolean)
    ], GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch.prototype, "value", void 0);
    return GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch;
}(SpeakeasyBase));
export { GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch };
// GetModifySubnetAttributeMapPublicIpOnLaunch
/**
 * Describes a value for a resource attribute that is a Boolean value.
**/
var GetModifySubnetAttributeMapPublicIpOnLaunch = /** @class */ (function (_super) {
    __extends(GetModifySubnetAttributeMapPublicIpOnLaunch, _super);
    function GetModifySubnetAttributeMapPublicIpOnLaunch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=Value" }),
        __metadata("design:type", Boolean)
    ], GetModifySubnetAttributeMapPublicIpOnLaunch.prototype, "value", void 0);
    return GetModifySubnetAttributeMapPublicIpOnLaunch;
}(SpeakeasyBase));
export { GetModifySubnetAttributeMapPublicIpOnLaunch };
export var GetModifySubnetAttributeVersionEnum;
(function (GetModifySubnetAttributeVersionEnum) {
    GetModifySubnetAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifySubnetAttributeVersionEnum || (GetModifySubnetAttributeVersionEnum = {}));
var GetModifySubnetAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetModifySubnetAttributeQueryParams, _super);
    function GetModifySubnetAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifySubnetAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AssignIpv6AddressOnCreation" }),
        __metadata("design:type", GetModifySubnetAttributeAssignIpv6AddressOnCreation)
    ], GetModifySubnetAttributeQueryParams.prototype, "assignIpv6AddressOnCreation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CustomerOwnedIpv4Pool" }),
        __metadata("design:type", String)
    ], GetModifySubnetAttributeQueryParams.prototype, "customerOwnedIpv4Pool", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MapCustomerOwnedIpOnLaunch" }),
        __metadata("design:type", GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch)
    ], GetModifySubnetAttributeQueryParams.prototype, "mapCustomerOwnedIpOnLaunch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MapPublicIpOnLaunch" }),
        __metadata("design:type", GetModifySubnetAttributeMapPublicIpOnLaunch)
    ], GetModifySubnetAttributeQueryParams.prototype, "mapPublicIpOnLaunch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SubnetId" }),
        __metadata("design:type", String)
    ], GetModifySubnetAttributeQueryParams.prototype, "subnetId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifySubnetAttributeQueryParams.prototype, "version", void 0);
    return GetModifySubnetAttributeQueryParams;
}(SpeakeasyBase));
export { GetModifySubnetAttributeQueryParams };
var GetModifySubnetAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetModifySubnetAttributeHeaders, _super);
    function GetModifySubnetAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifySubnetAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifySubnetAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifySubnetAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifySubnetAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifySubnetAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifySubnetAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifySubnetAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifySubnetAttributeHeaders;
}(SpeakeasyBase));
export { GetModifySubnetAttributeHeaders };
var GetModifySubnetAttributeRequest = /** @class */ (function (_super) {
    __extends(GetModifySubnetAttributeRequest, _super);
    function GetModifySubnetAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifySubnetAttributeQueryParams)
    ], GetModifySubnetAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifySubnetAttributeHeaders)
    ], GetModifySubnetAttributeRequest.prototype, "headers", void 0);
    return GetModifySubnetAttributeRequest;
}(SpeakeasyBase));
export { GetModifySubnetAttributeRequest };
var GetModifySubnetAttributeResponse = /** @class */ (function (_super) {
    __extends(GetModifySubnetAttributeResponse, _super);
    function GetModifySubnetAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifySubnetAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifySubnetAttributeResponse.prototype, "statusCode", void 0);
    return GetModifySubnetAttributeResponse;
}(SpeakeasyBase));
export { GetModifySubnetAttributeResponse };
