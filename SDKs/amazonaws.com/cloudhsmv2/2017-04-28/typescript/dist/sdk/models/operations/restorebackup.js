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
export var RestoreBackupXAmzTargetEnum;
(function (RestoreBackupXAmzTargetEnum) {
    RestoreBackupXAmzTargetEnum["BaldrApiServiceRestoreBackup"] = "BaldrApiService.RestoreBackup";
})(RestoreBackupXAmzTargetEnum || (RestoreBackupXAmzTargetEnum = {}));
var RestoreBackupHeaders = /** @class */ (function (_super) {
    __extends(RestoreBackupHeaders, _super);
    function RestoreBackupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RestoreBackupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RestoreBackupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RestoreBackupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RestoreBackupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RestoreBackupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RestoreBackupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RestoreBackupHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], RestoreBackupHeaders.prototype, "xAmzTarget", void 0);
    return RestoreBackupHeaders;
}(SpeakeasyBase));
export { RestoreBackupHeaders };
var RestoreBackupRequest = /** @class */ (function (_super) {
    __extends(RestoreBackupRequest, _super);
    function RestoreBackupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RestoreBackupHeaders)
    ], RestoreBackupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RestoreBackupRequest)
    ], RestoreBackupRequest.prototype, "request", void 0);
    return RestoreBackupRequest;
}(SpeakeasyBase));
export { RestoreBackupRequest };
var RestoreBackupResponse = /** @class */ (function (_super) {
    __extends(RestoreBackupResponse, _super);
    function RestoreBackupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RestoreBackupResponse.prototype, "cloudHsmAccessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RestoreBackupResponse.prototype, "cloudHsmInternalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RestoreBackupResponse.prototype, "cloudHsmInvalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RestoreBackupResponse.prototype, "cloudHsmResourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RestoreBackupResponse.prototype, "cloudHsmServiceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RestoreBackupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RestoreBackupResponse)
    ], RestoreBackupResponse.prototype, "restoreBackupResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RestoreBackupResponse.prototype, "statusCode", void 0);
    return RestoreBackupResponse;
}(SpeakeasyBase));
export { RestoreBackupResponse };
