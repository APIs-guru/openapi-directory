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
var DescribeProvisioningTemplateVersionPathParams = /** @class */ (function (_super) {
    __extends(DescribeProvisioningTemplateVersionPathParams, _super);
    function DescribeProvisioningTemplateVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateName" }),
        __metadata("design:type", String)
    ], DescribeProvisioningTemplateVersionPathParams.prototype, "templateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionId" }),
        __metadata("design:type", Number)
    ], DescribeProvisioningTemplateVersionPathParams.prototype, "versionId", void 0);
    return DescribeProvisioningTemplateVersionPathParams;
}(SpeakeasyBase));
export { DescribeProvisioningTemplateVersionPathParams };
var DescribeProvisioningTemplateVersionHeaders = /** @class */ (function (_super) {
    __extends(DescribeProvisioningTemplateVersionHeaders, _super);
    function DescribeProvisioningTemplateVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeProvisioningTemplateVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeProvisioningTemplateVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeProvisioningTemplateVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeProvisioningTemplateVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeProvisioningTemplateVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeProvisioningTemplateVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeProvisioningTemplateVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeProvisioningTemplateVersionHeaders;
}(SpeakeasyBase));
export { DescribeProvisioningTemplateVersionHeaders };
var DescribeProvisioningTemplateVersionRequest = /** @class */ (function (_super) {
    __extends(DescribeProvisioningTemplateVersionRequest, _super);
    function DescribeProvisioningTemplateVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeProvisioningTemplateVersionPathParams)
    ], DescribeProvisioningTemplateVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeProvisioningTemplateVersionHeaders)
    ], DescribeProvisioningTemplateVersionRequest.prototype, "headers", void 0);
    return DescribeProvisioningTemplateVersionRequest;
}(SpeakeasyBase));
export { DescribeProvisioningTemplateVersionRequest };
var DescribeProvisioningTemplateVersionResponse = /** @class */ (function (_super) {
    __extends(DescribeProvisioningTemplateVersionResponse, _super);
    function DescribeProvisioningTemplateVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeProvisioningTemplateVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeProvisioningTemplateVersionResponse)
    ], DescribeProvisioningTemplateVersionResponse.prototype, "describeProvisioningTemplateVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeProvisioningTemplateVersionResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeProvisioningTemplateVersionResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeProvisioningTemplateVersionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeProvisioningTemplateVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeProvisioningTemplateVersionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeProvisioningTemplateVersionResponse.prototype, "unauthorizedException", void 0);
    return DescribeProvisioningTemplateVersionResponse;
}(SpeakeasyBase));
export { DescribeProvisioningTemplateVersionResponse };
