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
export var GetModifyTrafficMirrorFilterRuleActionEnum;
(function (GetModifyTrafficMirrorFilterRuleActionEnum) {
    GetModifyTrafficMirrorFilterRuleActionEnum["ModifyTrafficMirrorFilterRule"] = "ModifyTrafficMirrorFilterRule";
})(GetModifyTrafficMirrorFilterRuleActionEnum || (GetModifyTrafficMirrorFilterRuleActionEnum = {}));
// GetModifyTrafficMirrorFilterRuleDestinationPortRange
/**
 * Information about the Traffic Mirror filter rule port range.
**/
var GetModifyTrafficMirrorFilterRuleDestinationPortRange = /** @class */ (function (_super) {
    __extends(GetModifyTrafficMirrorFilterRuleDestinationPortRange, _super);
    function GetModifyTrafficMirrorFilterRuleDestinationPortRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=FromPort" }),
        __metadata("design:type", Number)
    ], GetModifyTrafficMirrorFilterRuleDestinationPortRange.prototype, "fromPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=ToPort" }),
        __metadata("design:type", Number)
    ], GetModifyTrafficMirrorFilterRuleDestinationPortRange.prototype, "toPort", void 0);
    return GetModifyTrafficMirrorFilterRuleDestinationPortRange;
}(SpeakeasyBase));
export { GetModifyTrafficMirrorFilterRuleDestinationPortRange };
export var GetModifyTrafficMirrorFilterRuleRuleActionEnum;
(function (GetModifyTrafficMirrorFilterRuleRuleActionEnum) {
    GetModifyTrafficMirrorFilterRuleRuleActionEnum["Accept"] = "accept";
    GetModifyTrafficMirrorFilterRuleRuleActionEnum["Reject"] = "reject";
})(GetModifyTrafficMirrorFilterRuleRuleActionEnum || (GetModifyTrafficMirrorFilterRuleRuleActionEnum = {}));
// GetModifyTrafficMirrorFilterRuleSourcePortRange
/**
 * Information about the Traffic Mirror filter rule port range.
**/
var GetModifyTrafficMirrorFilterRuleSourcePortRange = /** @class */ (function (_super) {
    __extends(GetModifyTrafficMirrorFilterRuleSourcePortRange, _super);
    function GetModifyTrafficMirrorFilterRuleSourcePortRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=FromPort" }),
        __metadata("design:type", Number)
    ], GetModifyTrafficMirrorFilterRuleSourcePortRange.prototype, "fromPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=ToPort" }),
        __metadata("design:type", Number)
    ], GetModifyTrafficMirrorFilterRuleSourcePortRange.prototype, "toPort", void 0);
    return GetModifyTrafficMirrorFilterRuleSourcePortRange;
}(SpeakeasyBase));
export { GetModifyTrafficMirrorFilterRuleSourcePortRange };
export var GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum;
(function (GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum) {
    GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum["Ingress"] = "ingress";
    GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum["Egress"] = "egress";
})(GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum || (GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum = {}));
export var GetModifyTrafficMirrorFilterRuleVersionEnum;
(function (GetModifyTrafficMirrorFilterRuleVersionEnum) {
    GetModifyTrafficMirrorFilterRuleVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyTrafficMirrorFilterRuleVersionEnum || (GetModifyTrafficMirrorFilterRuleVersionEnum = {}));
var GetModifyTrafficMirrorFilterRuleQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyTrafficMirrorFilterRuleQueryParams, _super);
    function GetModifyTrafficMirrorFilterRuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleQueryParams.prototype, "destinationCidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationPortRange" }),
        __metadata("design:type", GetModifyTrafficMirrorFilterRuleDestinationPortRange)
    ], GetModifyTrafficMirrorFilterRuleQueryParams.prototype, "destinationPortRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyTrafficMirrorFilterRuleQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Protocol" }),
        __metadata("design:type", Number)
    ], GetModifyTrafficMirrorFilterRuleQueryParams.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoveField" }),
        __metadata("design:type", Array)
    ], GetModifyTrafficMirrorFilterRuleQueryParams.prototype, "removeField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleAction" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleQueryParams.prototype, "ruleAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleNumber" }),
        __metadata("design:type", Number)
    ], GetModifyTrafficMirrorFilterRuleQueryParams.prototype, "ruleNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceCidrBlock" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleQueryParams.prototype, "sourceCidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourcePortRange" }),
        __metadata("design:type", GetModifyTrafficMirrorFilterRuleSourcePortRange)
    ], GetModifyTrafficMirrorFilterRuleQueryParams.prototype, "sourcePortRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TrafficDirection" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleQueryParams.prototype, "trafficDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorFilterRuleId" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleQueryParams.prototype, "trafficMirrorFilterRuleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleQueryParams.prototype, "version", void 0);
    return GetModifyTrafficMirrorFilterRuleQueryParams;
}(SpeakeasyBase));
export { GetModifyTrafficMirrorFilterRuleQueryParams };
var GetModifyTrafficMirrorFilterRuleHeaders = /** @class */ (function (_super) {
    __extends(GetModifyTrafficMirrorFilterRuleHeaders, _super);
    function GetModifyTrafficMirrorFilterRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyTrafficMirrorFilterRuleHeaders;
}(SpeakeasyBase));
export { GetModifyTrafficMirrorFilterRuleHeaders };
var GetModifyTrafficMirrorFilterRuleRequest = /** @class */ (function (_super) {
    __extends(GetModifyTrafficMirrorFilterRuleRequest, _super);
    function GetModifyTrafficMirrorFilterRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyTrafficMirrorFilterRuleQueryParams)
    ], GetModifyTrafficMirrorFilterRuleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyTrafficMirrorFilterRuleHeaders)
    ], GetModifyTrafficMirrorFilterRuleRequest.prototype, "headers", void 0);
    return GetModifyTrafficMirrorFilterRuleRequest;
}(SpeakeasyBase));
export { GetModifyTrafficMirrorFilterRuleRequest };
var GetModifyTrafficMirrorFilterRuleResponse = /** @class */ (function (_super) {
    __extends(GetModifyTrafficMirrorFilterRuleResponse, _super);
    function GetModifyTrafficMirrorFilterRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyTrafficMirrorFilterRuleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyTrafficMirrorFilterRuleResponse.prototype, "statusCode", void 0);
    return GetModifyTrafficMirrorFilterRuleResponse;
}(SpeakeasyBase));
export { GetModifyTrafficMirrorFilterRuleResponse };
