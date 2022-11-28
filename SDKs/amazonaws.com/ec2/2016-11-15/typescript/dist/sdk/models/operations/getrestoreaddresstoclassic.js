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
export var GetRestoreAddressToClassicActionEnum;
(function (GetRestoreAddressToClassicActionEnum) {
    GetRestoreAddressToClassicActionEnum["RestoreAddressToClassic"] = "RestoreAddressToClassic";
})(GetRestoreAddressToClassicActionEnum || (GetRestoreAddressToClassicActionEnum = {}));
export var GetRestoreAddressToClassicVersionEnum;
(function (GetRestoreAddressToClassicVersionEnum) {
    GetRestoreAddressToClassicVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetRestoreAddressToClassicVersionEnum || (GetRestoreAddressToClassicVersionEnum = {}));
var GetRestoreAddressToClassicQueryParams = /** @class */ (function (_super) {
    __extends(GetRestoreAddressToClassicQueryParams, _super);
    function GetRestoreAddressToClassicQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRestoreAddressToClassicQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetRestoreAddressToClassicQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PublicIp" }),
        __metadata("design:type", String)
    ], GetRestoreAddressToClassicQueryParams.prototype, "publicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRestoreAddressToClassicQueryParams.prototype, "version", void 0);
    return GetRestoreAddressToClassicQueryParams;
}(SpeakeasyBase));
export { GetRestoreAddressToClassicQueryParams };
var GetRestoreAddressToClassicHeaders = /** @class */ (function (_super) {
    __extends(GetRestoreAddressToClassicHeaders, _super);
    function GetRestoreAddressToClassicHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRestoreAddressToClassicHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRestoreAddressToClassicHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRestoreAddressToClassicHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRestoreAddressToClassicHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRestoreAddressToClassicHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRestoreAddressToClassicHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRestoreAddressToClassicHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRestoreAddressToClassicHeaders;
}(SpeakeasyBase));
export { GetRestoreAddressToClassicHeaders };
var GetRestoreAddressToClassicRequest = /** @class */ (function (_super) {
    __extends(GetRestoreAddressToClassicRequest, _super);
    function GetRestoreAddressToClassicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRestoreAddressToClassicQueryParams)
    ], GetRestoreAddressToClassicRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRestoreAddressToClassicHeaders)
    ], GetRestoreAddressToClassicRequest.prototype, "headers", void 0);
    return GetRestoreAddressToClassicRequest;
}(SpeakeasyBase));
export { GetRestoreAddressToClassicRequest };
var GetRestoreAddressToClassicResponse = /** @class */ (function (_super) {
    __extends(GetRestoreAddressToClassicResponse, _super);
    function GetRestoreAddressToClassicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetRestoreAddressToClassicResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRestoreAddressToClassicResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRestoreAddressToClassicResponse.prototype, "statusCode", void 0);
    return GetRestoreAddressToClassicResponse;
}(SpeakeasyBase));
export { GetRestoreAddressToClassicResponse };
