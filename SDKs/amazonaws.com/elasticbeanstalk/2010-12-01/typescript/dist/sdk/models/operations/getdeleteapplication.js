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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GetDeleteApplicationActionEnum;
(function (GetDeleteApplicationActionEnum) {
    GetDeleteApplicationActionEnum["DeleteApplication"] = "DeleteApplication";
})(GetDeleteApplicationActionEnum || (GetDeleteApplicationActionEnum = {}));
export var GetDeleteApplicationVersionEnum;
(function (GetDeleteApplicationVersionEnum) {
    GetDeleteApplicationVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDeleteApplicationVersionEnum || (GetDeleteApplicationVersionEnum = {}));
var GetDeleteApplicationQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteApplicationQueryParams, _super);
    function GetDeleteApplicationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationQueryParams.prototype, "applicationName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TerminateEnvByForce" }),
        __metadata("design:type", Boolean)
    ], GetDeleteApplicationQueryParams.prototype, "terminateEnvByForce", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationQueryParams.prototype, "version", void 0);
    return GetDeleteApplicationQueryParams;
}(SpeakeasyBase));
export { GetDeleteApplicationQueryParams };
var GetDeleteApplicationHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteApplicationHeaders, _super);
    function GetDeleteApplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteApplicationHeaders;
}(SpeakeasyBase));
export { GetDeleteApplicationHeaders };
var GetDeleteApplicationRequest = /** @class */ (function (_super) {
    __extends(GetDeleteApplicationRequest, _super);
    function GetDeleteApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteApplicationQueryParams)
    ], GetDeleteApplicationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteApplicationHeaders)
    ], GetDeleteApplicationRequest.prototype, "headers", void 0);
    return GetDeleteApplicationRequest;
}(SpeakeasyBase));
export { GetDeleteApplicationRequest };
var GetDeleteApplicationResponse = /** @class */ (function (_super) {
    __extends(GetDeleteApplicationResponse, _super);
    function GetDeleteApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteApplicationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteApplicationResponse.prototype, "statusCode", void 0);
    return GetDeleteApplicationResponse;
}(SpeakeasyBase));
export { GetDeleteApplicationResponse };
