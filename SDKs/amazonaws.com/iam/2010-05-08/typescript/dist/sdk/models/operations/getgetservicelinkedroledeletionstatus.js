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
export var GetGetServiceLinkedRoleDeletionStatusActionEnum;
(function (GetGetServiceLinkedRoleDeletionStatusActionEnum) {
    GetGetServiceLinkedRoleDeletionStatusActionEnum["GetServiceLinkedRoleDeletionStatus"] = "GetServiceLinkedRoleDeletionStatus";
})(GetGetServiceLinkedRoleDeletionStatusActionEnum || (GetGetServiceLinkedRoleDeletionStatusActionEnum = {}));
export var GetGetServiceLinkedRoleDeletionStatusVersionEnum;
(function (GetGetServiceLinkedRoleDeletionStatusVersionEnum) {
    GetGetServiceLinkedRoleDeletionStatusVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGetServiceLinkedRoleDeletionStatusVersionEnum || (GetGetServiceLinkedRoleDeletionStatusVersionEnum = {}));
var GetGetServiceLinkedRoleDeletionStatusQueryParams = /** @class */ (function (_super) {
    __extends(GetGetServiceLinkedRoleDeletionStatusQueryParams, _super);
    function GetGetServiceLinkedRoleDeletionStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetServiceLinkedRoleDeletionStatusQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DeletionTaskId" }),
        __metadata("design:type", String)
    ], GetGetServiceLinkedRoleDeletionStatusQueryParams.prototype, "deletionTaskId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetServiceLinkedRoleDeletionStatusQueryParams.prototype, "version", void 0);
    return GetGetServiceLinkedRoleDeletionStatusQueryParams;
}(SpeakeasyBase));
export { GetGetServiceLinkedRoleDeletionStatusQueryParams };
var GetGetServiceLinkedRoleDeletionStatusHeaders = /** @class */ (function (_super) {
    __extends(GetGetServiceLinkedRoleDeletionStatusHeaders, _super);
    function GetGetServiceLinkedRoleDeletionStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetServiceLinkedRoleDeletionStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetServiceLinkedRoleDeletionStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetServiceLinkedRoleDeletionStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetServiceLinkedRoleDeletionStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetServiceLinkedRoleDeletionStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetServiceLinkedRoleDeletionStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetServiceLinkedRoleDeletionStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetServiceLinkedRoleDeletionStatusHeaders;
}(SpeakeasyBase));
export { GetGetServiceLinkedRoleDeletionStatusHeaders };
var GetGetServiceLinkedRoleDeletionStatusRequest = /** @class */ (function (_super) {
    __extends(GetGetServiceLinkedRoleDeletionStatusRequest, _super);
    function GetGetServiceLinkedRoleDeletionStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetServiceLinkedRoleDeletionStatusQueryParams)
    ], GetGetServiceLinkedRoleDeletionStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetServiceLinkedRoleDeletionStatusHeaders)
    ], GetGetServiceLinkedRoleDeletionStatusRequest.prototype, "headers", void 0);
    return GetGetServiceLinkedRoleDeletionStatusRequest;
}(SpeakeasyBase));
export { GetGetServiceLinkedRoleDeletionStatusRequest };
var GetGetServiceLinkedRoleDeletionStatusResponse = /** @class */ (function (_super) {
    __extends(GetGetServiceLinkedRoleDeletionStatusResponse, _super);
    function GetGetServiceLinkedRoleDeletionStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetServiceLinkedRoleDeletionStatusResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetServiceLinkedRoleDeletionStatusResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetServiceLinkedRoleDeletionStatusResponse.prototype, "statusCode", void 0);
    return GetGetServiceLinkedRoleDeletionStatusResponse;
}(SpeakeasyBase));
export { GetGetServiceLinkedRoleDeletionStatusResponse };
