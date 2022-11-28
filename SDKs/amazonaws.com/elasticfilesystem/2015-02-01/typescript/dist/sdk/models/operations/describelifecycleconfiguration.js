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
var DescribeLifecycleConfigurationPathParams = /** @class */ (function (_super) {
    __extends(DescribeLifecycleConfigurationPathParams, _super);
    function DescribeLifecycleConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileSystemId" }),
        __metadata("design:type", String)
    ], DescribeLifecycleConfigurationPathParams.prototype, "fileSystemId", void 0);
    return DescribeLifecycleConfigurationPathParams;
}(SpeakeasyBase));
export { DescribeLifecycleConfigurationPathParams };
var DescribeLifecycleConfigurationHeaders = /** @class */ (function (_super) {
    __extends(DescribeLifecycleConfigurationHeaders, _super);
    function DescribeLifecycleConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeLifecycleConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeLifecycleConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeLifecycleConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeLifecycleConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeLifecycleConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeLifecycleConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeLifecycleConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeLifecycleConfigurationHeaders;
}(SpeakeasyBase));
export { DescribeLifecycleConfigurationHeaders };
var DescribeLifecycleConfigurationRequest = /** @class */ (function (_super) {
    __extends(DescribeLifecycleConfigurationRequest, _super);
    function DescribeLifecycleConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeLifecycleConfigurationPathParams)
    ], DescribeLifecycleConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeLifecycleConfigurationHeaders)
    ], DescribeLifecycleConfigurationRequest.prototype, "headers", void 0);
    return DescribeLifecycleConfigurationRequest;
}(SpeakeasyBase));
export { DescribeLifecycleConfigurationRequest };
var DescribeLifecycleConfigurationResponse = /** @class */ (function (_super) {
    __extends(DescribeLifecycleConfigurationResponse, _super);
    function DescribeLifecycleConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeLifecycleConfigurationResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeLifecycleConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeLifecycleConfigurationResponse.prototype, "fileSystemNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeLifecycleConfigurationResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LifecycleConfigurationDescription)
    ], DescribeLifecycleConfigurationResponse.prototype, "lifecycleConfigurationDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeLifecycleConfigurationResponse.prototype, "statusCode", void 0);
    return DescribeLifecycleConfigurationResponse;
}(SpeakeasyBase));
export { DescribeLifecycleConfigurationResponse };
