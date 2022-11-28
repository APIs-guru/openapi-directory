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
export var GetGenerateOrganizationsAccessReportActionEnum;
(function (GetGenerateOrganizationsAccessReportActionEnum) {
    GetGenerateOrganizationsAccessReportActionEnum["GenerateOrganizationsAccessReport"] = "GenerateOrganizationsAccessReport";
})(GetGenerateOrganizationsAccessReportActionEnum || (GetGenerateOrganizationsAccessReportActionEnum = {}));
export var GetGenerateOrganizationsAccessReportVersionEnum;
(function (GetGenerateOrganizationsAccessReportVersionEnum) {
    GetGenerateOrganizationsAccessReportVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGenerateOrganizationsAccessReportVersionEnum || (GetGenerateOrganizationsAccessReportVersionEnum = {}));
var GetGenerateOrganizationsAccessReportQueryParams = /** @class */ (function (_super) {
    __extends(GetGenerateOrganizationsAccessReportQueryParams, _super);
    function GetGenerateOrganizationsAccessReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGenerateOrganizationsAccessReportQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EntityPath" }),
        __metadata("design:type", String)
    ], GetGenerateOrganizationsAccessReportQueryParams.prototype, "entityPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OrganizationsPolicyId" }),
        __metadata("design:type", String)
    ], GetGenerateOrganizationsAccessReportQueryParams.prototype, "organizationsPolicyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGenerateOrganizationsAccessReportQueryParams.prototype, "version", void 0);
    return GetGenerateOrganizationsAccessReportQueryParams;
}(SpeakeasyBase));
export { GetGenerateOrganizationsAccessReportQueryParams };
var GetGenerateOrganizationsAccessReportHeaders = /** @class */ (function (_super) {
    __extends(GetGenerateOrganizationsAccessReportHeaders, _super);
    function GetGenerateOrganizationsAccessReportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGenerateOrganizationsAccessReportHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGenerateOrganizationsAccessReportHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGenerateOrganizationsAccessReportHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGenerateOrganizationsAccessReportHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGenerateOrganizationsAccessReportHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGenerateOrganizationsAccessReportHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGenerateOrganizationsAccessReportHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGenerateOrganizationsAccessReportHeaders;
}(SpeakeasyBase));
export { GetGenerateOrganizationsAccessReportHeaders };
var GetGenerateOrganizationsAccessReportRequest = /** @class */ (function (_super) {
    __extends(GetGenerateOrganizationsAccessReportRequest, _super);
    function GetGenerateOrganizationsAccessReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGenerateOrganizationsAccessReportQueryParams)
    ], GetGenerateOrganizationsAccessReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGenerateOrganizationsAccessReportHeaders)
    ], GetGenerateOrganizationsAccessReportRequest.prototype, "headers", void 0);
    return GetGenerateOrganizationsAccessReportRequest;
}(SpeakeasyBase));
export { GetGenerateOrganizationsAccessReportRequest };
var GetGenerateOrganizationsAccessReportResponse = /** @class */ (function (_super) {
    __extends(GetGenerateOrganizationsAccessReportResponse, _super);
    function GetGenerateOrganizationsAccessReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGenerateOrganizationsAccessReportResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGenerateOrganizationsAccessReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGenerateOrganizationsAccessReportResponse.prototype, "statusCode", void 0);
    return GetGenerateOrganizationsAccessReportResponse;
}(SpeakeasyBase));
export { GetGenerateOrganizationsAccessReportResponse };
