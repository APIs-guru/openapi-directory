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
var DescribeIdentityPoolUsagePathParams = /** @class */ (function (_super) {
    __extends(DescribeIdentityPoolUsagePathParams, _super);
    function DescribeIdentityPoolUsagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" }),
        __metadata("design:type", String)
    ], DescribeIdentityPoolUsagePathParams.prototype, "identityPoolId", void 0);
    return DescribeIdentityPoolUsagePathParams;
}(SpeakeasyBase));
export { DescribeIdentityPoolUsagePathParams };
var DescribeIdentityPoolUsageHeaders = /** @class */ (function (_super) {
    __extends(DescribeIdentityPoolUsageHeaders, _super);
    function DescribeIdentityPoolUsageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeIdentityPoolUsageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeIdentityPoolUsageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeIdentityPoolUsageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeIdentityPoolUsageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeIdentityPoolUsageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeIdentityPoolUsageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeIdentityPoolUsageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeIdentityPoolUsageHeaders;
}(SpeakeasyBase));
export { DescribeIdentityPoolUsageHeaders };
var DescribeIdentityPoolUsageRequest = /** @class */ (function (_super) {
    __extends(DescribeIdentityPoolUsageRequest, _super);
    function DescribeIdentityPoolUsageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeIdentityPoolUsagePathParams)
    ], DescribeIdentityPoolUsageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeIdentityPoolUsageHeaders)
    ], DescribeIdentityPoolUsageRequest.prototype, "headers", void 0);
    return DescribeIdentityPoolUsageRequest;
}(SpeakeasyBase));
export { DescribeIdentityPoolUsageRequest };
var DescribeIdentityPoolUsageResponse = /** @class */ (function (_super) {
    __extends(DescribeIdentityPoolUsageResponse, _super);
    function DescribeIdentityPoolUsageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeIdentityPoolUsageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeIdentityPoolUsageResponse)
    ], DescribeIdentityPoolUsageResponse.prototype, "describeIdentityPoolUsageResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeIdentityPoolUsageResponse.prototype, "internalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeIdentityPoolUsageResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeIdentityPoolUsageResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeIdentityPoolUsageResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeIdentityPoolUsageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeIdentityPoolUsageResponse.prototype, "tooManyRequestsException", void 0);
    return DescribeIdentityPoolUsageResponse;
}(SpeakeasyBase));
export { DescribeIdentityPoolUsageResponse };
