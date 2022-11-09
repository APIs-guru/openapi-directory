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
var StartSuiteRunPathParams = /** @class */ (function (_super) {
    __extends(StartSuiteRunPathParams, _super);
    function StartSuiteRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=suiteDefinitionId" }),
        __metadata("design:type", String)
    ], StartSuiteRunPathParams.prototype, "suiteDefinitionId", void 0);
    return StartSuiteRunPathParams;
}(SpeakeasyBase));
export { StartSuiteRunPathParams };
var StartSuiteRunHeaders = /** @class */ (function (_super) {
    __extends(StartSuiteRunHeaders, _super);
    function StartSuiteRunHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartSuiteRunHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartSuiteRunHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartSuiteRunHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartSuiteRunHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartSuiteRunHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartSuiteRunHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartSuiteRunHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartSuiteRunHeaders;
}(SpeakeasyBase));
export { StartSuiteRunHeaders };
// StartSuiteRunRequestBodySuiteRunConfiguration
/**
 * Gets suite run configuration.
**/
var StartSuiteRunRequestBodySuiteRunConfiguration = /** @class */ (function (_super) {
    __extends(StartSuiteRunRequestBodySuiteRunConfiguration, _super);
    function StartSuiteRunRequestBodySuiteRunConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=primaryDevice" }),
        __metadata("design:type", shared.DeviceUnderTest)
    ], StartSuiteRunRequestBodySuiteRunConfiguration.prototype, "primaryDevice", void 0);
    __decorate([
        Metadata({ data: "json, name=selectedTestList" }),
        __metadata("design:type", Array)
    ], StartSuiteRunRequestBodySuiteRunConfiguration.prototype, "selectedTestList", void 0);
    return StartSuiteRunRequestBodySuiteRunConfiguration;
}(SpeakeasyBase));
export { StartSuiteRunRequestBodySuiteRunConfiguration };
var StartSuiteRunRequestBody = /** @class */ (function (_super) {
    __extends(StartSuiteRunRequestBody, _super);
    function StartSuiteRunRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=suiteDefinitionVersion" }),
        __metadata("design:type", String)
    ], StartSuiteRunRequestBody.prototype, "suiteDefinitionVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=suiteRunConfiguration" }),
        __metadata("design:type", StartSuiteRunRequestBodySuiteRunConfiguration)
    ], StartSuiteRunRequestBody.prototype, "suiteRunConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], StartSuiteRunRequestBody.prototype, "tags", void 0);
    return StartSuiteRunRequestBody;
}(SpeakeasyBase));
export { StartSuiteRunRequestBody };
var StartSuiteRunRequest = /** @class */ (function (_super) {
    __extends(StartSuiteRunRequest, _super);
    function StartSuiteRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StartSuiteRunPathParams)
    ], StartSuiteRunRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StartSuiteRunHeaders)
    ], StartSuiteRunRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartSuiteRunRequestBody)
    ], StartSuiteRunRequest.prototype, "request", void 0);
    return StartSuiteRunRequest;
}(SpeakeasyBase));
export { StartSuiteRunRequest };
var StartSuiteRunResponse = /** @class */ (function (_super) {
    __extends(StartSuiteRunResponse, _super);
    function StartSuiteRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartSuiteRunResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StartSuiteRunResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartSuiteRunResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StartSuiteRunResponse)
    ], StartSuiteRunResponse.prototype, "startSuiteRunResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StartSuiteRunResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartSuiteRunResponse.prototype, "validationException", void 0);
    return StartSuiteRunResponse;
}(SpeakeasyBase));
export { StartSuiteRunResponse };
