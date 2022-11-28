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
export var GetCreateNetworkInterfacePermissionActionEnum;
(function (GetCreateNetworkInterfacePermissionActionEnum) {
    GetCreateNetworkInterfacePermissionActionEnum["CreateNetworkInterfacePermission"] = "CreateNetworkInterfacePermission";
})(GetCreateNetworkInterfacePermissionActionEnum || (GetCreateNetworkInterfacePermissionActionEnum = {}));
export var GetCreateNetworkInterfacePermissionPermissionEnum;
(function (GetCreateNetworkInterfacePermissionPermissionEnum) {
    GetCreateNetworkInterfacePermissionPermissionEnum["InstanceAttach"] = "INSTANCE-ATTACH";
    GetCreateNetworkInterfacePermissionPermissionEnum["EipAssociate"] = "EIP-ASSOCIATE";
})(GetCreateNetworkInterfacePermissionPermissionEnum || (GetCreateNetworkInterfacePermissionPermissionEnum = {}));
export var GetCreateNetworkInterfacePermissionVersionEnum;
(function (GetCreateNetworkInterfacePermissionVersionEnum) {
    GetCreateNetworkInterfacePermissionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCreateNetworkInterfacePermissionVersionEnum || (GetCreateNetworkInterfacePermissionVersionEnum = {}));
var GetCreateNetworkInterfacePermissionQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateNetworkInterfacePermissionQueryParams, _super);
    function GetCreateNetworkInterfacePermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateNetworkInterfacePermissionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AwsAccountId" }),
        __metadata("design:type", String)
    ], GetCreateNetworkInterfacePermissionQueryParams.prototype, "awsAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AwsService" }),
        __metadata("design:type", String)
    ], GetCreateNetworkInterfacePermissionQueryParams.prototype, "awsService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCreateNetworkInterfacePermissionQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], GetCreateNetworkInterfacePermissionQueryParams.prototype, "networkInterfaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Permission" }),
        __metadata("design:type", String)
    ], GetCreateNetworkInterfacePermissionQueryParams.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateNetworkInterfacePermissionQueryParams.prototype, "version", void 0);
    return GetCreateNetworkInterfacePermissionQueryParams;
}(SpeakeasyBase));
export { GetCreateNetworkInterfacePermissionQueryParams };
var GetCreateNetworkInterfacePermissionHeaders = /** @class */ (function (_super) {
    __extends(GetCreateNetworkInterfacePermissionHeaders, _super);
    function GetCreateNetworkInterfacePermissionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateNetworkInterfacePermissionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateNetworkInterfacePermissionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateNetworkInterfacePermissionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateNetworkInterfacePermissionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateNetworkInterfacePermissionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateNetworkInterfacePermissionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateNetworkInterfacePermissionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateNetworkInterfacePermissionHeaders;
}(SpeakeasyBase));
export { GetCreateNetworkInterfacePermissionHeaders };
var GetCreateNetworkInterfacePermissionRequest = /** @class */ (function (_super) {
    __extends(GetCreateNetworkInterfacePermissionRequest, _super);
    function GetCreateNetworkInterfacePermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateNetworkInterfacePermissionQueryParams)
    ], GetCreateNetworkInterfacePermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateNetworkInterfacePermissionHeaders)
    ], GetCreateNetworkInterfacePermissionRequest.prototype, "headers", void 0);
    return GetCreateNetworkInterfacePermissionRequest;
}(SpeakeasyBase));
export { GetCreateNetworkInterfacePermissionRequest };
var GetCreateNetworkInterfacePermissionResponse = /** @class */ (function (_super) {
    __extends(GetCreateNetworkInterfacePermissionResponse, _super);
    function GetCreateNetworkInterfacePermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateNetworkInterfacePermissionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCreateNetworkInterfacePermissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCreateNetworkInterfacePermissionResponse.prototype, "statusCode", void 0);
    return GetCreateNetworkInterfacePermissionResponse;
}(SpeakeasyBase));
export { GetCreateNetworkInterfacePermissionResponse };
