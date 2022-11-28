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
export var GetMoveAddressToVpcActionEnum;
(function (GetMoveAddressToVpcActionEnum) {
    GetMoveAddressToVpcActionEnum["MoveAddressToVpc"] = "MoveAddressToVpc";
})(GetMoveAddressToVpcActionEnum || (GetMoveAddressToVpcActionEnum = {}));
export var GetMoveAddressToVpcVersionEnum;
(function (GetMoveAddressToVpcVersionEnum) {
    GetMoveAddressToVpcVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetMoveAddressToVpcVersionEnum || (GetMoveAddressToVpcVersionEnum = {}));
var GetMoveAddressToVpcQueryParams = /** @class */ (function (_super) {
    __extends(GetMoveAddressToVpcQueryParams, _super);
    function GetMoveAddressToVpcQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetMoveAddressToVpcQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetMoveAddressToVpcQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PublicIp" }),
        __metadata("design:type", String)
    ], GetMoveAddressToVpcQueryParams.prototype, "publicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetMoveAddressToVpcQueryParams.prototype, "version", void 0);
    return GetMoveAddressToVpcQueryParams;
}(SpeakeasyBase));
export { GetMoveAddressToVpcQueryParams };
var GetMoveAddressToVpcHeaders = /** @class */ (function (_super) {
    __extends(GetMoveAddressToVpcHeaders, _super);
    function GetMoveAddressToVpcHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetMoveAddressToVpcHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetMoveAddressToVpcHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetMoveAddressToVpcHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetMoveAddressToVpcHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetMoveAddressToVpcHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetMoveAddressToVpcHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetMoveAddressToVpcHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetMoveAddressToVpcHeaders;
}(SpeakeasyBase));
export { GetMoveAddressToVpcHeaders };
var GetMoveAddressToVpcRequest = /** @class */ (function (_super) {
    __extends(GetMoveAddressToVpcRequest, _super);
    function GetMoveAddressToVpcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMoveAddressToVpcQueryParams)
    ], GetMoveAddressToVpcRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMoveAddressToVpcHeaders)
    ], GetMoveAddressToVpcRequest.prototype, "headers", void 0);
    return GetMoveAddressToVpcRequest;
}(SpeakeasyBase));
export { GetMoveAddressToVpcRequest };
var GetMoveAddressToVpcResponse = /** @class */ (function (_super) {
    __extends(GetMoveAddressToVpcResponse, _super);
    function GetMoveAddressToVpcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetMoveAddressToVpcResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMoveAddressToVpcResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMoveAddressToVpcResponse.prototype, "statusCode", void 0);
    return GetMoveAddressToVpcResponse;
}(SpeakeasyBase));
export { GetMoveAddressToVpcResponse };
