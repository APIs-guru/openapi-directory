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
export var GetDeleteNetworkInterfaceActionEnum;
(function (GetDeleteNetworkInterfaceActionEnum) {
    GetDeleteNetworkInterfaceActionEnum["DeleteNetworkInterface"] = "DeleteNetworkInterface";
})(GetDeleteNetworkInterfaceActionEnum || (GetDeleteNetworkInterfaceActionEnum = {}));
export var GetDeleteNetworkInterfaceVersionEnum;
(function (GetDeleteNetworkInterfaceVersionEnum) {
    GetDeleteNetworkInterfaceVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteNetworkInterfaceVersionEnum || (GetDeleteNetworkInterfaceVersionEnum = {}));
var GetDeleteNetworkInterfaceQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteNetworkInterfaceQueryParams, _super);
    function GetDeleteNetworkInterfaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfaceQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteNetworkInterfaceQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfaceQueryParams.prototype, "networkInterfaceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfaceQueryParams.prototype, "version", void 0);
    return GetDeleteNetworkInterfaceQueryParams;
}(SpeakeasyBase));
export { GetDeleteNetworkInterfaceQueryParams };
var GetDeleteNetworkInterfaceHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteNetworkInterfaceHeaders, _super);
    function GetDeleteNetworkInterfaceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfaceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfaceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfaceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfaceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfaceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfaceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfaceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteNetworkInterfaceHeaders;
}(SpeakeasyBase));
export { GetDeleteNetworkInterfaceHeaders };
var GetDeleteNetworkInterfaceRequest = /** @class */ (function (_super) {
    __extends(GetDeleteNetworkInterfaceRequest, _super);
    function GetDeleteNetworkInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteNetworkInterfaceQueryParams)
    ], GetDeleteNetworkInterfaceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteNetworkInterfaceHeaders)
    ], GetDeleteNetworkInterfaceRequest.prototype, "headers", void 0);
    return GetDeleteNetworkInterfaceRequest;
}(SpeakeasyBase));
export { GetDeleteNetworkInterfaceRequest };
var GetDeleteNetworkInterfaceResponse = /** @class */ (function (_super) {
    __extends(GetDeleteNetworkInterfaceResponse, _super);
    function GetDeleteNetworkInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteNetworkInterfaceResponse.prototype, "statusCode", void 0);
    return GetDeleteNetworkInterfaceResponse;
}(SpeakeasyBase));
export { GetDeleteNetworkInterfaceResponse };
