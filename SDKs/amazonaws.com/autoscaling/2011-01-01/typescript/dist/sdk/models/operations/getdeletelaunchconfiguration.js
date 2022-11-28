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
export var GetDeleteLaunchConfigurationActionEnum;
(function (GetDeleteLaunchConfigurationActionEnum) {
    GetDeleteLaunchConfigurationActionEnum["DeleteLaunchConfiguration"] = "DeleteLaunchConfiguration";
})(GetDeleteLaunchConfigurationActionEnum || (GetDeleteLaunchConfigurationActionEnum = {}));
export var GetDeleteLaunchConfigurationVersionEnum;
(function (GetDeleteLaunchConfigurationVersionEnum) {
    GetDeleteLaunchConfigurationVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDeleteLaunchConfigurationVersionEnum || (GetDeleteLaunchConfigurationVersionEnum = {}));
var GetDeleteLaunchConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteLaunchConfigurationQueryParams, _super);
    function GetDeleteLaunchConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchConfigurationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LaunchConfigurationName" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchConfigurationQueryParams.prototype, "launchConfigurationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchConfigurationQueryParams.prototype, "version", void 0);
    return GetDeleteLaunchConfigurationQueryParams;
}(SpeakeasyBase));
export { GetDeleteLaunchConfigurationQueryParams };
var GetDeleteLaunchConfigurationHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteLaunchConfigurationHeaders, _super);
    function GetDeleteLaunchConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteLaunchConfigurationHeaders;
}(SpeakeasyBase));
export { GetDeleteLaunchConfigurationHeaders };
var GetDeleteLaunchConfigurationRequest = /** @class */ (function (_super) {
    __extends(GetDeleteLaunchConfigurationRequest, _super);
    function GetDeleteLaunchConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteLaunchConfigurationQueryParams)
    ], GetDeleteLaunchConfigurationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteLaunchConfigurationHeaders)
    ], GetDeleteLaunchConfigurationRequest.prototype, "headers", void 0);
    return GetDeleteLaunchConfigurationRequest;
}(SpeakeasyBase));
export { GetDeleteLaunchConfigurationRequest };
var GetDeleteLaunchConfigurationResponse = /** @class */ (function (_super) {
    __extends(GetDeleteLaunchConfigurationResponse, _super);
    function GetDeleteLaunchConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteLaunchConfigurationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteLaunchConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteLaunchConfigurationResponse.prototype, "statusCode", void 0);
    return GetDeleteLaunchConfigurationResponse;
}(SpeakeasyBase));
export { GetDeleteLaunchConfigurationResponse };
