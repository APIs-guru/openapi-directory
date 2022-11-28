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
var ListProvisioningTemplateVersionsPathParams = /** @class */ (function (_super) {
    __extends(ListProvisioningTemplateVersionsPathParams, _super);
    function ListProvisioningTemplateVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateName" }),
        __metadata("design:type", String)
    ], ListProvisioningTemplateVersionsPathParams.prototype, "templateName", void 0);
    return ListProvisioningTemplateVersionsPathParams;
}(SpeakeasyBase));
export { ListProvisioningTemplateVersionsPathParams };
var ListProvisioningTemplateVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListProvisioningTemplateVersionsQueryParams, _super);
    function ListProvisioningTemplateVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListProvisioningTemplateVersionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListProvisioningTemplateVersionsQueryParams.prototype, "nextToken", void 0);
    return ListProvisioningTemplateVersionsQueryParams;
}(SpeakeasyBase));
export { ListProvisioningTemplateVersionsQueryParams };
var ListProvisioningTemplateVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListProvisioningTemplateVersionsHeaders, _super);
    function ListProvisioningTemplateVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListProvisioningTemplateVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListProvisioningTemplateVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListProvisioningTemplateVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListProvisioningTemplateVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListProvisioningTemplateVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListProvisioningTemplateVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListProvisioningTemplateVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListProvisioningTemplateVersionsHeaders;
}(SpeakeasyBase));
export { ListProvisioningTemplateVersionsHeaders };
var ListProvisioningTemplateVersionsRequest = /** @class */ (function (_super) {
    __extends(ListProvisioningTemplateVersionsRequest, _super);
    function ListProvisioningTemplateVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListProvisioningTemplateVersionsPathParams)
    ], ListProvisioningTemplateVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListProvisioningTemplateVersionsQueryParams)
    ], ListProvisioningTemplateVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListProvisioningTemplateVersionsHeaders)
    ], ListProvisioningTemplateVersionsRequest.prototype, "headers", void 0);
    return ListProvisioningTemplateVersionsRequest;
}(SpeakeasyBase));
export { ListProvisioningTemplateVersionsRequest };
var ListProvisioningTemplateVersionsResponse = /** @class */ (function (_super) {
    __extends(ListProvisioningTemplateVersionsResponse, _super);
    function ListProvisioningTemplateVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListProvisioningTemplateVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProvisioningTemplateVersionsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProvisioningTemplateVersionsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListProvisioningTemplateVersionsResponse)
    ], ListProvisioningTemplateVersionsResponse.prototype, "listProvisioningTemplateVersionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProvisioningTemplateVersionsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListProvisioningTemplateVersionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProvisioningTemplateVersionsResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProvisioningTemplateVersionsResponse.prototype, "unauthorizedException", void 0);
    return ListProvisioningTemplateVersionsResponse;
}(SpeakeasyBase));
export { ListProvisioningTemplateVersionsResponse };
