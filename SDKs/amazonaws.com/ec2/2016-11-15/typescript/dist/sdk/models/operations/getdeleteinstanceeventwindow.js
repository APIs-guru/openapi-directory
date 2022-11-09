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
export var GetDeleteInstanceEventWindowActionEnum;
(function (GetDeleteInstanceEventWindowActionEnum) {
    GetDeleteInstanceEventWindowActionEnum["DeleteInstanceEventWindow"] = "DeleteInstanceEventWindow";
})(GetDeleteInstanceEventWindowActionEnum || (GetDeleteInstanceEventWindowActionEnum = {}));
export var GetDeleteInstanceEventWindowVersionEnum;
(function (GetDeleteInstanceEventWindowVersionEnum) {
    GetDeleteInstanceEventWindowVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteInstanceEventWindowVersionEnum || (GetDeleteInstanceEventWindowVersionEnum = {}));
var GetDeleteInstanceEventWindowQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteInstanceEventWindowQueryParams, _super);
    function GetDeleteInstanceEventWindowQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceEventWindowQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteInstanceEventWindowQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ForceDelete" }),
        __metadata("design:type", Boolean)
    ], GetDeleteInstanceEventWindowQueryParams.prototype, "forceDelete", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceEventWindowId" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceEventWindowQueryParams.prototype, "instanceEventWindowId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceEventWindowQueryParams.prototype, "version", void 0);
    return GetDeleteInstanceEventWindowQueryParams;
}(SpeakeasyBase));
export { GetDeleteInstanceEventWindowQueryParams };
var GetDeleteInstanceEventWindowHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteInstanceEventWindowHeaders, _super);
    function GetDeleteInstanceEventWindowHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceEventWindowHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceEventWindowHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceEventWindowHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceEventWindowHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceEventWindowHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceEventWindowHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceEventWindowHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteInstanceEventWindowHeaders;
}(SpeakeasyBase));
export { GetDeleteInstanceEventWindowHeaders };
var GetDeleteInstanceEventWindowRequest = /** @class */ (function (_super) {
    __extends(GetDeleteInstanceEventWindowRequest, _super);
    function GetDeleteInstanceEventWindowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteInstanceEventWindowQueryParams)
    ], GetDeleteInstanceEventWindowRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteInstanceEventWindowHeaders)
    ], GetDeleteInstanceEventWindowRequest.prototype, "headers", void 0);
    return GetDeleteInstanceEventWindowRequest;
}(SpeakeasyBase));
export { GetDeleteInstanceEventWindowRequest };
var GetDeleteInstanceEventWindowResponse = /** @class */ (function (_super) {
    __extends(GetDeleteInstanceEventWindowResponse, _super);
    function GetDeleteInstanceEventWindowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteInstanceEventWindowResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteInstanceEventWindowResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteInstanceEventWindowResponse.prototype, "statusCode", void 0);
    return GetDeleteInstanceEventWindowResponse;
}(SpeakeasyBase));
export { GetDeleteInstanceEventWindowResponse };
