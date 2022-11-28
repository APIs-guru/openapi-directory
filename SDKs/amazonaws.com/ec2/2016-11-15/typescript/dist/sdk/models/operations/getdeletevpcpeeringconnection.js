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
export var GetDeleteVpcPeeringConnectionActionEnum;
(function (GetDeleteVpcPeeringConnectionActionEnum) {
    GetDeleteVpcPeeringConnectionActionEnum["DeleteVpcPeeringConnection"] = "DeleteVpcPeeringConnection";
})(GetDeleteVpcPeeringConnectionActionEnum || (GetDeleteVpcPeeringConnectionActionEnum = {}));
export var GetDeleteVpcPeeringConnectionVersionEnum;
(function (GetDeleteVpcPeeringConnectionVersionEnum) {
    GetDeleteVpcPeeringConnectionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteVpcPeeringConnectionVersionEnum || (GetDeleteVpcPeeringConnectionVersionEnum = {}));
var GetDeleteVpcPeeringConnectionQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteVpcPeeringConnectionQueryParams, _super);
    function GetDeleteVpcPeeringConnectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteVpcPeeringConnectionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteVpcPeeringConnectionQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteVpcPeeringConnectionQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcPeeringConnectionId" }),
        __metadata("design:type", String)
    ], GetDeleteVpcPeeringConnectionQueryParams.prototype, "vpcPeeringConnectionId", void 0);
    return GetDeleteVpcPeeringConnectionQueryParams;
}(SpeakeasyBase));
export { GetDeleteVpcPeeringConnectionQueryParams };
var GetDeleteVpcPeeringConnectionHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteVpcPeeringConnectionHeaders, _super);
    function GetDeleteVpcPeeringConnectionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteVpcPeeringConnectionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteVpcPeeringConnectionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteVpcPeeringConnectionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteVpcPeeringConnectionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteVpcPeeringConnectionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteVpcPeeringConnectionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteVpcPeeringConnectionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteVpcPeeringConnectionHeaders;
}(SpeakeasyBase));
export { GetDeleteVpcPeeringConnectionHeaders };
var GetDeleteVpcPeeringConnectionRequest = /** @class */ (function (_super) {
    __extends(GetDeleteVpcPeeringConnectionRequest, _super);
    function GetDeleteVpcPeeringConnectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteVpcPeeringConnectionQueryParams)
    ], GetDeleteVpcPeeringConnectionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteVpcPeeringConnectionHeaders)
    ], GetDeleteVpcPeeringConnectionRequest.prototype, "headers", void 0);
    return GetDeleteVpcPeeringConnectionRequest;
}(SpeakeasyBase));
export { GetDeleteVpcPeeringConnectionRequest };
var GetDeleteVpcPeeringConnectionResponse = /** @class */ (function (_super) {
    __extends(GetDeleteVpcPeeringConnectionResponse, _super);
    function GetDeleteVpcPeeringConnectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteVpcPeeringConnectionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteVpcPeeringConnectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteVpcPeeringConnectionResponse.prototype, "statusCode", void 0);
    return GetDeleteVpcPeeringConnectionResponse;
}(SpeakeasyBase));
export { GetDeleteVpcPeeringConnectionResponse };
