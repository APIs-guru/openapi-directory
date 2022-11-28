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
export var GetSetActiveReceiptRuleSetActionEnum;
(function (GetSetActiveReceiptRuleSetActionEnum) {
    GetSetActiveReceiptRuleSetActionEnum["SetActiveReceiptRuleSet"] = "SetActiveReceiptRuleSet";
})(GetSetActiveReceiptRuleSetActionEnum || (GetSetActiveReceiptRuleSetActionEnum = {}));
export var GetSetActiveReceiptRuleSetVersionEnum;
(function (GetSetActiveReceiptRuleSetVersionEnum) {
    GetSetActiveReceiptRuleSetVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetSetActiveReceiptRuleSetVersionEnum || (GetSetActiveReceiptRuleSetVersionEnum = {}));
var GetSetActiveReceiptRuleSetQueryParams = /** @class */ (function (_super) {
    __extends(GetSetActiveReceiptRuleSetQueryParams, _super);
    function GetSetActiveReceiptRuleSetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetActiveReceiptRuleSetQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleSetName" }),
        __metadata("design:type", String)
    ], GetSetActiveReceiptRuleSetQueryParams.prototype, "ruleSetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetActiveReceiptRuleSetQueryParams.prototype, "version", void 0);
    return GetSetActiveReceiptRuleSetQueryParams;
}(SpeakeasyBase));
export { GetSetActiveReceiptRuleSetQueryParams };
var GetSetActiveReceiptRuleSetHeaders = /** @class */ (function (_super) {
    __extends(GetSetActiveReceiptRuleSetHeaders, _super);
    function GetSetActiveReceiptRuleSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetActiveReceiptRuleSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetActiveReceiptRuleSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetActiveReceiptRuleSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetActiveReceiptRuleSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetActiveReceiptRuleSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetActiveReceiptRuleSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetActiveReceiptRuleSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetActiveReceiptRuleSetHeaders;
}(SpeakeasyBase));
export { GetSetActiveReceiptRuleSetHeaders };
var GetSetActiveReceiptRuleSetRequest = /** @class */ (function (_super) {
    __extends(GetSetActiveReceiptRuleSetRequest, _super);
    function GetSetActiveReceiptRuleSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetActiveReceiptRuleSetQueryParams)
    ], GetSetActiveReceiptRuleSetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetActiveReceiptRuleSetHeaders)
    ], GetSetActiveReceiptRuleSetRequest.prototype, "headers", void 0);
    return GetSetActiveReceiptRuleSetRequest;
}(SpeakeasyBase));
export { GetSetActiveReceiptRuleSetRequest };
var GetSetActiveReceiptRuleSetResponse = /** @class */ (function (_super) {
    __extends(GetSetActiveReceiptRuleSetResponse, _super);
    function GetSetActiveReceiptRuleSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSetActiveReceiptRuleSetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetActiveReceiptRuleSetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetActiveReceiptRuleSetResponse.prototype, "statusCode", void 0);
    return GetSetActiveReceiptRuleSetResponse;
}(SpeakeasyBase));
export { GetSetActiveReceiptRuleSetResponse };
