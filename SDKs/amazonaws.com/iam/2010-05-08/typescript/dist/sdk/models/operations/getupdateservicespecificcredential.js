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
export var GetUpdateServiceSpecificCredentialActionEnum;
(function (GetUpdateServiceSpecificCredentialActionEnum) {
    GetUpdateServiceSpecificCredentialActionEnum["UpdateServiceSpecificCredential"] = "UpdateServiceSpecificCredential";
})(GetUpdateServiceSpecificCredentialActionEnum || (GetUpdateServiceSpecificCredentialActionEnum = {}));
export var GetUpdateServiceSpecificCredentialStatusEnum;
(function (GetUpdateServiceSpecificCredentialStatusEnum) {
    GetUpdateServiceSpecificCredentialStatusEnum["Active"] = "Active";
    GetUpdateServiceSpecificCredentialStatusEnum["Inactive"] = "Inactive";
})(GetUpdateServiceSpecificCredentialStatusEnum || (GetUpdateServiceSpecificCredentialStatusEnum = {}));
export var GetUpdateServiceSpecificCredentialVersionEnum;
(function (GetUpdateServiceSpecificCredentialVersionEnum) {
    GetUpdateServiceSpecificCredentialVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetUpdateServiceSpecificCredentialVersionEnum || (GetUpdateServiceSpecificCredentialVersionEnum = {}));
var GetUpdateServiceSpecificCredentialQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateServiceSpecificCredentialQueryParams, _super);
    function GetUpdateServiceSpecificCredentialQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateServiceSpecificCredentialQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ServiceSpecificCredentialId" }),
        __metadata("design:type", String)
    ], GetUpdateServiceSpecificCredentialQueryParams.prototype, "serviceSpecificCredentialId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], GetUpdateServiceSpecificCredentialQueryParams.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetUpdateServiceSpecificCredentialQueryParams.prototype, "userName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateServiceSpecificCredentialQueryParams.prototype, "version", void 0);
    return GetUpdateServiceSpecificCredentialQueryParams;
}(SpeakeasyBase));
export { GetUpdateServiceSpecificCredentialQueryParams };
var GetUpdateServiceSpecificCredentialHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateServiceSpecificCredentialHeaders, _super);
    function GetUpdateServiceSpecificCredentialHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateServiceSpecificCredentialHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateServiceSpecificCredentialHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateServiceSpecificCredentialHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateServiceSpecificCredentialHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateServiceSpecificCredentialHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateServiceSpecificCredentialHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateServiceSpecificCredentialHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateServiceSpecificCredentialHeaders;
}(SpeakeasyBase));
export { GetUpdateServiceSpecificCredentialHeaders };
var GetUpdateServiceSpecificCredentialRequest = /** @class */ (function (_super) {
    __extends(GetUpdateServiceSpecificCredentialRequest, _super);
    function GetUpdateServiceSpecificCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetUpdateServiceSpecificCredentialQueryParams)
    ], GetUpdateServiceSpecificCredentialRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetUpdateServiceSpecificCredentialHeaders)
    ], GetUpdateServiceSpecificCredentialRequest.prototype, "headers", void 0);
    return GetUpdateServiceSpecificCredentialRequest;
}(SpeakeasyBase));
export { GetUpdateServiceSpecificCredentialRequest };
var GetUpdateServiceSpecificCredentialResponse = /** @class */ (function (_super) {
    __extends(GetUpdateServiceSpecificCredentialResponse, _super);
    function GetUpdateServiceSpecificCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateServiceSpecificCredentialResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetUpdateServiceSpecificCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetUpdateServiceSpecificCredentialResponse.prototype, "statusCode", void 0);
    return GetUpdateServiceSpecificCredentialResponse;
}(SpeakeasyBase));
export { GetUpdateServiceSpecificCredentialResponse };
