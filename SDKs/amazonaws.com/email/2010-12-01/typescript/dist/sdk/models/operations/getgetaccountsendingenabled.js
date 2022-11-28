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
export var GetGetAccountSendingEnabledActionEnum;
(function (GetGetAccountSendingEnabledActionEnum) {
    GetGetAccountSendingEnabledActionEnum["GetAccountSendingEnabled"] = "GetAccountSendingEnabled";
})(GetGetAccountSendingEnabledActionEnum || (GetGetAccountSendingEnabledActionEnum = {}));
export var GetGetAccountSendingEnabledVersionEnum;
(function (GetGetAccountSendingEnabledVersionEnum) {
    GetGetAccountSendingEnabledVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetGetAccountSendingEnabledVersionEnum || (GetGetAccountSendingEnabledVersionEnum = {}));
var GetGetAccountSendingEnabledQueryParams = /** @class */ (function (_super) {
    __extends(GetGetAccountSendingEnabledQueryParams, _super);
    function GetGetAccountSendingEnabledQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetAccountSendingEnabledQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetAccountSendingEnabledQueryParams.prototype, "version", void 0);
    return GetGetAccountSendingEnabledQueryParams;
}(SpeakeasyBase));
export { GetGetAccountSendingEnabledQueryParams };
var GetGetAccountSendingEnabledHeaders = /** @class */ (function (_super) {
    __extends(GetGetAccountSendingEnabledHeaders, _super);
    function GetGetAccountSendingEnabledHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetAccountSendingEnabledHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetAccountSendingEnabledHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetAccountSendingEnabledHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetAccountSendingEnabledHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetAccountSendingEnabledHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetAccountSendingEnabledHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetAccountSendingEnabledHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetAccountSendingEnabledHeaders;
}(SpeakeasyBase));
export { GetGetAccountSendingEnabledHeaders };
var GetGetAccountSendingEnabledRequest = /** @class */ (function (_super) {
    __extends(GetGetAccountSendingEnabledRequest, _super);
    function GetGetAccountSendingEnabledRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetAccountSendingEnabledQueryParams)
    ], GetGetAccountSendingEnabledRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetAccountSendingEnabledHeaders)
    ], GetGetAccountSendingEnabledRequest.prototype, "headers", void 0);
    return GetGetAccountSendingEnabledRequest;
}(SpeakeasyBase));
export { GetGetAccountSendingEnabledRequest };
var GetGetAccountSendingEnabledResponse = /** @class */ (function (_super) {
    __extends(GetGetAccountSendingEnabledResponse, _super);
    function GetGetAccountSendingEnabledResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetAccountSendingEnabledResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetAccountSendingEnabledResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetAccountSendingEnabledResponse.prototype, "statusCode", void 0);
    return GetGetAccountSendingEnabledResponse;
}(SpeakeasyBase));
export { GetGetAccountSendingEnabledResponse };
