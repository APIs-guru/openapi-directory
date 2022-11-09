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
export var GetDeleteDhcpOptionsActionEnum;
(function (GetDeleteDhcpOptionsActionEnum) {
    GetDeleteDhcpOptionsActionEnum["DeleteDhcpOptions"] = "DeleteDhcpOptions";
})(GetDeleteDhcpOptionsActionEnum || (GetDeleteDhcpOptionsActionEnum = {}));
export var GetDeleteDhcpOptionsVersionEnum;
(function (GetDeleteDhcpOptionsVersionEnum) {
    GetDeleteDhcpOptionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteDhcpOptionsVersionEnum || (GetDeleteDhcpOptionsVersionEnum = {}));
var GetDeleteDhcpOptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteDhcpOptionsQueryParams, _super);
    function GetDeleteDhcpOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteDhcpOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DhcpOptionsId" }),
        __metadata("design:type", String)
    ], GetDeleteDhcpOptionsQueryParams.prototype, "dhcpOptionsId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteDhcpOptionsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteDhcpOptionsQueryParams.prototype, "version", void 0);
    return GetDeleteDhcpOptionsQueryParams;
}(SpeakeasyBase));
export { GetDeleteDhcpOptionsQueryParams };
var GetDeleteDhcpOptionsHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteDhcpOptionsHeaders, _super);
    function GetDeleteDhcpOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteDhcpOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteDhcpOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteDhcpOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteDhcpOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteDhcpOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteDhcpOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteDhcpOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteDhcpOptionsHeaders;
}(SpeakeasyBase));
export { GetDeleteDhcpOptionsHeaders };
var GetDeleteDhcpOptionsRequest = /** @class */ (function (_super) {
    __extends(GetDeleteDhcpOptionsRequest, _super);
    function GetDeleteDhcpOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteDhcpOptionsQueryParams)
    ], GetDeleteDhcpOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteDhcpOptionsHeaders)
    ], GetDeleteDhcpOptionsRequest.prototype, "headers", void 0);
    return GetDeleteDhcpOptionsRequest;
}(SpeakeasyBase));
export { GetDeleteDhcpOptionsRequest };
var GetDeleteDhcpOptionsResponse = /** @class */ (function (_super) {
    __extends(GetDeleteDhcpOptionsResponse, _super);
    function GetDeleteDhcpOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteDhcpOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteDhcpOptionsResponse.prototype, "statusCode", void 0);
    return GetDeleteDhcpOptionsResponse;
}(SpeakeasyBase));
export { GetDeleteDhcpOptionsResponse };
