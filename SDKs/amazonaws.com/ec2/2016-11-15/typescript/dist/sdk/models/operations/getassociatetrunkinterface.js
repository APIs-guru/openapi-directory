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
export var GetAssociateTrunkInterfaceActionEnum;
(function (GetAssociateTrunkInterfaceActionEnum) {
    GetAssociateTrunkInterfaceActionEnum["AssociateTrunkInterface"] = "AssociateTrunkInterface";
})(GetAssociateTrunkInterfaceActionEnum || (GetAssociateTrunkInterfaceActionEnum = {}));
export var GetAssociateTrunkInterfaceVersionEnum;
(function (GetAssociateTrunkInterfaceVersionEnum) {
    GetAssociateTrunkInterfaceVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAssociateTrunkInterfaceVersionEnum || (GetAssociateTrunkInterfaceVersionEnum = {}));
var GetAssociateTrunkInterfaceQueryParams = /** @class */ (function (_super) {
    __extends(GetAssociateTrunkInterfaceQueryParams, _super);
    function GetAssociateTrunkInterfaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAssociateTrunkInterfaceQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=BranchInterfaceId" }),
        __metadata("design:type", String)
    ], GetAssociateTrunkInterfaceQueryParams.prototype, "branchInterfaceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClientToken" }),
        __metadata("design:type", String)
    ], GetAssociateTrunkInterfaceQueryParams.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetAssociateTrunkInterfaceQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GreKey" }),
        __metadata("design:type", Number)
    ], GetAssociateTrunkInterfaceQueryParams.prototype, "greKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TrunkInterfaceId" }),
        __metadata("design:type", String)
    ], GetAssociateTrunkInterfaceQueryParams.prototype, "trunkInterfaceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAssociateTrunkInterfaceQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VlanId" }),
        __metadata("design:type", Number)
    ], GetAssociateTrunkInterfaceQueryParams.prototype, "vlanId", void 0);
    return GetAssociateTrunkInterfaceQueryParams;
}(SpeakeasyBase));
export { GetAssociateTrunkInterfaceQueryParams };
var GetAssociateTrunkInterfaceHeaders = /** @class */ (function (_super) {
    __extends(GetAssociateTrunkInterfaceHeaders, _super);
    function GetAssociateTrunkInterfaceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAssociateTrunkInterfaceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAssociateTrunkInterfaceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAssociateTrunkInterfaceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAssociateTrunkInterfaceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAssociateTrunkInterfaceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAssociateTrunkInterfaceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAssociateTrunkInterfaceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAssociateTrunkInterfaceHeaders;
}(SpeakeasyBase));
export { GetAssociateTrunkInterfaceHeaders };
var GetAssociateTrunkInterfaceRequest = /** @class */ (function (_super) {
    __extends(GetAssociateTrunkInterfaceRequest, _super);
    function GetAssociateTrunkInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociateTrunkInterfaceQueryParams)
    ], GetAssociateTrunkInterfaceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociateTrunkInterfaceHeaders)
    ], GetAssociateTrunkInterfaceRequest.prototype, "headers", void 0);
    return GetAssociateTrunkInterfaceRequest;
}(SpeakeasyBase));
export { GetAssociateTrunkInterfaceRequest };
var GetAssociateTrunkInterfaceResponse = /** @class */ (function (_super) {
    __extends(GetAssociateTrunkInterfaceResponse, _super);
    function GetAssociateTrunkInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAssociateTrunkInterfaceResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAssociateTrunkInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAssociateTrunkInterfaceResponse.prototype, "statusCode", void 0);
    return GetAssociateTrunkInterfaceResponse;
}(SpeakeasyBase));
export { GetAssociateTrunkInterfaceResponse };
