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
export var GetDeleteLaunchTemplateVersionsActionEnum;
(function (GetDeleteLaunchTemplateVersionsActionEnum) {
    GetDeleteLaunchTemplateVersionsActionEnum["DeleteLaunchTemplateVersions"] = "DeleteLaunchTemplateVersions";
})(GetDeleteLaunchTemplateVersionsActionEnum || (GetDeleteLaunchTemplateVersionsActionEnum = {}));
export var GetDeleteLaunchTemplateVersionsVersionEnum;
(function (GetDeleteLaunchTemplateVersionsVersionEnum) {
    GetDeleteLaunchTemplateVersionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteLaunchTemplateVersionsVersionEnum || (GetDeleteLaunchTemplateVersionsVersionEnum = {}));
var GetDeleteLaunchTemplateVersionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteLaunchTemplateVersionsQueryParams, _super);
    function GetDeleteLaunchTemplateVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateVersionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteLaunchTemplateVersionsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateId" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateVersionsQueryParams.prototype, "launchTemplateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateName" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateVersionsQueryParams.prototype, "launchTemplateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateVersion" }),
        __metadata("design:type", Array)
    ], GetDeleteLaunchTemplateVersionsQueryParams.prototype, "launchTemplateVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateVersionsQueryParams.prototype, "version", void 0);
    return GetDeleteLaunchTemplateVersionsQueryParams;
}(SpeakeasyBase));
export { GetDeleteLaunchTemplateVersionsQueryParams };
var GetDeleteLaunchTemplateVersionsHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteLaunchTemplateVersionsHeaders, _super);
    function GetDeleteLaunchTemplateVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteLaunchTemplateVersionsHeaders;
}(SpeakeasyBase));
export { GetDeleteLaunchTemplateVersionsHeaders };
var GetDeleteLaunchTemplateVersionsRequest = /** @class */ (function (_super) {
    __extends(GetDeleteLaunchTemplateVersionsRequest, _super);
    function GetDeleteLaunchTemplateVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteLaunchTemplateVersionsQueryParams)
    ], GetDeleteLaunchTemplateVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteLaunchTemplateVersionsHeaders)
    ], GetDeleteLaunchTemplateVersionsRequest.prototype, "headers", void 0);
    return GetDeleteLaunchTemplateVersionsRequest;
}(SpeakeasyBase));
export { GetDeleteLaunchTemplateVersionsRequest };
var GetDeleteLaunchTemplateVersionsResponse = /** @class */ (function (_super) {
    __extends(GetDeleteLaunchTemplateVersionsResponse, _super);
    function GetDeleteLaunchTemplateVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteLaunchTemplateVersionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteLaunchTemplateVersionsResponse.prototype, "statusCode", void 0);
    return GetDeleteLaunchTemplateVersionsResponse;
}(SpeakeasyBase));
export { GetDeleteLaunchTemplateVersionsResponse };
