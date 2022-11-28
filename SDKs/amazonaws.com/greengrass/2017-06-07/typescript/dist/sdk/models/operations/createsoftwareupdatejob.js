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
var CreateSoftwareUpdateJobHeaders = /** @class */ (function (_super) {
    __extends(CreateSoftwareUpdateJobHeaders, _super);
    function CreateSoftwareUpdateJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSoftwareUpdateJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSoftwareUpdateJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSoftwareUpdateJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSoftwareUpdateJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSoftwareUpdateJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSoftwareUpdateJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSoftwareUpdateJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateSoftwareUpdateJobHeaders.prototype, "xAmznClientToken", void 0);
    return CreateSoftwareUpdateJobHeaders;
}(SpeakeasyBase));
export { CreateSoftwareUpdateJobHeaders };
export var CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum;
(function (CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum) {
    CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum["Core"] = "core";
    CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum["OtaAgent"] = "ota_agent";
})(CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum || (CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum = {}));
export var CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum;
(function (CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum) {
    CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum["None"] = "NONE";
    CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum["Trace"] = "TRACE";
    CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum["Debug"] = "DEBUG";
    CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum["Verbose"] = "VERBOSE";
    CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum["Info"] = "INFO";
    CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum["Warn"] = "WARN";
    CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum["Error"] = "ERROR";
    CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum["Fatal"] = "FATAL";
})(CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum || (CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum = {}));
export var CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum;
(function (CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum) {
    CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum["Armv6l"] = "armv6l";
    CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum["Armv7l"] = "armv7l";
    CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum["X8664"] = "x86_64";
    CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum["Aarch64"] = "aarch64";
})(CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum || (CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum = {}));
export var CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum;
(function (CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum) {
    CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum["Ubuntu"] = "ubuntu";
    CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum["Raspbian"] = "raspbian";
    CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum["AmazonLinux"] = "amazon_linux";
    CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum["Openwrt"] = "openwrt";
})(CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum || (CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum = {}));
var CreateSoftwareUpdateJobRequestBody = /** @class */ (function (_super) {
    __extends(CreateSoftwareUpdateJobRequestBody, _super);
    function CreateSoftwareUpdateJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3UrlSignerRole" }),
        __metadata("design:type", String)
    ], CreateSoftwareUpdateJobRequestBody.prototype, "s3UrlSignerRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SoftwareToUpdate" }),
        __metadata("design:type", String)
    ], CreateSoftwareUpdateJobRequestBody.prototype, "softwareToUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateAgentLogLevel" }),
        __metadata("design:type", String)
    ], CreateSoftwareUpdateJobRequestBody.prototype, "updateAgentLogLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateTargets" }),
        __metadata("design:type", Array)
    ], CreateSoftwareUpdateJobRequestBody.prototype, "updateTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateTargetsArchitecture" }),
        __metadata("design:type", String)
    ], CreateSoftwareUpdateJobRequestBody.prototype, "updateTargetsArchitecture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateTargetsOperatingSystem" }),
        __metadata("design:type", String)
    ], CreateSoftwareUpdateJobRequestBody.prototype, "updateTargetsOperatingSystem", void 0);
    return CreateSoftwareUpdateJobRequestBody;
}(SpeakeasyBase));
export { CreateSoftwareUpdateJobRequestBody };
var CreateSoftwareUpdateJobRequest = /** @class */ (function (_super) {
    __extends(CreateSoftwareUpdateJobRequest, _super);
    function CreateSoftwareUpdateJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSoftwareUpdateJobHeaders)
    ], CreateSoftwareUpdateJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSoftwareUpdateJobRequestBody)
    ], CreateSoftwareUpdateJobRequest.prototype, "request", void 0);
    return CreateSoftwareUpdateJobRequest;
}(SpeakeasyBase));
export { CreateSoftwareUpdateJobRequest };
var CreateSoftwareUpdateJobResponse = /** @class */ (function (_super) {
    __extends(CreateSoftwareUpdateJobResponse, _super);
    function CreateSoftwareUpdateJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSoftwareUpdateJobResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSoftwareUpdateJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateSoftwareUpdateJobResponse)
    ], CreateSoftwareUpdateJobResponse.prototype, "createSoftwareUpdateJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSoftwareUpdateJobResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSoftwareUpdateJobResponse.prototype, "statusCode", void 0);
    return CreateSoftwareUpdateJobResponse;
}(SpeakeasyBase));
export { CreateSoftwareUpdateJobResponse };
