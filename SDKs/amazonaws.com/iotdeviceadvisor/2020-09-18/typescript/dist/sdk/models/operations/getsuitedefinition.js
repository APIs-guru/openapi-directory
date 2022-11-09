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
var GetSuiteDefinitionPathParams = /** @class */ (function (_super) {
    __extends(GetSuiteDefinitionPathParams, _super);
    function GetSuiteDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=suiteDefinitionId" }),
        __metadata("design:type", String)
    ], GetSuiteDefinitionPathParams.prototype, "suiteDefinitionId", void 0);
    return GetSuiteDefinitionPathParams;
}(SpeakeasyBase));
export { GetSuiteDefinitionPathParams };
var GetSuiteDefinitionQueryParams = /** @class */ (function (_super) {
    __extends(GetSuiteDefinitionQueryParams, _super);
    function GetSuiteDefinitionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=suiteDefinitionVersion" }),
        __metadata("design:type", String)
    ], GetSuiteDefinitionQueryParams.prototype, "suiteDefinitionVersion", void 0);
    return GetSuiteDefinitionQueryParams;
}(SpeakeasyBase));
export { GetSuiteDefinitionQueryParams };
var GetSuiteDefinitionHeaders = /** @class */ (function (_super) {
    __extends(GetSuiteDefinitionHeaders, _super);
    function GetSuiteDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSuiteDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSuiteDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSuiteDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSuiteDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSuiteDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSuiteDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSuiteDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSuiteDefinitionHeaders;
}(SpeakeasyBase));
export { GetSuiteDefinitionHeaders };
var GetSuiteDefinitionRequest = /** @class */ (function (_super) {
    __extends(GetSuiteDefinitionRequest, _super);
    function GetSuiteDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSuiteDefinitionPathParams)
    ], GetSuiteDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSuiteDefinitionQueryParams)
    ], GetSuiteDefinitionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSuiteDefinitionHeaders)
    ], GetSuiteDefinitionRequest.prototype, "headers", void 0);
    return GetSuiteDefinitionRequest;
}(SpeakeasyBase));
export { GetSuiteDefinitionRequest };
var GetSuiteDefinitionResponse = /** @class */ (function (_super) {
    __extends(GetSuiteDefinitionResponse, _super);
    function GetSuiteDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSuiteDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetSuiteDefinitionResponse)
    ], GetSuiteDefinitionResponse.prototype, "getSuiteDefinitionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSuiteDefinitionResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSuiteDefinitionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSuiteDefinitionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSuiteDefinitionResponse.prototype, "validationException", void 0);
    return GetSuiteDefinitionResponse;
}(SpeakeasyBase));
export { GetSuiteDefinitionResponse };
