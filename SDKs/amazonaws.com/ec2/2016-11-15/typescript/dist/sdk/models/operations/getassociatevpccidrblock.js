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
export var GetAssociateVpcCidrBlockActionEnum;
(function (GetAssociateVpcCidrBlockActionEnum) {
    GetAssociateVpcCidrBlockActionEnum["AssociateVpcCidrBlock"] = "AssociateVpcCidrBlock";
})(GetAssociateVpcCidrBlockActionEnum || (GetAssociateVpcCidrBlockActionEnum = {}));
export var GetAssociateVpcCidrBlockVersionEnum;
(function (GetAssociateVpcCidrBlockVersionEnum) {
    GetAssociateVpcCidrBlockVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAssociateVpcCidrBlockVersionEnum || (GetAssociateVpcCidrBlockVersionEnum = {}));
var GetAssociateVpcCidrBlockQueryParams = /** @class */ (function (_super) {
    __extends(GetAssociateVpcCidrBlockQueryParams, _super);
    function GetAssociateVpcCidrBlockQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AmazonProvidedIpv6CidrBlock" }),
        __metadata("design:type", Boolean)
    ], GetAssociateVpcCidrBlockQueryParams.prototype, "amazonProvidedIpv6CidrBlock", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CidrBlock" }),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockQueryParams.prototype, "cidrBlock", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6CidrBlock" }),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockQueryParams.prototype, "ipv6CidrBlock", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6CidrBlockNetworkBorderGroup" }),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockQueryParams.prototype, "ipv6CidrBlockNetworkBorderGroup", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6Pool" }),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockQueryParams.prototype, "ipv6Pool", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpcId" }),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockQueryParams.prototype, "vpcId", void 0);
    return GetAssociateVpcCidrBlockQueryParams;
}(SpeakeasyBase));
export { GetAssociateVpcCidrBlockQueryParams };
var GetAssociateVpcCidrBlockHeaders = /** @class */ (function (_super) {
    __extends(GetAssociateVpcCidrBlockHeaders, _super);
    function GetAssociateVpcCidrBlockHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAssociateVpcCidrBlockHeaders;
}(SpeakeasyBase));
export { GetAssociateVpcCidrBlockHeaders };
var GetAssociateVpcCidrBlockRequest = /** @class */ (function (_super) {
    __extends(GetAssociateVpcCidrBlockRequest, _super);
    function GetAssociateVpcCidrBlockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociateVpcCidrBlockQueryParams)
    ], GetAssociateVpcCidrBlockRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociateVpcCidrBlockHeaders)
    ], GetAssociateVpcCidrBlockRequest.prototype, "headers", void 0);
    return GetAssociateVpcCidrBlockRequest;
}(SpeakeasyBase));
export { GetAssociateVpcCidrBlockRequest };
var GetAssociateVpcCidrBlockResponse = /** @class */ (function (_super) {
    __extends(GetAssociateVpcCidrBlockResponse, _super);
    function GetAssociateVpcCidrBlockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAssociateVpcCidrBlockResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAssociateVpcCidrBlockResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAssociateVpcCidrBlockResponse.prototype, "statusCode", void 0);
    return GetAssociateVpcCidrBlockResponse;
}(SpeakeasyBase));
export { GetAssociateVpcCidrBlockResponse };
