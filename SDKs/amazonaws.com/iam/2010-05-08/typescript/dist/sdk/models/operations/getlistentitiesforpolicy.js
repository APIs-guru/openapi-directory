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
export var GetListEntitiesForPolicyActionEnum;
(function (GetListEntitiesForPolicyActionEnum) {
    GetListEntitiesForPolicyActionEnum["ListEntitiesForPolicy"] = "ListEntitiesForPolicy";
})(GetListEntitiesForPolicyActionEnum || (GetListEntitiesForPolicyActionEnum = {}));
export var GetListEntitiesForPolicyEntityFilterEnum;
(function (GetListEntitiesForPolicyEntityFilterEnum) {
    GetListEntitiesForPolicyEntityFilterEnum["User"] = "User";
    GetListEntitiesForPolicyEntityFilterEnum["Role"] = "Role";
    GetListEntitiesForPolicyEntityFilterEnum["Group"] = "Group";
    GetListEntitiesForPolicyEntityFilterEnum["LocalManagedPolicy"] = "LocalManagedPolicy";
    GetListEntitiesForPolicyEntityFilterEnum["AwsManagedPolicy"] = "AWSManagedPolicy";
})(GetListEntitiesForPolicyEntityFilterEnum || (GetListEntitiesForPolicyEntityFilterEnum = {}));
export var GetListEntitiesForPolicyPolicyUsageFilterEnum;
(function (GetListEntitiesForPolicyPolicyUsageFilterEnum) {
    GetListEntitiesForPolicyPolicyUsageFilterEnum["PermissionsPolicy"] = "PermissionsPolicy";
    GetListEntitiesForPolicyPolicyUsageFilterEnum["PermissionsBoundary"] = "PermissionsBoundary";
})(GetListEntitiesForPolicyPolicyUsageFilterEnum || (GetListEntitiesForPolicyPolicyUsageFilterEnum = {}));
export var GetListEntitiesForPolicyVersionEnum;
(function (GetListEntitiesForPolicyVersionEnum) {
    GetListEntitiesForPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListEntitiesForPolicyVersionEnum || (GetListEntitiesForPolicyVersionEnum = {}));
var GetListEntitiesForPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetListEntitiesForPolicyQueryParams, _super);
    function GetListEntitiesForPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EntityFilter" }),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyQueryParams.prototype, "entityFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListEntitiesForPolicyQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PathPrefix" }),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyQueryParams.prototype, "pathPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" }),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyQueryParams.prototype, "policyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyUsageFilter" }),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyQueryParams.prototype, "policyUsageFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyQueryParams.prototype, "version", void 0);
    return GetListEntitiesForPolicyQueryParams;
}(SpeakeasyBase));
export { GetListEntitiesForPolicyQueryParams };
var GetListEntitiesForPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetListEntitiesForPolicyHeaders, _super);
    function GetListEntitiesForPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListEntitiesForPolicyHeaders;
}(SpeakeasyBase));
export { GetListEntitiesForPolicyHeaders };
var GetListEntitiesForPolicyRequest = /** @class */ (function (_super) {
    __extends(GetListEntitiesForPolicyRequest, _super);
    function GetListEntitiesForPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListEntitiesForPolicyQueryParams)
    ], GetListEntitiesForPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListEntitiesForPolicyHeaders)
    ], GetListEntitiesForPolicyRequest.prototype, "headers", void 0);
    return GetListEntitiesForPolicyRequest;
}(SpeakeasyBase));
export { GetListEntitiesForPolicyRequest };
var GetListEntitiesForPolicyResponse = /** @class */ (function (_super) {
    __extends(GetListEntitiesForPolicyResponse, _super);
    function GetListEntitiesForPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListEntitiesForPolicyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListEntitiesForPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListEntitiesForPolicyResponse.prototype, "statusCode", void 0);
    return GetListEntitiesForPolicyResponse;
}(SpeakeasyBase));
export { GetListEntitiesForPolicyResponse };
