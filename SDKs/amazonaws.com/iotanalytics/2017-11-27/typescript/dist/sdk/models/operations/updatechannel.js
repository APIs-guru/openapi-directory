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
var UpdateChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateChannelPathParams, _super);
    function UpdateChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelName" }),
        __metadata("design:type", String)
    ], UpdateChannelPathParams.prototype, "channelName", void 0);
    return UpdateChannelPathParams;
}(SpeakeasyBase));
export { UpdateChannelPathParams };
var UpdateChannelHeaders = /** @class */ (function (_super) {
    __extends(UpdateChannelHeaders, _super);
    function UpdateChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateChannelHeaders;
}(SpeakeasyBase));
export { UpdateChannelHeaders };
// UpdateChannelRequestBodyChannelStorage
/**
 * Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
**/
var UpdateChannelRequestBodyChannelStorage = /** @class */ (function (_super) {
    __extends(UpdateChannelRequestBodyChannelStorage, _super);
    function UpdateChannelRequestBodyChannelStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerManagedS3" }),
        __metadata("design:type", shared.CustomerManagedChannelS3Storage)
    ], UpdateChannelRequestBodyChannelStorage.prototype, "customerManagedS3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceManagedS3" }),
        __metadata("design:type", Map)
    ], UpdateChannelRequestBodyChannelStorage.prototype, "serviceManagedS3", void 0);
    return UpdateChannelRequestBodyChannelStorage;
}(SpeakeasyBase));
export { UpdateChannelRequestBodyChannelStorage };
// UpdateChannelRequestBodyRetentionPeriod
/**
 * How long, in days, message data is kept.
**/
var UpdateChannelRequestBodyRetentionPeriod = /** @class */ (function (_super) {
    __extends(UpdateChannelRequestBodyRetentionPeriod, _super);
    function UpdateChannelRequestBodyRetentionPeriod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfDays" }),
        __metadata("design:type", Number)
    ], UpdateChannelRequestBodyRetentionPeriod.prototype, "numberOfDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unlimited" }),
        __metadata("design:type", Boolean)
    ], UpdateChannelRequestBodyRetentionPeriod.prototype, "unlimited", void 0);
    return UpdateChannelRequestBodyRetentionPeriod;
}(SpeakeasyBase));
export { UpdateChannelRequestBodyRetentionPeriod };
var UpdateChannelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateChannelRequestBody, _super);
    function UpdateChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelStorage" }),
        __metadata("design:type", UpdateChannelRequestBodyChannelStorage)
    ], UpdateChannelRequestBody.prototype, "channelStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retentionPeriod" }),
        __metadata("design:type", UpdateChannelRequestBodyRetentionPeriod)
    ], UpdateChannelRequestBody.prototype, "retentionPeriod", void 0);
    return UpdateChannelRequestBody;
}(SpeakeasyBase));
export { UpdateChannelRequestBody };
var UpdateChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateChannelRequest, _super);
    function UpdateChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateChannelPathParams)
    ], UpdateChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateChannelHeaders)
    ], UpdateChannelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateChannelRequestBody)
    ], UpdateChannelRequest.prototype, "request", void 0);
    return UpdateChannelRequest;
}(SpeakeasyBase));
export { UpdateChannelRequest };
var UpdateChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateChannelResponse, _super);
    function UpdateChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateChannelResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateChannelResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateChannelResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateChannelResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateChannelResponse.prototype, "throttlingException", void 0);
    return UpdateChannelResponse;
}(SpeakeasyBase));
export { UpdateChannelResponse };
