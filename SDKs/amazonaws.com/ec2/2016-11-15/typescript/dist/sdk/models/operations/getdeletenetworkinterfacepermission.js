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
export var GetDeleteNetworkInterfacePermissionActionEnum;
(function (GetDeleteNetworkInterfacePermissionActionEnum) {
    GetDeleteNetworkInterfacePermissionActionEnum["DeleteNetworkInterfacePermission"] = "DeleteNetworkInterfacePermission";
})(GetDeleteNetworkInterfacePermissionActionEnum || (GetDeleteNetworkInterfacePermissionActionEnum = {}));
export var GetDeleteNetworkInterfacePermissionVersionEnum;
(function (GetDeleteNetworkInterfacePermissionVersionEnum) {
    GetDeleteNetworkInterfacePermissionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteNetworkInterfacePermissionVersionEnum || (GetDeleteNetworkInterfacePermissionVersionEnum = {}));
var GetDeleteNetworkInterfacePermissionQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteNetworkInterfacePermissionQueryParams, _super);
    function GetDeleteNetworkInterfacePermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfacePermissionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteNetworkInterfacePermissionQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Force" }),
        __metadata("design:type", Boolean)
    ], GetDeleteNetworkInterfacePermissionQueryParams.prototype, "force", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfacePermissionId" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfacePermissionQueryParams.prototype, "networkInterfacePermissionId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfacePermissionQueryParams.prototype, "version", void 0);
    return GetDeleteNetworkInterfacePermissionQueryParams;
}(SpeakeasyBase));
export { GetDeleteNetworkInterfacePermissionQueryParams };
var GetDeleteNetworkInterfacePermissionHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteNetworkInterfacePermissionHeaders, _super);
    function GetDeleteNetworkInterfacePermissionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfacePermissionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfacePermissionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfacePermissionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfacePermissionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfacePermissionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfacePermissionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfacePermissionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteNetworkInterfacePermissionHeaders;
}(SpeakeasyBase));
export { GetDeleteNetworkInterfacePermissionHeaders };
var GetDeleteNetworkInterfacePermissionRequest = /** @class */ (function (_super) {
    __extends(GetDeleteNetworkInterfacePermissionRequest, _super);
    function GetDeleteNetworkInterfacePermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteNetworkInterfacePermissionQueryParams)
    ], GetDeleteNetworkInterfacePermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteNetworkInterfacePermissionHeaders)
    ], GetDeleteNetworkInterfacePermissionRequest.prototype, "headers", void 0);
    return GetDeleteNetworkInterfacePermissionRequest;
}(SpeakeasyBase));
export { GetDeleteNetworkInterfacePermissionRequest };
var GetDeleteNetworkInterfacePermissionResponse = /** @class */ (function (_super) {
    __extends(GetDeleteNetworkInterfacePermissionResponse, _super);
    function GetDeleteNetworkInterfacePermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteNetworkInterfacePermissionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteNetworkInterfacePermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteNetworkInterfacePermissionResponse.prototype, "statusCode", void 0);
    return GetDeleteNetworkInterfacePermissionResponse;
}(SpeakeasyBase));
export { GetDeleteNetworkInterfacePermissionResponse };
