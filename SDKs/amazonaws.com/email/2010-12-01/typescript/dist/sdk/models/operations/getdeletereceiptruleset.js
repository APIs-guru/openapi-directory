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
export var GetDeleteReceiptRuleSetActionEnum;
(function (GetDeleteReceiptRuleSetActionEnum) {
    GetDeleteReceiptRuleSetActionEnum["DeleteReceiptRuleSet"] = "DeleteReceiptRuleSet";
})(GetDeleteReceiptRuleSetActionEnum || (GetDeleteReceiptRuleSetActionEnum = {}));
export var GetDeleteReceiptRuleSetVersionEnum;
(function (GetDeleteReceiptRuleSetVersionEnum) {
    GetDeleteReceiptRuleSetVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDeleteReceiptRuleSetVersionEnum || (GetDeleteReceiptRuleSetVersionEnum = {}));
var GetDeleteReceiptRuleSetQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteReceiptRuleSetQueryParams, _super);
    function GetDeleteReceiptRuleSetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleSetQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RuleSetName" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleSetQueryParams.prototype, "ruleSetName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleSetQueryParams.prototype, "version", void 0);
    return GetDeleteReceiptRuleSetQueryParams;
}(SpeakeasyBase));
export { GetDeleteReceiptRuleSetQueryParams };
var GetDeleteReceiptRuleSetHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteReceiptRuleSetHeaders, _super);
    function GetDeleteReceiptRuleSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteReceiptRuleSetHeaders;
}(SpeakeasyBase));
export { GetDeleteReceiptRuleSetHeaders };
var GetDeleteReceiptRuleSetRequest = /** @class */ (function (_super) {
    __extends(GetDeleteReceiptRuleSetRequest, _super);
    function GetDeleteReceiptRuleSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteReceiptRuleSetQueryParams)
    ], GetDeleteReceiptRuleSetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteReceiptRuleSetHeaders)
    ], GetDeleteReceiptRuleSetRequest.prototype, "headers", void 0);
    return GetDeleteReceiptRuleSetRequest;
}(SpeakeasyBase));
export { GetDeleteReceiptRuleSetRequest };
var GetDeleteReceiptRuleSetResponse = /** @class */ (function (_super) {
    __extends(GetDeleteReceiptRuleSetResponse, _super);
    function GetDeleteReceiptRuleSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteReceiptRuleSetResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteReceiptRuleSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteReceiptRuleSetResponse.prototype, "statusCode", void 0);
    return GetDeleteReceiptRuleSetResponse;
}(SpeakeasyBase));
export { GetDeleteReceiptRuleSetResponse };
