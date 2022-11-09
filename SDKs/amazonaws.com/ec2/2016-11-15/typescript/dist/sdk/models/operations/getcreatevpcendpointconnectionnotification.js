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
export var GetCreateVpcEndpointConnectionNotificationActionEnum;
(function (GetCreateVpcEndpointConnectionNotificationActionEnum) {
    GetCreateVpcEndpointConnectionNotificationActionEnum["CreateVpcEndpointConnectionNotification"] = "CreateVpcEndpointConnectionNotification";
})(GetCreateVpcEndpointConnectionNotificationActionEnum || (GetCreateVpcEndpointConnectionNotificationActionEnum = {}));
export var GetCreateVpcEndpointConnectionNotificationVersionEnum;
(function (GetCreateVpcEndpointConnectionNotificationVersionEnum) {
    GetCreateVpcEndpointConnectionNotificationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCreateVpcEndpointConnectionNotificationVersionEnum || (GetCreateVpcEndpointConnectionNotificationVersionEnum = {}));
var GetCreateVpcEndpointConnectionNotificationQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateVpcEndpointConnectionNotificationQueryParams, _super);
    function GetCreateVpcEndpointConnectionNotificationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateVpcEndpointConnectionNotificationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClientToken" }),
        __metadata("design:type", String)
    ], GetCreateVpcEndpointConnectionNotificationQueryParams.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ConnectionEvents" }),
        __metadata("design:type", Array)
    ], GetCreateVpcEndpointConnectionNotificationQueryParams.prototype, "connectionEvents", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ConnectionNotificationArn" }),
        __metadata("design:type", String)
    ], GetCreateVpcEndpointConnectionNotificationQueryParams.prototype, "connectionNotificationArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCreateVpcEndpointConnectionNotificationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ServiceId" }),
        __metadata("design:type", String)
    ], GetCreateVpcEndpointConnectionNotificationQueryParams.prototype, "serviceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateVpcEndpointConnectionNotificationQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" }),
        __metadata("design:type", String)
    ], GetCreateVpcEndpointConnectionNotificationQueryParams.prototype, "vpcEndpointId", void 0);
    return GetCreateVpcEndpointConnectionNotificationQueryParams;
}(SpeakeasyBase));
export { GetCreateVpcEndpointConnectionNotificationQueryParams };
var GetCreateVpcEndpointConnectionNotificationHeaders = /** @class */ (function (_super) {
    __extends(GetCreateVpcEndpointConnectionNotificationHeaders, _super);
    function GetCreateVpcEndpointConnectionNotificationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateVpcEndpointConnectionNotificationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateVpcEndpointConnectionNotificationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateVpcEndpointConnectionNotificationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateVpcEndpointConnectionNotificationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateVpcEndpointConnectionNotificationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateVpcEndpointConnectionNotificationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateVpcEndpointConnectionNotificationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateVpcEndpointConnectionNotificationHeaders;
}(SpeakeasyBase));
export { GetCreateVpcEndpointConnectionNotificationHeaders };
var GetCreateVpcEndpointConnectionNotificationRequest = /** @class */ (function (_super) {
    __extends(GetCreateVpcEndpointConnectionNotificationRequest, _super);
    function GetCreateVpcEndpointConnectionNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateVpcEndpointConnectionNotificationQueryParams)
    ], GetCreateVpcEndpointConnectionNotificationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateVpcEndpointConnectionNotificationHeaders)
    ], GetCreateVpcEndpointConnectionNotificationRequest.prototype, "headers", void 0);
    return GetCreateVpcEndpointConnectionNotificationRequest;
}(SpeakeasyBase));
export { GetCreateVpcEndpointConnectionNotificationRequest };
var GetCreateVpcEndpointConnectionNotificationResponse = /** @class */ (function (_super) {
    __extends(GetCreateVpcEndpointConnectionNotificationResponse, _super);
    function GetCreateVpcEndpointConnectionNotificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateVpcEndpointConnectionNotificationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateVpcEndpointConnectionNotificationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateVpcEndpointConnectionNotificationResponse.prototype, "statusCode", void 0);
    return GetCreateVpcEndpointConnectionNotificationResponse;
}(SpeakeasyBase));
export { GetCreateVpcEndpointConnectionNotificationResponse };
