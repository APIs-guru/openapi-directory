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
export var GetCompleteLifecycleActionActionEnum;
(function (GetCompleteLifecycleActionActionEnum) {
    GetCompleteLifecycleActionActionEnum["CompleteLifecycleAction"] = "CompleteLifecycleAction";
})(GetCompleteLifecycleActionActionEnum || (GetCompleteLifecycleActionActionEnum = {}));
export var GetCompleteLifecycleActionVersionEnum;
(function (GetCompleteLifecycleActionVersionEnum) {
    GetCompleteLifecycleActionVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetCompleteLifecycleActionVersionEnum || (GetCompleteLifecycleActionVersionEnum = {}));
var GetCompleteLifecycleActionQueryParams = /** @class */ (function (_super) {
    __extends(GetCompleteLifecycleActionQueryParams, _super);
    function GetCompleteLifecycleActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LifecycleActionResult" }),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionQueryParams.prototype, "lifecycleActionResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LifecycleActionToken" }),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionQueryParams.prototype, "lifecycleActionToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LifecycleHookName" }),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionQueryParams.prototype, "lifecycleHookName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionQueryParams.prototype, "version", void 0);
    return GetCompleteLifecycleActionQueryParams;
}(SpeakeasyBase));
export { GetCompleteLifecycleActionQueryParams };
var GetCompleteLifecycleActionHeaders = /** @class */ (function (_super) {
    __extends(GetCompleteLifecycleActionHeaders, _super);
    function GetCompleteLifecycleActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCompleteLifecycleActionHeaders;
}(SpeakeasyBase));
export { GetCompleteLifecycleActionHeaders };
var GetCompleteLifecycleActionRequest = /** @class */ (function (_super) {
    __extends(GetCompleteLifecycleActionRequest, _super);
    function GetCompleteLifecycleActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCompleteLifecycleActionQueryParams)
    ], GetCompleteLifecycleActionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCompleteLifecycleActionHeaders)
    ], GetCompleteLifecycleActionRequest.prototype, "headers", void 0);
    return GetCompleteLifecycleActionRequest;
}(SpeakeasyBase));
export { GetCompleteLifecycleActionRequest };
var GetCompleteLifecycleActionResponse = /** @class */ (function (_super) {
    __extends(GetCompleteLifecycleActionResponse, _super);
    function GetCompleteLifecycleActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCompleteLifecycleActionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCompleteLifecycleActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCompleteLifecycleActionResponse.prototype, "statusCode", void 0);
    return GetCompleteLifecycleActionResponse;
}(SpeakeasyBase));
export { GetCompleteLifecycleActionResponse };
