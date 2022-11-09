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
export var GetSetInstanceProtectionActionEnum;
(function (GetSetInstanceProtectionActionEnum) {
    GetSetInstanceProtectionActionEnum["SetInstanceProtection"] = "SetInstanceProtection";
})(GetSetInstanceProtectionActionEnum || (GetSetInstanceProtectionActionEnum = {}));
export var GetSetInstanceProtectionVersionEnum;
(function (GetSetInstanceProtectionVersionEnum) {
    GetSetInstanceProtectionVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetSetInstanceProtectionVersionEnum || (GetSetInstanceProtectionVersionEnum = {}));
var GetSetInstanceProtectionQueryParams = /** @class */ (function (_super) {
    __extends(GetSetInstanceProtectionQueryParams, _super);
    function GetSetInstanceProtectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetInstanceProtectionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetSetInstanceProtectionQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceIds" }),
        __metadata("design:type", Array)
    ], GetSetInstanceProtectionQueryParams.prototype, "instanceIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ProtectedFromScaleIn" }),
        __metadata("design:type", Boolean)
    ], GetSetInstanceProtectionQueryParams.prototype, "protectedFromScaleIn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetInstanceProtectionQueryParams.prototype, "version", void 0);
    return GetSetInstanceProtectionQueryParams;
}(SpeakeasyBase));
export { GetSetInstanceProtectionQueryParams };
var GetSetInstanceProtectionHeaders = /** @class */ (function (_super) {
    __extends(GetSetInstanceProtectionHeaders, _super);
    function GetSetInstanceProtectionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetInstanceProtectionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetInstanceProtectionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetInstanceProtectionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetInstanceProtectionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetInstanceProtectionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetInstanceProtectionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetInstanceProtectionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetInstanceProtectionHeaders;
}(SpeakeasyBase));
export { GetSetInstanceProtectionHeaders };
var GetSetInstanceProtectionRequest = /** @class */ (function (_super) {
    __extends(GetSetInstanceProtectionRequest, _super);
    function GetSetInstanceProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSetInstanceProtectionQueryParams)
    ], GetSetInstanceProtectionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSetInstanceProtectionHeaders)
    ], GetSetInstanceProtectionRequest.prototype, "headers", void 0);
    return GetSetInstanceProtectionRequest;
}(SpeakeasyBase));
export { GetSetInstanceProtectionRequest };
var GetSetInstanceProtectionResponse = /** @class */ (function (_super) {
    __extends(GetSetInstanceProtectionResponse, _super);
    function GetSetInstanceProtectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetSetInstanceProtectionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSetInstanceProtectionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSetInstanceProtectionResponse.prototype, "statusCode", void 0);
    return GetSetInstanceProtectionResponse;
}(SpeakeasyBase));
export { GetSetInstanceProtectionResponse };
