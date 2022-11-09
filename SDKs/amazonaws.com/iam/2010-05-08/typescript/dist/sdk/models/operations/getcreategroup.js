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
export var GetCreateGroupActionEnum;
(function (GetCreateGroupActionEnum) {
    GetCreateGroupActionEnum["CreateGroup"] = "CreateGroup";
})(GetCreateGroupActionEnum || (GetCreateGroupActionEnum = {}));
export var GetCreateGroupVersionEnum;
(function (GetCreateGroupVersionEnum) {
    GetCreateGroupVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetCreateGroupVersionEnum || (GetCreateGroupVersionEnum = {}));
var GetCreateGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateGroupQueryParams, _super);
    function GetCreateGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GroupName" }),
        __metadata("design:type", String)
    ], GetCreateGroupQueryParams.prototype, "groupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Path" }),
        __metadata("design:type", String)
    ], GetCreateGroupQueryParams.prototype, "path", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateGroupQueryParams.prototype, "version", void 0);
    return GetCreateGroupQueryParams;
}(SpeakeasyBase));
export { GetCreateGroupQueryParams };
var GetCreateGroupHeaders = /** @class */ (function (_super) {
    __extends(GetCreateGroupHeaders, _super);
    function GetCreateGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateGroupHeaders;
}(SpeakeasyBase));
export { GetCreateGroupHeaders };
var GetCreateGroupRequest = /** @class */ (function (_super) {
    __extends(GetCreateGroupRequest, _super);
    function GetCreateGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateGroupQueryParams)
    ], GetCreateGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateGroupHeaders)
    ], GetCreateGroupRequest.prototype, "headers", void 0);
    return GetCreateGroupRequest;
}(SpeakeasyBase));
export { GetCreateGroupRequest };
var GetCreateGroupResponse = /** @class */ (function (_super) {
    __extends(GetCreateGroupResponse, _super);
    function GetCreateGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateGroupResponse.prototype, "statusCode", void 0);
    return GetCreateGroupResponse;
}(SpeakeasyBase));
export { GetCreateGroupResponse };
