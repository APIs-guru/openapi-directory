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
var DescribeImageScanFindingsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeImageScanFindingsQueryParams, _super);
    function DescribeImageScanFindingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], DescribeImageScanFindingsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeImageScanFindingsQueryParams.prototype, "nextToken", void 0);
    return DescribeImageScanFindingsQueryParams;
}(SpeakeasyBase));
export { DescribeImageScanFindingsQueryParams };
export var DescribeImageScanFindingsXAmzTargetEnum;
(function (DescribeImageScanFindingsXAmzTargetEnum) {
    DescribeImageScanFindingsXAmzTargetEnum["AmazonEc2ContainerRegistryV20150921DescribeImageScanFindings"] = "AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings";
})(DescribeImageScanFindingsXAmzTargetEnum || (DescribeImageScanFindingsXAmzTargetEnum = {}));
var DescribeImageScanFindingsHeaders = /** @class */ (function (_super) {
    __extends(DescribeImageScanFindingsHeaders, _super);
    function DescribeImageScanFindingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeImageScanFindingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeImageScanFindingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeImageScanFindingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeImageScanFindingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeImageScanFindingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeImageScanFindingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeImageScanFindingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeImageScanFindingsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeImageScanFindingsHeaders;
}(SpeakeasyBase));
export { DescribeImageScanFindingsHeaders };
var DescribeImageScanFindingsRequest = /** @class */ (function (_super) {
    __extends(DescribeImageScanFindingsRequest, _super);
    function DescribeImageScanFindingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeImageScanFindingsQueryParams)
    ], DescribeImageScanFindingsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeImageScanFindingsHeaders)
    ], DescribeImageScanFindingsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeImageScanFindingsRequest)
    ], DescribeImageScanFindingsRequest.prototype, "request", void 0);
    return DescribeImageScanFindingsRequest;
}(SpeakeasyBase));
export { DescribeImageScanFindingsRequest };
var DescribeImageScanFindingsResponse = /** @class */ (function (_super) {
    __extends(DescribeImageScanFindingsResponse, _super);
    function DescribeImageScanFindingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeImageScanFindingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeImageScanFindingsResponse)
    ], DescribeImageScanFindingsResponse.prototype, "describeImageScanFindingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeImageScanFindingsResponse.prototype, "imageNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeImageScanFindingsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeImageScanFindingsResponse.prototype, "repositoryNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeImageScanFindingsResponse.prototype, "scanNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeImageScanFindingsResponse.prototype, "serverException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeImageScanFindingsResponse.prototype, "statusCode", void 0);
    return DescribeImageScanFindingsResponse;
}(SpeakeasyBase));
export { DescribeImageScanFindingsResponse };
