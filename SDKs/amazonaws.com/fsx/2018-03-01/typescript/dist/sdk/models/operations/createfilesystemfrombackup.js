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
export var CreateFileSystemFromBackupXAmzTargetEnum;
(function (CreateFileSystemFromBackupXAmzTargetEnum) {
    CreateFileSystemFromBackupXAmzTargetEnum["AwsSimbaApiServiceV20180301CreateFileSystemFromBackup"] = "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup";
})(CreateFileSystemFromBackupXAmzTargetEnum || (CreateFileSystemFromBackupXAmzTargetEnum = {}));
var CreateFileSystemFromBackupHeaders = /** @class */ (function (_super) {
    __extends(CreateFileSystemFromBackupHeaders, _super);
    function CreateFileSystemFromBackupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateFileSystemFromBackupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateFileSystemFromBackupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateFileSystemFromBackupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateFileSystemFromBackupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateFileSystemFromBackupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateFileSystemFromBackupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateFileSystemFromBackupHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateFileSystemFromBackupHeaders.prototype, "xAmzTarget", void 0);
    return CreateFileSystemFromBackupHeaders;
}(SpeakeasyBase));
export { CreateFileSystemFromBackupHeaders };
var CreateFileSystemFromBackupRequest = /** @class */ (function (_super) {
    __extends(CreateFileSystemFromBackupRequest, _super);
    function CreateFileSystemFromBackupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFileSystemFromBackupHeaders)
    ], CreateFileSystemFromBackupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateFileSystemFromBackupRequest)
    ], CreateFileSystemFromBackupRequest.prototype, "request", void 0);
    return CreateFileSystemFromBackupRequest;
}(SpeakeasyBase));
export { CreateFileSystemFromBackupRequest };
var CreateFileSystemFromBackupResponse = /** @class */ (function (_super) {
    __extends(CreateFileSystemFromBackupResponse, _super);
    function CreateFileSystemFromBackupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemFromBackupResponse.prototype, "activeDirectoryError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemFromBackupResponse.prototype, "backupNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemFromBackupResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFileSystemFromBackupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateFileSystemFromBackupResponse)
    ], CreateFileSystemFromBackupResponse.prototype, "createFileSystemFromBackupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemFromBackupResponse.prototype, "incompatibleParameterError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemFromBackupResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemFromBackupResponse.prototype, "invalidNetworkSettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemFromBackupResponse.prototype, "invalidPerUnitStorageThroughput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemFromBackupResponse.prototype, "missingFileSystemConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFileSystemFromBackupResponse.prototype, "serviceLimitExceeded", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFileSystemFromBackupResponse.prototype, "statusCode", void 0);
    return CreateFileSystemFromBackupResponse;
}(SpeakeasyBase));
export { CreateFileSystemFromBackupResponse };
