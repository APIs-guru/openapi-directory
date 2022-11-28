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
export var GetModifyVpcEndpointConnectionNotificationActionEnum;
(function (GetModifyVpcEndpointConnectionNotificationActionEnum) {
    GetModifyVpcEndpointConnectionNotificationActionEnum["ModifyVpcEndpointConnectionNotification"] = "ModifyVpcEndpointConnectionNotification";
})(GetModifyVpcEndpointConnectionNotificationActionEnum || (GetModifyVpcEndpointConnectionNotificationActionEnum = {}));
export var GetModifyVpcEndpointConnectionNotificationVersionEnum;
(function (GetModifyVpcEndpointConnectionNotificationVersionEnum) {
    GetModifyVpcEndpointConnectionNotificationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyVpcEndpointConnectionNotificationVersionEnum || (GetModifyVpcEndpointConnectionNotificationVersionEnum = {}));
var GetModifyVpcEndpointConnectionNotificationQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointConnectionNotificationQueryParams, _super);
    function GetModifyVpcEndpointConnectionNotificationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointConnectionNotificationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConnectionEvents" }),
        __metadata("design:type", Array)
    ], GetModifyVpcEndpointConnectionNotificationQueryParams.prototype, "connectionEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConnectionNotificationArn" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointConnectionNotificationQueryParams.prototype, "connectionNotificationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConnectionNotificationId" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointConnectionNotificationQueryParams.prototype, "connectionNotificationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcEndpointConnectionNotificationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointConnectionNotificationQueryParams.prototype, "version", void 0);
    return GetModifyVpcEndpointConnectionNotificationQueryParams;
}(SpeakeasyBase));
export { GetModifyVpcEndpointConnectionNotificationQueryParams };
var GetModifyVpcEndpointConnectionNotificationHeaders = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointConnectionNotificationHeaders, _super);
    function GetModifyVpcEndpointConnectionNotificationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointConnectionNotificationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointConnectionNotificationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointConnectionNotificationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointConnectionNotificationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointConnectionNotificationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointConnectionNotificationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointConnectionNotificationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyVpcEndpointConnectionNotificationHeaders;
}(SpeakeasyBase));
export { GetModifyVpcEndpointConnectionNotificationHeaders };
var GetModifyVpcEndpointConnectionNotificationRequest = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointConnectionNotificationRequest, _super);
    function GetModifyVpcEndpointConnectionNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVpcEndpointConnectionNotificationQueryParams)
    ], GetModifyVpcEndpointConnectionNotificationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVpcEndpointConnectionNotificationHeaders)
    ], GetModifyVpcEndpointConnectionNotificationRequest.prototype, "headers", void 0);
    return GetModifyVpcEndpointConnectionNotificationRequest;
}(SpeakeasyBase));
export { GetModifyVpcEndpointConnectionNotificationRequest };
var GetModifyVpcEndpointConnectionNotificationResponse = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointConnectionNotificationResponse, _super);
    function GetModifyVpcEndpointConnectionNotificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyVpcEndpointConnectionNotificationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointConnectionNotificationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyVpcEndpointConnectionNotificationResponse.prototype, "statusCode", void 0);
    return GetModifyVpcEndpointConnectionNotificationResponse;
}(SpeakeasyBase));
export { GetModifyVpcEndpointConnectionNotificationResponse };
