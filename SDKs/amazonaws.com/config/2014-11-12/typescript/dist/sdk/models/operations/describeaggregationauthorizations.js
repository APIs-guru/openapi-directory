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
var DescribeAggregationAuthorizationsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeAggregationAuthorizationsQueryParams, _super);
    function DescribeAggregationAuthorizationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeAggregationAuthorizationsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeAggregationAuthorizationsQueryParams.prototype, "nextToken", void 0);
    return DescribeAggregationAuthorizationsQueryParams;
}(SpeakeasyBase));
export { DescribeAggregationAuthorizationsQueryParams };
export var DescribeAggregationAuthorizationsXAmzTargetEnum;
(function (DescribeAggregationAuthorizationsXAmzTargetEnum) {
    DescribeAggregationAuthorizationsXAmzTargetEnum["StarlingDoveServiceDescribeAggregationAuthorizations"] = "StarlingDoveService.DescribeAggregationAuthorizations";
})(DescribeAggregationAuthorizationsXAmzTargetEnum || (DescribeAggregationAuthorizationsXAmzTargetEnum = {}));
var DescribeAggregationAuthorizationsHeaders = /** @class */ (function (_super) {
    __extends(DescribeAggregationAuthorizationsHeaders, _super);
    function DescribeAggregationAuthorizationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeAggregationAuthorizationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeAggregationAuthorizationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeAggregationAuthorizationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeAggregationAuthorizationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeAggregationAuthorizationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeAggregationAuthorizationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeAggregationAuthorizationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeAggregationAuthorizationsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeAggregationAuthorizationsHeaders;
}(SpeakeasyBase));
export { DescribeAggregationAuthorizationsHeaders };
var DescribeAggregationAuthorizationsRequest = /** @class */ (function (_super) {
    __extends(DescribeAggregationAuthorizationsRequest, _super);
    function DescribeAggregationAuthorizationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeAggregationAuthorizationsQueryParams)
    ], DescribeAggregationAuthorizationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeAggregationAuthorizationsHeaders)
    ], DescribeAggregationAuthorizationsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeAggregationAuthorizationsRequest)
    ], DescribeAggregationAuthorizationsRequest.prototype, "request", void 0);
    return DescribeAggregationAuthorizationsRequest;
}(SpeakeasyBase));
export { DescribeAggregationAuthorizationsRequest };
var DescribeAggregationAuthorizationsResponse = /** @class */ (function (_super) {
    __extends(DescribeAggregationAuthorizationsResponse, _super);
    function DescribeAggregationAuthorizationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeAggregationAuthorizationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeAggregationAuthorizationsResponse)
    ], DescribeAggregationAuthorizationsResponse.prototype, "describeAggregationAuthorizationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAggregationAuthorizationsResponse.prototype, "invalidLimitException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAggregationAuthorizationsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAggregationAuthorizationsResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeAggregationAuthorizationsResponse.prototype, "statusCode", void 0);
    return DescribeAggregationAuthorizationsResponse;
}(SpeakeasyBase));
export { DescribeAggregationAuthorizationsResponse };
