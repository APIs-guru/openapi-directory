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
var UpgradeAppliedSchemaHeaders = /** @class */ (function (_super) {
    __extends(UpgradeAppliedSchemaHeaders, _super);
    function UpgradeAppliedSchemaHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpgradeAppliedSchemaHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpgradeAppliedSchemaHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpgradeAppliedSchemaHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpgradeAppliedSchemaHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpgradeAppliedSchemaHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpgradeAppliedSchemaHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpgradeAppliedSchemaHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpgradeAppliedSchemaHeaders;
}(SpeakeasyBase));
export { UpgradeAppliedSchemaHeaders };
var UpgradeAppliedSchemaRequestBody = /** @class */ (function (_super) {
    __extends(UpgradeAppliedSchemaRequestBody, _super);
    function UpgradeAppliedSchemaRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectoryArn" }),
        __metadata("design:type", String)
    ], UpgradeAppliedSchemaRequestBody.prototype, "directoryArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DryRun" }),
        __metadata("design:type", Boolean)
    ], UpgradeAppliedSchemaRequestBody.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublishedSchemaArn" }),
        __metadata("design:type", String)
    ], UpgradeAppliedSchemaRequestBody.prototype, "publishedSchemaArn", void 0);
    return UpgradeAppliedSchemaRequestBody;
}(SpeakeasyBase));
export { UpgradeAppliedSchemaRequestBody };
var UpgradeAppliedSchemaRequest = /** @class */ (function (_super) {
    __extends(UpgradeAppliedSchemaRequest, _super);
    function UpgradeAppliedSchemaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpgradeAppliedSchemaHeaders)
    ], UpgradeAppliedSchemaRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpgradeAppliedSchemaRequestBody)
    ], UpgradeAppliedSchemaRequest.prototype, "request", void 0);
    return UpgradeAppliedSchemaRequest;
}(SpeakeasyBase));
export { UpgradeAppliedSchemaRequest };
var UpgradeAppliedSchemaResponse = /** @class */ (function (_super) {
    __extends(UpgradeAppliedSchemaResponse, _super);
    function UpgradeAppliedSchemaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], UpgradeAppliedSchemaResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpgradeAppliedSchemaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IncompatibleSchemaException)
    ], UpgradeAppliedSchemaResponse.prototype, "incompatibleSchemaException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], UpgradeAppliedSchemaResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], UpgradeAppliedSchemaResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidAttachmentException)
    ], UpgradeAppliedSchemaResponse.prototype, "invalidAttachmentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], UpgradeAppliedSchemaResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], UpgradeAppliedSchemaResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpgradeAppliedSchemaResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpgradeAppliedSchemaResponse)
    ], UpgradeAppliedSchemaResponse.prototype, "upgradeAppliedSchemaResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], UpgradeAppliedSchemaResponse.prototype, "validationException", void 0);
    return UpgradeAppliedSchemaResponse;
}(SpeakeasyBase));
export { UpgradeAppliedSchemaResponse };
