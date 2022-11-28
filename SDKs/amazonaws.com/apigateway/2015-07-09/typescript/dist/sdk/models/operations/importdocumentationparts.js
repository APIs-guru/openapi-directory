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
var ImportDocumentationPartsPathParams = /** @class */ (function (_super) {
    __extends(ImportDocumentationPartsPathParams, _super);
    function ImportDocumentationPartsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], ImportDocumentationPartsPathParams.prototype, "restapiId", void 0);
    return ImportDocumentationPartsPathParams;
}(SpeakeasyBase));
export { ImportDocumentationPartsPathParams };
export var ImportDocumentationPartsModeEnum;
(function (ImportDocumentationPartsModeEnum) {
    ImportDocumentationPartsModeEnum["Merge"] = "merge";
    ImportDocumentationPartsModeEnum["Overwrite"] = "overwrite";
})(ImportDocumentationPartsModeEnum || (ImportDocumentationPartsModeEnum = {}));
var ImportDocumentationPartsQueryParams = /** @class */ (function (_super) {
    __extends(ImportDocumentationPartsQueryParams, _super);
    function ImportDocumentationPartsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=failonwarnings" }),
        __metadata("design:type", Boolean)
    ], ImportDocumentationPartsQueryParams.prototype, "failonwarnings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" }),
        __metadata("design:type", String)
    ], ImportDocumentationPartsQueryParams.prototype, "mode", void 0);
    return ImportDocumentationPartsQueryParams;
}(SpeakeasyBase));
export { ImportDocumentationPartsQueryParams };
var ImportDocumentationPartsHeaders = /** @class */ (function (_super) {
    __extends(ImportDocumentationPartsHeaders, _super);
    function ImportDocumentationPartsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ImportDocumentationPartsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ImportDocumentationPartsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ImportDocumentationPartsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ImportDocumentationPartsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ImportDocumentationPartsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ImportDocumentationPartsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ImportDocumentationPartsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ImportDocumentationPartsHeaders;
}(SpeakeasyBase));
export { ImportDocumentationPartsHeaders };
var ImportDocumentationPartsRequestBody = /** @class */ (function (_super) {
    __extends(ImportDocumentationPartsRequestBody, _super);
    function ImportDocumentationPartsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], ImportDocumentationPartsRequestBody.prototype, "body", void 0);
    return ImportDocumentationPartsRequestBody;
}(SpeakeasyBase));
export { ImportDocumentationPartsRequestBody };
var ImportDocumentationPartsRequest = /** @class */ (function (_super) {
    __extends(ImportDocumentationPartsRequest, _super);
    function ImportDocumentationPartsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportDocumentationPartsPathParams)
    ], ImportDocumentationPartsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportDocumentationPartsQueryParams)
    ], ImportDocumentationPartsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportDocumentationPartsHeaders)
    ], ImportDocumentationPartsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ImportDocumentationPartsRequestBody)
    ], ImportDocumentationPartsRequest.prototype, "request", void 0);
    return ImportDocumentationPartsRequest;
}(SpeakeasyBase));
export { ImportDocumentationPartsRequest };
var ImportDocumentationPartsResponse = /** @class */ (function (_super) {
    __extends(ImportDocumentationPartsResponse, _super);
    function ImportDocumentationPartsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportDocumentationPartsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportDocumentationPartsResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ImportDocumentationPartsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DocumentationPartIds)
    ], ImportDocumentationPartsResponse.prototype, "documentationPartIds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportDocumentationPartsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportDocumentationPartsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ImportDocumentationPartsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportDocumentationPartsResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportDocumentationPartsResponse.prototype, "unauthorizedException", void 0);
    return ImportDocumentationPartsResponse;
}(SpeakeasyBase));
export { ImportDocumentationPartsResponse };
