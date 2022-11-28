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
var DescribeOrganizationConfigRulesQueryParams = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConfigRulesQueryParams, _super);
    function DescribeOrganizationConfigRulesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRulesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRulesQueryParams.prototype, "nextToken", void 0);
    return DescribeOrganizationConfigRulesQueryParams;
}(SpeakeasyBase));
export { DescribeOrganizationConfigRulesQueryParams };
export var DescribeOrganizationConfigRulesXAmzTargetEnum;
(function (DescribeOrganizationConfigRulesXAmzTargetEnum) {
    DescribeOrganizationConfigRulesXAmzTargetEnum["StarlingDoveServiceDescribeOrganizationConfigRules"] = "StarlingDoveService.DescribeOrganizationConfigRules";
})(DescribeOrganizationConfigRulesXAmzTargetEnum || (DescribeOrganizationConfigRulesXAmzTargetEnum = {}));
var DescribeOrganizationConfigRulesHeaders = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConfigRulesHeaders, _super);
    function DescribeOrganizationConfigRulesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRulesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRulesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRulesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRulesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRulesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRulesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRulesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRulesHeaders.prototype, "xAmzTarget", void 0);
    return DescribeOrganizationConfigRulesHeaders;
}(SpeakeasyBase));
export { DescribeOrganizationConfigRulesHeaders };
var DescribeOrganizationConfigRulesRequest = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConfigRulesRequest, _super);
    function DescribeOrganizationConfigRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeOrganizationConfigRulesQueryParams)
    ], DescribeOrganizationConfigRulesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeOrganizationConfigRulesHeaders)
    ], DescribeOrganizationConfigRulesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeOrganizationConfigRulesRequest)
    ], DescribeOrganizationConfigRulesRequest.prototype, "request", void 0);
    return DescribeOrganizationConfigRulesRequest;
}(SpeakeasyBase));
export { DescribeOrganizationConfigRulesRequest };
var DescribeOrganizationConfigRulesResponse = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConfigRulesResponse, _super);
    function DescribeOrganizationConfigRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeOrganizationConfigRulesResponse)
    ], DescribeOrganizationConfigRulesResponse.prototype, "describeOrganizationConfigRulesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeOrganizationConfigRulesResponse.prototype, "invalidLimitException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeOrganizationConfigRulesResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeOrganizationConfigRulesResponse.prototype, "noSuchOrganizationConfigRuleException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeOrganizationConfigRulesResponse.prototype, "organizationAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeOrganizationConfigRulesResponse.prototype, "statusCode", void 0);
    return DescribeOrganizationConfigRulesResponse;
}(SpeakeasyBase));
export { DescribeOrganizationConfigRulesResponse };
