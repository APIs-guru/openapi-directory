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
export var GetDescribeReceiptRuleActionEnum;
(function (GetDescribeReceiptRuleActionEnum) {
    GetDescribeReceiptRuleActionEnum["DescribeReceiptRule"] = "DescribeReceiptRule";
})(GetDescribeReceiptRuleActionEnum || (GetDescribeReceiptRuleActionEnum = {}));
export var GetDescribeReceiptRuleVersionEnum;
(function (GetDescribeReceiptRuleVersionEnum) {
    GetDescribeReceiptRuleVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDescribeReceiptRuleVersionEnum || (GetDescribeReceiptRuleVersionEnum = {}));
var GetDescribeReceiptRuleQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeReceiptRuleQueryParams, _super);
    function GetDescribeReceiptRuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeReceiptRuleQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleName" }),
        __metadata("design:type", String)
    ], GetDescribeReceiptRuleQueryParams.prototype, "ruleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleSetName" }),
        __metadata("design:type", String)
    ], GetDescribeReceiptRuleQueryParams.prototype, "ruleSetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeReceiptRuleQueryParams.prototype, "version", void 0);
    return GetDescribeReceiptRuleQueryParams;
}(SpeakeasyBase));
export { GetDescribeReceiptRuleQueryParams };
var GetDescribeReceiptRuleHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeReceiptRuleHeaders, _super);
    function GetDescribeReceiptRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeReceiptRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeReceiptRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeReceiptRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeReceiptRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeReceiptRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeReceiptRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeReceiptRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeReceiptRuleHeaders;
}(SpeakeasyBase));
export { GetDescribeReceiptRuleHeaders };
var GetDescribeReceiptRuleRequest = /** @class */ (function (_super) {
    __extends(GetDescribeReceiptRuleRequest, _super);
    function GetDescribeReceiptRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeReceiptRuleQueryParams)
    ], GetDescribeReceiptRuleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeReceiptRuleHeaders)
    ], GetDescribeReceiptRuleRequest.prototype, "headers", void 0);
    return GetDescribeReceiptRuleRequest;
}(SpeakeasyBase));
export { GetDescribeReceiptRuleRequest };
var GetDescribeReceiptRuleResponse = /** @class */ (function (_super) {
    __extends(GetDescribeReceiptRuleResponse, _super);
    function GetDescribeReceiptRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeReceiptRuleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeReceiptRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeReceiptRuleResponse.prototype, "statusCode", void 0);
    return GetDescribeReceiptRuleResponse;
}(SpeakeasyBase));
export { GetDescribeReceiptRuleResponse };
