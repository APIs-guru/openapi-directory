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
var SetV2LoggingOptionsHeaders = /** @class */ (function (_super) {
    __extends(SetV2LoggingOptionsHeaders, _super);
    function SetV2LoggingOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SetV2LoggingOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SetV2LoggingOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SetV2LoggingOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SetV2LoggingOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SetV2LoggingOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SetV2LoggingOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SetV2LoggingOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SetV2LoggingOptionsHeaders;
}(SpeakeasyBase));
export { SetV2LoggingOptionsHeaders };
export var SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum;
(function (SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum) {
    SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum["Debug"] = "DEBUG";
    SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum["Info"] = "INFO";
    SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum["Error"] = "ERROR";
    SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum["Warn"] = "WARN";
    SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum["Disabled"] = "DISABLED";
})(SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum || (SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum = {}));
var SetV2LoggingOptionsRequestBody = /** @class */ (function (_super) {
    __extends(SetV2LoggingOptionsRequestBody, _super);
    function SetV2LoggingOptionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLogLevel" }),
        __metadata("design:type", String)
    ], SetV2LoggingOptionsRequestBody.prototype, "defaultLogLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableAllLogs" }),
        __metadata("design:type", Boolean)
    ], SetV2LoggingOptionsRequestBody.prototype, "disableAllLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], SetV2LoggingOptionsRequestBody.prototype, "roleArn", void 0);
    return SetV2LoggingOptionsRequestBody;
}(SpeakeasyBase));
export { SetV2LoggingOptionsRequestBody };
var SetV2LoggingOptionsRequest = /** @class */ (function (_super) {
    __extends(SetV2LoggingOptionsRequest, _super);
    function SetV2LoggingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetV2LoggingOptionsHeaders)
    ], SetV2LoggingOptionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SetV2LoggingOptionsRequestBody)
    ], SetV2LoggingOptionsRequest.prototype, "request", void 0);
    return SetV2LoggingOptionsRequest;
}(SpeakeasyBase));
export { SetV2LoggingOptionsRequest };
var SetV2LoggingOptionsResponse = /** @class */ (function (_super) {
    __extends(SetV2LoggingOptionsResponse, _super);
    function SetV2LoggingOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetV2LoggingOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetV2LoggingOptionsResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetV2LoggingOptionsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetV2LoggingOptionsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetV2LoggingOptionsResponse.prototype, "statusCode", void 0);
    return SetV2LoggingOptionsResponse;
}(SpeakeasyBase));
export { SetV2LoggingOptionsResponse };
