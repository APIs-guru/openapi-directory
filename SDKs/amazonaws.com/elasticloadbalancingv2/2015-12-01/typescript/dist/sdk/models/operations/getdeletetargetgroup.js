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
export var GetDeleteTargetGroupActionEnum;
(function (GetDeleteTargetGroupActionEnum) {
    GetDeleteTargetGroupActionEnum["DeleteTargetGroup"] = "DeleteTargetGroup";
})(GetDeleteTargetGroupActionEnum || (GetDeleteTargetGroupActionEnum = {}));
export var GetDeleteTargetGroupVersionEnum;
(function (GetDeleteTargetGroupVersionEnum) {
    GetDeleteTargetGroupVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(GetDeleteTargetGroupVersionEnum || (GetDeleteTargetGroupVersionEnum = {}));
var GetDeleteTargetGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteTargetGroupQueryParams, _super);
    function GetDeleteTargetGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteTargetGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TargetGroupArn" }),
        __metadata("design:type", String)
    ], GetDeleteTargetGroupQueryParams.prototype, "targetGroupArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteTargetGroupQueryParams.prototype, "version", void 0);
    return GetDeleteTargetGroupQueryParams;
}(SpeakeasyBase));
export { GetDeleteTargetGroupQueryParams };
var GetDeleteTargetGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteTargetGroupHeaders, _super);
    function GetDeleteTargetGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteTargetGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteTargetGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteTargetGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteTargetGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteTargetGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteTargetGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteTargetGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteTargetGroupHeaders;
}(SpeakeasyBase));
export { GetDeleteTargetGroupHeaders };
var GetDeleteTargetGroupRequest = /** @class */ (function (_super) {
    __extends(GetDeleteTargetGroupRequest, _super);
    function GetDeleteTargetGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteTargetGroupQueryParams)
    ], GetDeleteTargetGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteTargetGroupHeaders)
    ], GetDeleteTargetGroupRequest.prototype, "headers", void 0);
    return GetDeleteTargetGroupRequest;
}(SpeakeasyBase));
export { GetDeleteTargetGroupRequest };
var GetDeleteTargetGroupResponse = /** @class */ (function (_super) {
    __extends(GetDeleteTargetGroupResponse, _super);
    function GetDeleteTargetGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteTargetGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteTargetGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteTargetGroupResponse.prototype, "statusCode", void 0);
    return GetDeleteTargetGroupResponse;
}(SpeakeasyBase));
export { GetDeleteTargetGroupResponse };
