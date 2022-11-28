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
export var GetTerminateInstanceInAutoScalingGroupActionEnum;
(function (GetTerminateInstanceInAutoScalingGroupActionEnum) {
    GetTerminateInstanceInAutoScalingGroupActionEnum["TerminateInstanceInAutoScalingGroup"] = "TerminateInstanceInAutoScalingGroup";
})(GetTerminateInstanceInAutoScalingGroupActionEnum || (GetTerminateInstanceInAutoScalingGroupActionEnum = {}));
export var GetTerminateInstanceInAutoScalingGroupVersionEnum;
(function (GetTerminateInstanceInAutoScalingGroupVersionEnum) {
    GetTerminateInstanceInAutoScalingGroupVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetTerminateInstanceInAutoScalingGroupVersionEnum || (GetTerminateInstanceInAutoScalingGroupVersionEnum = {}));
var GetTerminateInstanceInAutoScalingGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetTerminateInstanceInAutoScalingGroupQueryParams, _super);
    function GetTerminateInstanceInAutoScalingGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetTerminateInstanceInAutoScalingGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetTerminateInstanceInAutoScalingGroupQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ShouldDecrementDesiredCapacity" }),
        __metadata("design:type", Boolean)
    ], GetTerminateInstanceInAutoScalingGroupQueryParams.prototype, "shouldDecrementDesiredCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetTerminateInstanceInAutoScalingGroupQueryParams.prototype, "version", void 0);
    return GetTerminateInstanceInAutoScalingGroupQueryParams;
}(SpeakeasyBase));
export { GetTerminateInstanceInAutoScalingGroupQueryParams };
var GetTerminateInstanceInAutoScalingGroupHeaders = /** @class */ (function (_super) {
    __extends(GetTerminateInstanceInAutoScalingGroupHeaders, _super);
    function GetTerminateInstanceInAutoScalingGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetTerminateInstanceInAutoScalingGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetTerminateInstanceInAutoScalingGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetTerminateInstanceInAutoScalingGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetTerminateInstanceInAutoScalingGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetTerminateInstanceInAutoScalingGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetTerminateInstanceInAutoScalingGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetTerminateInstanceInAutoScalingGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetTerminateInstanceInAutoScalingGroupHeaders;
}(SpeakeasyBase));
export { GetTerminateInstanceInAutoScalingGroupHeaders };
var GetTerminateInstanceInAutoScalingGroupRequest = /** @class */ (function (_super) {
    __extends(GetTerminateInstanceInAutoScalingGroupRequest, _super);
    function GetTerminateInstanceInAutoScalingGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTerminateInstanceInAutoScalingGroupQueryParams)
    ], GetTerminateInstanceInAutoScalingGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTerminateInstanceInAutoScalingGroupHeaders)
    ], GetTerminateInstanceInAutoScalingGroupRequest.prototype, "headers", void 0);
    return GetTerminateInstanceInAutoScalingGroupRequest;
}(SpeakeasyBase));
export { GetTerminateInstanceInAutoScalingGroupRequest };
var GetTerminateInstanceInAutoScalingGroupResponse = /** @class */ (function (_super) {
    __extends(GetTerminateInstanceInAutoScalingGroupResponse, _super);
    function GetTerminateInstanceInAutoScalingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTerminateInstanceInAutoScalingGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTerminateInstanceInAutoScalingGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTerminateInstanceInAutoScalingGroupResponse.prototype, "statusCode", void 0);
    return GetTerminateInstanceInAutoScalingGroupResponse;
}(SpeakeasyBase));
export { GetTerminateInstanceInAutoScalingGroupResponse };
