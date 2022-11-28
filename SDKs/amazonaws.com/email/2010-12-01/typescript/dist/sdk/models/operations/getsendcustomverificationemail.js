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
export var GetSendCustomVerificationEmailActionEnum;
(function (GetSendCustomVerificationEmailActionEnum) {
    GetSendCustomVerificationEmailActionEnum["SendCustomVerificationEmail"] = "SendCustomVerificationEmail";
})(GetSendCustomVerificationEmailActionEnum || (GetSendCustomVerificationEmailActionEnum = {}));
export var GetSendCustomVerificationEmailVersionEnum;
(function (GetSendCustomVerificationEmailVersionEnum) {
    GetSendCustomVerificationEmailVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetSendCustomVerificationEmailVersionEnum || (GetSendCustomVerificationEmailVersionEnum = {}));
var GetSendCustomVerificationEmailQueryParams = /** @class */ (function (_super) {
    __extends(GetSendCustomVerificationEmailQueryParams, _super);
    function GetSendCustomVerificationEmailQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSendCustomVerificationEmailQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], GetSendCustomVerificationEmailQueryParams.prototype, "configurationSetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmailAddress" }),
        __metadata("design:type", String)
    ], GetSendCustomVerificationEmailQueryParams.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TemplateName" }),
        __metadata("design:type", String)
    ], GetSendCustomVerificationEmailQueryParams.prototype, "templateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSendCustomVerificationEmailQueryParams.prototype, "version", void 0);
    return GetSendCustomVerificationEmailQueryParams;
}(SpeakeasyBase));
export { GetSendCustomVerificationEmailQueryParams };
var GetSendCustomVerificationEmailHeaders = /** @class */ (function (_super) {
    __extends(GetSendCustomVerificationEmailHeaders, _super);
    function GetSendCustomVerificationEmailHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSendCustomVerificationEmailHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSendCustomVerificationEmailHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSendCustomVerificationEmailHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSendCustomVerificationEmailHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSendCustomVerificationEmailHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSendCustomVerificationEmailHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSendCustomVerificationEmailHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSendCustomVerificationEmailHeaders;
}(SpeakeasyBase));
export { GetSendCustomVerificationEmailHeaders };
var GetSendCustomVerificationEmailRequest = /** @class */ (function (_super) {
    __extends(GetSendCustomVerificationEmailRequest, _super);
    function GetSendCustomVerificationEmailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSendCustomVerificationEmailQueryParams)
    ], GetSendCustomVerificationEmailRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSendCustomVerificationEmailHeaders)
    ], GetSendCustomVerificationEmailRequest.prototype, "headers", void 0);
    return GetSendCustomVerificationEmailRequest;
}(SpeakeasyBase));
export { GetSendCustomVerificationEmailRequest };
var GetSendCustomVerificationEmailResponse = /** @class */ (function (_super) {
    __extends(GetSendCustomVerificationEmailResponse, _super);
    function GetSendCustomVerificationEmailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSendCustomVerificationEmailResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSendCustomVerificationEmailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSendCustomVerificationEmailResponse.prototype, "statusCode", void 0);
    return GetSendCustomVerificationEmailResponse;
}(SpeakeasyBase));
export { GetSendCustomVerificationEmailResponse };
