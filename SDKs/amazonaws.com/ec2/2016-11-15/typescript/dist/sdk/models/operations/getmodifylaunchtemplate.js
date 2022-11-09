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
export var GetModifyLaunchTemplateActionEnum;
(function (GetModifyLaunchTemplateActionEnum) {
    GetModifyLaunchTemplateActionEnum["ModifyLaunchTemplate"] = "ModifyLaunchTemplate";
})(GetModifyLaunchTemplateActionEnum || (GetModifyLaunchTemplateActionEnum = {}));
export var GetModifyLaunchTemplateVersionEnum;
(function (GetModifyLaunchTemplateVersionEnum) {
    GetModifyLaunchTemplateVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyLaunchTemplateVersionEnum || (GetModifyLaunchTemplateVersionEnum = {}));
var GetModifyLaunchTemplateQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyLaunchTemplateQueryParams, _super);
    function GetModifyLaunchTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyLaunchTemplateQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClientToken" }),
        __metadata("design:type", String)
    ], GetModifyLaunchTemplateQueryParams.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyLaunchTemplateQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateId" }),
        __metadata("design:type", String)
    ], GetModifyLaunchTemplateQueryParams.prototype, "launchTemplateId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateName" }),
        __metadata("design:type", String)
    ], GetModifyLaunchTemplateQueryParams.prototype, "launchTemplateName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SetDefaultVersion" }),
        __metadata("design:type", String)
    ], GetModifyLaunchTemplateQueryParams.prototype, "setDefaultVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyLaunchTemplateQueryParams.prototype, "version", void 0);
    return GetModifyLaunchTemplateQueryParams;
}(SpeakeasyBase));
export { GetModifyLaunchTemplateQueryParams };
var GetModifyLaunchTemplateHeaders = /** @class */ (function (_super) {
    __extends(GetModifyLaunchTemplateHeaders, _super);
    function GetModifyLaunchTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyLaunchTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyLaunchTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyLaunchTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyLaunchTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyLaunchTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyLaunchTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyLaunchTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyLaunchTemplateHeaders;
}(SpeakeasyBase));
export { GetModifyLaunchTemplateHeaders };
var GetModifyLaunchTemplateRequest = /** @class */ (function (_super) {
    __extends(GetModifyLaunchTemplateRequest, _super);
    function GetModifyLaunchTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyLaunchTemplateQueryParams)
    ], GetModifyLaunchTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyLaunchTemplateHeaders)
    ], GetModifyLaunchTemplateRequest.prototype, "headers", void 0);
    return GetModifyLaunchTemplateRequest;
}(SpeakeasyBase));
export { GetModifyLaunchTemplateRequest };
var GetModifyLaunchTemplateResponse = /** @class */ (function (_super) {
    __extends(GetModifyLaunchTemplateResponse, _super);
    function GetModifyLaunchTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyLaunchTemplateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyLaunchTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyLaunchTemplateResponse.prototype, "statusCode", void 0);
    return GetModifyLaunchTemplateResponse;
}(SpeakeasyBase));
export { GetModifyLaunchTemplateResponse };
