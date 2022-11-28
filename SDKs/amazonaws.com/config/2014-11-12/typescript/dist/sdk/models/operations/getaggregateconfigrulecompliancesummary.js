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
import * as shared from "../shared";
var GetAggregateConfigRuleComplianceSummaryQueryParams = /** @class */ (function (_super) {
    __extends(GetAggregateConfigRuleComplianceSummaryQueryParams, _super);
    function GetAggregateConfigRuleComplianceSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], GetAggregateConfigRuleComplianceSummaryQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetAggregateConfigRuleComplianceSummaryQueryParams.prototype, "nextToken", void 0);
    return GetAggregateConfigRuleComplianceSummaryQueryParams;
}(SpeakeasyBase));
export { GetAggregateConfigRuleComplianceSummaryQueryParams };
export var GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum;
(function (GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum) {
    GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum["StarlingDoveServiceGetAggregateConfigRuleComplianceSummary"] = "StarlingDoveService.GetAggregateConfigRuleComplianceSummary";
})(GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum || (GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum = {}));
var GetAggregateConfigRuleComplianceSummaryHeaders = /** @class */ (function (_super) {
    __extends(GetAggregateConfigRuleComplianceSummaryHeaders, _super);
    function GetAggregateConfigRuleComplianceSummaryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAggregateConfigRuleComplianceSummaryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAggregateConfigRuleComplianceSummaryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAggregateConfigRuleComplianceSummaryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAggregateConfigRuleComplianceSummaryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAggregateConfigRuleComplianceSummaryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAggregateConfigRuleComplianceSummaryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAggregateConfigRuleComplianceSummaryHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetAggregateConfigRuleComplianceSummaryHeaders.prototype, "xAmzTarget", void 0);
    return GetAggregateConfigRuleComplianceSummaryHeaders;
}(SpeakeasyBase));
export { GetAggregateConfigRuleComplianceSummaryHeaders };
var GetAggregateConfigRuleComplianceSummaryRequest = /** @class */ (function (_super) {
    __extends(GetAggregateConfigRuleComplianceSummaryRequest, _super);
    function GetAggregateConfigRuleComplianceSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAggregateConfigRuleComplianceSummaryQueryParams)
    ], GetAggregateConfigRuleComplianceSummaryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAggregateConfigRuleComplianceSummaryHeaders)
    ], GetAggregateConfigRuleComplianceSummaryRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetAggregateConfigRuleComplianceSummaryRequest)
    ], GetAggregateConfigRuleComplianceSummaryRequest.prototype, "request", void 0);
    return GetAggregateConfigRuleComplianceSummaryRequest;
}(SpeakeasyBase));
export { GetAggregateConfigRuleComplianceSummaryRequest };
var GetAggregateConfigRuleComplianceSummaryResponse = /** @class */ (function (_super) {
    __extends(GetAggregateConfigRuleComplianceSummaryResponse, _super);
    function GetAggregateConfigRuleComplianceSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAggregateConfigRuleComplianceSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetAggregateConfigRuleComplianceSummaryResponse)
    ], GetAggregateConfigRuleComplianceSummaryResponse.prototype, "getAggregateConfigRuleComplianceSummaryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetAggregateConfigRuleComplianceSummaryResponse.prototype, "invalidLimitException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetAggregateConfigRuleComplianceSummaryResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetAggregateConfigRuleComplianceSummaryResponse.prototype, "noSuchConfigurationAggregatorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAggregateConfigRuleComplianceSummaryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetAggregateConfigRuleComplianceSummaryResponse.prototype, "validationException", void 0);
    return GetAggregateConfigRuleComplianceSummaryResponse;
}(SpeakeasyBase));
export { GetAggregateConfigRuleComplianceSummaryResponse };
