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
export var GetSetIdentityMailFromDomainActionEnum;
(function (GetSetIdentityMailFromDomainActionEnum) {
    GetSetIdentityMailFromDomainActionEnum["SetIdentityMailFromDomain"] = "SetIdentityMailFromDomain";
})(GetSetIdentityMailFromDomainActionEnum || (GetSetIdentityMailFromDomainActionEnum = {}));
export var GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum;
(function (GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum) {
    GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum["UseDefaultValue"] = "UseDefaultValue";
    GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum["RejectMessage"] = "RejectMessage";
})(GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum || (GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum = {}));
export var GetSetIdentityMailFromDomainVersionEnum;
(function (GetSetIdentityMailFromDomainVersionEnum) {
    GetSetIdentityMailFromDomainVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetSetIdentityMailFromDomainVersionEnum || (GetSetIdentityMailFromDomainVersionEnum = {}));
var GetSetIdentityMailFromDomainQueryParams = /** @class */ (function (_super) {
    __extends(GetSetIdentityMailFromDomainQueryParams, _super);
    function GetSetIdentityMailFromDomainQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetIdentityMailFromDomainQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BehaviorOnMXFailure" }),
        __metadata("design:type", String)
    ], GetSetIdentityMailFromDomainQueryParams.prototype, "behaviorOnMxFailure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", String)
    ], GetSetIdentityMailFromDomainQueryParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MailFromDomain" }),
        __metadata("design:type", String)
    ], GetSetIdentityMailFromDomainQueryParams.prototype, "mailFromDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetIdentityMailFromDomainQueryParams.prototype, "version", void 0);
    return GetSetIdentityMailFromDomainQueryParams;
}(SpeakeasyBase));
export { GetSetIdentityMailFromDomainQueryParams };
var GetSetIdentityMailFromDomainHeaders = /** @class */ (function (_super) {
    __extends(GetSetIdentityMailFromDomainHeaders, _super);
    function GetSetIdentityMailFromDomainHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetIdentityMailFromDomainHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetIdentityMailFromDomainHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetIdentityMailFromDomainHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetIdentityMailFromDomainHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetIdentityMailFromDomainHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetIdentityMailFromDomainHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetIdentityMailFromDomainHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetIdentityMailFromDomainHeaders;
}(SpeakeasyBase));
export { GetSetIdentityMailFromDomainHeaders };
var GetSetIdentityMailFromDomainRequest = /** @class */ (function (_super) {
    __extends(GetSetIdentityMailFromDomainRequest, _super);
    function GetSetIdentityMailFromDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetIdentityMailFromDomainQueryParams)
    ], GetSetIdentityMailFromDomainRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetIdentityMailFromDomainHeaders)
    ], GetSetIdentityMailFromDomainRequest.prototype, "headers", void 0);
    return GetSetIdentityMailFromDomainRequest;
}(SpeakeasyBase));
export { GetSetIdentityMailFromDomainRequest };
var GetSetIdentityMailFromDomainResponse = /** @class */ (function (_super) {
    __extends(GetSetIdentityMailFromDomainResponse, _super);
    function GetSetIdentityMailFromDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSetIdentityMailFromDomainResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetIdentityMailFromDomainResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetIdentityMailFromDomainResponse.prototype, "statusCode", void 0);
    return GetSetIdentityMailFromDomainResponse;
}(SpeakeasyBase));
export { GetSetIdentityMailFromDomainResponse };
