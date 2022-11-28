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
export var GetModifyAvailabilityZoneGroupActionEnum;
(function (GetModifyAvailabilityZoneGroupActionEnum) {
    GetModifyAvailabilityZoneGroupActionEnum["ModifyAvailabilityZoneGroup"] = "ModifyAvailabilityZoneGroup";
})(GetModifyAvailabilityZoneGroupActionEnum || (GetModifyAvailabilityZoneGroupActionEnum = {}));
export var GetModifyAvailabilityZoneGroupOptInStatusEnum;
(function (GetModifyAvailabilityZoneGroupOptInStatusEnum) {
    GetModifyAvailabilityZoneGroupOptInStatusEnum["OptedIn"] = "opted-in";
    GetModifyAvailabilityZoneGroupOptInStatusEnum["NotOptedIn"] = "not-opted-in";
})(GetModifyAvailabilityZoneGroupOptInStatusEnum || (GetModifyAvailabilityZoneGroupOptInStatusEnum = {}));
export var GetModifyAvailabilityZoneGroupVersionEnum;
(function (GetModifyAvailabilityZoneGroupVersionEnum) {
    GetModifyAvailabilityZoneGroupVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyAvailabilityZoneGroupVersionEnum || (GetModifyAvailabilityZoneGroupVersionEnum = {}));
var GetModifyAvailabilityZoneGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyAvailabilityZoneGroupQueryParams, _super);
    function GetModifyAvailabilityZoneGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyAvailabilityZoneGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyAvailabilityZoneGroupQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GroupName" }),
        __metadata("design:type", String)
    ], GetModifyAvailabilityZoneGroupQueryParams.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OptInStatus" }),
        __metadata("design:type", String)
    ], GetModifyAvailabilityZoneGroupQueryParams.prototype, "optInStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyAvailabilityZoneGroupQueryParams.prototype, "version", void 0);
    return GetModifyAvailabilityZoneGroupQueryParams;
}(SpeakeasyBase));
export { GetModifyAvailabilityZoneGroupQueryParams };
var GetModifyAvailabilityZoneGroupHeaders = /** @class */ (function (_super) {
    __extends(GetModifyAvailabilityZoneGroupHeaders, _super);
    function GetModifyAvailabilityZoneGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyAvailabilityZoneGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyAvailabilityZoneGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyAvailabilityZoneGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyAvailabilityZoneGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyAvailabilityZoneGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyAvailabilityZoneGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyAvailabilityZoneGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyAvailabilityZoneGroupHeaders;
}(SpeakeasyBase));
export { GetModifyAvailabilityZoneGroupHeaders };
var GetModifyAvailabilityZoneGroupRequest = /** @class */ (function (_super) {
    __extends(GetModifyAvailabilityZoneGroupRequest, _super);
    function GetModifyAvailabilityZoneGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyAvailabilityZoneGroupQueryParams)
    ], GetModifyAvailabilityZoneGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyAvailabilityZoneGroupHeaders)
    ], GetModifyAvailabilityZoneGroupRequest.prototype, "headers", void 0);
    return GetModifyAvailabilityZoneGroupRequest;
}(SpeakeasyBase));
export { GetModifyAvailabilityZoneGroupRequest };
var GetModifyAvailabilityZoneGroupResponse = /** @class */ (function (_super) {
    __extends(GetModifyAvailabilityZoneGroupResponse, _super);
    function GetModifyAvailabilityZoneGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyAvailabilityZoneGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyAvailabilityZoneGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyAvailabilityZoneGroupResponse.prototype, "statusCode", void 0);
    return GetModifyAvailabilityZoneGroupResponse;
}(SpeakeasyBase));
export { GetModifyAvailabilityZoneGroupResponse };
