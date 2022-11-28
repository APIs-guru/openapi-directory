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
export var ImportRestApiModeEnum;
(function (ImportRestApiModeEnum) {
    ImportRestApiModeEnum["Import"] = "import";
})(ImportRestApiModeEnum || (ImportRestApiModeEnum = {}));
var ImportRestApiQueryParams = /** @class */ (function (_super) {
    __extends(ImportRestApiQueryParams, _super);
    function ImportRestApiQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=failonwarnings" }),
        __metadata("design:type", Boolean)
    ], ImportRestApiQueryParams.prototype, "failonwarnings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" }),
        __metadata("design:type", String)
    ], ImportRestApiQueryParams.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters" }),
        __metadata("design:type", Map)
    ], ImportRestApiQueryParams.prototype, "parameters", void 0);
    return ImportRestApiQueryParams;
}(SpeakeasyBase));
export { ImportRestApiQueryParams };
var ImportRestApiHeaders = /** @class */ (function (_super) {
    __extends(ImportRestApiHeaders, _super);
    function ImportRestApiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ImportRestApiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ImportRestApiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ImportRestApiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ImportRestApiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ImportRestApiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ImportRestApiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ImportRestApiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ImportRestApiHeaders;
}(SpeakeasyBase));
export { ImportRestApiHeaders };
var ImportRestApiRequestBody = /** @class */ (function (_super) {
    __extends(ImportRestApiRequestBody, _super);
    function ImportRestApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], ImportRestApiRequestBody.prototype, "body", void 0);
    return ImportRestApiRequestBody;
}(SpeakeasyBase));
export { ImportRestApiRequestBody };
var ImportRestApiRequest = /** @class */ (function (_super) {
    __extends(ImportRestApiRequest, _super);
    function ImportRestApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportRestApiQueryParams)
    ], ImportRestApiRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportRestApiHeaders)
    ], ImportRestApiRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ImportRestApiRequestBody)
    ], ImportRestApiRequest.prototype, "request", void 0);
    return ImportRestApiRequest;
}(SpeakeasyBase));
export { ImportRestApiRequest };
var ImportRestApiResponse = /** @class */ (function (_super) {
    __extends(ImportRestApiResponse, _super);
    function ImportRestApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportRestApiResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportRestApiResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ImportRestApiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportRestApiResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportRestApiResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RestApi)
    ], ImportRestApiResponse.prototype, "restApi", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ImportRestApiResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportRestApiResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportRestApiResponse.prototype, "unauthorizedException", void 0);
    return ImportRestApiResponse;
}(SpeakeasyBase));
export { ImportRestApiResponse };
