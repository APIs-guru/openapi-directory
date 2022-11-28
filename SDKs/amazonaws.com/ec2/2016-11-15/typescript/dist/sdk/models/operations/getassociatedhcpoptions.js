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
export var GetAssociateDhcpOptionsActionEnum;
(function (GetAssociateDhcpOptionsActionEnum) {
    GetAssociateDhcpOptionsActionEnum["AssociateDhcpOptions"] = "AssociateDhcpOptions";
})(GetAssociateDhcpOptionsActionEnum || (GetAssociateDhcpOptionsActionEnum = {}));
export var GetAssociateDhcpOptionsVersionEnum;
(function (GetAssociateDhcpOptionsVersionEnum) {
    GetAssociateDhcpOptionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAssociateDhcpOptionsVersionEnum || (GetAssociateDhcpOptionsVersionEnum = {}));
var GetAssociateDhcpOptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetAssociateDhcpOptionsQueryParams, _super);
    function GetAssociateDhcpOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAssociateDhcpOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DhcpOptionsId" }),
        __metadata("design:type", String)
    ], GetAssociateDhcpOptionsQueryParams.prototype, "dhcpOptionsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetAssociateDhcpOptionsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAssociateDhcpOptionsQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcId" }),
        __metadata("design:type", String)
    ], GetAssociateDhcpOptionsQueryParams.prototype, "vpcId", void 0);
    return GetAssociateDhcpOptionsQueryParams;
}(SpeakeasyBase));
export { GetAssociateDhcpOptionsQueryParams };
var GetAssociateDhcpOptionsHeaders = /** @class */ (function (_super) {
    __extends(GetAssociateDhcpOptionsHeaders, _super);
    function GetAssociateDhcpOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAssociateDhcpOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAssociateDhcpOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAssociateDhcpOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAssociateDhcpOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAssociateDhcpOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAssociateDhcpOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAssociateDhcpOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAssociateDhcpOptionsHeaders;
}(SpeakeasyBase));
export { GetAssociateDhcpOptionsHeaders };
var GetAssociateDhcpOptionsRequest = /** @class */ (function (_super) {
    __extends(GetAssociateDhcpOptionsRequest, _super);
    function GetAssociateDhcpOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAssociateDhcpOptionsQueryParams)
    ], GetAssociateDhcpOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAssociateDhcpOptionsHeaders)
    ], GetAssociateDhcpOptionsRequest.prototype, "headers", void 0);
    return GetAssociateDhcpOptionsRequest;
}(SpeakeasyBase));
export { GetAssociateDhcpOptionsRequest };
var GetAssociateDhcpOptionsResponse = /** @class */ (function (_super) {
    __extends(GetAssociateDhcpOptionsResponse, _super);
    function GetAssociateDhcpOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAssociateDhcpOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAssociateDhcpOptionsResponse.prototype, "statusCode", void 0);
    return GetAssociateDhcpOptionsResponse;
}(SpeakeasyBase));
export { GetAssociateDhcpOptionsResponse };
