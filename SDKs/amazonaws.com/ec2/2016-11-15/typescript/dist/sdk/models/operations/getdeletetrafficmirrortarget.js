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
export var GetDeleteTrafficMirrorTargetActionEnum;
(function (GetDeleteTrafficMirrorTargetActionEnum) {
    GetDeleteTrafficMirrorTargetActionEnum["DeleteTrafficMirrorTarget"] = "DeleteTrafficMirrorTarget";
})(GetDeleteTrafficMirrorTargetActionEnum || (GetDeleteTrafficMirrorTargetActionEnum = {}));
export var GetDeleteTrafficMirrorTargetVersionEnum;
(function (GetDeleteTrafficMirrorTargetVersionEnum) {
    GetDeleteTrafficMirrorTargetVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteTrafficMirrorTargetVersionEnum || (GetDeleteTrafficMirrorTargetVersionEnum = {}));
var GetDeleteTrafficMirrorTargetQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteTrafficMirrorTargetQueryParams, _super);
    function GetDeleteTrafficMirrorTargetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorTargetQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteTrafficMirrorTargetQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorTargetId" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorTargetQueryParams.prototype, "trafficMirrorTargetId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorTargetQueryParams.prototype, "version", void 0);
    return GetDeleteTrafficMirrorTargetQueryParams;
}(SpeakeasyBase));
export { GetDeleteTrafficMirrorTargetQueryParams };
var GetDeleteTrafficMirrorTargetHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteTrafficMirrorTargetHeaders, _super);
    function GetDeleteTrafficMirrorTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorTargetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorTargetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorTargetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorTargetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorTargetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorTargetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorTargetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteTrafficMirrorTargetHeaders;
}(SpeakeasyBase));
export { GetDeleteTrafficMirrorTargetHeaders };
var GetDeleteTrafficMirrorTargetRequest = /** @class */ (function (_super) {
    __extends(GetDeleteTrafficMirrorTargetRequest, _super);
    function GetDeleteTrafficMirrorTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteTrafficMirrorTargetQueryParams)
    ], GetDeleteTrafficMirrorTargetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteTrafficMirrorTargetHeaders)
    ], GetDeleteTrafficMirrorTargetRequest.prototype, "headers", void 0);
    return GetDeleteTrafficMirrorTargetRequest;
}(SpeakeasyBase));
export { GetDeleteTrafficMirrorTargetRequest };
var GetDeleteTrafficMirrorTargetResponse = /** @class */ (function (_super) {
    __extends(GetDeleteTrafficMirrorTargetResponse, _super);
    function GetDeleteTrafficMirrorTargetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteTrafficMirrorTargetResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorTargetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteTrafficMirrorTargetResponse.prototype, "statusCode", void 0);
    return GetDeleteTrafficMirrorTargetResponse;
}(SpeakeasyBase));
export { GetDeleteTrafficMirrorTargetResponse };
