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
export var GetRegisterTransitGatewayMulticastGroupMembersActionEnum;
(function (GetRegisterTransitGatewayMulticastGroupMembersActionEnum) {
    GetRegisterTransitGatewayMulticastGroupMembersActionEnum["RegisterTransitGatewayMulticastGroupMembers"] = "RegisterTransitGatewayMulticastGroupMembers";
})(GetRegisterTransitGatewayMulticastGroupMembersActionEnum || (GetRegisterTransitGatewayMulticastGroupMembersActionEnum = {}));
export var GetRegisterTransitGatewayMulticastGroupMembersVersionEnum;
(function (GetRegisterTransitGatewayMulticastGroupMembersVersionEnum) {
    GetRegisterTransitGatewayMulticastGroupMembersVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetRegisterTransitGatewayMulticastGroupMembersVersionEnum || (GetRegisterTransitGatewayMulticastGroupMembersVersionEnum = {}));
var GetRegisterTransitGatewayMulticastGroupMembersQueryParams = /** @class */ (function (_super) {
    __extends(GetRegisterTransitGatewayMulticastGroupMembersQueryParams, _super);
    function GetRegisterTransitGatewayMulticastGroupMembersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupMembersQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetRegisterTransitGatewayMulticastGroupMembersQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GroupIpAddress" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupMembersQueryParams.prototype, "groupIpAddress", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceIds" }),
        __metadata("design:type", Array)
    ], GetRegisterTransitGatewayMulticastGroupMembersQueryParams.prototype, "networkInterfaceIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupMembersQueryParams.prototype, "transitGatewayMulticastDomainId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupMembersQueryParams.prototype, "version", void 0);
    return GetRegisterTransitGatewayMulticastGroupMembersQueryParams;
}(SpeakeasyBase));
export { GetRegisterTransitGatewayMulticastGroupMembersQueryParams };
var GetRegisterTransitGatewayMulticastGroupMembersHeaders = /** @class */ (function (_super) {
    __extends(GetRegisterTransitGatewayMulticastGroupMembersHeaders, _super);
    function GetRegisterTransitGatewayMulticastGroupMembersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupMembersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupMembersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupMembersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupMembersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupMembersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupMembersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupMembersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRegisterTransitGatewayMulticastGroupMembersHeaders;
}(SpeakeasyBase));
export { GetRegisterTransitGatewayMulticastGroupMembersHeaders };
var GetRegisterTransitGatewayMulticastGroupMembersRequest = /** @class */ (function (_super) {
    __extends(GetRegisterTransitGatewayMulticastGroupMembersRequest, _super);
    function GetRegisterTransitGatewayMulticastGroupMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRegisterTransitGatewayMulticastGroupMembersQueryParams)
    ], GetRegisterTransitGatewayMulticastGroupMembersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRegisterTransitGatewayMulticastGroupMembersHeaders)
    ], GetRegisterTransitGatewayMulticastGroupMembersRequest.prototype, "headers", void 0);
    return GetRegisterTransitGatewayMulticastGroupMembersRequest;
}(SpeakeasyBase));
export { GetRegisterTransitGatewayMulticastGroupMembersRequest };
var GetRegisterTransitGatewayMulticastGroupMembersResponse = /** @class */ (function (_super) {
    __extends(GetRegisterTransitGatewayMulticastGroupMembersResponse, _super);
    function GetRegisterTransitGatewayMulticastGroupMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRegisterTransitGatewayMulticastGroupMembersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRegisterTransitGatewayMulticastGroupMembersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRegisterTransitGatewayMulticastGroupMembersResponse.prototype, "statusCode", void 0);
    return GetRegisterTransitGatewayMulticastGroupMembersResponse;
}(SpeakeasyBase));
export { GetRegisterTransitGatewayMulticastGroupMembersResponse };
