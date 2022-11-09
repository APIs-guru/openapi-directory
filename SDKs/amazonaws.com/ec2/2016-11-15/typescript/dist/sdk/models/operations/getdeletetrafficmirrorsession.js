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
export var GetDeleteTrafficMirrorSessionActionEnum;
(function (GetDeleteTrafficMirrorSessionActionEnum) {
    GetDeleteTrafficMirrorSessionActionEnum["DeleteTrafficMirrorSession"] = "DeleteTrafficMirrorSession";
})(GetDeleteTrafficMirrorSessionActionEnum || (GetDeleteTrafficMirrorSessionActionEnum = {}));
export var GetDeleteTrafficMirrorSessionVersionEnum;
(function (GetDeleteTrafficMirrorSessionVersionEnum) {
    GetDeleteTrafficMirrorSessionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteTrafficMirrorSessionVersionEnum || (GetDeleteTrafficMirrorSessionVersionEnum = {}));
var GetDeleteTrafficMirrorSessionQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteTrafficMirrorSessionQueryParams, _super);
    function GetDeleteTrafficMirrorSessionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorSessionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteTrafficMirrorSessionQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorSessionId" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorSessionQueryParams.prototype, "trafficMirrorSessionId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorSessionQueryParams.prototype, "version", void 0);
    return GetDeleteTrafficMirrorSessionQueryParams;
}(SpeakeasyBase));
export { GetDeleteTrafficMirrorSessionQueryParams };
var GetDeleteTrafficMirrorSessionHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteTrafficMirrorSessionHeaders, _super);
    function GetDeleteTrafficMirrorSessionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorSessionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorSessionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorSessionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorSessionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorSessionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorSessionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorSessionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteTrafficMirrorSessionHeaders;
}(SpeakeasyBase));
export { GetDeleteTrafficMirrorSessionHeaders };
var GetDeleteTrafficMirrorSessionRequest = /** @class */ (function (_super) {
    __extends(GetDeleteTrafficMirrorSessionRequest, _super);
    function GetDeleteTrafficMirrorSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteTrafficMirrorSessionQueryParams)
    ], GetDeleteTrafficMirrorSessionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteTrafficMirrorSessionHeaders)
    ], GetDeleteTrafficMirrorSessionRequest.prototype, "headers", void 0);
    return GetDeleteTrafficMirrorSessionRequest;
}(SpeakeasyBase));
export { GetDeleteTrafficMirrorSessionRequest };
var GetDeleteTrafficMirrorSessionResponse = /** @class */ (function (_super) {
    __extends(GetDeleteTrafficMirrorSessionResponse, _super);
    function GetDeleteTrafficMirrorSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteTrafficMirrorSessionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorSessionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteTrafficMirrorSessionResponse.prototype, "statusCode", void 0);
    return GetDeleteTrafficMirrorSessionResponse;
}(SpeakeasyBase));
export { GetDeleteTrafficMirrorSessionResponse };
