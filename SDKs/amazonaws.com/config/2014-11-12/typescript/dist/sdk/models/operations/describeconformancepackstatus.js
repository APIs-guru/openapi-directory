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
var DescribeConformancePackStatusQueryParams = /** @class */ (function (_super) {
    __extends(DescribeConformancePackStatusQueryParams, _super);
    function DescribeConformancePackStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeConformancePackStatusQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeConformancePackStatusQueryParams.prototype, "nextToken", void 0);
    return DescribeConformancePackStatusQueryParams;
}(SpeakeasyBase));
export { DescribeConformancePackStatusQueryParams };
export var DescribeConformancePackStatusXAmzTargetEnum;
(function (DescribeConformancePackStatusXAmzTargetEnum) {
    DescribeConformancePackStatusXAmzTargetEnum["StarlingDoveServiceDescribeConformancePackStatus"] = "StarlingDoveService.DescribeConformancePackStatus";
})(DescribeConformancePackStatusXAmzTargetEnum || (DescribeConformancePackStatusXAmzTargetEnum = {}));
var DescribeConformancePackStatusHeaders = /** @class */ (function (_super) {
    __extends(DescribeConformancePackStatusHeaders, _super);
    function DescribeConformancePackStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeConformancePackStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeConformancePackStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeConformancePackStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeConformancePackStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeConformancePackStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeConformancePackStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeConformancePackStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeConformancePackStatusHeaders.prototype, "xAmzTarget", void 0);
    return DescribeConformancePackStatusHeaders;
}(SpeakeasyBase));
export { DescribeConformancePackStatusHeaders };
var DescribeConformancePackStatusRequest = /** @class */ (function (_super) {
    __extends(DescribeConformancePackStatusRequest, _super);
    function DescribeConformancePackStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeConformancePackStatusQueryParams)
    ], DescribeConformancePackStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeConformancePackStatusHeaders)
    ], DescribeConformancePackStatusRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeConformancePackStatusRequest)
    ], DescribeConformancePackStatusRequest.prototype, "request", void 0);
    return DescribeConformancePackStatusRequest;
}(SpeakeasyBase));
export { DescribeConformancePackStatusRequest };
var DescribeConformancePackStatusResponse = /** @class */ (function (_super) {
    __extends(DescribeConformancePackStatusResponse, _super);
    function DescribeConformancePackStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeConformancePackStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeConformancePackStatusResponse)
    ], DescribeConformancePackStatusResponse.prototype, "describeConformancePackStatusResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeConformancePackStatusResponse.prototype, "invalidLimitException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeConformancePackStatusResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeConformancePackStatusResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeConformancePackStatusResponse.prototype, "statusCode", void 0);
    return DescribeConformancePackStatusResponse;
}(SpeakeasyBase));
export { DescribeConformancePackStatusResponse };
