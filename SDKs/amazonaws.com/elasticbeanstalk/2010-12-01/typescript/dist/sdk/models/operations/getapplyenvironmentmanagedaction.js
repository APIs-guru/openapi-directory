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
export var GetApplyEnvironmentManagedActionActionEnum;
(function (GetApplyEnvironmentManagedActionActionEnum) {
    GetApplyEnvironmentManagedActionActionEnum["ApplyEnvironmentManagedAction"] = "ApplyEnvironmentManagedAction";
})(GetApplyEnvironmentManagedActionActionEnum || (GetApplyEnvironmentManagedActionActionEnum = {}));
export var GetApplyEnvironmentManagedActionVersionEnum;
(function (GetApplyEnvironmentManagedActionVersionEnum) {
    GetApplyEnvironmentManagedActionVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetApplyEnvironmentManagedActionVersionEnum || (GetApplyEnvironmentManagedActionVersionEnum = {}));
var GetApplyEnvironmentManagedActionQueryParams = /** @class */ (function (_super) {
    __extends(GetApplyEnvironmentManagedActionQueryParams, _super);
    function GetApplyEnvironmentManagedActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetApplyEnvironmentManagedActionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ActionId" }),
        __metadata("design:type", String)
    ], GetApplyEnvironmentManagedActionQueryParams.prototype, "actionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" }),
        __metadata("design:type", String)
    ], GetApplyEnvironmentManagedActionQueryParams.prototype, "environmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" }),
        __metadata("design:type", String)
    ], GetApplyEnvironmentManagedActionQueryParams.prototype, "environmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetApplyEnvironmentManagedActionQueryParams.prototype, "version", void 0);
    return GetApplyEnvironmentManagedActionQueryParams;
}(SpeakeasyBase));
export { GetApplyEnvironmentManagedActionQueryParams };
var GetApplyEnvironmentManagedActionHeaders = /** @class */ (function (_super) {
    __extends(GetApplyEnvironmentManagedActionHeaders, _super);
    function GetApplyEnvironmentManagedActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetApplyEnvironmentManagedActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetApplyEnvironmentManagedActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetApplyEnvironmentManagedActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetApplyEnvironmentManagedActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetApplyEnvironmentManagedActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetApplyEnvironmentManagedActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetApplyEnvironmentManagedActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetApplyEnvironmentManagedActionHeaders;
}(SpeakeasyBase));
export { GetApplyEnvironmentManagedActionHeaders };
var GetApplyEnvironmentManagedActionRequest = /** @class */ (function (_super) {
    __extends(GetApplyEnvironmentManagedActionRequest, _super);
    function GetApplyEnvironmentManagedActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApplyEnvironmentManagedActionQueryParams)
    ], GetApplyEnvironmentManagedActionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApplyEnvironmentManagedActionHeaders)
    ], GetApplyEnvironmentManagedActionRequest.prototype, "headers", void 0);
    return GetApplyEnvironmentManagedActionRequest;
}(SpeakeasyBase));
export { GetApplyEnvironmentManagedActionRequest };
var GetApplyEnvironmentManagedActionResponse = /** @class */ (function (_super) {
    __extends(GetApplyEnvironmentManagedActionResponse, _super);
    function GetApplyEnvironmentManagedActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApplyEnvironmentManagedActionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApplyEnvironmentManagedActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApplyEnvironmentManagedActionResponse.prototype, "statusCode", void 0);
    return GetApplyEnvironmentManagedActionResponse;
}(SpeakeasyBase));
export { GetApplyEnvironmentManagedActionResponse };
