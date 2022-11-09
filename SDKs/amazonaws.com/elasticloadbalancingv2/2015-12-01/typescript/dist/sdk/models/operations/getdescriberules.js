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
export var GetDescribeRulesActionEnum;
(function (GetDescribeRulesActionEnum) {
    GetDescribeRulesActionEnum["DescribeRules"] = "DescribeRules";
})(GetDescribeRulesActionEnum || (GetDescribeRulesActionEnum = {}));
export var GetDescribeRulesVersionEnum;
(function (GetDescribeRulesVersionEnum) {
    GetDescribeRulesVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(GetDescribeRulesVersionEnum || (GetDescribeRulesVersionEnum = {}));
var GetDescribeRulesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeRulesQueryParams, _super);
    function GetDescribeRulesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeRulesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ListenerArn" }),
        __metadata("design:type", String)
    ], GetDescribeRulesQueryParams.prototype, "listenerArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeRulesQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], GetDescribeRulesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RuleArns" }),
        __metadata("design:type", Array)
    ], GetDescribeRulesQueryParams.prototype, "ruleArns", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeRulesQueryParams.prototype, "version", void 0);
    return GetDescribeRulesQueryParams;
}(SpeakeasyBase));
export { GetDescribeRulesQueryParams };
var GetDescribeRulesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeRulesHeaders, _super);
    function GetDescribeRulesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeRulesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeRulesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeRulesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeRulesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeRulesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeRulesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeRulesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeRulesHeaders;
}(SpeakeasyBase));
export { GetDescribeRulesHeaders };
var GetDescribeRulesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeRulesRequest, _super);
    function GetDescribeRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeRulesQueryParams)
    ], GetDescribeRulesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeRulesHeaders)
    ], GetDescribeRulesRequest.prototype, "headers", void 0);
    return GetDescribeRulesRequest;
}(SpeakeasyBase));
export { GetDescribeRulesRequest };
var GetDescribeRulesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeRulesResponse, _super);
    function GetDescribeRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeRulesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeRulesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeRulesResponse.prototype, "statusCode", void 0);
    return GetDescribeRulesResponse;
}(SpeakeasyBase));
export { GetDescribeRulesResponse };
