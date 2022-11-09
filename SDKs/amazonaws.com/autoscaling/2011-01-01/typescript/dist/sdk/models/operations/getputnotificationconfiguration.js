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
export var GetPutNotificationConfigurationActionEnum;
(function (GetPutNotificationConfigurationActionEnum) {
    GetPutNotificationConfigurationActionEnum["PutNotificationConfiguration"] = "PutNotificationConfiguration";
})(GetPutNotificationConfigurationActionEnum || (GetPutNotificationConfigurationActionEnum = {}));
export var GetPutNotificationConfigurationVersionEnum;
(function (GetPutNotificationConfigurationVersionEnum) {
    GetPutNotificationConfigurationVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetPutNotificationConfigurationVersionEnum || (GetPutNotificationConfigurationVersionEnum = {}));
var GetPutNotificationConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(GetPutNotificationConfigurationQueryParams, _super);
    function GetPutNotificationConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetPutNotificationConfigurationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetPutNotificationConfigurationQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NotificationTypes" }),
        __metadata("design:type", Array)
    ], GetPutNotificationConfigurationQueryParams.prototype, "notificationTypes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TopicARN" }),
        __metadata("design:type", String)
    ], GetPutNotificationConfigurationQueryParams.prototype, "topicArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetPutNotificationConfigurationQueryParams.prototype, "version", void 0);
    return GetPutNotificationConfigurationQueryParams;
}(SpeakeasyBase));
export { GetPutNotificationConfigurationQueryParams };
var GetPutNotificationConfigurationHeaders = /** @class */ (function (_super) {
    __extends(GetPutNotificationConfigurationHeaders, _super);
    function GetPutNotificationConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPutNotificationConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPutNotificationConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPutNotificationConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPutNotificationConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPutNotificationConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPutNotificationConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPutNotificationConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPutNotificationConfigurationHeaders;
}(SpeakeasyBase));
export { GetPutNotificationConfigurationHeaders };
var GetPutNotificationConfigurationRequest = /** @class */ (function (_super) {
    __extends(GetPutNotificationConfigurationRequest, _super);
    function GetPutNotificationConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPutNotificationConfigurationQueryParams)
    ], GetPutNotificationConfigurationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPutNotificationConfigurationHeaders)
    ], GetPutNotificationConfigurationRequest.prototype, "headers", void 0);
    return GetPutNotificationConfigurationRequest;
}(SpeakeasyBase));
export { GetPutNotificationConfigurationRequest };
var GetPutNotificationConfigurationResponse = /** @class */ (function (_super) {
    __extends(GetPutNotificationConfigurationResponse, _super);
    function GetPutNotificationConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPutNotificationConfigurationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPutNotificationConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPutNotificationConfigurationResponse.prototype, "statusCode", void 0);
    return GetPutNotificationConfigurationResponse;
}(SpeakeasyBase));
export { GetPutNotificationConfigurationResponse };
