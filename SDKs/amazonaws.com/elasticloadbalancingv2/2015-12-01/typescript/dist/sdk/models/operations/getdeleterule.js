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
export var GetDeleteRuleActionEnum;
(function (GetDeleteRuleActionEnum) {
    GetDeleteRuleActionEnum["DeleteRule"] = "DeleteRule";
})(GetDeleteRuleActionEnum || (GetDeleteRuleActionEnum = {}));
export var GetDeleteRuleVersionEnum;
(function (GetDeleteRuleVersionEnum) {
    GetDeleteRuleVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(GetDeleteRuleVersionEnum || (GetDeleteRuleVersionEnum = {}));
var GetDeleteRuleQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteRuleQueryParams, _super);
    function GetDeleteRuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteRuleQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleArn" }),
        __metadata("design:type", String)
    ], GetDeleteRuleQueryParams.prototype, "ruleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteRuleQueryParams.prototype, "version", void 0);
    return GetDeleteRuleQueryParams;
}(SpeakeasyBase));
export { GetDeleteRuleQueryParams };
var GetDeleteRuleHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteRuleHeaders, _super);
    function GetDeleteRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteRuleHeaders;
}(SpeakeasyBase));
export { GetDeleteRuleHeaders };
var GetDeleteRuleRequest = /** @class */ (function (_super) {
    __extends(GetDeleteRuleRequest, _super);
    function GetDeleteRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteRuleQueryParams)
    ], GetDeleteRuleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteRuleHeaders)
    ], GetDeleteRuleRequest.prototype, "headers", void 0);
    return GetDeleteRuleRequest;
}(SpeakeasyBase));
export { GetDeleteRuleRequest };
var GetDeleteRuleResponse = /** @class */ (function (_super) {
    __extends(GetDeleteRuleResponse, _super);
    function GetDeleteRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteRuleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteRuleResponse.prototype, "statusCode", void 0);
    return GetDeleteRuleResponse;
}(SpeakeasyBase));
export { GetDeleteRuleResponse };
