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
export var GetDeleteLaunchTemplateActionEnum;
(function (GetDeleteLaunchTemplateActionEnum) {
    GetDeleteLaunchTemplateActionEnum["DeleteLaunchTemplate"] = "DeleteLaunchTemplate";
})(GetDeleteLaunchTemplateActionEnum || (GetDeleteLaunchTemplateActionEnum = {}));
export var GetDeleteLaunchTemplateVersionEnum;
(function (GetDeleteLaunchTemplateVersionEnum) {
    GetDeleteLaunchTemplateVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteLaunchTemplateVersionEnum || (GetDeleteLaunchTemplateVersionEnum = {}));
var GetDeleteLaunchTemplateQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteLaunchTemplateQueryParams, _super);
    function GetDeleteLaunchTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteLaunchTemplateQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateId" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateQueryParams.prototype, "launchTemplateId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateName" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateQueryParams.prototype, "launchTemplateName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateQueryParams.prototype, "version", void 0);
    return GetDeleteLaunchTemplateQueryParams;
}(SpeakeasyBase));
export { GetDeleteLaunchTemplateQueryParams };
var GetDeleteLaunchTemplateHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteLaunchTemplateHeaders, _super);
    function GetDeleteLaunchTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteLaunchTemplateHeaders;
}(SpeakeasyBase));
export { GetDeleteLaunchTemplateHeaders };
var GetDeleteLaunchTemplateRequest = /** @class */ (function (_super) {
    __extends(GetDeleteLaunchTemplateRequest, _super);
    function GetDeleteLaunchTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteLaunchTemplateQueryParams)
    ], GetDeleteLaunchTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteLaunchTemplateHeaders)
    ], GetDeleteLaunchTemplateRequest.prototype, "headers", void 0);
    return GetDeleteLaunchTemplateRequest;
}(SpeakeasyBase));
export { GetDeleteLaunchTemplateRequest };
var GetDeleteLaunchTemplateResponse = /** @class */ (function (_super) {
    __extends(GetDeleteLaunchTemplateResponse, _super);
    function GetDeleteLaunchTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteLaunchTemplateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteLaunchTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteLaunchTemplateResponse.prototype, "statusCode", void 0);
    return GetDeleteLaunchTemplateResponse;
}(SpeakeasyBase));
export { GetDeleteLaunchTemplateResponse };
