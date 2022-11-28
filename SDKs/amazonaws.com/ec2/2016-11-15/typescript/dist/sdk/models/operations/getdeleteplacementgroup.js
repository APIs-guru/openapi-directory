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
export var GetDeletePlacementGroupActionEnum;
(function (GetDeletePlacementGroupActionEnum) {
    GetDeletePlacementGroupActionEnum["DeletePlacementGroup"] = "DeletePlacementGroup";
})(GetDeletePlacementGroupActionEnum || (GetDeletePlacementGroupActionEnum = {}));
export var GetDeletePlacementGroupVersionEnum;
(function (GetDeletePlacementGroupVersionEnum) {
    GetDeletePlacementGroupVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeletePlacementGroupVersionEnum || (GetDeletePlacementGroupVersionEnum = {}));
var GetDeletePlacementGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeletePlacementGroupQueryParams, _super);
    function GetDeletePlacementGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeletePlacementGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeletePlacementGroupQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GroupName" }),
        __metadata("design:type", String)
    ], GetDeletePlacementGroupQueryParams.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeletePlacementGroupQueryParams.prototype, "version", void 0);
    return GetDeletePlacementGroupQueryParams;
}(SpeakeasyBase));
export { GetDeletePlacementGroupQueryParams };
var GetDeletePlacementGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDeletePlacementGroupHeaders, _super);
    function GetDeletePlacementGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeletePlacementGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeletePlacementGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeletePlacementGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeletePlacementGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeletePlacementGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeletePlacementGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeletePlacementGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeletePlacementGroupHeaders;
}(SpeakeasyBase));
export { GetDeletePlacementGroupHeaders };
var GetDeletePlacementGroupRequest = /** @class */ (function (_super) {
    __extends(GetDeletePlacementGroupRequest, _super);
    function GetDeletePlacementGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeletePlacementGroupQueryParams)
    ], GetDeletePlacementGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeletePlacementGroupHeaders)
    ], GetDeletePlacementGroupRequest.prototype, "headers", void 0);
    return GetDeletePlacementGroupRequest;
}(SpeakeasyBase));
export { GetDeletePlacementGroupRequest };
var GetDeletePlacementGroupResponse = /** @class */ (function (_super) {
    __extends(GetDeletePlacementGroupResponse, _super);
    function GetDeletePlacementGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeletePlacementGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeletePlacementGroupResponse.prototype, "statusCode", void 0);
    return GetDeletePlacementGroupResponse;
}(SpeakeasyBase));
export { GetDeletePlacementGroupResponse };
