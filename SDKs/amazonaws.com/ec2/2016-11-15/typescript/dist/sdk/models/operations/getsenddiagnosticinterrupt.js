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
export var GetSendDiagnosticInterruptActionEnum;
(function (GetSendDiagnosticInterruptActionEnum) {
    GetSendDiagnosticInterruptActionEnum["SendDiagnosticInterrupt"] = "SendDiagnosticInterrupt";
})(GetSendDiagnosticInterruptActionEnum || (GetSendDiagnosticInterruptActionEnum = {}));
export var GetSendDiagnosticInterruptVersionEnum;
(function (GetSendDiagnosticInterruptVersionEnum) {
    GetSendDiagnosticInterruptVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetSendDiagnosticInterruptVersionEnum || (GetSendDiagnosticInterruptVersionEnum = {}));
var GetSendDiagnosticInterruptQueryParams = /** @class */ (function (_super) {
    __extends(GetSendDiagnosticInterruptQueryParams, _super);
    function GetSendDiagnosticInterruptQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSendDiagnosticInterruptQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetSendDiagnosticInterruptQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetSendDiagnosticInterruptQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSendDiagnosticInterruptQueryParams.prototype, "version", void 0);
    return GetSendDiagnosticInterruptQueryParams;
}(SpeakeasyBase));
export { GetSendDiagnosticInterruptQueryParams };
var GetSendDiagnosticInterruptHeaders = /** @class */ (function (_super) {
    __extends(GetSendDiagnosticInterruptHeaders, _super);
    function GetSendDiagnosticInterruptHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSendDiagnosticInterruptHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSendDiagnosticInterruptHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSendDiagnosticInterruptHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSendDiagnosticInterruptHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSendDiagnosticInterruptHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSendDiagnosticInterruptHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSendDiagnosticInterruptHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSendDiagnosticInterruptHeaders;
}(SpeakeasyBase));
export { GetSendDiagnosticInterruptHeaders };
var GetSendDiagnosticInterruptRequest = /** @class */ (function (_super) {
    __extends(GetSendDiagnosticInterruptRequest, _super);
    function GetSendDiagnosticInterruptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSendDiagnosticInterruptQueryParams)
    ], GetSendDiagnosticInterruptRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSendDiagnosticInterruptHeaders)
    ], GetSendDiagnosticInterruptRequest.prototype, "headers", void 0);
    return GetSendDiagnosticInterruptRequest;
}(SpeakeasyBase));
export { GetSendDiagnosticInterruptRequest };
var GetSendDiagnosticInterruptResponse = /** @class */ (function (_super) {
    __extends(GetSendDiagnosticInterruptResponse, _super);
    function GetSendDiagnosticInterruptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSendDiagnosticInterruptResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSendDiagnosticInterruptResponse.prototype, "statusCode", void 0);
    return GetSendDiagnosticInterruptResponse;
}(SpeakeasyBase));
export { GetSendDiagnosticInterruptResponse };
