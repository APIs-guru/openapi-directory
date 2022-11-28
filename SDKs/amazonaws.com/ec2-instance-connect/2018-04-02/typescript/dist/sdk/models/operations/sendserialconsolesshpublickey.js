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
export var SendSerialConsoleSshPublicKeyXAmzTargetEnum;
(function (SendSerialConsoleSshPublicKeyXAmzTargetEnum) {
    SendSerialConsoleSshPublicKeyXAmzTargetEnum["Awsec2InstanceConnectServiceSendSerialConsoleSshPublicKey"] = "AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey";
})(SendSerialConsoleSshPublicKeyXAmzTargetEnum || (SendSerialConsoleSshPublicKeyXAmzTargetEnum = {}));
var SendSerialConsoleSshPublicKeyHeaders = /** @class */ (function (_super) {
    __extends(SendSerialConsoleSshPublicKeyHeaders, _super);
    function SendSerialConsoleSshPublicKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SendSerialConsoleSshPublicKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SendSerialConsoleSshPublicKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SendSerialConsoleSshPublicKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SendSerialConsoleSshPublicKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SendSerialConsoleSshPublicKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SendSerialConsoleSshPublicKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SendSerialConsoleSshPublicKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], SendSerialConsoleSshPublicKeyHeaders.prototype, "xAmzTarget", void 0);
    return SendSerialConsoleSshPublicKeyHeaders;
}(SpeakeasyBase));
export { SendSerialConsoleSshPublicKeyHeaders };
var SendSerialConsoleSshPublicKeyRequest = /** @class */ (function (_super) {
    __extends(SendSerialConsoleSshPublicKeyRequest, _super);
    function SendSerialConsoleSshPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendSerialConsoleSshPublicKeyHeaders)
    ], SendSerialConsoleSshPublicKeyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SendSerialConsoleSshPublicKeyRequest)
    ], SendSerialConsoleSshPublicKeyRequest.prototype, "request", void 0);
    return SendSerialConsoleSshPublicKeyRequest;
}(SpeakeasyBase));
export { SendSerialConsoleSshPublicKeyRequest };
var SendSerialConsoleSshPublicKeyResponse = /** @class */ (function (_super) {
    __extends(SendSerialConsoleSshPublicKeyResponse, _super);
    function SendSerialConsoleSshPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendSerialConsoleSshPublicKeyResponse.prototype, "authException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SendSerialConsoleSshPublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendSerialConsoleSshPublicKeyResponse.prototype, "ec2InstanceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendSerialConsoleSshPublicKeyResponse.prototype, "ec2InstanceTypeInvalidException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendSerialConsoleSshPublicKeyResponse.prototype, "invalidArgsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SendSerialConsoleSshPublicKeyResponse)
    ], SendSerialConsoleSshPublicKeyResponse.prototype, "sendSerialConsoleSshPublicKeyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendSerialConsoleSshPublicKeyResponse.prototype, "serialConsoleAccessDisabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendSerialConsoleSshPublicKeyResponse.prototype, "serialConsoleSessionLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendSerialConsoleSshPublicKeyResponse.prototype, "serialConsoleSessionUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendSerialConsoleSshPublicKeyResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SendSerialConsoleSshPublicKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendSerialConsoleSshPublicKeyResponse.prototype, "throttlingException", void 0);
    return SendSerialConsoleSshPublicKeyResponse;
}(SpeakeasyBase));
export { SendSerialConsoleSshPublicKeyResponse };
