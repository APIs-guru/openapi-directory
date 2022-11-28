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
export var GetListServiceSpecificCredentialsActionEnum;
(function (GetListServiceSpecificCredentialsActionEnum) {
    GetListServiceSpecificCredentialsActionEnum["ListServiceSpecificCredentials"] = "ListServiceSpecificCredentials";
})(GetListServiceSpecificCredentialsActionEnum || (GetListServiceSpecificCredentialsActionEnum = {}));
export var GetListServiceSpecificCredentialsVersionEnum;
(function (GetListServiceSpecificCredentialsVersionEnum) {
    GetListServiceSpecificCredentialsVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListServiceSpecificCredentialsVersionEnum || (GetListServiceSpecificCredentialsVersionEnum = {}));
var GetListServiceSpecificCredentialsQueryParams = /** @class */ (function (_super) {
    __extends(GetListServiceSpecificCredentialsQueryParams, _super);
    function GetListServiceSpecificCredentialsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListServiceSpecificCredentialsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceName" }),
        __metadata("design:type", String)
    ], GetListServiceSpecificCredentialsQueryParams.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetListServiceSpecificCredentialsQueryParams.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListServiceSpecificCredentialsQueryParams.prototype, "version", void 0);
    return GetListServiceSpecificCredentialsQueryParams;
}(SpeakeasyBase));
export { GetListServiceSpecificCredentialsQueryParams };
var GetListServiceSpecificCredentialsHeaders = /** @class */ (function (_super) {
    __extends(GetListServiceSpecificCredentialsHeaders, _super);
    function GetListServiceSpecificCredentialsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListServiceSpecificCredentialsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListServiceSpecificCredentialsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListServiceSpecificCredentialsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListServiceSpecificCredentialsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListServiceSpecificCredentialsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListServiceSpecificCredentialsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListServiceSpecificCredentialsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListServiceSpecificCredentialsHeaders;
}(SpeakeasyBase));
export { GetListServiceSpecificCredentialsHeaders };
var GetListServiceSpecificCredentialsRequest = /** @class */ (function (_super) {
    __extends(GetListServiceSpecificCredentialsRequest, _super);
    function GetListServiceSpecificCredentialsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListServiceSpecificCredentialsQueryParams)
    ], GetListServiceSpecificCredentialsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListServiceSpecificCredentialsHeaders)
    ], GetListServiceSpecificCredentialsRequest.prototype, "headers", void 0);
    return GetListServiceSpecificCredentialsRequest;
}(SpeakeasyBase));
export { GetListServiceSpecificCredentialsRequest };
var GetListServiceSpecificCredentialsResponse = /** @class */ (function (_super) {
    __extends(GetListServiceSpecificCredentialsResponse, _super);
    function GetListServiceSpecificCredentialsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListServiceSpecificCredentialsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListServiceSpecificCredentialsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListServiceSpecificCredentialsResponse.prototype, "statusCode", void 0);
    return GetListServiceSpecificCredentialsResponse;
}(SpeakeasyBase));
export { GetListServiceSpecificCredentialsResponse };
