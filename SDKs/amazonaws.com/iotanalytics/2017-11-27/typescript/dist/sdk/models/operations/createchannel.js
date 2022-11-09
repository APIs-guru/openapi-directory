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
var CreateChannelHeaders = /** @class */ (function (_super) {
    __extends(CreateChannelHeaders, _super);
    function CreateChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateChannelHeaders;
}(SpeakeasyBase));
export { CreateChannelHeaders };
// CreateChannelRequestBodyChannelStorage
/**
 * Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
**/
var CreateChannelRequestBodyChannelStorage = /** @class */ (function (_super) {
    __extends(CreateChannelRequestBodyChannelStorage, _super);
    function CreateChannelRequestBodyChannelStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=customerManagedS3" }),
        __metadata("design:type", shared.CustomerManagedChannelS3Storage)
    ], CreateChannelRequestBodyChannelStorage.prototype, "customerManagedS3", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceManagedS3" }),
        __metadata("design:type", Map)
    ], CreateChannelRequestBodyChannelStorage.prototype, "serviceManagedS3", void 0);
    return CreateChannelRequestBodyChannelStorage;
}(SpeakeasyBase));
export { CreateChannelRequestBodyChannelStorage };
// CreateChannelRequestBodyRetentionPeriod
/**
 * How long, in days, message data is kept.
**/
var CreateChannelRequestBodyRetentionPeriod = /** @class */ (function (_super) {
    __extends(CreateChannelRequestBodyRetentionPeriod, _super);
    function CreateChannelRequestBodyRetentionPeriod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=numberOfDays" }),
        __metadata("design:type", Number)
    ], CreateChannelRequestBodyRetentionPeriod.prototype, "numberOfDays", void 0);
    __decorate([
        Metadata({ data: "json, name=unlimited" }),
        __metadata("design:type", Boolean)
    ], CreateChannelRequestBodyRetentionPeriod.prototype, "unlimited", void 0);
    return CreateChannelRequestBodyRetentionPeriod;
}(SpeakeasyBase));
export { CreateChannelRequestBodyRetentionPeriod };
var CreateChannelRequestBody = /** @class */ (function (_super) {
    __extends(CreateChannelRequestBody, _super);
    function CreateChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=channelName" }),
        __metadata("design:type", String)
    ], CreateChannelRequestBody.prototype, "channelName", void 0);
    __decorate([
        Metadata({ data: "json, name=channelStorage" }),
        __metadata("design:type", CreateChannelRequestBodyChannelStorage)
    ], CreateChannelRequestBody.prototype, "channelStorage", void 0);
    __decorate([
        Metadata({ data: "json, name=retentionPeriod" }),
        __metadata("design:type", CreateChannelRequestBodyRetentionPeriod)
    ], CreateChannelRequestBody.prototype, "retentionPeriod", void 0);
    __decorate([
        Metadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateChannelRequestBody.prototype, "tags", void 0);
    return CreateChannelRequestBody;
}(SpeakeasyBase));
export { CreateChannelRequestBody };
var CreateChannelRequest = /** @class */ (function (_super) {
    __extends(CreateChannelRequest, _super);
    function CreateChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateChannelHeaders)
    ], CreateChannelRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateChannelRequestBody)
    ], CreateChannelRequest.prototype, "request", void 0);
    return CreateChannelRequest;
}(SpeakeasyBase));
export { CreateChannelRequest };
var CreateChannelResponse = /** @class */ (function (_super) {
    __extends(CreateChannelResponse, _super);
    function CreateChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateChannelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateChannelResponse)
    ], CreateChannelResponse.prototype, "createChannelResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateChannelResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateChannelResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateChannelResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateChannelResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateChannelResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateChannelResponse.prototype, "throttlingException", void 0);
    return CreateChannelResponse;
}(SpeakeasyBase));
export { CreateChannelResponse };
