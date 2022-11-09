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
export var GetTerminateEnvironmentActionEnum;
(function (GetTerminateEnvironmentActionEnum) {
    GetTerminateEnvironmentActionEnum["TerminateEnvironment"] = "TerminateEnvironment";
})(GetTerminateEnvironmentActionEnum || (GetTerminateEnvironmentActionEnum = {}));
export var GetTerminateEnvironmentVersionEnum;
(function (GetTerminateEnvironmentVersionEnum) {
    GetTerminateEnvironmentVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetTerminateEnvironmentVersionEnum || (GetTerminateEnvironmentVersionEnum = {}));
var GetTerminateEnvironmentQueryParams = /** @class */ (function (_super) {
    __extends(GetTerminateEnvironmentQueryParams, _super);
    function GetTerminateEnvironmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetTerminateEnvironmentQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" }),
        __metadata("design:type", String)
    ], GetTerminateEnvironmentQueryParams.prototype, "environmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" }),
        __metadata("design:type", String)
    ], GetTerminateEnvironmentQueryParams.prototype, "environmentName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ForceTerminate" }),
        __metadata("design:type", Boolean)
    ], GetTerminateEnvironmentQueryParams.prototype, "forceTerminate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TerminateResources" }),
        __metadata("design:type", Boolean)
    ], GetTerminateEnvironmentQueryParams.prototype, "terminateResources", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetTerminateEnvironmentQueryParams.prototype, "version", void 0);
    return GetTerminateEnvironmentQueryParams;
}(SpeakeasyBase));
export { GetTerminateEnvironmentQueryParams };
var GetTerminateEnvironmentHeaders = /** @class */ (function (_super) {
    __extends(GetTerminateEnvironmentHeaders, _super);
    function GetTerminateEnvironmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetTerminateEnvironmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetTerminateEnvironmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetTerminateEnvironmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetTerminateEnvironmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetTerminateEnvironmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetTerminateEnvironmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetTerminateEnvironmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetTerminateEnvironmentHeaders;
}(SpeakeasyBase));
export { GetTerminateEnvironmentHeaders };
var GetTerminateEnvironmentRequest = /** @class */ (function (_super) {
    __extends(GetTerminateEnvironmentRequest, _super);
    function GetTerminateEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTerminateEnvironmentQueryParams)
    ], GetTerminateEnvironmentRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTerminateEnvironmentHeaders)
    ], GetTerminateEnvironmentRequest.prototype, "headers", void 0);
    return GetTerminateEnvironmentRequest;
}(SpeakeasyBase));
export { GetTerminateEnvironmentRequest };
var GetTerminateEnvironmentResponse = /** @class */ (function (_super) {
    __extends(GetTerminateEnvironmentResponse, _super);
    function GetTerminateEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetTerminateEnvironmentResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTerminateEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTerminateEnvironmentResponse.prototype, "statusCode", void 0);
    return GetTerminateEnvironmentResponse;
}(SpeakeasyBase));
export { GetTerminateEnvironmentResponse };
