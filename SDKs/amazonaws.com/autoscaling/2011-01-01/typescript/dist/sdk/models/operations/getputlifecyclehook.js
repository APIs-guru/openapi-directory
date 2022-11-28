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
export var GetPutLifecycleHookActionEnum;
(function (GetPutLifecycleHookActionEnum) {
    GetPutLifecycleHookActionEnum["PutLifecycleHook"] = "PutLifecycleHook";
})(GetPutLifecycleHookActionEnum || (GetPutLifecycleHookActionEnum = {}));
export var GetPutLifecycleHookVersionEnum;
(function (GetPutLifecycleHookVersionEnum) {
    GetPutLifecycleHookVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetPutLifecycleHookVersionEnum || (GetPutLifecycleHookVersionEnum = {}));
var GetPutLifecycleHookQueryParams = /** @class */ (function (_super) {
    __extends(GetPutLifecycleHookQueryParams, _super);
    function GetPutLifecycleHookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DefaultResult" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookQueryParams.prototype, "defaultResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HeartbeatTimeout" }),
        __metadata("design:type", Number)
    ], GetPutLifecycleHookQueryParams.prototype, "heartbeatTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LifecycleHookName" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookQueryParams.prototype, "lifecycleHookName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LifecycleTransition" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookQueryParams.prototype, "lifecycleTransition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NotificationMetadata" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookQueryParams.prototype, "notificationMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NotificationTargetARN" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookQueryParams.prototype, "notificationTargetArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleARN" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookQueryParams.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookQueryParams.prototype, "version", void 0);
    return GetPutLifecycleHookQueryParams;
}(SpeakeasyBase));
export { GetPutLifecycleHookQueryParams };
var GetPutLifecycleHookHeaders = /** @class */ (function (_super) {
    __extends(GetPutLifecycleHookHeaders, _super);
    function GetPutLifecycleHookHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPutLifecycleHookHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPutLifecycleHookHeaders;
}(SpeakeasyBase));
export { GetPutLifecycleHookHeaders };
var GetPutLifecycleHookRequest = /** @class */ (function (_super) {
    __extends(GetPutLifecycleHookRequest, _super);
    function GetPutLifecycleHookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPutLifecycleHookQueryParams)
    ], GetPutLifecycleHookRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPutLifecycleHookHeaders)
    ], GetPutLifecycleHookRequest.prototype, "headers", void 0);
    return GetPutLifecycleHookRequest;
}(SpeakeasyBase));
export { GetPutLifecycleHookRequest };
var GetPutLifecycleHookResponse = /** @class */ (function (_super) {
    __extends(GetPutLifecycleHookResponse, _super);
    function GetPutLifecycleHookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPutLifecycleHookResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPutLifecycleHookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPutLifecycleHookResponse.prototype, "statusCode", void 0);
    return GetPutLifecycleHookResponse;
}(SpeakeasyBase));
export { GetPutLifecycleHookResponse };
