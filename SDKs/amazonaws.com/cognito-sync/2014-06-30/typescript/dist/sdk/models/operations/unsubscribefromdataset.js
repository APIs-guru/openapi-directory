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
var UnsubscribeFromDatasetPathParams = /** @class */ (function (_super) {
    __extends(UnsubscribeFromDatasetPathParams, _super);
    function UnsubscribeFromDatasetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DatasetName" }),
        __metadata("design:type", String)
    ], UnsubscribeFromDatasetPathParams.prototype, "datasetName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DeviceId" }),
        __metadata("design:type", String)
    ], UnsubscribeFromDatasetPathParams.prototype, "deviceId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=IdentityId" }),
        __metadata("design:type", String)
    ], UnsubscribeFromDatasetPathParams.prototype, "identityId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" }),
        __metadata("design:type", String)
    ], UnsubscribeFromDatasetPathParams.prototype, "identityPoolId", void 0);
    return UnsubscribeFromDatasetPathParams;
}(SpeakeasyBase));
export { UnsubscribeFromDatasetPathParams };
var UnsubscribeFromDatasetHeaders = /** @class */ (function (_super) {
    __extends(UnsubscribeFromDatasetHeaders, _super);
    function UnsubscribeFromDatasetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UnsubscribeFromDatasetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UnsubscribeFromDatasetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UnsubscribeFromDatasetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UnsubscribeFromDatasetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UnsubscribeFromDatasetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UnsubscribeFromDatasetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UnsubscribeFromDatasetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UnsubscribeFromDatasetHeaders;
}(SpeakeasyBase));
export { UnsubscribeFromDatasetHeaders };
var UnsubscribeFromDatasetRequest = /** @class */ (function (_super) {
    __extends(UnsubscribeFromDatasetRequest, _super);
    function UnsubscribeFromDatasetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UnsubscribeFromDatasetPathParams)
    ], UnsubscribeFromDatasetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UnsubscribeFromDatasetHeaders)
    ], UnsubscribeFromDatasetRequest.prototype, "headers", void 0);
    return UnsubscribeFromDatasetRequest;
}(SpeakeasyBase));
export { UnsubscribeFromDatasetRequest };
var UnsubscribeFromDatasetResponse = /** @class */ (function (_super) {
    __extends(UnsubscribeFromDatasetResponse, _super);
    function UnsubscribeFromDatasetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UnsubscribeFromDatasetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UnsubscribeFromDatasetResponse.prototype, "internalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UnsubscribeFromDatasetResponse.prototype, "invalidConfigurationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UnsubscribeFromDatasetResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UnsubscribeFromDatasetResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UnsubscribeFromDatasetResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UnsubscribeFromDatasetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UnsubscribeFromDatasetResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], UnsubscribeFromDatasetResponse.prototype, "unsubscribeFromDatasetResponse", void 0);
    return UnsubscribeFromDatasetResponse;
}(SpeakeasyBase));
export { UnsubscribeFromDatasetResponse };
