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
export var GetCreateNetworkAclEntryActionEnum;
(function (GetCreateNetworkAclEntryActionEnum) {
    GetCreateNetworkAclEntryActionEnum["CreateNetworkAclEntry"] = "CreateNetworkAclEntry";
})(GetCreateNetworkAclEntryActionEnum || (GetCreateNetworkAclEntryActionEnum = {}));
// GetCreateNetworkAclEntryIcmp
/**
 * Describes the ICMP type and code.
**/
var GetCreateNetworkAclEntryIcmp = /** @class */ (function (_super) {
    __extends(GetCreateNetworkAclEntryIcmp, _super);
    function GetCreateNetworkAclEntryIcmp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=Code" }),
        __metadata("design:type", Number)
    ], GetCreateNetworkAclEntryIcmp.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=Type" }),
        __metadata("design:type", Number)
    ], GetCreateNetworkAclEntryIcmp.prototype, "type", void 0);
    return GetCreateNetworkAclEntryIcmp;
}(SpeakeasyBase));
export { GetCreateNetworkAclEntryIcmp };
// GetCreateNetworkAclEntryPortRange
/**
 * Describes a range of ports.
**/
var GetCreateNetworkAclEntryPortRange = /** @class */ (function (_super) {
    __extends(GetCreateNetworkAclEntryPortRange, _super);
    function GetCreateNetworkAclEntryPortRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=From" }),
        __metadata("design:type", Number)
    ], GetCreateNetworkAclEntryPortRange.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=To" }),
        __metadata("design:type", Number)
    ], GetCreateNetworkAclEntryPortRange.prototype, "to", void 0);
    return GetCreateNetworkAclEntryPortRange;
}(SpeakeasyBase));
export { GetCreateNetworkAclEntryPortRange };
export var GetCreateNetworkAclEntryRuleActionEnum;
(function (GetCreateNetworkAclEntryRuleActionEnum) {
    GetCreateNetworkAclEntryRuleActionEnum["Allow"] = "allow";
    GetCreateNetworkAclEntryRuleActionEnum["Deny"] = "deny";
})(GetCreateNetworkAclEntryRuleActionEnum || (GetCreateNetworkAclEntryRuleActionEnum = {}));
export var GetCreateNetworkAclEntryVersionEnum;
(function (GetCreateNetworkAclEntryVersionEnum) {
    GetCreateNetworkAclEntryVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCreateNetworkAclEntryVersionEnum || (GetCreateNetworkAclEntryVersionEnum = {}));
var GetCreateNetworkAclEntryQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateNetworkAclEntryQueryParams, _super);
    function GetCreateNetworkAclEntryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CidrBlock" }),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryQueryParams.prototype, "cidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCreateNetworkAclEntryQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Egress" }),
        __metadata("design:type", Boolean)
    ], GetCreateNetworkAclEntryQueryParams.prototype, "egress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Icmp" }),
        __metadata("design:type", GetCreateNetworkAclEntryIcmp)
    ], GetCreateNetworkAclEntryQueryParams.prototype, "icmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6CidrBlock" }),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryQueryParams.prototype, "ipv6CidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkAclId" }),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryQueryParams.prototype, "networkAclId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PortRange" }),
        __metadata("design:type", GetCreateNetworkAclEntryPortRange)
    ], GetCreateNetworkAclEntryQueryParams.prototype, "portRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Protocol" }),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryQueryParams.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleAction" }),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryQueryParams.prototype, "ruleAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleNumber" }),
        __metadata("design:type", Number)
    ], GetCreateNetworkAclEntryQueryParams.prototype, "ruleNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryQueryParams.prototype, "version", void 0);
    return GetCreateNetworkAclEntryQueryParams;
}(SpeakeasyBase));
export { GetCreateNetworkAclEntryQueryParams };
var GetCreateNetworkAclEntryHeaders = /** @class */ (function (_super) {
    __extends(GetCreateNetworkAclEntryHeaders, _super);
    function GetCreateNetworkAclEntryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateNetworkAclEntryHeaders;
}(SpeakeasyBase));
export { GetCreateNetworkAclEntryHeaders };
var GetCreateNetworkAclEntryRequest = /** @class */ (function (_super) {
    __extends(GetCreateNetworkAclEntryRequest, _super);
    function GetCreateNetworkAclEntryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateNetworkAclEntryQueryParams)
    ], GetCreateNetworkAclEntryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateNetworkAclEntryHeaders)
    ], GetCreateNetworkAclEntryRequest.prototype, "headers", void 0);
    return GetCreateNetworkAclEntryRequest;
}(SpeakeasyBase));
export { GetCreateNetworkAclEntryRequest };
var GetCreateNetworkAclEntryResponse = /** @class */ (function (_super) {
    __extends(GetCreateNetworkAclEntryResponse, _super);
    function GetCreateNetworkAclEntryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCreateNetworkAclEntryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCreateNetworkAclEntryResponse.prototype, "statusCode", void 0);
    return GetCreateNetworkAclEntryResponse;
}(SpeakeasyBase));
export { GetCreateNetworkAclEntryResponse };
