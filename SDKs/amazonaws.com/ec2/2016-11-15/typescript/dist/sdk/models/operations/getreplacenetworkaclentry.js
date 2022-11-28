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
export var GetReplaceNetworkAclEntryActionEnum;
(function (GetReplaceNetworkAclEntryActionEnum) {
    GetReplaceNetworkAclEntryActionEnum["ReplaceNetworkAclEntry"] = "ReplaceNetworkAclEntry";
})(GetReplaceNetworkAclEntryActionEnum || (GetReplaceNetworkAclEntryActionEnum = {}));
// GetReplaceNetworkAclEntryIcmp
/**
 * Describes the ICMP type and code.
**/
var GetReplaceNetworkAclEntryIcmp = /** @class */ (function (_super) {
    __extends(GetReplaceNetworkAclEntryIcmp, _super);
    function GetReplaceNetworkAclEntryIcmp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=Code" }),
        __metadata("design:type", Number)
    ], GetReplaceNetworkAclEntryIcmp.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=Type" }),
        __metadata("design:type", Number)
    ], GetReplaceNetworkAclEntryIcmp.prototype, "type", void 0);
    return GetReplaceNetworkAclEntryIcmp;
}(SpeakeasyBase));
export { GetReplaceNetworkAclEntryIcmp };
// GetReplaceNetworkAclEntryPortRange
/**
 * Describes a range of ports.
**/
var GetReplaceNetworkAclEntryPortRange = /** @class */ (function (_super) {
    __extends(GetReplaceNetworkAclEntryPortRange, _super);
    function GetReplaceNetworkAclEntryPortRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=From" }),
        __metadata("design:type", Number)
    ], GetReplaceNetworkAclEntryPortRange.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=To" }),
        __metadata("design:type", Number)
    ], GetReplaceNetworkAclEntryPortRange.prototype, "to", void 0);
    return GetReplaceNetworkAclEntryPortRange;
}(SpeakeasyBase));
export { GetReplaceNetworkAclEntryPortRange };
export var GetReplaceNetworkAclEntryRuleActionEnum;
(function (GetReplaceNetworkAclEntryRuleActionEnum) {
    GetReplaceNetworkAclEntryRuleActionEnum["Allow"] = "allow";
    GetReplaceNetworkAclEntryRuleActionEnum["Deny"] = "deny";
})(GetReplaceNetworkAclEntryRuleActionEnum || (GetReplaceNetworkAclEntryRuleActionEnum = {}));
export var GetReplaceNetworkAclEntryVersionEnum;
(function (GetReplaceNetworkAclEntryVersionEnum) {
    GetReplaceNetworkAclEntryVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetReplaceNetworkAclEntryVersionEnum || (GetReplaceNetworkAclEntryVersionEnum = {}));
var GetReplaceNetworkAclEntryQueryParams = /** @class */ (function (_super) {
    __extends(GetReplaceNetworkAclEntryQueryParams, _super);
    function GetReplaceNetworkAclEntryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CidrBlock" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryQueryParams.prototype, "cidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetReplaceNetworkAclEntryQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Egress" }),
        __metadata("design:type", Boolean)
    ], GetReplaceNetworkAclEntryQueryParams.prototype, "egress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Icmp" }),
        __metadata("design:type", GetReplaceNetworkAclEntryIcmp)
    ], GetReplaceNetworkAclEntryQueryParams.prototype, "icmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6CidrBlock" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryQueryParams.prototype, "ipv6CidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkAclId" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryQueryParams.prototype, "networkAclId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PortRange" }),
        __metadata("design:type", GetReplaceNetworkAclEntryPortRange)
    ], GetReplaceNetworkAclEntryQueryParams.prototype, "portRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Protocol" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryQueryParams.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleAction" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryQueryParams.prototype, "ruleAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleNumber" }),
        __metadata("design:type", Number)
    ], GetReplaceNetworkAclEntryQueryParams.prototype, "ruleNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryQueryParams.prototype, "version", void 0);
    return GetReplaceNetworkAclEntryQueryParams;
}(SpeakeasyBase));
export { GetReplaceNetworkAclEntryQueryParams };
var GetReplaceNetworkAclEntryHeaders = /** @class */ (function (_super) {
    __extends(GetReplaceNetworkAclEntryHeaders, _super);
    function GetReplaceNetworkAclEntryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetReplaceNetworkAclEntryHeaders;
}(SpeakeasyBase));
export { GetReplaceNetworkAclEntryHeaders };
var GetReplaceNetworkAclEntryRequest = /** @class */ (function (_super) {
    __extends(GetReplaceNetworkAclEntryRequest, _super);
    function GetReplaceNetworkAclEntryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReplaceNetworkAclEntryQueryParams)
    ], GetReplaceNetworkAclEntryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReplaceNetworkAclEntryHeaders)
    ], GetReplaceNetworkAclEntryRequest.prototype, "headers", void 0);
    return GetReplaceNetworkAclEntryRequest;
}(SpeakeasyBase));
export { GetReplaceNetworkAclEntryRequest };
var GetReplaceNetworkAclEntryResponse = /** @class */ (function (_super) {
    __extends(GetReplaceNetworkAclEntryResponse, _super);
    function GetReplaceNetworkAclEntryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclEntryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReplaceNetworkAclEntryResponse.prototype, "statusCode", void 0);
    return GetReplaceNetworkAclEntryResponse;
}(SpeakeasyBase));
export { GetReplaceNetworkAclEntryResponse };
