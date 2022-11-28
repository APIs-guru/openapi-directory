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
export var GetCreateDefaultVpcActionEnum;
(function (GetCreateDefaultVpcActionEnum) {
    GetCreateDefaultVpcActionEnum["CreateDefaultVpc"] = "CreateDefaultVpc";
})(GetCreateDefaultVpcActionEnum || (GetCreateDefaultVpcActionEnum = {}));
export var GetCreateDefaultVpcVersionEnum;
(function (GetCreateDefaultVpcVersionEnum) {
    GetCreateDefaultVpcVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCreateDefaultVpcVersionEnum || (GetCreateDefaultVpcVersionEnum = {}));
var GetCreateDefaultVpcQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateDefaultVpcQueryParams, _super);
    function GetCreateDefaultVpcQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateDefaultVpcQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCreateDefaultVpcQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateDefaultVpcQueryParams.prototype, "version", void 0);
    return GetCreateDefaultVpcQueryParams;
}(SpeakeasyBase));
export { GetCreateDefaultVpcQueryParams };
var GetCreateDefaultVpcHeaders = /** @class */ (function (_super) {
    __extends(GetCreateDefaultVpcHeaders, _super);
    function GetCreateDefaultVpcHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateDefaultVpcHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateDefaultVpcHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateDefaultVpcHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateDefaultVpcHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateDefaultVpcHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateDefaultVpcHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateDefaultVpcHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateDefaultVpcHeaders;
}(SpeakeasyBase));
export { GetCreateDefaultVpcHeaders };
var GetCreateDefaultVpcRequest = /** @class */ (function (_super) {
    __extends(GetCreateDefaultVpcRequest, _super);
    function GetCreateDefaultVpcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateDefaultVpcQueryParams)
    ], GetCreateDefaultVpcRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateDefaultVpcHeaders)
    ], GetCreateDefaultVpcRequest.prototype, "headers", void 0);
    return GetCreateDefaultVpcRequest;
}(SpeakeasyBase));
export { GetCreateDefaultVpcRequest };
var GetCreateDefaultVpcResponse = /** @class */ (function (_super) {
    __extends(GetCreateDefaultVpcResponse, _super);
    function GetCreateDefaultVpcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateDefaultVpcResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCreateDefaultVpcResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCreateDefaultVpcResponse.prototype, "statusCode", void 0);
    return GetCreateDefaultVpcResponse;
}(SpeakeasyBase));
export { GetCreateDefaultVpcResponse };
