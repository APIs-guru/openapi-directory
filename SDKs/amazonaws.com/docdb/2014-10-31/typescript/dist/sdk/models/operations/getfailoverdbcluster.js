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
export var GetFailoverDbClusterActionEnum;
(function (GetFailoverDbClusterActionEnum) {
    GetFailoverDbClusterActionEnum["FailoverDbCluster"] = "FailoverDBCluster";
})(GetFailoverDbClusterActionEnum || (GetFailoverDbClusterActionEnum = {}));
export var GetFailoverDbClusterVersionEnum;
(function (GetFailoverDbClusterVersionEnum) {
    GetFailoverDbClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetFailoverDbClusterVersionEnum || (GetFailoverDbClusterVersionEnum = {}));
var GetFailoverDbClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetFailoverDbClusterQueryParams, _super);
    function GetFailoverDbClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetFailoverDbClusterQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetFailoverDbClusterQueryParams.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TargetDBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetFailoverDbClusterQueryParams.prototype, "targetDbInstanceIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetFailoverDbClusterQueryParams.prototype, "version", void 0);
    return GetFailoverDbClusterQueryParams;
}(SpeakeasyBase));
export { GetFailoverDbClusterQueryParams };
var GetFailoverDbClusterHeaders = /** @class */ (function (_super) {
    __extends(GetFailoverDbClusterHeaders, _super);
    function GetFailoverDbClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetFailoverDbClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetFailoverDbClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetFailoverDbClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetFailoverDbClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetFailoverDbClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetFailoverDbClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetFailoverDbClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetFailoverDbClusterHeaders;
}(SpeakeasyBase));
export { GetFailoverDbClusterHeaders };
var GetFailoverDbClusterRequest = /** @class */ (function (_super) {
    __extends(GetFailoverDbClusterRequest, _super);
    function GetFailoverDbClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFailoverDbClusterQueryParams)
    ], GetFailoverDbClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFailoverDbClusterHeaders)
    ], GetFailoverDbClusterRequest.prototype, "headers", void 0);
    return GetFailoverDbClusterRequest;
}(SpeakeasyBase));
export { GetFailoverDbClusterRequest };
var GetFailoverDbClusterResponse = /** @class */ (function (_super) {
    __extends(GetFailoverDbClusterResponse, _super);
    function GetFailoverDbClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetFailoverDbClusterResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFailoverDbClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFailoverDbClusterResponse.prototype, "statusCode", void 0);
    return GetFailoverDbClusterResponse;
}(SpeakeasyBase));
export { GetFailoverDbClusterResponse };
