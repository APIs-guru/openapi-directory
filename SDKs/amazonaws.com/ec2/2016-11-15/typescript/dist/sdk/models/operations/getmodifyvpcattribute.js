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
export var GetModifyVpcAttributeActionEnum;
(function (GetModifyVpcAttributeActionEnum) {
    GetModifyVpcAttributeActionEnum["ModifyVpcAttribute"] = "ModifyVpcAttribute";
})(GetModifyVpcAttributeActionEnum || (GetModifyVpcAttributeActionEnum = {}));
// GetModifyVpcAttributeEnableDnsHostnames
/**
 * Describes a value for a resource attribute that is a Boolean value.
**/
var GetModifyVpcAttributeEnableDnsHostnames = /** @class */ (function (_super) {
    __extends(GetModifyVpcAttributeEnableDnsHostnames, _super);
    function GetModifyVpcAttributeEnableDnsHostnames() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=Value" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcAttributeEnableDnsHostnames.prototype, "value", void 0);
    return GetModifyVpcAttributeEnableDnsHostnames;
}(SpeakeasyBase));
export { GetModifyVpcAttributeEnableDnsHostnames };
// GetModifyVpcAttributeEnableDnsSupport
/**
 * Describes a value for a resource attribute that is a Boolean value.
**/
var GetModifyVpcAttributeEnableDnsSupport = /** @class */ (function (_super) {
    __extends(GetModifyVpcAttributeEnableDnsSupport, _super);
    function GetModifyVpcAttributeEnableDnsSupport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=Value" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcAttributeEnableDnsSupport.prototype, "value", void 0);
    return GetModifyVpcAttributeEnableDnsSupport;
}(SpeakeasyBase));
export { GetModifyVpcAttributeEnableDnsSupport };
export var GetModifyVpcAttributeVersionEnum;
(function (GetModifyVpcAttributeVersionEnum) {
    GetModifyVpcAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyVpcAttributeVersionEnum || (GetModifyVpcAttributeVersionEnum = {}));
var GetModifyVpcAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyVpcAttributeQueryParams, _super);
    function GetModifyVpcAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyVpcAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnableDnsHostnames" }),
        __metadata("design:type", GetModifyVpcAttributeEnableDnsHostnames)
    ], GetModifyVpcAttributeQueryParams.prototype, "enableDnsHostnames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnableDnsSupport" }),
        __metadata("design:type", GetModifyVpcAttributeEnableDnsSupport)
    ], GetModifyVpcAttributeQueryParams.prototype, "enableDnsSupport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyVpcAttributeQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcId" }),
        __metadata("design:type", String)
    ], GetModifyVpcAttributeQueryParams.prototype, "vpcId", void 0);
    return GetModifyVpcAttributeQueryParams;
}(SpeakeasyBase));
export { GetModifyVpcAttributeQueryParams };
var GetModifyVpcAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetModifyVpcAttributeHeaders, _super);
    function GetModifyVpcAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyVpcAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyVpcAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyVpcAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyVpcAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyVpcAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyVpcAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyVpcAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyVpcAttributeHeaders;
}(SpeakeasyBase));
export { GetModifyVpcAttributeHeaders };
var GetModifyVpcAttributeRequest = /** @class */ (function (_super) {
    __extends(GetModifyVpcAttributeRequest, _super);
    function GetModifyVpcAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVpcAttributeQueryParams)
    ], GetModifyVpcAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVpcAttributeHeaders)
    ], GetModifyVpcAttributeRequest.prototype, "headers", void 0);
    return GetModifyVpcAttributeRequest;
}(SpeakeasyBase));
export { GetModifyVpcAttributeRequest };
var GetModifyVpcAttributeResponse = /** @class */ (function (_super) {
    __extends(GetModifyVpcAttributeResponse, _super);
    function GetModifyVpcAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyVpcAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyVpcAttributeResponse.prototype, "statusCode", void 0);
    return GetModifyVpcAttributeResponse;
}(SpeakeasyBase));
export { GetModifyVpcAttributeResponse };
