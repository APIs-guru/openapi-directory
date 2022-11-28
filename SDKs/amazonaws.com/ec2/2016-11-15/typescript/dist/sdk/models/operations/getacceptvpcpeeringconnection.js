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
export var GetAcceptVpcPeeringConnectionActionEnum;
(function (GetAcceptVpcPeeringConnectionActionEnum) {
    GetAcceptVpcPeeringConnectionActionEnum["AcceptVpcPeeringConnection"] = "AcceptVpcPeeringConnection";
})(GetAcceptVpcPeeringConnectionActionEnum || (GetAcceptVpcPeeringConnectionActionEnum = {}));
export var GetAcceptVpcPeeringConnectionVersionEnum;
(function (GetAcceptVpcPeeringConnectionVersionEnum) {
    GetAcceptVpcPeeringConnectionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAcceptVpcPeeringConnectionVersionEnum || (GetAcceptVpcPeeringConnectionVersionEnum = {}));
var GetAcceptVpcPeeringConnectionQueryParams = /** @class */ (function (_super) {
    __extends(GetAcceptVpcPeeringConnectionQueryParams, _super);
    function GetAcceptVpcPeeringConnectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAcceptVpcPeeringConnectionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetAcceptVpcPeeringConnectionQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAcceptVpcPeeringConnectionQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcPeeringConnectionId" }),
        __metadata("design:type", String)
    ], GetAcceptVpcPeeringConnectionQueryParams.prototype, "vpcPeeringConnectionId", void 0);
    return GetAcceptVpcPeeringConnectionQueryParams;
}(SpeakeasyBase));
export { GetAcceptVpcPeeringConnectionQueryParams };
var GetAcceptVpcPeeringConnectionHeaders = /** @class */ (function (_super) {
    __extends(GetAcceptVpcPeeringConnectionHeaders, _super);
    function GetAcceptVpcPeeringConnectionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAcceptVpcPeeringConnectionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAcceptVpcPeeringConnectionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAcceptVpcPeeringConnectionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAcceptVpcPeeringConnectionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAcceptVpcPeeringConnectionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAcceptVpcPeeringConnectionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAcceptVpcPeeringConnectionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAcceptVpcPeeringConnectionHeaders;
}(SpeakeasyBase));
export { GetAcceptVpcPeeringConnectionHeaders };
var GetAcceptVpcPeeringConnectionRequest = /** @class */ (function (_super) {
    __extends(GetAcceptVpcPeeringConnectionRequest, _super);
    function GetAcceptVpcPeeringConnectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAcceptVpcPeeringConnectionQueryParams)
    ], GetAcceptVpcPeeringConnectionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAcceptVpcPeeringConnectionHeaders)
    ], GetAcceptVpcPeeringConnectionRequest.prototype, "headers", void 0);
    return GetAcceptVpcPeeringConnectionRequest;
}(SpeakeasyBase));
export { GetAcceptVpcPeeringConnectionRequest };
var GetAcceptVpcPeeringConnectionResponse = /** @class */ (function (_super) {
    __extends(GetAcceptVpcPeeringConnectionResponse, _super);
    function GetAcceptVpcPeeringConnectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAcceptVpcPeeringConnectionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAcceptVpcPeeringConnectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAcceptVpcPeeringConnectionResponse.prototype, "statusCode", void 0);
    return GetAcceptVpcPeeringConnectionResponse;
}(SpeakeasyBase));
export { GetAcceptVpcPeeringConnectionResponse };
