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
export var GetDataCatalogEncryptionSettingsXAmzTargetEnum;
(function (GetDataCatalogEncryptionSettingsXAmzTargetEnum) {
    GetDataCatalogEncryptionSettingsXAmzTargetEnum["AwsGlueGetDataCatalogEncryptionSettings"] = "AWSGlue.GetDataCatalogEncryptionSettings";
})(GetDataCatalogEncryptionSettingsXAmzTargetEnum || (GetDataCatalogEncryptionSettingsXAmzTargetEnum = {}));
var GetDataCatalogEncryptionSettingsHeaders = /** @class */ (function (_super) {
    __extends(GetDataCatalogEncryptionSettingsHeaders, _super);
    function GetDataCatalogEncryptionSettingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDataCatalogEncryptionSettingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDataCatalogEncryptionSettingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDataCatalogEncryptionSettingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDataCatalogEncryptionSettingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDataCatalogEncryptionSettingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDataCatalogEncryptionSettingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDataCatalogEncryptionSettingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetDataCatalogEncryptionSettingsHeaders.prototype, "xAmzTarget", void 0);
    return GetDataCatalogEncryptionSettingsHeaders;
}(SpeakeasyBase));
export { GetDataCatalogEncryptionSettingsHeaders };
var GetDataCatalogEncryptionSettingsRequest = /** @class */ (function (_super) {
    __extends(GetDataCatalogEncryptionSettingsRequest, _super);
    function GetDataCatalogEncryptionSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDataCatalogEncryptionSettingsHeaders)
    ], GetDataCatalogEncryptionSettingsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetDataCatalogEncryptionSettingsRequest)
    ], GetDataCatalogEncryptionSettingsRequest.prototype, "request", void 0);
    return GetDataCatalogEncryptionSettingsRequest;
}(SpeakeasyBase));
export { GetDataCatalogEncryptionSettingsRequest };
var GetDataCatalogEncryptionSettingsResponse = /** @class */ (function (_super) {
    __extends(GetDataCatalogEncryptionSettingsResponse, _super);
    function GetDataCatalogEncryptionSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDataCatalogEncryptionSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetDataCatalogEncryptionSettingsResponse)
    ], GetDataCatalogEncryptionSettingsResponse.prototype, "getDataCatalogEncryptionSettingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDataCatalogEncryptionSettingsResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDataCatalogEncryptionSettingsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDataCatalogEncryptionSettingsResponse.prototype, "operationTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDataCatalogEncryptionSettingsResponse.prototype, "statusCode", void 0);
    return GetDataCatalogEncryptionSettingsResponse;
}(SpeakeasyBase));
export { GetDataCatalogEncryptionSettingsResponse };
