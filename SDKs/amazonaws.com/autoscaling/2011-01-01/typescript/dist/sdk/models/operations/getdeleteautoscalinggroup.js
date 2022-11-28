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
export var GetDeleteAutoScalingGroupActionEnum;
(function (GetDeleteAutoScalingGroupActionEnum) {
    GetDeleteAutoScalingGroupActionEnum["DeleteAutoScalingGroup"] = "DeleteAutoScalingGroup";
})(GetDeleteAutoScalingGroupActionEnum || (GetDeleteAutoScalingGroupActionEnum = {}));
export var GetDeleteAutoScalingGroupVersionEnum;
(function (GetDeleteAutoScalingGroupVersionEnum) {
    GetDeleteAutoScalingGroupVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDeleteAutoScalingGroupVersionEnum || (GetDeleteAutoScalingGroupVersionEnum = {}));
var GetDeleteAutoScalingGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteAutoScalingGroupQueryParams, _super);
    function GetDeleteAutoScalingGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteAutoScalingGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetDeleteAutoScalingGroupQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ForceDelete" }),
        __metadata("design:type", Boolean)
    ], GetDeleteAutoScalingGroupQueryParams.prototype, "forceDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteAutoScalingGroupQueryParams.prototype, "version", void 0);
    return GetDeleteAutoScalingGroupQueryParams;
}(SpeakeasyBase));
export { GetDeleteAutoScalingGroupQueryParams };
var GetDeleteAutoScalingGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteAutoScalingGroupHeaders, _super);
    function GetDeleteAutoScalingGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteAutoScalingGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteAutoScalingGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteAutoScalingGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteAutoScalingGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteAutoScalingGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteAutoScalingGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteAutoScalingGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteAutoScalingGroupHeaders;
}(SpeakeasyBase));
export { GetDeleteAutoScalingGroupHeaders };
var GetDeleteAutoScalingGroupRequest = /** @class */ (function (_super) {
    __extends(GetDeleteAutoScalingGroupRequest, _super);
    function GetDeleteAutoScalingGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteAutoScalingGroupQueryParams)
    ], GetDeleteAutoScalingGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteAutoScalingGroupHeaders)
    ], GetDeleteAutoScalingGroupRequest.prototype, "headers", void 0);
    return GetDeleteAutoScalingGroupRequest;
}(SpeakeasyBase));
export { GetDeleteAutoScalingGroupRequest };
var GetDeleteAutoScalingGroupResponse = /** @class */ (function (_super) {
    __extends(GetDeleteAutoScalingGroupResponse, _super);
    function GetDeleteAutoScalingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteAutoScalingGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteAutoScalingGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteAutoScalingGroupResponse.prototype, "statusCode", void 0);
    return GetDeleteAutoScalingGroupResponse;
}(SpeakeasyBase));
export { GetDeleteAutoScalingGroupResponse };
