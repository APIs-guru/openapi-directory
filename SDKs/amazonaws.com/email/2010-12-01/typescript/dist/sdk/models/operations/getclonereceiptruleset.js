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
export var GetCloneReceiptRuleSetActionEnum;
(function (GetCloneReceiptRuleSetActionEnum) {
    GetCloneReceiptRuleSetActionEnum["CloneReceiptRuleSet"] = "CloneReceiptRuleSet";
})(GetCloneReceiptRuleSetActionEnum || (GetCloneReceiptRuleSetActionEnum = {}));
export var GetCloneReceiptRuleSetVersionEnum;
(function (GetCloneReceiptRuleSetVersionEnum) {
    GetCloneReceiptRuleSetVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetCloneReceiptRuleSetVersionEnum || (GetCloneReceiptRuleSetVersionEnum = {}));
var GetCloneReceiptRuleSetQueryParams = /** @class */ (function (_super) {
    __extends(GetCloneReceiptRuleSetQueryParams, _super);
    function GetCloneReceiptRuleSetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCloneReceiptRuleSetQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=OriginalRuleSetName" }),
        __metadata("design:type", String)
    ], GetCloneReceiptRuleSetQueryParams.prototype, "originalRuleSetName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RuleSetName" }),
        __metadata("design:type", String)
    ], GetCloneReceiptRuleSetQueryParams.prototype, "ruleSetName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCloneReceiptRuleSetQueryParams.prototype, "version", void 0);
    return GetCloneReceiptRuleSetQueryParams;
}(SpeakeasyBase));
export { GetCloneReceiptRuleSetQueryParams };
var GetCloneReceiptRuleSetHeaders = /** @class */ (function (_super) {
    __extends(GetCloneReceiptRuleSetHeaders, _super);
    function GetCloneReceiptRuleSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCloneReceiptRuleSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCloneReceiptRuleSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCloneReceiptRuleSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCloneReceiptRuleSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCloneReceiptRuleSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCloneReceiptRuleSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCloneReceiptRuleSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCloneReceiptRuleSetHeaders;
}(SpeakeasyBase));
export { GetCloneReceiptRuleSetHeaders };
var GetCloneReceiptRuleSetRequest = /** @class */ (function (_super) {
    __extends(GetCloneReceiptRuleSetRequest, _super);
    function GetCloneReceiptRuleSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCloneReceiptRuleSetQueryParams)
    ], GetCloneReceiptRuleSetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCloneReceiptRuleSetHeaders)
    ], GetCloneReceiptRuleSetRequest.prototype, "headers", void 0);
    return GetCloneReceiptRuleSetRequest;
}(SpeakeasyBase));
export { GetCloneReceiptRuleSetRequest };
var GetCloneReceiptRuleSetResponse = /** @class */ (function (_super) {
    __extends(GetCloneReceiptRuleSetResponse, _super);
    function GetCloneReceiptRuleSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCloneReceiptRuleSetResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCloneReceiptRuleSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCloneReceiptRuleSetResponse.prototype, "statusCode", void 0);
    return GetCloneReceiptRuleSetResponse;
}(SpeakeasyBase));
export { GetCloneReceiptRuleSetResponse };
