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
export var GetCreateTrafficMirrorFilterRuleActionEnum;
(function (GetCreateTrafficMirrorFilterRuleActionEnum) {
    GetCreateTrafficMirrorFilterRuleActionEnum["CreateTrafficMirrorFilterRule"] = "CreateTrafficMirrorFilterRule";
})(GetCreateTrafficMirrorFilterRuleActionEnum || (GetCreateTrafficMirrorFilterRuleActionEnum = {}));
// GetCreateTrafficMirrorFilterRuleDestinationPortRange
/**
 * Information about the Traffic Mirror filter rule port range.
**/
var GetCreateTrafficMirrorFilterRuleDestinationPortRange = /** @class */ (function (_super) {
    __extends(GetCreateTrafficMirrorFilterRuleDestinationPortRange, _super);
    function GetCreateTrafficMirrorFilterRuleDestinationPortRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=FromPort" }),
        __metadata("design:type", Number)
    ], GetCreateTrafficMirrorFilterRuleDestinationPortRange.prototype, "fromPort", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=ToPort" }),
        __metadata("design:type", Number)
    ], GetCreateTrafficMirrorFilterRuleDestinationPortRange.prototype, "toPort", void 0);
    return GetCreateTrafficMirrorFilterRuleDestinationPortRange;
}(SpeakeasyBase));
export { GetCreateTrafficMirrorFilterRuleDestinationPortRange };
export var GetCreateTrafficMirrorFilterRuleRuleActionEnum;
(function (GetCreateTrafficMirrorFilterRuleRuleActionEnum) {
    GetCreateTrafficMirrorFilterRuleRuleActionEnum["Accept"] = "accept";
    GetCreateTrafficMirrorFilterRuleRuleActionEnum["Reject"] = "reject";
})(GetCreateTrafficMirrorFilterRuleRuleActionEnum || (GetCreateTrafficMirrorFilterRuleRuleActionEnum = {}));
// GetCreateTrafficMirrorFilterRuleSourcePortRange
/**
 * Information about the Traffic Mirror filter rule port range.
**/
var GetCreateTrafficMirrorFilterRuleSourcePortRange = /** @class */ (function (_super) {
    __extends(GetCreateTrafficMirrorFilterRuleSourcePortRange, _super);
    function GetCreateTrafficMirrorFilterRuleSourcePortRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=FromPort" }),
        __metadata("design:type", Number)
    ], GetCreateTrafficMirrorFilterRuleSourcePortRange.prototype, "fromPort", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=ToPort" }),
        __metadata("design:type", Number)
    ], GetCreateTrafficMirrorFilterRuleSourcePortRange.prototype, "toPort", void 0);
    return GetCreateTrafficMirrorFilterRuleSourcePortRange;
}(SpeakeasyBase));
export { GetCreateTrafficMirrorFilterRuleSourcePortRange };
export var GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum;
(function (GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum) {
    GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum["Ingress"] = "ingress";
    GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum["Egress"] = "egress";
})(GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum || (GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum = {}));
export var GetCreateTrafficMirrorFilterRuleVersionEnum;
(function (GetCreateTrafficMirrorFilterRuleVersionEnum) {
    GetCreateTrafficMirrorFilterRuleVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCreateTrafficMirrorFilterRuleVersionEnum || (GetCreateTrafficMirrorFilterRuleVersionEnum = {}));
var GetCreateTrafficMirrorFilterRuleQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateTrafficMirrorFilterRuleQueryParams, _super);
    function GetCreateTrafficMirrorFilterRuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClientToken" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleQueryParams.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Description" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleQueryParams.prototype, "destinationCidrBlock", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DestinationPortRange" }),
        __metadata("design:type", GetCreateTrafficMirrorFilterRuleDestinationPortRange)
    ], GetCreateTrafficMirrorFilterRuleQueryParams.prototype, "destinationPortRange", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCreateTrafficMirrorFilterRuleQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Protocol" }),
        __metadata("design:type", Number)
    ], GetCreateTrafficMirrorFilterRuleQueryParams.prototype, "protocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RuleAction" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleQueryParams.prototype, "ruleAction", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RuleNumber" }),
        __metadata("design:type", Number)
    ], GetCreateTrafficMirrorFilterRuleQueryParams.prototype, "ruleNumber", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourceCidrBlock" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleQueryParams.prototype, "sourceCidrBlock", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourcePortRange" }),
        __metadata("design:type", GetCreateTrafficMirrorFilterRuleSourcePortRange)
    ], GetCreateTrafficMirrorFilterRuleQueryParams.prototype, "sourcePortRange", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TrafficDirection" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleQueryParams.prototype, "trafficDirection", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorFilterId" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleQueryParams.prototype, "trafficMirrorFilterId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleQueryParams.prototype, "version", void 0);
    return GetCreateTrafficMirrorFilterRuleQueryParams;
}(SpeakeasyBase));
export { GetCreateTrafficMirrorFilterRuleQueryParams };
var GetCreateTrafficMirrorFilterRuleHeaders = /** @class */ (function (_super) {
    __extends(GetCreateTrafficMirrorFilterRuleHeaders, _super);
    function GetCreateTrafficMirrorFilterRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateTrafficMirrorFilterRuleHeaders;
}(SpeakeasyBase));
export { GetCreateTrafficMirrorFilterRuleHeaders };
var GetCreateTrafficMirrorFilterRuleRequest = /** @class */ (function (_super) {
    __extends(GetCreateTrafficMirrorFilterRuleRequest, _super);
    function GetCreateTrafficMirrorFilterRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateTrafficMirrorFilterRuleQueryParams)
    ], GetCreateTrafficMirrorFilterRuleRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateTrafficMirrorFilterRuleHeaders)
    ], GetCreateTrafficMirrorFilterRuleRequest.prototype, "headers", void 0);
    return GetCreateTrafficMirrorFilterRuleRequest;
}(SpeakeasyBase));
export { GetCreateTrafficMirrorFilterRuleRequest };
var GetCreateTrafficMirrorFilterRuleResponse = /** @class */ (function (_super) {
    __extends(GetCreateTrafficMirrorFilterRuleResponse, _super);
    function GetCreateTrafficMirrorFilterRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateTrafficMirrorFilterRuleResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateTrafficMirrorFilterRuleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateTrafficMirrorFilterRuleResponse.prototype, "statusCode", void 0);
    return GetCreateTrafficMirrorFilterRuleResponse;
}(SpeakeasyBase));
export { GetCreateTrafficMirrorFilterRuleResponse };
