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
export var ImportApiKeysFormatEnum;
(function (ImportApiKeysFormatEnum) {
    ImportApiKeysFormatEnum["Csv"] = "csv";
})(ImportApiKeysFormatEnum || (ImportApiKeysFormatEnum = {}));
export var ImportApiKeysModeEnum;
(function (ImportApiKeysModeEnum) {
    ImportApiKeysModeEnum["Import"] = "import";
})(ImportApiKeysModeEnum || (ImportApiKeysModeEnum = {}));
var ImportApiKeysQueryParams = /** @class */ (function (_super) {
    __extends(ImportApiKeysQueryParams, _super);
    function ImportApiKeysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=failonwarnings" }),
        __metadata("design:type", Boolean)
    ], ImportApiKeysQueryParams.prototype, "failonwarnings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], ImportApiKeysQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" }),
        __metadata("design:type", String)
    ], ImportApiKeysQueryParams.prototype, "mode", void 0);
    return ImportApiKeysQueryParams;
}(SpeakeasyBase));
export { ImportApiKeysQueryParams };
var ImportApiKeysHeaders = /** @class */ (function (_super) {
    __extends(ImportApiKeysHeaders, _super);
    function ImportApiKeysHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ImportApiKeysHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ImportApiKeysHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ImportApiKeysHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ImportApiKeysHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ImportApiKeysHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ImportApiKeysHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ImportApiKeysHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ImportApiKeysHeaders;
}(SpeakeasyBase));
export { ImportApiKeysHeaders };
var ImportApiKeysRequestBody = /** @class */ (function (_super) {
    __extends(ImportApiKeysRequestBody, _super);
    function ImportApiKeysRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], ImportApiKeysRequestBody.prototype, "body", void 0);
    return ImportApiKeysRequestBody;
}(SpeakeasyBase));
export { ImportApiKeysRequestBody };
var ImportApiKeysRequest = /** @class */ (function (_super) {
    __extends(ImportApiKeysRequest, _super);
    function ImportApiKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportApiKeysQueryParams)
    ], ImportApiKeysRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportApiKeysHeaders)
    ], ImportApiKeysRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ImportApiKeysRequestBody)
    ], ImportApiKeysRequest.prototype, "request", void 0);
    return ImportApiKeysRequest;
}(SpeakeasyBase));
export { ImportApiKeysRequest };
var ImportApiKeysResponse = /** @class */ (function (_super) {
    __extends(ImportApiKeysResponse, _super);
    function ImportApiKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiKeyIds)
    ], ImportApiKeysResponse.prototype, "apiKeyIds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportApiKeysResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportApiKeysResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ImportApiKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportApiKeysResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportApiKeysResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ImportApiKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportApiKeysResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportApiKeysResponse.prototype, "unauthorizedException", void 0);
    return ImportApiKeysResponse;
}(SpeakeasyBase));
export { ImportApiKeysResponse };
