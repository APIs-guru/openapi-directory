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
export var GetDeleteVpcEndpointConnectionNotificationsActionEnum;
(function (GetDeleteVpcEndpointConnectionNotificationsActionEnum) {
    GetDeleteVpcEndpointConnectionNotificationsActionEnum["DeleteVpcEndpointConnectionNotifications"] = "DeleteVpcEndpointConnectionNotifications";
})(GetDeleteVpcEndpointConnectionNotificationsActionEnum || (GetDeleteVpcEndpointConnectionNotificationsActionEnum = {}));
export var GetDeleteVpcEndpointConnectionNotificationsVersionEnum;
(function (GetDeleteVpcEndpointConnectionNotificationsVersionEnum) {
    GetDeleteVpcEndpointConnectionNotificationsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteVpcEndpointConnectionNotificationsVersionEnum || (GetDeleteVpcEndpointConnectionNotificationsVersionEnum = {}));
var GetDeleteVpcEndpointConnectionNotificationsQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteVpcEndpointConnectionNotificationsQueryParams, _super);
    function GetDeleteVpcEndpointConnectionNotificationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointConnectionNotificationsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ConnectionNotificationId" }),
        __metadata("design:type", Array)
    ], GetDeleteVpcEndpointConnectionNotificationsQueryParams.prototype, "connectionNotificationId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteVpcEndpointConnectionNotificationsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointConnectionNotificationsQueryParams.prototype, "version", void 0);
    return GetDeleteVpcEndpointConnectionNotificationsQueryParams;
}(SpeakeasyBase));
export { GetDeleteVpcEndpointConnectionNotificationsQueryParams };
var GetDeleteVpcEndpointConnectionNotificationsHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteVpcEndpointConnectionNotificationsHeaders, _super);
    function GetDeleteVpcEndpointConnectionNotificationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointConnectionNotificationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointConnectionNotificationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointConnectionNotificationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointConnectionNotificationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointConnectionNotificationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointConnectionNotificationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointConnectionNotificationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteVpcEndpointConnectionNotificationsHeaders;
}(SpeakeasyBase));
export { GetDeleteVpcEndpointConnectionNotificationsHeaders };
var GetDeleteVpcEndpointConnectionNotificationsRequest = /** @class */ (function (_super) {
    __extends(GetDeleteVpcEndpointConnectionNotificationsRequest, _super);
    function GetDeleteVpcEndpointConnectionNotificationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteVpcEndpointConnectionNotificationsQueryParams)
    ], GetDeleteVpcEndpointConnectionNotificationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteVpcEndpointConnectionNotificationsHeaders)
    ], GetDeleteVpcEndpointConnectionNotificationsRequest.prototype, "headers", void 0);
    return GetDeleteVpcEndpointConnectionNotificationsRequest;
}(SpeakeasyBase));
export { GetDeleteVpcEndpointConnectionNotificationsRequest };
var GetDeleteVpcEndpointConnectionNotificationsResponse = /** @class */ (function (_super) {
    __extends(GetDeleteVpcEndpointConnectionNotificationsResponse, _super);
    function GetDeleteVpcEndpointConnectionNotificationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteVpcEndpointConnectionNotificationsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointConnectionNotificationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteVpcEndpointConnectionNotificationsResponse.prototype, "statusCode", void 0);
    return GetDeleteVpcEndpointConnectionNotificationsResponse;
}(SpeakeasyBase));
export { GetDeleteVpcEndpointConnectionNotificationsResponse };
