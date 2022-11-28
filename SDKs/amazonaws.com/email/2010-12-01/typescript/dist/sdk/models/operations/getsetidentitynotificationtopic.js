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
export var GetSetIdentityNotificationTopicActionEnum;
(function (GetSetIdentityNotificationTopicActionEnum) {
    GetSetIdentityNotificationTopicActionEnum["SetIdentityNotificationTopic"] = "SetIdentityNotificationTopic";
})(GetSetIdentityNotificationTopicActionEnum || (GetSetIdentityNotificationTopicActionEnum = {}));
export var GetSetIdentityNotificationTopicNotificationTypeEnum;
(function (GetSetIdentityNotificationTopicNotificationTypeEnum) {
    GetSetIdentityNotificationTopicNotificationTypeEnum["Bounce"] = "Bounce";
    GetSetIdentityNotificationTopicNotificationTypeEnum["Complaint"] = "Complaint";
    GetSetIdentityNotificationTopicNotificationTypeEnum["Delivery"] = "Delivery";
})(GetSetIdentityNotificationTopicNotificationTypeEnum || (GetSetIdentityNotificationTopicNotificationTypeEnum = {}));
export var GetSetIdentityNotificationTopicVersionEnum;
(function (GetSetIdentityNotificationTopicVersionEnum) {
    GetSetIdentityNotificationTopicVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetSetIdentityNotificationTopicVersionEnum || (GetSetIdentityNotificationTopicVersionEnum = {}));
var GetSetIdentityNotificationTopicQueryParams = /** @class */ (function (_super) {
    __extends(GetSetIdentityNotificationTopicQueryParams, _super);
    function GetSetIdentityNotificationTopicQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetIdentityNotificationTopicQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", String)
    ], GetSetIdentityNotificationTopicQueryParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NotificationType" }),
        __metadata("design:type", String)
    ], GetSetIdentityNotificationTopicQueryParams.prototype, "notificationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnsTopic" }),
        __metadata("design:type", String)
    ], GetSetIdentityNotificationTopicQueryParams.prototype, "snsTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetIdentityNotificationTopicQueryParams.prototype, "version", void 0);
    return GetSetIdentityNotificationTopicQueryParams;
}(SpeakeasyBase));
export { GetSetIdentityNotificationTopicQueryParams };
var GetSetIdentityNotificationTopicHeaders = /** @class */ (function (_super) {
    __extends(GetSetIdentityNotificationTopicHeaders, _super);
    function GetSetIdentityNotificationTopicHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetIdentityNotificationTopicHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetIdentityNotificationTopicHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetIdentityNotificationTopicHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetIdentityNotificationTopicHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetIdentityNotificationTopicHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetIdentityNotificationTopicHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetIdentityNotificationTopicHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetIdentityNotificationTopicHeaders;
}(SpeakeasyBase));
export { GetSetIdentityNotificationTopicHeaders };
var GetSetIdentityNotificationTopicRequest = /** @class */ (function (_super) {
    __extends(GetSetIdentityNotificationTopicRequest, _super);
    function GetSetIdentityNotificationTopicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetIdentityNotificationTopicQueryParams)
    ], GetSetIdentityNotificationTopicRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetIdentityNotificationTopicHeaders)
    ], GetSetIdentityNotificationTopicRequest.prototype, "headers", void 0);
    return GetSetIdentityNotificationTopicRequest;
}(SpeakeasyBase));
export { GetSetIdentityNotificationTopicRequest };
var GetSetIdentityNotificationTopicResponse = /** @class */ (function (_super) {
    __extends(GetSetIdentityNotificationTopicResponse, _super);
    function GetSetIdentityNotificationTopicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSetIdentityNotificationTopicResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetIdentityNotificationTopicResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetIdentityNotificationTopicResponse.prototype, "statusCode", void 0);
    return GetSetIdentityNotificationTopicResponse;
}(SpeakeasyBase));
export { GetSetIdentityNotificationTopicResponse };
