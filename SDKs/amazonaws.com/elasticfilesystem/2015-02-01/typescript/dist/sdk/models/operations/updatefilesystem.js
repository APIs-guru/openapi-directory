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
var UpdateFileSystemPathParams = /** @class */ (function (_super) {
    __extends(UpdateFileSystemPathParams, _super);
    function UpdateFileSystemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileSystemId" }),
        __metadata("design:type", String)
    ], UpdateFileSystemPathParams.prototype, "fileSystemId", void 0);
    return UpdateFileSystemPathParams;
}(SpeakeasyBase));
export { UpdateFileSystemPathParams };
var UpdateFileSystemHeaders = /** @class */ (function (_super) {
    __extends(UpdateFileSystemHeaders, _super);
    function UpdateFileSystemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateFileSystemHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateFileSystemHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateFileSystemHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateFileSystemHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateFileSystemHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateFileSystemHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateFileSystemHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateFileSystemHeaders;
}(SpeakeasyBase));
export { UpdateFileSystemHeaders };
export var UpdateFileSystemRequestBodyThroughputModeEnum;
(function (UpdateFileSystemRequestBodyThroughputModeEnum) {
    UpdateFileSystemRequestBodyThroughputModeEnum["Bursting"] = "bursting";
    UpdateFileSystemRequestBodyThroughputModeEnum["Provisioned"] = "provisioned";
})(UpdateFileSystemRequestBodyThroughputModeEnum || (UpdateFileSystemRequestBodyThroughputModeEnum = {}));
var UpdateFileSystemRequestBody = /** @class */ (function (_super) {
    __extends(UpdateFileSystemRequestBody, _super);
    function UpdateFileSystemRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedThroughputInMibps" }),
        __metadata("design:type", Number)
    ], UpdateFileSystemRequestBody.prototype, "provisionedThroughputInMibps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThroughputMode" }),
        __metadata("design:type", String)
    ], UpdateFileSystemRequestBody.prototype, "throughputMode", void 0);
    return UpdateFileSystemRequestBody;
}(SpeakeasyBase));
export { UpdateFileSystemRequestBody };
var UpdateFileSystemRequest = /** @class */ (function (_super) {
    __extends(UpdateFileSystemRequest, _super);
    function UpdateFileSystemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFileSystemPathParams)
    ], UpdateFileSystemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFileSystemHeaders)
    ], UpdateFileSystemRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateFileSystemRequestBody)
    ], UpdateFileSystemRequest.prototype, "request", void 0);
    return UpdateFileSystemRequest;
}(SpeakeasyBase));
export { UpdateFileSystemRequest };
var UpdateFileSystemResponse = /** @class */ (function (_super) {
    __extends(UpdateFileSystemResponse, _super);
    function UpdateFileSystemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFileSystemResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFileSystemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FileSystemDescription)
    ], UpdateFileSystemResponse.prototype, "fileSystemDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFileSystemResponse.prototype, "fileSystemNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFileSystemResponse.prototype, "incorrectFileSystemLifeCycleState", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFileSystemResponse.prototype, "insufficientThroughputCapacity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFileSystemResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFileSystemResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFileSystemResponse.prototype, "throughputLimitExceeded", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFileSystemResponse.prototype, "tooManyRequests", void 0);
    return UpdateFileSystemResponse;
}(SpeakeasyBase));
export { UpdateFileSystemResponse };
