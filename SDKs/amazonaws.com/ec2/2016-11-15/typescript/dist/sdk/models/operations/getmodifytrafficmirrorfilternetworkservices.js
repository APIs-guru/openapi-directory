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
export var GetModifyTrafficMirrorFilterNetworkServicesActionEnum;
(function (GetModifyTrafficMirrorFilterNetworkServicesActionEnum) {
    GetModifyTrafficMirrorFilterNetworkServicesActionEnum["ModifyTrafficMirrorFilterNetworkServices"] = "ModifyTrafficMirrorFilterNetworkServices";
})(GetModifyTrafficMirrorFilterNetworkServicesActionEnum || (GetModifyTrafficMirrorFilterNetworkServicesActionEnum = {}));
export var GetModifyTrafficMirrorFilterNetworkServicesVersionEnum;
(function (GetModifyTrafficMirrorFilterNetworkServicesVersionEnum) {
    GetModifyTrafficMirrorFilterNetworkServicesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyTrafficMirrorFilterNetworkServicesVersionEnum || (GetModifyTrafficMirrorFilterNetworkServicesVersionEnum = {}));
var GetModifyTrafficMirrorFilterNetworkServicesQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyTrafficMirrorFilterNetworkServicesQueryParams, _super);
    function GetModifyTrafficMirrorFilterNetworkServicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterNetworkServicesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AddNetworkService" }),
        __metadata("design:type", Array)
    ], GetModifyTrafficMirrorFilterNetworkServicesQueryParams.prototype, "addNetworkService", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyTrafficMirrorFilterNetworkServicesQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RemoveNetworkService" }),
        __metadata("design:type", Array)
    ], GetModifyTrafficMirrorFilterNetworkServicesQueryParams.prototype, "removeNetworkService", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorFilterId" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterNetworkServicesQueryParams.prototype, "trafficMirrorFilterId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterNetworkServicesQueryParams.prototype, "version", void 0);
    return GetModifyTrafficMirrorFilterNetworkServicesQueryParams;
}(SpeakeasyBase));
export { GetModifyTrafficMirrorFilterNetworkServicesQueryParams };
var GetModifyTrafficMirrorFilterNetworkServicesHeaders = /** @class */ (function (_super) {
    __extends(GetModifyTrafficMirrorFilterNetworkServicesHeaders, _super);
    function GetModifyTrafficMirrorFilterNetworkServicesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterNetworkServicesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterNetworkServicesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterNetworkServicesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterNetworkServicesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterNetworkServicesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterNetworkServicesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterNetworkServicesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyTrafficMirrorFilterNetworkServicesHeaders;
}(SpeakeasyBase));
export { GetModifyTrafficMirrorFilterNetworkServicesHeaders };
var GetModifyTrafficMirrorFilterNetworkServicesRequest = /** @class */ (function (_super) {
    __extends(GetModifyTrafficMirrorFilterNetworkServicesRequest, _super);
    function GetModifyTrafficMirrorFilterNetworkServicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyTrafficMirrorFilterNetworkServicesQueryParams)
    ], GetModifyTrafficMirrorFilterNetworkServicesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyTrafficMirrorFilterNetworkServicesHeaders)
    ], GetModifyTrafficMirrorFilterNetworkServicesRequest.prototype, "headers", void 0);
    return GetModifyTrafficMirrorFilterNetworkServicesRequest;
}(SpeakeasyBase));
export { GetModifyTrafficMirrorFilterNetworkServicesRequest };
var GetModifyTrafficMirrorFilterNetworkServicesResponse = /** @class */ (function (_super) {
    __extends(GetModifyTrafficMirrorFilterNetworkServicesResponse, _super);
    function GetModifyTrafficMirrorFilterNetworkServicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyTrafficMirrorFilterNetworkServicesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyTrafficMirrorFilterNetworkServicesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyTrafficMirrorFilterNetworkServicesResponse.prototype, "statusCode", void 0);
    return GetModifyTrafficMirrorFilterNetworkServicesResponse;
}(SpeakeasyBase));
export { GetModifyTrafficMirrorFilterNetworkServicesResponse };
