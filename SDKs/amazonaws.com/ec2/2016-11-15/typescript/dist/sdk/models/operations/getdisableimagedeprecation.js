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
export var GetDisableImageDeprecationActionEnum;
(function (GetDisableImageDeprecationActionEnum) {
    GetDisableImageDeprecationActionEnum["DisableImageDeprecation"] = "DisableImageDeprecation";
})(GetDisableImageDeprecationActionEnum || (GetDisableImageDeprecationActionEnum = {}));
export var GetDisableImageDeprecationVersionEnum;
(function (GetDisableImageDeprecationVersionEnum) {
    GetDisableImageDeprecationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDisableImageDeprecationVersionEnum || (GetDisableImageDeprecationVersionEnum = {}));
var GetDisableImageDeprecationQueryParams = /** @class */ (function (_super) {
    __extends(GetDisableImageDeprecationQueryParams, _super);
    function GetDisableImageDeprecationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDisableImageDeprecationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDisableImageDeprecationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ImageId" }),
        __metadata("design:type", String)
    ], GetDisableImageDeprecationQueryParams.prototype, "imageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDisableImageDeprecationQueryParams.prototype, "version", void 0);
    return GetDisableImageDeprecationQueryParams;
}(SpeakeasyBase));
export { GetDisableImageDeprecationQueryParams };
var GetDisableImageDeprecationHeaders = /** @class */ (function (_super) {
    __extends(GetDisableImageDeprecationHeaders, _super);
    function GetDisableImageDeprecationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDisableImageDeprecationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDisableImageDeprecationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDisableImageDeprecationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDisableImageDeprecationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDisableImageDeprecationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDisableImageDeprecationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDisableImageDeprecationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDisableImageDeprecationHeaders;
}(SpeakeasyBase));
export { GetDisableImageDeprecationHeaders };
var GetDisableImageDeprecationRequest = /** @class */ (function (_super) {
    __extends(GetDisableImageDeprecationRequest, _super);
    function GetDisableImageDeprecationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableImageDeprecationQueryParams)
    ], GetDisableImageDeprecationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableImageDeprecationHeaders)
    ], GetDisableImageDeprecationRequest.prototype, "headers", void 0);
    return GetDisableImageDeprecationRequest;
}(SpeakeasyBase));
export { GetDisableImageDeprecationRequest };
var GetDisableImageDeprecationResponse = /** @class */ (function (_super) {
    __extends(GetDisableImageDeprecationResponse, _super);
    function GetDisableImageDeprecationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDisableImageDeprecationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDisableImageDeprecationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDisableImageDeprecationResponse.prototype, "statusCode", void 0);
    return GetDisableImageDeprecationResponse;
}(SpeakeasyBase));
export { GetDisableImageDeprecationResponse };
