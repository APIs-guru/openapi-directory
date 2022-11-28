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
export var GetSetDesiredCapacityActionEnum;
(function (GetSetDesiredCapacityActionEnum) {
    GetSetDesiredCapacityActionEnum["SetDesiredCapacity"] = "SetDesiredCapacity";
})(GetSetDesiredCapacityActionEnum || (GetSetDesiredCapacityActionEnum = {}));
export var GetSetDesiredCapacityVersionEnum;
(function (GetSetDesiredCapacityVersionEnum) {
    GetSetDesiredCapacityVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetSetDesiredCapacityVersionEnum || (GetSetDesiredCapacityVersionEnum = {}));
var GetSetDesiredCapacityQueryParams = /** @class */ (function (_super) {
    __extends(GetSetDesiredCapacityQueryParams, _super);
    function GetSetDesiredCapacityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetDesiredCapacityQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetSetDesiredCapacityQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DesiredCapacity" }),
        __metadata("design:type", Number)
    ], GetSetDesiredCapacityQueryParams.prototype, "desiredCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HonorCooldown" }),
        __metadata("design:type", Boolean)
    ], GetSetDesiredCapacityQueryParams.prototype, "honorCooldown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetDesiredCapacityQueryParams.prototype, "version", void 0);
    return GetSetDesiredCapacityQueryParams;
}(SpeakeasyBase));
export { GetSetDesiredCapacityQueryParams };
var GetSetDesiredCapacityHeaders = /** @class */ (function (_super) {
    __extends(GetSetDesiredCapacityHeaders, _super);
    function GetSetDesiredCapacityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetDesiredCapacityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetDesiredCapacityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetDesiredCapacityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetDesiredCapacityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetDesiredCapacityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetDesiredCapacityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetDesiredCapacityHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetDesiredCapacityHeaders;
}(SpeakeasyBase));
export { GetSetDesiredCapacityHeaders };
var GetSetDesiredCapacityRequest = /** @class */ (function (_super) {
    __extends(GetSetDesiredCapacityRequest, _super);
    function GetSetDesiredCapacityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetDesiredCapacityQueryParams)
    ], GetSetDesiredCapacityRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetDesiredCapacityHeaders)
    ], GetSetDesiredCapacityRequest.prototype, "headers", void 0);
    return GetSetDesiredCapacityRequest;
}(SpeakeasyBase));
export { GetSetDesiredCapacityRequest };
var GetSetDesiredCapacityResponse = /** @class */ (function (_super) {
    __extends(GetSetDesiredCapacityResponse, _super);
    function GetSetDesiredCapacityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSetDesiredCapacityResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetDesiredCapacityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetDesiredCapacityResponse.prototype, "statusCode", void 0);
    return GetSetDesiredCapacityResponse;
}(SpeakeasyBase));
export { GetSetDesiredCapacityResponse };
