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
var SetV2LoggingLevelHeaders = /** @class */ (function (_super) {
    __extends(SetV2LoggingLevelHeaders, _super);
    function SetV2LoggingLevelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SetV2LoggingLevelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SetV2LoggingLevelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SetV2LoggingLevelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SetV2LoggingLevelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SetV2LoggingLevelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SetV2LoggingLevelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SetV2LoggingLevelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SetV2LoggingLevelHeaders;
}(SpeakeasyBase));
export { SetV2LoggingLevelHeaders };
export var SetV2LoggingLevelRequestBodyLogLevelEnum;
(function (SetV2LoggingLevelRequestBodyLogLevelEnum) {
    SetV2LoggingLevelRequestBodyLogLevelEnum["Debug"] = "DEBUG";
    SetV2LoggingLevelRequestBodyLogLevelEnum["Info"] = "INFO";
    SetV2LoggingLevelRequestBodyLogLevelEnum["Error"] = "ERROR";
    SetV2LoggingLevelRequestBodyLogLevelEnum["Warn"] = "WARN";
    SetV2LoggingLevelRequestBodyLogLevelEnum["Disabled"] = "DISABLED";
})(SetV2LoggingLevelRequestBodyLogLevelEnum || (SetV2LoggingLevelRequestBodyLogLevelEnum = {}));
// SetV2LoggingLevelRequestBodyLogTarget
/**
 * A log target.
**/
var SetV2LoggingLevelRequestBodyLogTarget = /** @class */ (function (_super) {
    __extends(SetV2LoggingLevelRequestBodyLogTarget, _super);
    function SetV2LoggingLevelRequestBodyLogTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetName" }),
        __metadata("design:type", String)
    ], SetV2LoggingLevelRequestBodyLogTarget.prototype, "targetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetType" }),
        __metadata("design:type", String)
    ], SetV2LoggingLevelRequestBodyLogTarget.prototype, "targetType", void 0);
    return SetV2LoggingLevelRequestBodyLogTarget;
}(SpeakeasyBase));
export { SetV2LoggingLevelRequestBodyLogTarget };
var SetV2LoggingLevelRequestBody = /** @class */ (function (_super) {
    __extends(SetV2LoggingLevelRequestBody, _super);
    function SetV2LoggingLevelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logLevel" }),
        __metadata("design:type", String)
    ], SetV2LoggingLevelRequestBody.prototype, "logLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logTarget" }),
        __metadata("design:type", SetV2LoggingLevelRequestBodyLogTarget)
    ], SetV2LoggingLevelRequestBody.prototype, "logTarget", void 0);
    return SetV2LoggingLevelRequestBody;
}(SpeakeasyBase));
export { SetV2LoggingLevelRequestBody };
var SetV2LoggingLevelRequest = /** @class */ (function (_super) {
    __extends(SetV2LoggingLevelRequest, _super);
    function SetV2LoggingLevelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetV2LoggingLevelHeaders)
    ], SetV2LoggingLevelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SetV2LoggingLevelRequestBody)
    ], SetV2LoggingLevelRequest.prototype, "request", void 0);
    return SetV2LoggingLevelRequest;
}(SpeakeasyBase));
export { SetV2LoggingLevelRequest };
var SetV2LoggingLevelResponse = /** @class */ (function (_super) {
    __extends(SetV2LoggingLevelResponse, _super);
    function SetV2LoggingLevelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetV2LoggingLevelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetV2LoggingLevelResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetV2LoggingLevelResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetV2LoggingLevelResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetV2LoggingLevelResponse.prototype, "notConfiguredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetV2LoggingLevelResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetV2LoggingLevelResponse.prototype, "statusCode", void 0);
    return SetV2LoggingLevelResponse;
}(SpeakeasyBase));
export { SetV2LoggingLevelResponse };
