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
export var GetModifyVpcEndpointActionEnum;
(function (GetModifyVpcEndpointActionEnum) {
    GetModifyVpcEndpointActionEnum["ModifyVpcEndpoint"] = "ModifyVpcEndpoint";
})(GetModifyVpcEndpointActionEnum || (GetModifyVpcEndpointActionEnum = {}));
export var GetModifyVpcEndpointVersionEnum;
(function (GetModifyVpcEndpointVersionEnum) {
    GetModifyVpcEndpointVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyVpcEndpointVersionEnum || (GetModifyVpcEndpointVersionEnum = {}));
var GetModifyVpcEndpointQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointQueryParams, _super);
    function GetModifyVpcEndpointQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AddRouteTableId" }),
        __metadata("design:type", Array)
    ], GetModifyVpcEndpointQueryParams.prototype, "addRouteTableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AddSecurityGroupId" }),
        __metadata("design:type", Array)
    ], GetModifyVpcEndpointQueryParams.prototype, "addSecurityGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AddSubnetId" }),
        __metadata("design:type", Array)
    ], GetModifyVpcEndpointQueryParams.prototype, "addSubnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcEndpointQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyDocument" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointQueryParams.prototype, "policyDocument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrivateDnsEnabled" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcEndpointQueryParams.prototype, "privateDnsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoveRouteTableId" }),
        __metadata("design:type", Array)
    ], GetModifyVpcEndpointQueryParams.prototype, "removeRouteTableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoveSecurityGroupId" }),
        __metadata("design:type", Array)
    ], GetModifyVpcEndpointQueryParams.prototype, "removeSecurityGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoveSubnetId" }),
        __metadata("design:type", Array)
    ], GetModifyVpcEndpointQueryParams.prototype, "removeSubnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ResetPolicy" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpcEndpointQueryParams.prototype, "resetPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointQueryParams.prototype, "vpcEndpointId", void 0);
    return GetModifyVpcEndpointQueryParams;
}(SpeakeasyBase));
export { GetModifyVpcEndpointQueryParams };
var GetModifyVpcEndpointHeaders = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointHeaders, _super);
    function GetModifyVpcEndpointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyVpcEndpointHeaders;
}(SpeakeasyBase));
export { GetModifyVpcEndpointHeaders };
var GetModifyVpcEndpointRequest = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointRequest, _super);
    function GetModifyVpcEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVpcEndpointQueryParams)
    ], GetModifyVpcEndpointRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyVpcEndpointHeaders)
    ], GetModifyVpcEndpointRequest.prototype, "headers", void 0);
    return GetModifyVpcEndpointRequest;
}(SpeakeasyBase));
export { GetModifyVpcEndpointRequest };
var GetModifyVpcEndpointResponse = /** @class */ (function (_super) {
    __extends(GetModifyVpcEndpointResponse, _super);
    function GetModifyVpcEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyVpcEndpointResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyVpcEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyVpcEndpointResponse.prototype, "statusCode", void 0);
    return GetModifyVpcEndpointResponse;
}(SpeakeasyBase));
export { GetModifyVpcEndpointResponse };
