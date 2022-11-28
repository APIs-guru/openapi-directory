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
var DescribeOrganizationConformancePacksQueryParams = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConformancePacksQueryParams, _super);
    function DescribeOrganizationConformancePacksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConformancePacksQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConformancePacksQueryParams.prototype, "nextToken", void 0);
    return DescribeOrganizationConformancePacksQueryParams;
}(SpeakeasyBase));
export { DescribeOrganizationConformancePacksQueryParams };
export var DescribeOrganizationConformancePacksXAmzTargetEnum;
(function (DescribeOrganizationConformancePacksXAmzTargetEnum) {
    DescribeOrganizationConformancePacksXAmzTargetEnum["StarlingDoveServiceDescribeOrganizationConformancePacks"] = "StarlingDoveService.DescribeOrganizationConformancePacks";
})(DescribeOrganizationConformancePacksXAmzTargetEnum || (DescribeOrganizationConformancePacksXAmzTargetEnum = {}));
var DescribeOrganizationConformancePacksHeaders = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConformancePacksHeaders, _super);
    function DescribeOrganizationConformancePacksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConformancePacksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConformancePacksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConformancePacksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConformancePacksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConformancePacksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConformancePacksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConformancePacksHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeOrganizationConformancePacksHeaders.prototype, "xAmzTarget", void 0);
    return DescribeOrganizationConformancePacksHeaders;
}(SpeakeasyBase));
export { DescribeOrganizationConformancePacksHeaders };
var DescribeOrganizationConformancePacksRequest = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConformancePacksRequest, _super);
    function DescribeOrganizationConformancePacksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeOrganizationConformancePacksQueryParams)
    ], DescribeOrganizationConformancePacksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeOrganizationConformancePacksHeaders)
    ], DescribeOrganizationConformancePacksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeOrganizationConformancePacksRequest)
    ], DescribeOrganizationConformancePacksRequest.prototype, "request", void 0);
    return DescribeOrganizationConformancePacksRequest;
}(SpeakeasyBase));
export { DescribeOrganizationConformancePacksRequest };
var DescribeOrganizationConformancePacksResponse = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConformancePacksResponse, _super);
    function DescribeOrganizationConformancePacksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeOrganizationConformancePacksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeOrganizationConformancePacksResponse)
    ], DescribeOrganizationConformancePacksResponse.prototype, "describeOrganizationConformancePacksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeOrganizationConformancePacksResponse.prototype, "invalidLimitException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeOrganizationConformancePacksResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeOrganizationConformancePacksResponse.prototype, "noSuchOrganizationConformancePackException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeOrganizationConformancePacksResponse.prototype, "organizationAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeOrganizationConformancePacksResponse.prototype, "statusCode", void 0);
    return DescribeOrganizationConformancePacksResponse;
}(SpeakeasyBase));
export { DescribeOrganizationConformancePacksResponse };
