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
export var GetDeleteSecurityGroupActionEnum;
(function (GetDeleteSecurityGroupActionEnum) {
    GetDeleteSecurityGroupActionEnum["DeleteSecurityGroup"] = "DeleteSecurityGroup";
})(GetDeleteSecurityGroupActionEnum || (GetDeleteSecurityGroupActionEnum = {}));
export var GetDeleteSecurityGroupVersionEnum;
(function (GetDeleteSecurityGroupVersionEnum) {
    GetDeleteSecurityGroupVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteSecurityGroupVersionEnum || (GetDeleteSecurityGroupVersionEnum = {}));
var GetDeleteSecurityGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteSecurityGroupQueryParams, _super);
    function GetDeleteSecurityGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteSecurityGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteSecurityGroupQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GroupId" }),
        __metadata("design:type", String)
    ], GetDeleteSecurityGroupQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GroupName" }),
        __metadata("design:type", String)
    ], GetDeleteSecurityGroupQueryParams.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteSecurityGroupQueryParams.prototype, "version", void 0);
    return GetDeleteSecurityGroupQueryParams;
}(SpeakeasyBase));
export { GetDeleteSecurityGroupQueryParams };
var GetDeleteSecurityGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteSecurityGroupHeaders, _super);
    function GetDeleteSecurityGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteSecurityGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteSecurityGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteSecurityGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteSecurityGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteSecurityGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteSecurityGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteSecurityGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteSecurityGroupHeaders;
}(SpeakeasyBase));
export { GetDeleteSecurityGroupHeaders };
var GetDeleteSecurityGroupRequest = /** @class */ (function (_super) {
    __extends(GetDeleteSecurityGroupRequest, _super);
    function GetDeleteSecurityGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteSecurityGroupQueryParams)
    ], GetDeleteSecurityGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteSecurityGroupHeaders)
    ], GetDeleteSecurityGroupRequest.prototype, "headers", void 0);
    return GetDeleteSecurityGroupRequest;
}(SpeakeasyBase));
export { GetDeleteSecurityGroupRequest };
var GetDeleteSecurityGroupResponse = /** @class */ (function (_super) {
    __extends(GetDeleteSecurityGroupResponse, _super);
    function GetDeleteSecurityGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteSecurityGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteSecurityGroupResponse.prototype, "statusCode", void 0);
    return GetDeleteSecurityGroupResponse;
}(SpeakeasyBase));
export { GetDeleteSecurityGroupResponse };
