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
var PutBackupPolicyPathParams = /** @class */ (function (_super) {
    __extends(PutBackupPolicyPathParams, _super);
    function PutBackupPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileSystemId" }),
        __metadata("design:type", String)
    ], PutBackupPolicyPathParams.prototype, "fileSystemId", void 0);
    return PutBackupPolicyPathParams;
}(SpeakeasyBase));
export { PutBackupPolicyPathParams };
var PutBackupPolicyHeaders = /** @class */ (function (_super) {
    __extends(PutBackupPolicyHeaders, _super);
    function PutBackupPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutBackupPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutBackupPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutBackupPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutBackupPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutBackupPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutBackupPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutBackupPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutBackupPolicyHeaders;
}(SpeakeasyBase));
export { PutBackupPolicyHeaders };
// PutBackupPolicyRequestBodyBackupPolicy
/**
 * The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.
**/
var PutBackupPolicyRequestBodyBackupPolicy = /** @class */ (function (_super) {
    __extends(PutBackupPolicyRequestBodyBackupPolicy, _super);
    function PutBackupPolicyRequestBodyBackupPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], PutBackupPolicyRequestBodyBackupPolicy.prototype, "status", void 0);
    return PutBackupPolicyRequestBodyBackupPolicy;
}(SpeakeasyBase));
export { PutBackupPolicyRequestBodyBackupPolicy };
var PutBackupPolicyRequestBody = /** @class */ (function (_super) {
    __extends(PutBackupPolicyRequestBody, _super);
    function PutBackupPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackupPolicy" }),
        __metadata("design:type", PutBackupPolicyRequestBodyBackupPolicy)
    ], PutBackupPolicyRequestBody.prototype, "backupPolicy", void 0);
    return PutBackupPolicyRequestBody;
}(SpeakeasyBase));
export { PutBackupPolicyRequestBody };
var PutBackupPolicyRequest = /** @class */ (function (_super) {
    __extends(PutBackupPolicyRequest, _super);
    function PutBackupPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutBackupPolicyPathParams)
    ], PutBackupPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutBackupPolicyHeaders)
    ], PutBackupPolicyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutBackupPolicyRequestBody)
    ], PutBackupPolicyRequest.prototype, "request", void 0);
    return PutBackupPolicyRequest;
}(SpeakeasyBase));
export { PutBackupPolicyRequest };
var PutBackupPolicyResponse = /** @class */ (function (_super) {
    __extends(PutBackupPolicyResponse, _super);
    function PutBackupPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BackupPolicyDescription)
    ], PutBackupPolicyResponse.prototype, "backupPolicyDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBackupPolicyResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutBackupPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBackupPolicyResponse.prototype, "fileSystemNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBackupPolicyResponse.prototype, "incorrectFileSystemLifeCycleState", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBackupPolicyResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutBackupPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBackupPolicyResponse.prototype, "validationException", void 0);
    return PutBackupPolicyResponse;
}(SpeakeasyBase));
export { PutBackupPolicyResponse };
