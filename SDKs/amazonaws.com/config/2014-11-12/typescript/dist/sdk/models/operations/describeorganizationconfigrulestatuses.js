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
var DescribeOrganizationConfigRuleStatusesQueryParams = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConfigRuleStatusesQueryParams, _super);
    function DescribeOrganizationConfigRuleStatusesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRuleStatusesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRuleStatusesQueryParams.prototype, "nextToken", void 0);
    return DescribeOrganizationConfigRuleStatusesQueryParams;
}(SpeakeasyBase));
export { DescribeOrganizationConfigRuleStatusesQueryParams };
export var DescribeOrganizationConfigRuleStatusesXAmzTargetEnum;
(function (DescribeOrganizationConfigRuleStatusesXAmzTargetEnum) {
    DescribeOrganizationConfigRuleStatusesXAmzTargetEnum["StarlingDoveServiceDescribeOrganizationConfigRuleStatuses"] = "StarlingDoveService.DescribeOrganizationConfigRuleStatuses";
})(DescribeOrganizationConfigRuleStatusesXAmzTargetEnum || (DescribeOrganizationConfigRuleStatusesXAmzTargetEnum = {}));
var DescribeOrganizationConfigRuleStatusesHeaders = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConfigRuleStatusesHeaders, _super);
    function DescribeOrganizationConfigRuleStatusesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRuleStatusesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRuleStatusesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRuleStatusesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRuleStatusesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRuleStatusesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRuleStatusesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRuleStatusesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRuleStatusesHeaders.prototype, "xAmzTarget", void 0);
    return DescribeOrganizationConfigRuleStatusesHeaders;
}(SpeakeasyBase));
export { DescribeOrganizationConfigRuleStatusesHeaders };
var DescribeOrganizationConfigRuleStatusesRequest = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConfigRuleStatusesRequest, _super);
    function DescribeOrganizationConfigRuleStatusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeOrganizationConfigRuleStatusesQueryParams)
    ], DescribeOrganizationConfigRuleStatusesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeOrganizationConfigRuleStatusesHeaders)
    ], DescribeOrganizationConfigRuleStatusesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeOrganizationConfigRuleStatusesRequest)
    ], DescribeOrganizationConfigRuleStatusesRequest.prototype, "request", void 0);
    return DescribeOrganizationConfigRuleStatusesRequest;
}(SpeakeasyBase));
export { DescribeOrganizationConfigRuleStatusesRequest };
var DescribeOrganizationConfigRuleStatusesResponse = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConfigRuleStatusesResponse, _super);
    function DescribeOrganizationConfigRuleStatusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeOrganizationConfigRuleStatusesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeOrganizationConfigRuleStatusesResponse)
    ], DescribeOrganizationConfigRuleStatusesResponse.prototype, "describeOrganizationConfigRuleStatusesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeOrganizationConfigRuleStatusesResponse.prototype, "invalidLimitException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeOrganizationConfigRuleStatusesResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeOrganizationConfigRuleStatusesResponse.prototype, "noSuchOrganizationConfigRuleException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeOrganizationConfigRuleStatusesResponse.prototype, "organizationAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeOrganizationConfigRuleStatusesResponse.prototype, "statusCode", void 0);
    return DescribeOrganizationConfigRuleStatusesResponse;
}(SpeakeasyBase));
export { DescribeOrganizationConfigRuleStatusesResponse };
