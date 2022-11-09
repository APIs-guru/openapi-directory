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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var DeleteDistributionConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(DeleteDistributionConfigurationQueryParams, _super);
    function DeleteDistributionConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=distributionConfigurationArn" }),
        __metadata("design:type", String)
    ], DeleteDistributionConfigurationQueryParams.prototype, "distributionConfigurationArn", void 0);
    return DeleteDistributionConfigurationQueryParams;
}(SpeakeasyBase));
export { DeleteDistributionConfigurationQueryParams };
var DeleteDistributionConfigurationHeaders = /** @class */ (function (_super) {
    __extends(DeleteDistributionConfigurationHeaders, _super);
    function DeleteDistributionConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteDistributionConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteDistributionConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteDistributionConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteDistributionConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteDistributionConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteDistributionConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteDistributionConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteDistributionConfigurationHeaders;
}(SpeakeasyBase));
export { DeleteDistributionConfigurationHeaders };
var DeleteDistributionConfigurationRequest = /** @class */ (function (_super) {
    __extends(DeleteDistributionConfigurationRequest, _super);
    function DeleteDistributionConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteDistributionConfigurationQueryParams)
    ], DeleteDistributionConfigurationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteDistributionConfigurationHeaders)
    ], DeleteDistributionConfigurationRequest.prototype, "headers", void 0);
    return DeleteDistributionConfigurationRequest;
}(SpeakeasyBase));
export { DeleteDistributionConfigurationRequest };
var DeleteDistributionConfigurationResponse = /** @class */ (function (_super) {
    __extends(DeleteDistributionConfigurationResponse, _super);
    function DeleteDistributionConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDistributionConfigurationResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDistributionConfigurationResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteDistributionConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteDistributionConfigurationResponse)
    ], DeleteDistributionConfigurationResponse.prototype, "deleteDistributionConfigurationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDistributionConfigurationResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDistributionConfigurationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDistributionConfigurationResponse.prototype, "resourceDependencyException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDistributionConfigurationResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDistributionConfigurationResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteDistributionConfigurationResponse.prototype, "statusCode", void 0);
    return DeleteDistributionConfigurationResponse;
}(SpeakeasyBase));
export { DeleteDistributionConfigurationResponse };
