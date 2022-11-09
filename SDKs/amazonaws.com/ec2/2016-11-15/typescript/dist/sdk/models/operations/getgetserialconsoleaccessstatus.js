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
export var GetGetSerialConsoleAccessStatusActionEnum;
(function (GetGetSerialConsoleAccessStatusActionEnum) {
    GetGetSerialConsoleAccessStatusActionEnum["GetSerialConsoleAccessStatus"] = "GetSerialConsoleAccessStatus";
})(GetGetSerialConsoleAccessStatusActionEnum || (GetGetSerialConsoleAccessStatusActionEnum = {}));
export var GetGetSerialConsoleAccessStatusVersionEnum;
(function (GetGetSerialConsoleAccessStatusVersionEnum) {
    GetGetSerialConsoleAccessStatusVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetGetSerialConsoleAccessStatusVersionEnum || (GetGetSerialConsoleAccessStatusVersionEnum = {}));
var GetGetSerialConsoleAccessStatusQueryParams = /** @class */ (function (_super) {
    __extends(GetGetSerialConsoleAccessStatusQueryParams, _super);
    function GetGetSerialConsoleAccessStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetSerialConsoleAccessStatusQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetGetSerialConsoleAccessStatusQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetSerialConsoleAccessStatusQueryParams.prototype, "version", void 0);
    return GetGetSerialConsoleAccessStatusQueryParams;
}(SpeakeasyBase));
export { GetGetSerialConsoleAccessStatusQueryParams };
var GetGetSerialConsoleAccessStatusHeaders = /** @class */ (function (_super) {
    __extends(GetGetSerialConsoleAccessStatusHeaders, _super);
    function GetGetSerialConsoleAccessStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetSerialConsoleAccessStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetSerialConsoleAccessStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetSerialConsoleAccessStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetSerialConsoleAccessStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetSerialConsoleAccessStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetSerialConsoleAccessStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetSerialConsoleAccessStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetSerialConsoleAccessStatusHeaders;
}(SpeakeasyBase));
export { GetGetSerialConsoleAccessStatusHeaders };
var GetGetSerialConsoleAccessStatusRequest = /** @class */ (function (_super) {
    __extends(GetGetSerialConsoleAccessStatusRequest, _super);
    function GetGetSerialConsoleAccessStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetSerialConsoleAccessStatusQueryParams)
    ], GetGetSerialConsoleAccessStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetSerialConsoleAccessStatusHeaders)
    ], GetGetSerialConsoleAccessStatusRequest.prototype, "headers", void 0);
    return GetGetSerialConsoleAccessStatusRequest;
}(SpeakeasyBase));
export { GetGetSerialConsoleAccessStatusRequest };
var GetGetSerialConsoleAccessStatusResponse = /** @class */ (function (_super) {
    __extends(GetGetSerialConsoleAccessStatusResponse, _super);
    function GetGetSerialConsoleAccessStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetSerialConsoleAccessStatusResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetSerialConsoleAccessStatusResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetSerialConsoleAccessStatusResponse.prototype, "statusCode", void 0);
    return GetGetSerialConsoleAccessStatusResponse;
}(SpeakeasyBase));
export { GetGetSerialConsoleAccessStatusResponse };
