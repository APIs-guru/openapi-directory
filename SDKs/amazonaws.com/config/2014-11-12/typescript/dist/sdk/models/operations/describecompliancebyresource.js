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
var DescribeComplianceByResourceQueryParams = /** @class */ (function (_super) {
    __extends(DescribeComplianceByResourceQueryParams, _super);
    function DescribeComplianceByResourceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeComplianceByResourceQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeComplianceByResourceQueryParams.prototype, "nextToken", void 0);
    return DescribeComplianceByResourceQueryParams;
}(SpeakeasyBase));
export { DescribeComplianceByResourceQueryParams };
export var DescribeComplianceByResourceXAmzTargetEnum;
(function (DescribeComplianceByResourceXAmzTargetEnum) {
    DescribeComplianceByResourceXAmzTargetEnum["StarlingDoveServiceDescribeComplianceByResource"] = "StarlingDoveService.DescribeComplianceByResource";
})(DescribeComplianceByResourceXAmzTargetEnum || (DescribeComplianceByResourceXAmzTargetEnum = {}));
var DescribeComplianceByResourceHeaders = /** @class */ (function (_super) {
    __extends(DescribeComplianceByResourceHeaders, _super);
    function DescribeComplianceByResourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeComplianceByResourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeComplianceByResourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeComplianceByResourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeComplianceByResourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeComplianceByResourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeComplianceByResourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeComplianceByResourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeComplianceByResourceHeaders.prototype, "xAmzTarget", void 0);
    return DescribeComplianceByResourceHeaders;
}(SpeakeasyBase));
export { DescribeComplianceByResourceHeaders };
var DescribeComplianceByResourceRequest = /** @class */ (function (_super) {
    __extends(DescribeComplianceByResourceRequest, _super);
    function DescribeComplianceByResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeComplianceByResourceQueryParams)
    ], DescribeComplianceByResourceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeComplianceByResourceHeaders)
    ], DescribeComplianceByResourceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeComplianceByResourceRequest)
    ], DescribeComplianceByResourceRequest.prototype, "request", void 0);
    return DescribeComplianceByResourceRequest;
}(SpeakeasyBase));
export { DescribeComplianceByResourceRequest };
var DescribeComplianceByResourceResponse = /** @class */ (function (_super) {
    __extends(DescribeComplianceByResourceResponse, _super);
    function DescribeComplianceByResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeComplianceByResourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeComplianceByResourceResponse)
    ], DescribeComplianceByResourceResponse.prototype, "describeComplianceByResourceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeComplianceByResourceResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeComplianceByResourceResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeComplianceByResourceResponse.prototype, "statusCode", void 0);
    return DescribeComplianceByResourceResponse;
}(SpeakeasyBase));
export { DescribeComplianceByResourceResponse };
