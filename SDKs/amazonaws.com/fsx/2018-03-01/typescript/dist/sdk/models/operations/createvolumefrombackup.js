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
export var CreateVolumeFromBackupXAmzTargetEnum;
(function (CreateVolumeFromBackupXAmzTargetEnum) {
    CreateVolumeFromBackupXAmzTargetEnum["AwsSimbaApiServiceV20180301CreateVolumeFromBackup"] = "AWSSimbaAPIService_v20180301.CreateVolumeFromBackup";
})(CreateVolumeFromBackupXAmzTargetEnum || (CreateVolumeFromBackupXAmzTargetEnum = {}));
var CreateVolumeFromBackupHeaders = /** @class */ (function (_super) {
    __extends(CreateVolumeFromBackupHeaders, _super);
    function CreateVolumeFromBackupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateVolumeFromBackupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateVolumeFromBackupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateVolumeFromBackupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateVolumeFromBackupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateVolumeFromBackupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateVolumeFromBackupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateVolumeFromBackupHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateVolumeFromBackupHeaders.prototype, "xAmzTarget", void 0);
    return CreateVolumeFromBackupHeaders;
}(SpeakeasyBase));
export { CreateVolumeFromBackupHeaders };
var CreateVolumeFromBackupRequest = /** @class */ (function (_super) {
    __extends(CreateVolumeFromBackupRequest, _super);
    function CreateVolumeFromBackupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVolumeFromBackupHeaders)
    ], CreateVolumeFromBackupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateVolumeFromBackupRequest)
    ], CreateVolumeFromBackupRequest.prototype, "request", void 0);
    return CreateVolumeFromBackupRequest;
}(SpeakeasyBase));
export { CreateVolumeFromBackupRequest };
var CreateVolumeFromBackupResponse = /** @class */ (function (_super) {
    __extends(CreateVolumeFromBackupResponse, _super);
    function CreateVolumeFromBackupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVolumeFromBackupResponse.prototype, "backupNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVolumeFromBackupResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateVolumeFromBackupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateVolumeFromBackupResponse)
    ], CreateVolumeFromBackupResponse.prototype, "createVolumeFromBackupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVolumeFromBackupResponse.prototype, "fileSystemNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVolumeFromBackupResponse.prototype, "incompatibleParameterError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVolumeFromBackupResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVolumeFromBackupResponse.prototype, "missingVolumeConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVolumeFromBackupResponse.prototype, "serviceLimitExceeded", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateVolumeFromBackupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVolumeFromBackupResponse.prototype, "storageVirtualMachineNotFound", void 0);
    return CreateVolumeFromBackupResponse;
}(SpeakeasyBase));
export { CreateVolumeFromBackupResponse };
