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
export var StartDeliveryStreamEncryptionXAmzTargetEnum;
(function (StartDeliveryStreamEncryptionXAmzTargetEnum) {
    StartDeliveryStreamEncryptionXAmzTargetEnum["Firehose20150804StartDeliveryStreamEncryption"] = "Firehose_20150804.StartDeliveryStreamEncryption";
})(StartDeliveryStreamEncryptionXAmzTargetEnum || (StartDeliveryStreamEncryptionXAmzTargetEnum = {}));
var StartDeliveryStreamEncryptionHeaders = /** @class */ (function (_super) {
    __extends(StartDeliveryStreamEncryptionHeaders, _super);
    function StartDeliveryStreamEncryptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartDeliveryStreamEncryptionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartDeliveryStreamEncryptionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartDeliveryStreamEncryptionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartDeliveryStreamEncryptionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartDeliveryStreamEncryptionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartDeliveryStreamEncryptionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartDeliveryStreamEncryptionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], StartDeliveryStreamEncryptionHeaders.prototype, "xAmzTarget", void 0);
    return StartDeliveryStreamEncryptionHeaders;
}(SpeakeasyBase));
export { StartDeliveryStreamEncryptionHeaders };
var StartDeliveryStreamEncryptionRequest = /** @class */ (function (_super) {
    __extends(StartDeliveryStreamEncryptionRequest, _super);
    function StartDeliveryStreamEncryptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartDeliveryStreamEncryptionHeaders)
    ], StartDeliveryStreamEncryptionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StartDeliveryStreamEncryptionInput)
    ], StartDeliveryStreamEncryptionRequest.prototype, "request", void 0);
    return StartDeliveryStreamEncryptionRequest;
}(SpeakeasyBase));
export { StartDeliveryStreamEncryptionRequest };
var StartDeliveryStreamEncryptionResponse = /** @class */ (function (_super) {
    __extends(StartDeliveryStreamEncryptionResponse, _super);
    function StartDeliveryStreamEncryptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartDeliveryStreamEncryptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartDeliveryStreamEncryptionResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartDeliveryStreamEncryptionResponse.prototype, "invalidKmsResourceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartDeliveryStreamEncryptionResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartDeliveryStreamEncryptionResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartDeliveryStreamEncryptionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], StartDeliveryStreamEncryptionResponse.prototype, "startDeliveryStreamEncryptionOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartDeliveryStreamEncryptionResponse.prototype, "statusCode", void 0);
    return StartDeliveryStreamEncryptionResponse;
}(SpeakeasyBase));
export { StartDeliveryStreamEncryptionResponse };
