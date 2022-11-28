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
export var GetSetIdentityFeedbackForwardingEnabledActionEnum;
(function (GetSetIdentityFeedbackForwardingEnabledActionEnum) {
    GetSetIdentityFeedbackForwardingEnabledActionEnum["SetIdentityFeedbackForwardingEnabled"] = "SetIdentityFeedbackForwardingEnabled";
})(GetSetIdentityFeedbackForwardingEnabledActionEnum || (GetSetIdentityFeedbackForwardingEnabledActionEnum = {}));
export var GetSetIdentityFeedbackForwardingEnabledVersionEnum;
(function (GetSetIdentityFeedbackForwardingEnabledVersionEnum) {
    GetSetIdentityFeedbackForwardingEnabledVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetSetIdentityFeedbackForwardingEnabledVersionEnum || (GetSetIdentityFeedbackForwardingEnabledVersionEnum = {}));
var GetSetIdentityFeedbackForwardingEnabledQueryParams = /** @class */ (function (_super) {
    __extends(GetSetIdentityFeedbackForwardingEnabledQueryParams, _super);
    function GetSetIdentityFeedbackForwardingEnabledQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetIdentityFeedbackForwardingEnabledQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ForwardingEnabled" }),
        __metadata("design:type", Boolean)
    ], GetSetIdentityFeedbackForwardingEnabledQueryParams.prototype, "forwardingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", String)
    ], GetSetIdentityFeedbackForwardingEnabledQueryParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetIdentityFeedbackForwardingEnabledQueryParams.prototype, "version", void 0);
    return GetSetIdentityFeedbackForwardingEnabledQueryParams;
}(SpeakeasyBase));
export { GetSetIdentityFeedbackForwardingEnabledQueryParams };
var GetSetIdentityFeedbackForwardingEnabledHeaders = /** @class */ (function (_super) {
    __extends(GetSetIdentityFeedbackForwardingEnabledHeaders, _super);
    function GetSetIdentityFeedbackForwardingEnabledHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetIdentityFeedbackForwardingEnabledHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetIdentityFeedbackForwardingEnabledHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetIdentityFeedbackForwardingEnabledHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetIdentityFeedbackForwardingEnabledHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetIdentityFeedbackForwardingEnabledHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetIdentityFeedbackForwardingEnabledHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetIdentityFeedbackForwardingEnabledHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetIdentityFeedbackForwardingEnabledHeaders;
}(SpeakeasyBase));
export { GetSetIdentityFeedbackForwardingEnabledHeaders };
var GetSetIdentityFeedbackForwardingEnabledRequest = /** @class */ (function (_super) {
    __extends(GetSetIdentityFeedbackForwardingEnabledRequest, _super);
    function GetSetIdentityFeedbackForwardingEnabledRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetIdentityFeedbackForwardingEnabledQueryParams)
    ], GetSetIdentityFeedbackForwardingEnabledRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetIdentityFeedbackForwardingEnabledHeaders)
    ], GetSetIdentityFeedbackForwardingEnabledRequest.prototype, "headers", void 0);
    return GetSetIdentityFeedbackForwardingEnabledRequest;
}(SpeakeasyBase));
export { GetSetIdentityFeedbackForwardingEnabledRequest };
var GetSetIdentityFeedbackForwardingEnabledResponse = /** @class */ (function (_super) {
    __extends(GetSetIdentityFeedbackForwardingEnabledResponse, _super);
    function GetSetIdentityFeedbackForwardingEnabledResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSetIdentityFeedbackForwardingEnabledResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetIdentityFeedbackForwardingEnabledResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetIdentityFeedbackForwardingEnabledResponse.prototype, "statusCode", void 0);
    return GetSetIdentityFeedbackForwardingEnabledResponse;
}(SpeakeasyBase));
export { GetSetIdentityFeedbackForwardingEnabledResponse };
