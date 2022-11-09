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
export var GetDisassociateClientVpnTargetNetworkActionEnum;
(function (GetDisassociateClientVpnTargetNetworkActionEnum) {
    GetDisassociateClientVpnTargetNetworkActionEnum["DisassociateClientVpnTargetNetwork"] = "DisassociateClientVpnTargetNetwork";
})(GetDisassociateClientVpnTargetNetworkActionEnum || (GetDisassociateClientVpnTargetNetworkActionEnum = {}));
export var GetDisassociateClientVpnTargetNetworkVersionEnum;
(function (GetDisassociateClientVpnTargetNetworkVersionEnum) {
    GetDisassociateClientVpnTargetNetworkVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDisassociateClientVpnTargetNetworkVersionEnum || (GetDisassociateClientVpnTargetNetworkVersionEnum = {}));
var GetDisassociateClientVpnTargetNetworkQueryParams = /** @class */ (function (_super) {
    __extends(GetDisassociateClientVpnTargetNetworkQueryParams, _super);
    function GetDisassociateClientVpnTargetNetworkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDisassociateClientVpnTargetNetworkQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AssociationId" }),
        __metadata("design:type", String)
    ], GetDisassociateClientVpnTargetNetworkQueryParams.prototype, "associationId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" }),
        __metadata("design:type", String)
    ], GetDisassociateClientVpnTargetNetworkQueryParams.prototype, "clientVpnEndpointId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDisassociateClientVpnTargetNetworkQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDisassociateClientVpnTargetNetworkQueryParams.prototype, "version", void 0);
    return GetDisassociateClientVpnTargetNetworkQueryParams;
}(SpeakeasyBase));
export { GetDisassociateClientVpnTargetNetworkQueryParams };
var GetDisassociateClientVpnTargetNetworkHeaders = /** @class */ (function (_super) {
    __extends(GetDisassociateClientVpnTargetNetworkHeaders, _super);
    function GetDisassociateClientVpnTargetNetworkHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDisassociateClientVpnTargetNetworkHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDisassociateClientVpnTargetNetworkHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDisassociateClientVpnTargetNetworkHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDisassociateClientVpnTargetNetworkHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDisassociateClientVpnTargetNetworkHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDisassociateClientVpnTargetNetworkHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDisassociateClientVpnTargetNetworkHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDisassociateClientVpnTargetNetworkHeaders;
}(SpeakeasyBase));
export { GetDisassociateClientVpnTargetNetworkHeaders };
var GetDisassociateClientVpnTargetNetworkRequest = /** @class */ (function (_super) {
    __extends(GetDisassociateClientVpnTargetNetworkRequest, _super);
    function GetDisassociateClientVpnTargetNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDisassociateClientVpnTargetNetworkQueryParams)
    ], GetDisassociateClientVpnTargetNetworkRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDisassociateClientVpnTargetNetworkHeaders)
    ], GetDisassociateClientVpnTargetNetworkRequest.prototype, "headers", void 0);
    return GetDisassociateClientVpnTargetNetworkRequest;
}(SpeakeasyBase));
export { GetDisassociateClientVpnTargetNetworkRequest };
var GetDisassociateClientVpnTargetNetworkResponse = /** @class */ (function (_super) {
    __extends(GetDisassociateClientVpnTargetNetworkResponse, _super);
    function GetDisassociateClientVpnTargetNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDisassociateClientVpnTargetNetworkResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDisassociateClientVpnTargetNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDisassociateClientVpnTargetNetworkResponse.prototype, "statusCode", void 0);
    return GetDisassociateClientVpnTargetNetworkResponse;
}(SpeakeasyBase));
export { GetDisassociateClientVpnTargetNetworkResponse };
