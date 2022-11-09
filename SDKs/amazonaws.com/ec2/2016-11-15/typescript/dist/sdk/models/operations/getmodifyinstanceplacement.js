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
export var GetModifyInstancePlacementActionEnum;
(function (GetModifyInstancePlacementActionEnum) {
    GetModifyInstancePlacementActionEnum["ModifyInstancePlacement"] = "ModifyInstancePlacement";
})(GetModifyInstancePlacementActionEnum || (GetModifyInstancePlacementActionEnum = {}));
export var GetModifyInstancePlacementAffinityEnum;
(function (GetModifyInstancePlacementAffinityEnum) {
    GetModifyInstancePlacementAffinityEnum["Default"] = "default";
    GetModifyInstancePlacementAffinityEnum["Host"] = "host";
})(GetModifyInstancePlacementAffinityEnum || (GetModifyInstancePlacementAffinityEnum = {}));
export var GetModifyInstancePlacementTenancyEnum;
(function (GetModifyInstancePlacementTenancyEnum) {
    GetModifyInstancePlacementTenancyEnum["Dedicated"] = "dedicated";
    GetModifyInstancePlacementTenancyEnum["Host"] = "host";
})(GetModifyInstancePlacementTenancyEnum || (GetModifyInstancePlacementTenancyEnum = {}));
export var GetModifyInstancePlacementVersionEnum;
(function (GetModifyInstancePlacementVersionEnum) {
    GetModifyInstancePlacementVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyInstancePlacementVersionEnum || (GetModifyInstancePlacementVersionEnum = {}));
var GetModifyInstancePlacementQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyInstancePlacementQueryParams, _super);
    function GetModifyInstancePlacementQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Affinity" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementQueryParams.prototype, "affinity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GroupName" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementQueryParams.prototype, "groupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=HostId" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementQueryParams.prototype, "hostId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=HostResourceGroupArn" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementQueryParams.prototype, "hostResourceGroupArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementQueryParams.prototype, "instanceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PartitionNumber" }),
        __metadata("design:type", Number)
    ], GetModifyInstancePlacementQueryParams.prototype, "partitionNumber", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Tenancy" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementQueryParams.prototype, "tenancy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementQueryParams.prototype, "version", void 0);
    return GetModifyInstancePlacementQueryParams;
}(SpeakeasyBase));
export { GetModifyInstancePlacementQueryParams };
var GetModifyInstancePlacementHeaders = /** @class */ (function (_super) {
    __extends(GetModifyInstancePlacementHeaders, _super);
    function GetModifyInstancePlacementHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyInstancePlacementHeaders;
}(SpeakeasyBase));
export { GetModifyInstancePlacementHeaders };
var GetModifyInstancePlacementRequest = /** @class */ (function (_super) {
    __extends(GetModifyInstancePlacementRequest, _super);
    function GetModifyInstancePlacementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyInstancePlacementQueryParams)
    ], GetModifyInstancePlacementRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyInstancePlacementHeaders)
    ], GetModifyInstancePlacementRequest.prototype, "headers", void 0);
    return GetModifyInstancePlacementRequest;
}(SpeakeasyBase));
export { GetModifyInstancePlacementRequest };
var GetModifyInstancePlacementResponse = /** @class */ (function (_super) {
    __extends(GetModifyInstancePlacementResponse, _super);
    function GetModifyInstancePlacementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyInstancePlacementResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyInstancePlacementResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyInstancePlacementResponse.prototype, "statusCode", void 0);
    return GetModifyInstancePlacementResponse;
}(SpeakeasyBase));
export { GetModifyInstancePlacementResponse };
