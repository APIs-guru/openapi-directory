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
export var GetRemoveFromGlobalClusterActionEnum;
(function (GetRemoveFromGlobalClusterActionEnum) {
    GetRemoveFromGlobalClusterActionEnum["RemoveFromGlobalCluster"] = "RemoveFromGlobalCluster";
})(GetRemoveFromGlobalClusterActionEnum || (GetRemoveFromGlobalClusterActionEnum = {}));
export var GetRemoveFromGlobalClusterVersionEnum;
(function (GetRemoveFromGlobalClusterVersionEnum) {
    GetRemoveFromGlobalClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetRemoveFromGlobalClusterVersionEnum || (GetRemoveFromGlobalClusterVersionEnum = {}));
var GetRemoveFromGlobalClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetRemoveFromGlobalClusterQueryParams, _super);
    function GetRemoveFromGlobalClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRemoveFromGlobalClusterQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DbClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetRemoveFromGlobalClusterQueryParams.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GlobalClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetRemoveFromGlobalClusterQueryParams.prototype, "globalClusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRemoveFromGlobalClusterQueryParams.prototype, "version", void 0);
    return GetRemoveFromGlobalClusterQueryParams;
}(SpeakeasyBase));
export { GetRemoveFromGlobalClusterQueryParams };
var GetRemoveFromGlobalClusterHeaders = /** @class */ (function (_super) {
    __extends(GetRemoveFromGlobalClusterHeaders, _super);
    function GetRemoveFromGlobalClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRemoveFromGlobalClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRemoveFromGlobalClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRemoveFromGlobalClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRemoveFromGlobalClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRemoveFromGlobalClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRemoveFromGlobalClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRemoveFromGlobalClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRemoveFromGlobalClusterHeaders;
}(SpeakeasyBase));
export { GetRemoveFromGlobalClusterHeaders };
var GetRemoveFromGlobalClusterRequest = /** @class */ (function (_super) {
    __extends(GetRemoveFromGlobalClusterRequest, _super);
    function GetRemoveFromGlobalClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRemoveFromGlobalClusterQueryParams)
    ], GetRemoveFromGlobalClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRemoveFromGlobalClusterHeaders)
    ], GetRemoveFromGlobalClusterRequest.prototype, "headers", void 0);
    return GetRemoveFromGlobalClusterRequest;
}(SpeakeasyBase));
export { GetRemoveFromGlobalClusterRequest };
var GetRemoveFromGlobalClusterResponse = /** @class */ (function (_super) {
    __extends(GetRemoveFromGlobalClusterResponse, _super);
    function GetRemoveFromGlobalClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRemoveFromGlobalClusterResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRemoveFromGlobalClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRemoveFromGlobalClusterResponse.prototype, "statusCode", void 0);
    return GetRemoveFromGlobalClusterResponse;
}(SpeakeasyBase));
export { GetRemoveFromGlobalClusterResponse };
