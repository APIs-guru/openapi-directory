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
export var GetModifyVpcTenancyActionEnum;
(function (GetModifyVpcTenancyActionEnum) {
    GetModifyVpcTenancyActionEnum["ModifyVpcTenancy"] = "ModifyVpcTenancy";
})(GetModifyVpcTenancyActionEnum || (GetModifyVpcTenancyActionEnum = {}));
export var GetModifyVpcTenancyInstanceTenancyEnum;
(function (GetModifyVpcTenancyInstanceTenancyEnum) {
    GetModifyVpcTenancyInstanceTenancyEnum["Default"] = "default";
})(GetModifyVpcTenancyInstanceTenancyEnum || (GetModifyVpcTenancyInstanceTenancyEnum = {}));
export var GetModifyVpcTenancyVersionEnum;
(function (GetModifyVpcTenancyVersionEnum) {
    GetModifyVpcTenancyVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyVpcTenancyVersionEnum || (GetModifyVpcTenancyVersionEnum = {}));
var GetModifyVpcTenancyQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyVpcTenancyQueryParams, _super);
    function GetModifyVpcTenancyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyVpcTenancyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcTenancyQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceTenancy" }),
        __metadata("design:type", String)
    ], GetModifyVpcTenancyQueryParams.prototype, "instanceTenancy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyVpcTenancyQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcId" }),
        __metadata("design:type", String)
    ], GetModifyVpcTenancyQueryParams.prototype, "vpcId", void 0);
    return GetModifyVpcTenancyQueryParams;
}(SpeakeasyBase));
export { GetModifyVpcTenancyQueryParams };
var GetModifyVpcTenancyHeaders = /** @class */ (function (_super) {
    __extends(GetModifyVpcTenancyHeaders, _super);
    function GetModifyVpcTenancyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyVpcTenancyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyVpcTenancyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyVpcTenancyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyVpcTenancyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyVpcTenancyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyVpcTenancyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyVpcTenancyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyVpcTenancyHeaders;
}(SpeakeasyBase));
export { GetModifyVpcTenancyHeaders };
var GetModifyVpcTenancyRequest = /** @class */ (function (_super) {
    __extends(GetModifyVpcTenancyRequest, _super);
    function GetModifyVpcTenancyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVpcTenancyQueryParams)
    ], GetModifyVpcTenancyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVpcTenancyHeaders)
    ], GetModifyVpcTenancyRequest.prototype, "headers", void 0);
    return GetModifyVpcTenancyRequest;
}(SpeakeasyBase));
export { GetModifyVpcTenancyRequest };
var GetModifyVpcTenancyResponse = /** @class */ (function (_super) {
    __extends(GetModifyVpcTenancyResponse, _super);
    function GetModifyVpcTenancyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyVpcTenancyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyVpcTenancyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyVpcTenancyResponse.prototype, "statusCode", void 0);
    return GetModifyVpcTenancyResponse;
}(SpeakeasyBase));
export { GetModifyVpcTenancyResponse };
