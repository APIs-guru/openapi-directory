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
export var GetDeletePolicyVersionActionEnum;
(function (GetDeletePolicyVersionActionEnum) {
    GetDeletePolicyVersionActionEnum["DeletePolicyVersion"] = "DeletePolicyVersion";
})(GetDeletePolicyVersionActionEnum || (GetDeletePolicyVersionActionEnum = {}));
export var GetDeletePolicyVersionVersionEnum;
(function (GetDeletePolicyVersionVersionEnum) {
    GetDeletePolicyVersionVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetDeletePolicyVersionVersionEnum || (GetDeletePolicyVersionVersionEnum = {}));
var GetDeletePolicyVersionQueryParams = /** @class */ (function (_super) {
    __extends(GetDeletePolicyVersionQueryParams, _super);
    function GetDeletePolicyVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeletePolicyVersionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" }),
        __metadata("design:type", String)
    ], GetDeletePolicyVersionQueryParams.prototype, "policyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeletePolicyVersionQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VersionId" }),
        __metadata("design:type", String)
    ], GetDeletePolicyVersionQueryParams.prototype, "versionId", void 0);
    return GetDeletePolicyVersionQueryParams;
}(SpeakeasyBase));
export { GetDeletePolicyVersionQueryParams };
var GetDeletePolicyVersionHeaders = /** @class */ (function (_super) {
    __extends(GetDeletePolicyVersionHeaders, _super);
    function GetDeletePolicyVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeletePolicyVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeletePolicyVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeletePolicyVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeletePolicyVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeletePolicyVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeletePolicyVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeletePolicyVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeletePolicyVersionHeaders;
}(SpeakeasyBase));
export { GetDeletePolicyVersionHeaders };
var GetDeletePolicyVersionRequest = /** @class */ (function (_super) {
    __extends(GetDeletePolicyVersionRequest, _super);
    function GetDeletePolicyVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeletePolicyVersionQueryParams)
    ], GetDeletePolicyVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeletePolicyVersionHeaders)
    ], GetDeletePolicyVersionRequest.prototype, "headers", void 0);
    return GetDeletePolicyVersionRequest;
}(SpeakeasyBase));
export { GetDeletePolicyVersionRequest };
var GetDeletePolicyVersionResponse = /** @class */ (function (_super) {
    __extends(GetDeletePolicyVersionResponse, _super);
    function GetDeletePolicyVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeletePolicyVersionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeletePolicyVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeletePolicyVersionResponse.prototype, "statusCode", void 0);
    return GetDeletePolicyVersionResponse;
}(SpeakeasyBase));
export { GetDeletePolicyVersionResponse };
