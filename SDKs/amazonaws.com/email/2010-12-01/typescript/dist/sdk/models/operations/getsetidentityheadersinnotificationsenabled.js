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
export var GetSetIdentityHeadersInNotificationsEnabledActionEnum;
(function (GetSetIdentityHeadersInNotificationsEnabledActionEnum) {
    GetSetIdentityHeadersInNotificationsEnabledActionEnum["SetIdentityHeadersInNotificationsEnabled"] = "SetIdentityHeadersInNotificationsEnabled";
})(GetSetIdentityHeadersInNotificationsEnabledActionEnum || (GetSetIdentityHeadersInNotificationsEnabledActionEnum = {}));
export var GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum;
(function (GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum) {
    GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum["Bounce"] = "Bounce";
    GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum["Complaint"] = "Complaint";
    GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum["Delivery"] = "Delivery";
})(GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum || (GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum = {}));
export var GetSetIdentityHeadersInNotificationsEnabledVersionEnum;
(function (GetSetIdentityHeadersInNotificationsEnabledVersionEnum) {
    GetSetIdentityHeadersInNotificationsEnabledVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetSetIdentityHeadersInNotificationsEnabledVersionEnum || (GetSetIdentityHeadersInNotificationsEnabledVersionEnum = {}));
var GetSetIdentityHeadersInNotificationsEnabledQueryParams = /** @class */ (function (_super) {
    __extends(GetSetIdentityHeadersInNotificationsEnabledQueryParams, _super);
    function GetSetIdentityHeadersInNotificationsEnabledQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetIdentityHeadersInNotificationsEnabledQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Enabled" }),
        __metadata("design:type", Boolean)
    ], GetSetIdentityHeadersInNotificationsEnabledQueryParams.prototype, "enabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", String)
    ], GetSetIdentityHeadersInNotificationsEnabledQueryParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NotificationType" }),
        __metadata("design:type", String)
    ], GetSetIdentityHeadersInNotificationsEnabledQueryParams.prototype, "notificationType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetIdentityHeadersInNotificationsEnabledQueryParams.prototype, "version", void 0);
    return GetSetIdentityHeadersInNotificationsEnabledQueryParams;
}(SpeakeasyBase));
export { GetSetIdentityHeadersInNotificationsEnabledQueryParams };
var GetSetIdentityHeadersInNotificationsEnabledHeaders = /** @class */ (function (_super) {
    __extends(GetSetIdentityHeadersInNotificationsEnabledHeaders, _super);
    function GetSetIdentityHeadersInNotificationsEnabledHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetIdentityHeadersInNotificationsEnabledHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetIdentityHeadersInNotificationsEnabledHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetIdentityHeadersInNotificationsEnabledHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetIdentityHeadersInNotificationsEnabledHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetIdentityHeadersInNotificationsEnabledHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetIdentityHeadersInNotificationsEnabledHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetIdentityHeadersInNotificationsEnabledHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetIdentityHeadersInNotificationsEnabledHeaders;
}(SpeakeasyBase));
export { GetSetIdentityHeadersInNotificationsEnabledHeaders };
var GetSetIdentityHeadersInNotificationsEnabledRequest = /** @class */ (function (_super) {
    __extends(GetSetIdentityHeadersInNotificationsEnabledRequest, _super);
    function GetSetIdentityHeadersInNotificationsEnabledRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSetIdentityHeadersInNotificationsEnabledQueryParams)
    ], GetSetIdentityHeadersInNotificationsEnabledRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSetIdentityHeadersInNotificationsEnabledHeaders)
    ], GetSetIdentityHeadersInNotificationsEnabledRequest.prototype, "headers", void 0);
    return GetSetIdentityHeadersInNotificationsEnabledRequest;
}(SpeakeasyBase));
export { GetSetIdentityHeadersInNotificationsEnabledRequest };
var GetSetIdentityHeadersInNotificationsEnabledResponse = /** @class */ (function (_super) {
    __extends(GetSetIdentityHeadersInNotificationsEnabledResponse, _super);
    function GetSetIdentityHeadersInNotificationsEnabledResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetSetIdentityHeadersInNotificationsEnabledResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSetIdentityHeadersInNotificationsEnabledResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSetIdentityHeadersInNotificationsEnabledResponse.prototype, "statusCode", void 0);
    return GetSetIdentityHeadersInNotificationsEnabledResponse;
}(SpeakeasyBase));
export { GetSetIdentityHeadersInNotificationsEnabledResponse };
