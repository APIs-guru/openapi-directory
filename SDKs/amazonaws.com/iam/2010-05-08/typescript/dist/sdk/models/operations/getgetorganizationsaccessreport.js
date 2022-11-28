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
export var GetGetOrganizationsAccessReportActionEnum;
(function (GetGetOrganizationsAccessReportActionEnum) {
    GetGetOrganizationsAccessReportActionEnum["GetOrganizationsAccessReport"] = "GetOrganizationsAccessReport";
})(GetGetOrganizationsAccessReportActionEnum || (GetGetOrganizationsAccessReportActionEnum = {}));
export var GetGetOrganizationsAccessReportSortKeyEnum;
(function (GetGetOrganizationsAccessReportSortKeyEnum) {
    GetGetOrganizationsAccessReportSortKeyEnum["ServiceNamespaceAscending"] = "SERVICE_NAMESPACE_ASCENDING";
    GetGetOrganizationsAccessReportSortKeyEnum["ServiceNamespaceDescending"] = "SERVICE_NAMESPACE_DESCENDING";
    GetGetOrganizationsAccessReportSortKeyEnum["LastAuthenticatedTimeAscending"] = "LAST_AUTHENTICATED_TIME_ASCENDING";
    GetGetOrganizationsAccessReportSortKeyEnum["LastAuthenticatedTimeDescending"] = "LAST_AUTHENTICATED_TIME_DESCENDING";
})(GetGetOrganizationsAccessReportSortKeyEnum || (GetGetOrganizationsAccessReportSortKeyEnum = {}));
export var GetGetOrganizationsAccessReportVersionEnum;
(function (GetGetOrganizationsAccessReportVersionEnum) {
    GetGetOrganizationsAccessReportVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGetOrganizationsAccessReportVersionEnum || (GetGetOrganizationsAccessReportVersionEnum = {}));
var GetGetOrganizationsAccessReportQueryParams = /** @class */ (function (_super) {
    __extends(GetGetOrganizationsAccessReportQueryParams, _super);
    function GetGetOrganizationsAccessReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetOrganizationsAccessReportQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=JobId" }),
        __metadata("design:type", String)
    ], GetGetOrganizationsAccessReportQueryParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetGetOrganizationsAccessReportQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetGetOrganizationsAccessReportQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SortKey" }),
        __metadata("design:type", String)
    ], GetGetOrganizationsAccessReportQueryParams.prototype, "sortKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetOrganizationsAccessReportQueryParams.prototype, "version", void 0);
    return GetGetOrganizationsAccessReportQueryParams;
}(SpeakeasyBase));
export { GetGetOrganizationsAccessReportQueryParams };
var GetGetOrganizationsAccessReportHeaders = /** @class */ (function (_super) {
    __extends(GetGetOrganizationsAccessReportHeaders, _super);
    function GetGetOrganizationsAccessReportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetOrganizationsAccessReportHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetOrganizationsAccessReportHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetOrganizationsAccessReportHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetOrganizationsAccessReportHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetOrganizationsAccessReportHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetOrganizationsAccessReportHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetOrganizationsAccessReportHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetOrganizationsAccessReportHeaders;
}(SpeakeasyBase));
export { GetGetOrganizationsAccessReportHeaders };
var GetGetOrganizationsAccessReportRequest = /** @class */ (function (_super) {
    __extends(GetGetOrganizationsAccessReportRequest, _super);
    function GetGetOrganizationsAccessReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetOrganizationsAccessReportQueryParams)
    ], GetGetOrganizationsAccessReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetOrganizationsAccessReportHeaders)
    ], GetGetOrganizationsAccessReportRequest.prototype, "headers", void 0);
    return GetGetOrganizationsAccessReportRequest;
}(SpeakeasyBase));
export { GetGetOrganizationsAccessReportRequest };
var GetGetOrganizationsAccessReportResponse = /** @class */ (function (_super) {
    __extends(GetGetOrganizationsAccessReportResponse, _super);
    function GetGetOrganizationsAccessReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetOrganizationsAccessReportResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetOrganizationsAccessReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetOrganizationsAccessReportResponse.prototype, "statusCode", void 0);
    return GetGetOrganizationsAccessReportResponse;
}(SpeakeasyBase));
export { GetGetOrganizationsAccessReportResponse };
