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
export var GetDeleteReceiptRuleActionEnum;
(function (GetDeleteReceiptRuleActionEnum) {
    GetDeleteReceiptRuleActionEnum["DeleteReceiptRule"] = "DeleteReceiptRule";
})(GetDeleteReceiptRuleActionEnum || (GetDeleteReceiptRuleActionEnum = {}));
export var GetDeleteReceiptRuleVersionEnum;
(function (GetDeleteReceiptRuleVersionEnum) {
    GetDeleteReceiptRuleVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDeleteReceiptRuleVersionEnum || (GetDeleteReceiptRuleVersionEnum = {}));
var GetDeleteReceiptRuleQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteReceiptRuleQueryParams, _super);
    function GetDeleteReceiptRuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleName" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleQueryParams.prototype, "ruleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleSetName" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleQueryParams.prototype, "ruleSetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleQueryParams.prototype, "version", void 0);
    return GetDeleteReceiptRuleQueryParams;
}(SpeakeasyBase));
export { GetDeleteReceiptRuleQueryParams };
var GetDeleteReceiptRuleHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteReceiptRuleHeaders, _super);
    function GetDeleteReceiptRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteReceiptRuleHeaders;
}(SpeakeasyBase));
export { GetDeleteReceiptRuleHeaders };
var GetDeleteReceiptRuleRequest = /** @class */ (function (_super) {
    __extends(GetDeleteReceiptRuleRequest, _super);
    function GetDeleteReceiptRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteReceiptRuleQueryParams)
    ], GetDeleteReceiptRuleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteReceiptRuleHeaders)
    ], GetDeleteReceiptRuleRequest.prototype, "headers", void 0);
    return GetDeleteReceiptRuleRequest;
}(SpeakeasyBase));
export { GetDeleteReceiptRuleRequest };
var GetDeleteReceiptRuleResponse = /** @class */ (function (_super) {
    __extends(GetDeleteReceiptRuleResponse, _super);
    function GetDeleteReceiptRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteReceiptRuleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteReceiptRuleResponse.prototype, "statusCode", void 0);
    return GetDeleteReceiptRuleResponse;
}(SpeakeasyBase));
export { GetDeleteReceiptRuleResponse };
