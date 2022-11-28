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
var SubscribeToDatasetPathParams = /** @class */ (function (_super) {
    __extends(SubscribeToDatasetPathParams, _super);
    function SubscribeToDatasetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DatasetName" }),
        __metadata("design:type", String)
    ], SubscribeToDatasetPathParams.prototype, "datasetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DeviceId" }),
        __metadata("design:type", String)
    ], SubscribeToDatasetPathParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IdentityId" }),
        __metadata("design:type", String)
    ], SubscribeToDatasetPathParams.prototype, "identityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" }),
        __metadata("design:type", String)
    ], SubscribeToDatasetPathParams.prototype, "identityPoolId", void 0);
    return SubscribeToDatasetPathParams;
}(SpeakeasyBase));
export { SubscribeToDatasetPathParams };
var SubscribeToDatasetHeaders = /** @class */ (function (_super) {
    __extends(SubscribeToDatasetHeaders, _super);
    function SubscribeToDatasetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SubscribeToDatasetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SubscribeToDatasetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SubscribeToDatasetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SubscribeToDatasetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SubscribeToDatasetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SubscribeToDatasetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SubscribeToDatasetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SubscribeToDatasetHeaders;
}(SpeakeasyBase));
export { SubscribeToDatasetHeaders };
var SubscribeToDatasetRequest = /** @class */ (function (_super) {
    __extends(SubscribeToDatasetRequest, _super);
    function SubscribeToDatasetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubscribeToDatasetPathParams)
    ], SubscribeToDatasetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubscribeToDatasetHeaders)
    ], SubscribeToDatasetRequest.prototype, "headers", void 0);
    return SubscribeToDatasetRequest;
}(SpeakeasyBase));
export { SubscribeToDatasetRequest };
var SubscribeToDatasetResponse = /** @class */ (function (_super) {
    __extends(SubscribeToDatasetResponse, _super);
    function SubscribeToDatasetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SubscribeToDatasetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubscribeToDatasetResponse.prototype, "internalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubscribeToDatasetResponse.prototype, "invalidConfigurationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubscribeToDatasetResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubscribeToDatasetResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubscribeToDatasetResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SubscribeToDatasetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], SubscribeToDatasetResponse.prototype, "subscribeToDatasetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubscribeToDatasetResponse.prototype, "tooManyRequestsException", void 0);
    return SubscribeToDatasetResponse;
}(SpeakeasyBase));
export { SubscribeToDatasetResponse };
