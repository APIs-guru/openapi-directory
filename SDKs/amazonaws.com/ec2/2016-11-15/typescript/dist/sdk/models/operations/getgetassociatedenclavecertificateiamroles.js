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
export var GetGetAssociatedEnclaveCertificateIamRolesActionEnum;
(function (GetGetAssociatedEnclaveCertificateIamRolesActionEnum) {
    GetGetAssociatedEnclaveCertificateIamRolesActionEnum["GetAssociatedEnclaveCertificateIamRoles"] = "GetAssociatedEnclaveCertificateIamRoles";
})(GetGetAssociatedEnclaveCertificateIamRolesActionEnum || (GetGetAssociatedEnclaveCertificateIamRolesActionEnum = {}));
export var GetGetAssociatedEnclaveCertificateIamRolesVersionEnum;
(function (GetGetAssociatedEnclaveCertificateIamRolesVersionEnum) {
    GetGetAssociatedEnclaveCertificateIamRolesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetGetAssociatedEnclaveCertificateIamRolesVersionEnum || (GetGetAssociatedEnclaveCertificateIamRolesVersionEnum = {}));
var GetGetAssociatedEnclaveCertificateIamRolesQueryParams = /** @class */ (function (_super) {
    __extends(GetGetAssociatedEnclaveCertificateIamRolesQueryParams, _super);
    function GetGetAssociatedEnclaveCertificateIamRolesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetAssociatedEnclaveCertificateIamRolesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CertificateArn" }),
        __metadata("design:type", String)
    ], GetGetAssociatedEnclaveCertificateIamRolesQueryParams.prototype, "certificateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetGetAssociatedEnclaveCertificateIamRolesQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetAssociatedEnclaveCertificateIamRolesQueryParams.prototype, "version", void 0);
    return GetGetAssociatedEnclaveCertificateIamRolesQueryParams;
}(SpeakeasyBase));
export { GetGetAssociatedEnclaveCertificateIamRolesQueryParams };
var GetGetAssociatedEnclaveCertificateIamRolesHeaders = /** @class */ (function (_super) {
    __extends(GetGetAssociatedEnclaveCertificateIamRolesHeaders, _super);
    function GetGetAssociatedEnclaveCertificateIamRolesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetAssociatedEnclaveCertificateIamRolesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetAssociatedEnclaveCertificateIamRolesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetAssociatedEnclaveCertificateIamRolesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetAssociatedEnclaveCertificateIamRolesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetAssociatedEnclaveCertificateIamRolesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetAssociatedEnclaveCertificateIamRolesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetAssociatedEnclaveCertificateIamRolesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetAssociatedEnclaveCertificateIamRolesHeaders;
}(SpeakeasyBase));
export { GetGetAssociatedEnclaveCertificateIamRolesHeaders };
var GetGetAssociatedEnclaveCertificateIamRolesRequest = /** @class */ (function (_super) {
    __extends(GetGetAssociatedEnclaveCertificateIamRolesRequest, _super);
    function GetGetAssociatedEnclaveCertificateIamRolesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetAssociatedEnclaveCertificateIamRolesQueryParams)
    ], GetGetAssociatedEnclaveCertificateIamRolesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetAssociatedEnclaveCertificateIamRolesHeaders)
    ], GetGetAssociatedEnclaveCertificateIamRolesRequest.prototype, "headers", void 0);
    return GetGetAssociatedEnclaveCertificateIamRolesRequest;
}(SpeakeasyBase));
export { GetGetAssociatedEnclaveCertificateIamRolesRequest };
var GetGetAssociatedEnclaveCertificateIamRolesResponse = /** @class */ (function (_super) {
    __extends(GetGetAssociatedEnclaveCertificateIamRolesResponse, _super);
    function GetGetAssociatedEnclaveCertificateIamRolesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetAssociatedEnclaveCertificateIamRolesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetAssociatedEnclaveCertificateIamRolesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetAssociatedEnclaveCertificateIamRolesResponse.prototype, "statusCode", void 0);
    return GetGetAssociatedEnclaveCertificateIamRolesResponse;
}(SpeakeasyBase));
export { GetGetAssociatedEnclaveCertificateIamRolesResponse };
