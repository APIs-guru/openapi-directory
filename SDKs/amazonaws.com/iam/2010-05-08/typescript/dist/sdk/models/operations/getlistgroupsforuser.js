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
export var GetListGroupsForUserActionEnum;
(function (GetListGroupsForUserActionEnum) {
    GetListGroupsForUserActionEnum["ListGroupsForUser"] = "ListGroupsForUser";
})(GetListGroupsForUserActionEnum || (GetListGroupsForUserActionEnum = {}));
export var GetListGroupsForUserVersionEnum;
(function (GetListGroupsForUserVersionEnum) {
    GetListGroupsForUserVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListGroupsForUserVersionEnum || (GetListGroupsForUserVersionEnum = {}));
var GetListGroupsForUserQueryParams = /** @class */ (function (_super) {
    __extends(GetListGroupsForUserQueryParams, _super);
    function GetListGroupsForUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListGroupsForUserQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListGroupsForUserQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListGroupsForUserQueryParams.prototype, "maxItems", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetListGroupsForUserQueryParams.prototype, "userName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListGroupsForUserQueryParams.prototype, "version", void 0);
    return GetListGroupsForUserQueryParams;
}(SpeakeasyBase));
export { GetListGroupsForUserQueryParams };
var GetListGroupsForUserHeaders = /** @class */ (function (_super) {
    __extends(GetListGroupsForUserHeaders, _super);
    function GetListGroupsForUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListGroupsForUserHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListGroupsForUserHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListGroupsForUserHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListGroupsForUserHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListGroupsForUserHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListGroupsForUserHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListGroupsForUserHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListGroupsForUserHeaders;
}(SpeakeasyBase));
export { GetListGroupsForUserHeaders };
var GetListGroupsForUserRequest = /** @class */ (function (_super) {
    __extends(GetListGroupsForUserRequest, _super);
    function GetListGroupsForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListGroupsForUserQueryParams)
    ], GetListGroupsForUserRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListGroupsForUserHeaders)
    ], GetListGroupsForUserRequest.prototype, "headers", void 0);
    return GetListGroupsForUserRequest;
}(SpeakeasyBase));
export { GetListGroupsForUserRequest };
var GetListGroupsForUserResponse = /** @class */ (function (_super) {
    __extends(GetListGroupsForUserResponse, _super);
    function GetListGroupsForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetListGroupsForUserResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListGroupsForUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListGroupsForUserResponse.prototype, "statusCode", void 0);
    return GetListGroupsForUserResponse;
}(SpeakeasyBase));
export { GetListGroupsForUserResponse };
