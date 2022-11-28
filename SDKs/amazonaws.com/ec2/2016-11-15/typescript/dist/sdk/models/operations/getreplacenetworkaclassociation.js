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
export var GetReplaceNetworkAclAssociationActionEnum;
(function (GetReplaceNetworkAclAssociationActionEnum) {
    GetReplaceNetworkAclAssociationActionEnum["ReplaceNetworkAclAssociation"] = "ReplaceNetworkAclAssociation";
})(GetReplaceNetworkAclAssociationActionEnum || (GetReplaceNetworkAclAssociationActionEnum = {}));
export var GetReplaceNetworkAclAssociationVersionEnum;
(function (GetReplaceNetworkAclAssociationVersionEnum) {
    GetReplaceNetworkAclAssociationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetReplaceNetworkAclAssociationVersionEnum || (GetReplaceNetworkAclAssociationVersionEnum = {}));
var GetReplaceNetworkAclAssociationQueryParams = /** @class */ (function (_super) {
    __extends(GetReplaceNetworkAclAssociationQueryParams, _super);
    function GetReplaceNetworkAclAssociationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclAssociationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AssociationId" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclAssociationQueryParams.prototype, "associationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetReplaceNetworkAclAssociationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkAclId" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclAssociationQueryParams.prototype, "networkAclId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclAssociationQueryParams.prototype, "version", void 0);
    return GetReplaceNetworkAclAssociationQueryParams;
}(SpeakeasyBase));
export { GetReplaceNetworkAclAssociationQueryParams };
var GetReplaceNetworkAclAssociationHeaders = /** @class */ (function (_super) {
    __extends(GetReplaceNetworkAclAssociationHeaders, _super);
    function GetReplaceNetworkAclAssociationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclAssociationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclAssociationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclAssociationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclAssociationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclAssociationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclAssociationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclAssociationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetReplaceNetworkAclAssociationHeaders;
}(SpeakeasyBase));
export { GetReplaceNetworkAclAssociationHeaders };
var GetReplaceNetworkAclAssociationRequest = /** @class */ (function (_super) {
    __extends(GetReplaceNetworkAclAssociationRequest, _super);
    function GetReplaceNetworkAclAssociationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReplaceNetworkAclAssociationQueryParams)
    ], GetReplaceNetworkAclAssociationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReplaceNetworkAclAssociationHeaders)
    ], GetReplaceNetworkAclAssociationRequest.prototype, "headers", void 0);
    return GetReplaceNetworkAclAssociationRequest;
}(SpeakeasyBase));
export { GetReplaceNetworkAclAssociationRequest };
var GetReplaceNetworkAclAssociationResponse = /** @class */ (function (_super) {
    __extends(GetReplaceNetworkAclAssociationResponse, _super);
    function GetReplaceNetworkAclAssociationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetReplaceNetworkAclAssociationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReplaceNetworkAclAssociationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReplaceNetworkAclAssociationResponse.prototype, "statusCode", void 0);
    return GetReplaceNetworkAclAssociationResponse;
}(SpeakeasyBase));
export { GetReplaceNetworkAclAssociationResponse };
