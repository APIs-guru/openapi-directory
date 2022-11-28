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
var UpgradePublishedSchemaHeaders = /** @class */ (function (_super) {
    __extends(UpgradePublishedSchemaHeaders, _super);
    function UpgradePublishedSchemaHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpgradePublishedSchemaHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpgradePublishedSchemaHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpgradePublishedSchemaHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpgradePublishedSchemaHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpgradePublishedSchemaHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpgradePublishedSchemaHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpgradePublishedSchemaHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpgradePublishedSchemaHeaders;
}(SpeakeasyBase));
export { UpgradePublishedSchemaHeaders };
var UpgradePublishedSchemaRequestBody = /** @class */ (function (_super) {
    __extends(UpgradePublishedSchemaRequestBody, _super);
    function UpgradePublishedSchemaRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DevelopmentSchemaArn" }),
        __metadata("design:type", String)
    ], UpgradePublishedSchemaRequestBody.prototype, "developmentSchemaArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DryRun" }),
        __metadata("design:type", Boolean)
    ], UpgradePublishedSchemaRequestBody.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinorVersion" }),
        __metadata("design:type", String)
    ], UpgradePublishedSchemaRequestBody.prototype, "minorVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublishedSchemaArn" }),
        __metadata("design:type", String)
    ], UpgradePublishedSchemaRequestBody.prototype, "publishedSchemaArn", void 0);
    return UpgradePublishedSchemaRequestBody;
}(SpeakeasyBase));
export { UpgradePublishedSchemaRequestBody };
var UpgradePublishedSchemaRequest = /** @class */ (function (_super) {
    __extends(UpgradePublishedSchemaRequest, _super);
    function UpgradePublishedSchemaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpgradePublishedSchemaHeaders)
    ], UpgradePublishedSchemaRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpgradePublishedSchemaRequestBody)
    ], UpgradePublishedSchemaRequest.prototype, "request", void 0);
    return UpgradePublishedSchemaRequest;
}(SpeakeasyBase));
export { UpgradePublishedSchemaRequest };
var UpgradePublishedSchemaResponse = /** @class */ (function (_super) {
    __extends(UpgradePublishedSchemaResponse, _super);
    function UpgradePublishedSchemaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpgradePublishedSchemaResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpgradePublishedSchemaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpgradePublishedSchemaResponse.prototype, "incompatibleSchemaException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpgradePublishedSchemaResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpgradePublishedSchemaResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpgradePublishedSchemaResponse.prototype, "invalidAttachmentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpgradePublishedSchemaResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpgradePublishedSchemaResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpgradePublishedSchemaResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpgradePublishedSchemaResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpgradePublishedSchemaResponse)
    ], UpgradePublishedSchemaResponse.prototype, "upgradePublishedSchemaResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpgradePublishedSchemaResponse.prototype, "validationException", void 0);
    return UpgradePublishedSchemaResponse;
}(SpeakeasyBase));
export { UpgradePublishedSchemaResponse };
