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
export var GetAssociateAddressActionEnum;
(function (GetAssociateAddressActionEnum) {
    GetAssociateAddressActionEnum["AssociateAddress"] = "AssociateAddress";
})(GetAssociateAddressActionEnum || (GetAssociateAddressActionEnum = {}));
export var GetAssociateAddressVersionEnum;
(function (GetAssociateAddressVersionEnum) {
    GetAssociateAddressVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAssociateAddressVersionEnum || (GetAssociateAddressVersionEnum = {}));
var GetAssociateAddressQueryParams = /** @class */ (function (_super) {
    __extends(GetAssociateAddressQueryParams, _super);
    function GetAssociateAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAssociateAddressQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AllocationId" }),
        __metadata("design:type", String)
    ], GetAssociateAddressQueryParams.prototype, "allocationId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AllowReassociation" }),
        __metadata("design:type", Boolean)
    ], GetAssociateAddressQueryParams.prototype, "allowReassociation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetAssociateAddressQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetAssociateAddressQueryParams.prototype, "instanceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], GetAssociateAddressQueryParams.prototype, "networkInterfaceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PrivateIpAddress" }),
        __metadata("design:type", String)
    ], GetAssociateAddressQueryParams.prototype, "privateIpAddress", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PublicIp" }),
        __metadata("design:type", String)
    ], GetAssociateAddressQueryParams.prototype, "publicIp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAssociateAddressQueryParams.prototype, "version", void 0);
    return GetAssociateAddressQueryParams;
}(SpeakeasyBase));
export { GetAssociateAddressQueryParams };
var GetAssociateAddressHeaders = /** @class */ (function (_super) {
    __extends(GetAssociateAddressHeaders, _super);
    function GetAssociateAddressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAssociateAddressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAssociateAddressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAssociateAddressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAssociateAddressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAssociateAddressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAssociateAddressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAssociateAddressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAssociateAddressHeaders;
}(SpeakeasyBase));
export { GetAssociateAddressHeaders };
var GetAssociateAddressRequest = /** @class */ (function (_super) {
    __extends(GetAssociateAddressRequest, _super);
    function GetAssociateAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociateAddressQueryParams)
    ], GetAssociateAddressRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociateAddressHeaders)
    ], GetAssociateAddressRequest.prototype, "headers", void 0);
    return GetAssociateAddressRequest;
}(SpeakeasyBase));
export { GetAssociateAddressRequest };
var GetAssociateAddressResponse = /** @class */ (function (_super) {
    __extends(GetAssociateAddressResponse, _super);
    function GetAssociateAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAssociateAddressResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAssociateAddressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAssociateAddressResponse.prototype, "statusCode", void 0);
    return GetAssociateAddressResponse;
}(SpeakeasyBase));
export { GetAssociateAddressResponse };
