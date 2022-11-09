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
export var GetDeleteVpcEndpointsActionEnum;
(function (GetDeleteVpcEndpointsActionEnum) {
    GetDeleteVpcEndpointsActionEnum["DeleteVpcEndpoints"] = "DeleteVpcEndpoints";
})(GetDeleteVpcEndpointsActionEnum || (GetDeleteVpcEndpointsActionEnum = {}));
export var GetDeleteVpcEndpointsVersionEnum;
(function (GetDeleteVpcEndpointsVersionEnum) {
    GetDeleteVpcEndpointsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteVpcEndpointsVersionEnum || (GetDeleteVpcEndpointsVersionEnum = {}));
var GetDeleteVpcEndpointsQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteVpcEndpointsQueryParams, _super);
    function GetDeleteVpcEndpointsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteVpcEndpointsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointsQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" }),
        __metadata("design:type", Array)
    ], GetDeleteVpcEndpointsQueryParams.prototype, "vpcEndpointId", void 0);
    return GetDeleteVpcEndpointsQueryParams;
}(SpeakeasyBase));
export { GetDeleteVpcEndpointsQueryParams };
var GetDeleteVpcEndpointsHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteVpcEndpointsHeaders, _super);
    function GetDeleteVpcEndpointsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteVpcEndpointsHeaders;
}(SpeakeasyBase));
export { GetDeleteVpcEndpointsHeaders };
var GetDeleteVpcEndpointsRequest = /** @class */ (function (_super) {
    __extends(GetDeleteVpcEndpointsRequest, _super);
    function GetDeleteVpcEndpointsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteVpcEndpointsQueryParams)
    ], GetDeleteVpcEndpointsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteVpcEndpointsHeaders)
    ], GetDeleteVpcEndpointsRequest.prototype, "headers", void 0);
    return GetDeleteVpcEndpointsRequest;
}(SpeakeasyBase));
export { GetDeleteVpcEndpointsRequest };
var GetDeleteVpcEndpointsResponse = /** @class */ (function (_super) {
    __extends(GetDeleteVpcEndpointsResponse, _super);
    function GetDeleteVpcEndpointsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteVpcEndpointsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteVpcEndpointsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteVpcEndpointsResponse.prototype, "statusCode", void 0);
    return GetDeleteVpcEndpointsResponse;
}(SpeakeasyBase));
export { GetDeleteVpcEndpointsResponse };
