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
var GetScreenDataHeaders = /** @class */ (function (_super) {
    __extends(GetScreenDataHeaders, _super);
    function GetScreenDataHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetScreenDataHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetScreenDataHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetScreenDataHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetScreenDataHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetScreenDataHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetScreenDataHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetScreenDataHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetScreenDataHeaders;
}(SpeakeasyBase));
export { GetScreenDataHeaders };
var GetScreenDataRequestBody = /** @class */ (function (_super) {
    __extends(GetScreenDataRequestBody, _super);
    function GetScreenDataRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], GetScreenDataRequestBody.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], GetScreenDataRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], GetScreenDataRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=screenId" }),
        __metadata("design:type", String)
    ], GetScreenDataRequestBody.prototype, "screenId", void 0);
    __decorate([
        Metadata({ data: "json, name=variables", elemType: shared.VariableValue }),
        __metadata("design:type", Map)
    ], GetScreenDataRequestBody.prototype, "variables", void 0);
    __decorate([
        Metadata({ data: "json, name=workbookId" }),
        __metadata("design:type", String)
    ], GetScreenDataRequestBody.prototype, "workbookId", void 0);
    return GetScreenDataRequestBody;
}(SpeakeasyBase));
export { GetScreenDataRequestBody };
var GetScreenDataRequest = /** @class */ (function (_super) {
    __extends(GetScreenDataRequest, _super);
    function GetScreenDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetScreenDataHeaders)
    ], GetScreenDataRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetScreenDataRequestBody)
    ], GetScreenDataRequest.prototype, "request", void 0);
    return GetScreenDataRequest;
}(SpeakeasyBase));
export { GetScreenDataRequest };
var GetScreenDataResponse = /** @class */ (function (_super) {
    __extends(GetScreenDataResponse, _super);
    function GetScreenDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetScreenDataResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetScreenDataResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetScreenDataResult)
    ], GetScreenDataResponse.prototype, "getScreenDataResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetScreenDataResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetScreenDataResponse.prototype, "requestTimeoutException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetScreenDataResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetScreenDataResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetScreenDataResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetScreenDataResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetScreenDataResponse.prototype, "validationException", void 0);
    return GetScreenDataResponse;
}(SpeakeasyBase));
export { GetScreenDataResponse };
