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
export var GetModifyVpcEndpointServicePermissionsActionEnum;
(function (GetModifyVpcEndpointServicePermissionsActionEnum) {
    GetModifyVpcEndpointServicePermissionsActionEnum["ModifyVpcEndpointServicePermissions"] = "ModifyVpcEndpointServicePermissions";
})(GetModifyVpcEndpointServicePermissionsActionEnum || (GetModifyVpcEndpointServicePermissionsActionEnum = {}));
export var GetModifyVpcEndpointServicePermissionsVersionEnum;
(function (GetModifyVpcEndpointServicePermissionsVersionEnum) {
    GetModifyVpcEndpointServicePermissionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyVpcEndpointServicePermissionsVersionEnum || (GetModifyVpcEndpointServicePermissionsVersionEnum = {}));
var GetModifyVpcEndpointServicePermissionsQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointServicePermissionsQueryParams, _super);
    function GetModifyVpcEndpointServicePermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServicePermissionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AddAllowedPrincipals" }),
        __metadata("design:type", Array)
    ], GetModifyVpcEndpointServicePermissionsQueryParams.prototype, "addAllowedPrincipals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcEndpointServicePermissionsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoveAllowedPrincipals" }),
        __metadata("design:type", Array)
    ], GetModifyVpcEndpointServicePermissionsQueryParams.prototype, "removeAllowedPrincipals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceId" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServicePermissionsQueryParams.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServicePermissionsQueryParams.prototype, "version", void 0);
    return GetModifyVpcEndpointServicePermissionsQueryParams;
}(SpeakeasyBase));
export { GetModifyVpcEndpointServicePermissionsQueryParams };
var GetModifyVpcEndpointServicePermissionsHeaders = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointServicePermissionsHeaders, _super);
    function GetModifyVpcEndpointServicePermissionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServicePermissionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServicePermissionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServicePermissionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServicePermissionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServicePermissionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServicePermissionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServicePermissionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyVpcEndpointServicePermissionsHeaders;
}(SpeakeasyBase));
export { GetModifyVpcEndpointServicePermissionsHeaders };
var GetModifyVpcEndpointServicePermissionsRequest = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointServicePermissionsRequest, _super);
    function GetModifyVpcEndpointServicePermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVpcEndpointServicePermissionsQueryParams)
    ], GetModifyVpcEndpointServicePermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVpcEndpointServicePermissionsHeaders)
    ], GetModifyVpcEndpointServicePermissionsRequest.prototype, "headers", void 0);
    return GetModifyVpcEndpointServicePermissionsRequest;
}(SpeakeasyBase));
export { GetModifyVpcEndpointServicePermissionsRequest };
var GetModifyVpcEndpointServicePermissionsResponse = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointServicePermissionsResponse, _super);
    function GetModifyVpcEndpointServicePermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyVpcEndpointServicePermissionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointServicePermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyVpcEndpointServicePermissionsResponse.prototype, "statusCode", void 0);
    return GetModifyVpcEndpointServicePermissionsResponse;
}(SpeakeasyBase));
export { GetModifyVpcEndpointServicePermissionsResponse };
