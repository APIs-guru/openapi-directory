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
import * as shared from "../shared";
export var GetThirdPartyJobDetailsXAmzTargetEnum;
(function (GetThirdPartyJobDetailsXAmzTargetEnum) {
    GetThirdPartyJobDetailsXAmzTargetEnum["CodePipeline20150709GetThirdPartyJobDetails"] = "CodePipeline_20150709.GetThirdPartyJobDetails";
})(GetThirdPartyJobDetailsXAmzTargetEnum || (GetThirdPartyJobDetailsXAmzTargetEnum = {}));
var GetThirdPartyJobDetailsHeaders = /** @class */ (function (_super) {
    __extends(GetThirdPartyJobDetailsHeaders, _super);
    function GetThirdPartyJobDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetThirdPartyJobDetailsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetThirdPartyJobDetailsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetThirdPartyJobDetailsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetThirdPartyJobDetailsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetThirdPartyJobDetailsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetThirdPartyJobDetailsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetThirdPartyJobDetailsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetThirdPartyJobDetailsHeaders.prototype, "xAmzTarget", void 0);
    return GetThirdPartyJobDetailsHeaders;
}(SpeakeasyBase));
export { GetThirdPartyJobDetailsHeaders };
var GetThirdPartyJobDetailsRequest = /** @class */ (function (_super) {
    __extends(GetThirdPartyJobDetailsRequest, _super);
    function GetThirdPartyJobDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetThirdPartyJobDetailsHeaders)
    ], GetThirdPartyJobDetailsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetThirdPartyJobDetailsInput)
    ], GetThirdPartyJobDetailsRequest.prototype, "request", void 0);
    return GetThirdPartyJobDetailsRequest;
}(SpeakeasyBase));
export { GetThirdPartyJobDetailsRequest };
var GetThirdPartyJobDetailsResponse = /** @class */ (function (_super) {
    __extends(GetThirdPartyJobDetailsResponse, _super);
    function GetThirdPartyJobDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetThirdPartyJobDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetThirdPartyJobDetailsOutput)
    ], GetThirdPartyJobDetailsResponse.prototype, "getThirdPartyJobDetailsOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetThirdPartyJobDetailsResponse.prototype, "invalidClientTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetThirdPartyJobDetailsResponse.prototype, "invalidJobException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetThirdPartyJobDetailsResponse.prototype, "jobNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetThirdPartyJobDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetThirdPartyJobDetailsResponse.prototype, "validationException", void 0);
    return GetThirdPartyJobDetailsResponse;
}(SpeakeasyBase));
export { GetThirdPartyJobDetailsResponse };
