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
export var GetAttachNetworkInterfaceActionEnum;
(function (GetAttachNetworkInterfaceActionEnum) {
    GetAttachNetworkInterfaceActionEnum["AttachNetworkInterface"] = "AttachNetworkInterface";
})(GetAttachNetworkInterfaceActionEnum || (GetAttachNetworkInterfaceActionEnum = {}));
export var GetAttachNetworkInterfaceVersionEnum;
(function (GetAttachNetworkInterfaceVersionEnum) {
    GetAttachNetworkInterfaceVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAttachNetworkInterfaceVersionEnum || (GetAttachNetworkInterfaceVersionEnum = {}));
var GetAttachNetworkInterfaceQueryParams = /** @class */ (function (_super) {
    __extends(GetAttachNetworkInterfaceQueryParams, _super);
    function GetAttachNetworkInterfaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAttachNetworkInterfaceQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DeviceIndex" }),
        __metadata("design:type", Number)
    ], GetAttachNetworkInterfaceQueryParams.prototype, "deviceIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetAttachNetworkInterfaceQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetAttachNetworkInterfaceQueryParams.prototype, "instanceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NetworkCardIndex" }),
        __metadata("design:type", Number)
    ], GetAttachNetworkInterfaceQueryParams.prototype, "networkCardIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], GetAttachNetworkInterfaceQueryParams.prototype, "networkInterfaceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAttachNetworkInterfaceQueryParams.prototype, "version", void 0);
    return GetAttachNetworkInterfaceQueryParams;
}(SpeakeasyBase));
export { GetAttachNetworkInterfaceQueryParams };
var GetAttachNetworkInterfaceHeaders = /** @class */ (function (_super) {
    __extends(GetAttachNetworkInterfaceHeaders, _super);
    function GetAttachNetworkInterfaceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAttachNetworkInterfaceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAttachNetworkInterfaceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAttachNetworkInterfaceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAttachNetworkInterfaceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAttachNetworkInterfaceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAttachNetworkInterfaceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAttachNetworkInterfaceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAttachNetworkInterfaceHeaders;
}(SpeakeasyBase));
export { GetAttachNetworkInterfaceHeaders };
var GetAttachNetworkInterfaceRequest = /** @class */ (function (_super) {
    __extends(GetAttachNetworkInterfaceRequest, _super);
    function GetAttachNetworkInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAttachNetworkInterfaceQueryParams)
    ], GetAttachNetworkInterfaceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAttachNetworkInterfaceHeaders)
    ], GetAttachNetworkInterfaceRequest.prototype, "headers", void 0);
    return GetAttachNetworkInterfaceRequest;
}(SpeakeasyBase));
export { GetAttachNetworkInterfaceRequest };
var GetAttachNetworkInterfaceResponse = /** @class */ (function (_super) {
    __extends(GetAttachNetworkInterfaceResponse, _super);
    function GetAttachNetworkInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAttachNetworkInterfaceResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAttachNetworkInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAttachNetworkInterfaceResponse.prototype, "statusCode", void 0);
    return GetAttachNetworkInterfaceResponse;
}(SpeakeasyBase));
export { GetAttachNetworkInterfaceResponse };
