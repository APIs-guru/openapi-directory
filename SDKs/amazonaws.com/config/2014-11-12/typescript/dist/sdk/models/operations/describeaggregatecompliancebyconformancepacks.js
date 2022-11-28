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
var DescribeAggregateComplianceByConformancePacksQueryParams = /** @class */ (function (_super) {
    __extends(DescribeAggregateComplianceByConformancePacksQueryParams, _super);
    function DescribeAggregateComplianceByConformancePacksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeAggregateComplianceByConformancePacksQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeAggregateComplianceByConformancePacksQueryParams.prototype, "nextToken", void 0);
    return DescribeAggregateComplianceByConformancePacksQueryParams;
}(SpeakeasyBase));
export { DescribeAggregateComplianceByConformancePacksQueryParams };
export var DescribeAggregateComplianceByConformancePacksXAmzTargetEnum;
(function (DescribeAggregateComplianceByConformancePacksXAmzTargetEnum) {
    DescribeAggregateComplianceByConformancePacksXAmzTargetEnum["StarlingDoveServiceDescribeAggregateComplianceByConformancePacks"] = "StarlingDoveService.DescribeAggregateComplianceByConformancePacks";
})(DescribeAggregateComplianceByConformancePacksXAmzTargetEnum || (DescribeAggregateComplianceByConformancePacksXAmzTargetEnum = {}));
var DescribeAggregateComplianceByConformancePacksHeaders = /** @class */ (function (_super) {
    __extends(DescribeAggregateComplianceByConformancePacksHeaders, _super);
    function DescribeAggregateComplianceByConformancePacksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeAggregateComplianceByConformancePacksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeAggregateComplianceByConformancePacksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeAggregateComplianceByConformancePacksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeAggregateComplianceByConformancePacksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeAggregateComplianceByConformancePacksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeAggregateComplianceByConformancePacksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeAggregateComplianceByConformancePacksHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeAggregateComplianceByConformancePacksHeaders.prototype, "xAmzTarget", void 0);
    return DescribeAggregateComplianceByConformancePacksHeaders;
}(SpeakeasyBase));
export { DescribeAggregateComplianceByConformancePacksHeaders };
var DescribeAggregateComplianceByConformancePacksRequest = /** @class */ (function (_super) {
    __extends(DescribeAggregateComplianceByConformancePacksRequest, _super);
    function DescribeAggregateComplianceByConformancePacksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeAggregateComplianceByConformancePacksQueryParams)
    ], DescribeAggregateComplianceByConformancePacksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeAggregateComplianceByConformancePacksHeaders)
    ], DescribeAggregateComplianceByConformancePacksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeAggregateComplianceByConformancePacksRequest)
    ], DescribeAggregateComplianceByConformancePacksRequest.prototype, "request", void 0);
    return DescribeAggregateComplianceByConformancePacksRequest;
}(SpeakeasyBase));
export { DescribeAggregateComplianceByConformancePacksRequest };
var DescribeAggregateComplianceByConformancePacksResponse = /** @class */ (function (_super) {
    __extends(DescribeAggregateComplianceByConformancePacksResponse, _super);
    function DescribeAggregateComplianceByConformancePacksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeAggregateComplianceByConformancePacksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeAggregateComplianceByConformancePacksResponse)
    ], DescribeAggregateComplianceByConformancePacksResponse.prototype, "describeAggregateComplianceByConformancePacksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAggregateComplianceByConformancePacksResponse.prototype, "invalidLimitException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAggregateComplianceByConformancePacksResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAggregateComplianceByConformancePacksResponse.prototype, "noSuchConfigurationAggregatorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeAggregateComplianceByConformancePacksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAggregateComplianceByConformancePacksResponse.prototype, "validationException", void 0);
    return DescribeAggregateComplianceByConformancePacksResponse;
}(SpeakeasyBase));
export { DescribeAggregateComplianceByConformancePacksResponse };
