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
var CreateFileSystemHeaders = /** @class */ (function (_super) {
    __extends(CreateFileSystemHeaders, _super);
    function CreateFileSystemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateFileSystemHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateFileSystemHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateFileSystemHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateFileSystemHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateFileSystemHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateFileSystemHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateFileSystemHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateFileSystemHeaders;
}(SpeakeasyBase));
export { CreateFileSystemHeaders };
export var CreateFileSystemRequestBodyPerformanceModeEnum;
(function (CreateFileSystemRequestBodyPerformanceModeEnum) {
    CreateFileSystemRequestBodyPerformanceModeEnum["GeneralPurpose"] = "generalPurpose";
    CreateFileSystemRequestBodyPerformanceModeEnum["MaxIo"] = "maxIO";
})(CreateFileSystemRequestBodyPerformanceModeEnum || (CreateFileSystemRequestBodyPerformanceModeEnum = {}));
export var CreateFileSystemRequestBodyThroughputModeEnum;
(function (CreateFileSystemRequestBodyThroughputModeEnum) {
    CreateFileSystemRequestBodyThroughputModeEnum["Bursting"] = "bursting";
    CreateFileSystemRequestBodyThroughputModeEnum["Provisioned"] = "provisioned";
})(CreateFileSystemRequestBodyThroughputModeEnum || (CreateFileSystemRequestBodyThroughputModeEnum = {}));
var CreateFileSystemRequestBody = /** @class */ (function (_super) {
    __extends(CreateFileSystemRequestBody, _super);
    function CreateFileSystemRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZoneName" }),
        __metadata("design:type", String)
    ], CreateFileSystemRequestBody.prototype, "availabilityZoneName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Backup" }),
        __metadata("design:type", Boolean)
    ], CreateFileSystemRequestBody.prototype, "backup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationToken" }),
        __metadata("design:type", String)
    ], CreateFileSystemRequestBody.prototype, "creationToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Encrypted" }),
        __metadata("design:type", Boolean)
    ], CreateFileSystemRequestBody.prototype, "encrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], CreateFileSystemRequestBody.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PerformanceMode" }),
        __metadata("design:type", String)
    ], CreateFileSystemRequestBody.prototype, "performanceMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedThroughputInMibps" }),
        __metadata("design:type", Number)
    ], CreateFileSystemRequestBody.prototype, "provisionedThroughputInMibps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateFileSystemRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThroughputMode" }),
        __metadata("design:type", String)
    ], CreateFileSystemRequestBody.prototype, "throughputMode", void 0);
    return CreateFileSystemRequestBody;
}(SpeakeasyBase));
export { CreateFileSystemRequestBody };
var CreateFileSystemRequest = /** @class */ (function (_super) {
    __extends(CreateFileSystemRequest, _super);
    function CreateFileSystemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFileSystemHeaders)
    ], CreateFileSystemRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateFileSystemRequestBody)
    ], CreateFileSystemRequest.prototype, "request", void 0);
    return CreateFileSystemRequest;
}(SpeakeasyBase));
export { CreateFileSystemRequest };
var CreateFileSystemResponse = /** @class */ (function (_super) {
    __extends(CreateFileSystemResponse, _super);
    function CreateFileSystemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFileSystemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemResponse.prototype, "fileSystemAlreadyExists", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FileSystemDescription)
    ], CreateFileSystemResponse.prototype, "fileSystemDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemResponse.prototype, "fileSystemLimitExceeded", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemResponse.prototype, "insufficientThroughputCapacity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFileSystemResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemResponse.prototype, "throughputLimitExceeded", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemResponse.prototype, "unsupportedAvailabilityZone", void 0);
    return CreateFileSystemResponse;
}(SpeakeasyBase));
export { CreateFileSystemResponse };
