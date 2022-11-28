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
export var GetGetAssociatedIpv6PoolCidrsActionEnum;
(function (GetGetAssociatedIpv6PoolCidrsActionEnum) {
    GetGetAssociatedIpv6PoolCidrsActionEnum["GetAssociatedIpv6PoolCidrs"] = "GetAssociatedIpv6PoolCidrs";
})(GetGetAssociatedIpv6PoolCidrsActionEnum || (GetGetAssociatedIpv6PoolCidrsActionEnum = {}));
export var GetGetAssociatedIpv6PoolCidrsVersionEnum;
(function (GetGetAssociatedIpv6PoolCidrsVersionEnum) {
    GetGetAssociatedIpv6PoolCidrsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetGetAssociatedIpv6PoolCidrsVersionEnum || (GetGetAssociatedIpv6PoolCidrsVersionEnum = {}));
var GetGetAssociatedIpv6PoolCidrsQueryParams = /** @class */ (function (_super) {
    __extends(GetGetAssociatedIpv6PoolCidrsQueryParams, _super);
    function GetGetAssociatedIpv6PoolCidrsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetAssociatedIpv6PoolCidrsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetGetAssociatedIpv6PoolCidrsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetGetAssociatedIpv6PoolCidrsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetGetAssociatedIpv6PoolCidrsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PoolId" }),
        __metadata("design:type", String)
    ], GetGetAssociatedIpv6PoolCidrsQueryParams.prototype, "poolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetAssociatedIpv6PoolCidrsQueryParams.prototype, "version", void 0);
    return GetGetAssociatedIpv6PoolCidrsQueryParams;
}(SpeakeasyBase));
export { GetGetAssociatedIpv6PoolCidrsQueryParams };
var GetGetAssociatedIpv6PoolCidrsHeaders = /** @class */ (function (_super) {
    __extends(GetGetAssociatedIpv6PoolCidrsHeaders, _super);
    function GetGetAssociatedIpv6PoolCidrsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetAssociatedIpv6PoolCidrsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetAssociatedIpv6PoolCidrsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetAssociatedIpv6PoolCidrsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetAssociatedIpv6PoolCidrsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetAssociatedIpv6PoolCidrsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetAssociatedIpv6PoolCidrsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetAssociatedIpv6PoolCidrsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetAssociatedIpv6PoolCidrsHeaders;
}(SpeakeasyBase));
export { GetGetAssociatedIpv6PoolCidrsHeaders };
var GetGetAssociatedIpv6PoolCidrsRequest = /** @class */ (function (_super) {
    __extends(GetGetAssociatedIpv6PoolCidrsRequest, _super);
    function GetGetAssociatedIpv6PoolCidrsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetAssociatedIpv6PoolCidrsQueryParams)
    ], GetGetAssociatedIpv6PoolCidrsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetAssociatedIpv6PoolCidrsHeaders)
    ], GetGetAssociatedIpv6PoolCidrsRequest.prototype, "headers", void 0);
    return GetGetAssociatedIpv6PoolCidrsRequest;
}(SpeakeasyBase));
export { GetGetAssociatedIpv6PoolCidrsRequest };
var GetGetAssociatedIpv6PoolCidrsResponse = /** @class */ (function (_super) {
    __extends(GetGetAssociatedIpv6PoolCidrsResponse, _super);
    function GetGetAssociatedIpv6PoolCidrsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetAssociatedIpv6PoolCidrsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetAssociatedIpv6PoolCidrsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetAssociatedIpv6PoolCidrsResponse.prototype, "statusCode", void 0);
    return GetGetAssociatedIpv6PoolCidrsResponse;
}(SpeakeasyBase));
export { GetGetAssociatedIpv6PoolCidrsResponse };
