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
export var GetModifyInstanceEventStartTimeActionEnum;
(function (GetModifyInstanceEventStartTimeActionEnum) {
    GetModifyInstanceEventStartTimeActionEnum["ModifyInstanceEventStartTime"] = "ModifyInstanceEventStartTime";
})(GetModifyInstanceEventStartTimeActionEnum || (GetModifyInstanceEventStartTimeActionEnum = {}));
export var GetModifyInstanceEventStartTimeVersionEnum;
(function (GetModifyInstanceEventStartTimeVersionEnum) {
    GetModifyInstanceEventStartTimeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyInstanceEventStartTimeVersionEnum || (GetModifyInstanceEventStartTimeVersionEnum = {}));
var GetModifyInstanceEventStartTimeQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyInstanceEventStartTimeQueryParams, _super);
    function GetModifyInstanceEventStartTimeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyInstanceEventStartTimeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyInstanceEventStartTimeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceEventId" }),
        __metadata("design:type", String)
    ], GetModifyInstanceEventStartTimeQueryParams.prototype, "instanceEventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetModifyInstanceEventStartTimeQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NotBefore" }),
        __metadata("design:type", Date)
    ], GetModifyInstanceEventStartTimeQueryParams.prototype, "notBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyInstanceEventStartTimeQueryParams.prototype, "version", void 0);
    return GetModifyInstanceEventStartTimeQueryParams;
}(SpeakeasyBase));
export { GetModifyInstanceEventStartTimeQueryParams };
var GetModifyInstanceEventStartTimeHeaders = /** @class */ (function (_super) {
    __extends(GetModifyInstanceEventStartTimeHeaders, _super);
    function GetModifyInstanceEventStartTimeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyInstanceEventStartTimeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyInstanceEventStartTimeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyInstanceEventStartTimeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyInstanceEventStartTimeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyInstanceEventStartTimeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyInstanceEventStartTimeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyInstanceEventStartTimeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyInstanceEventStartTimeHeaders;
}(SpeakeasyBase));
export { GetModifyInstanceEventStartTimeHeaders };
var GetModifyInstanceEventStartTimeRequest = /** @class */ (function (_super) {
    __extends(GetModifyInstanceEventStartTimeRequest, _super);
    function GetModifyInstanceEventStartTimeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyInstanceEventStartTimeQueryParams)
    ], GetModifyInstanceEventStartTimeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyInstanceEventStartTimeHeaders)
    ], GetModifyInstanceEventStartTimeRequest.prototype, "headers", void 0);
    return GetModifyInstanceEventStartTimeRequest;
}(SpeakeasyBase));
export { GetModifyInstanceEventStartTimeRequest };
var GetModifyInstanceEventStartTimeResponse = /** @class */ (function (_super) {
    __extends(GetModifyInstanceEventStartTimeResponse, _super);
    function GetModifyInstanceEventStartTimeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyInstanceEventStartTimeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyInstanceEventStartTimeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyInstanceEventStartTimeResponse.prototype, "statusCode", void 0);
    return GetModifyInstanceEventStartTimeResponse;
}(SpeakeasyBase));
export { GetModifyInstanceEventStartTimeResponse };
