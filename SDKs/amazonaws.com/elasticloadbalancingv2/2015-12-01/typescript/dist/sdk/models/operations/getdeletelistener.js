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
export var GetDeleteListenerActionEnum;
(function (GetDeleteListenerActionEnum) {
    GetDeleteListenerActionEnum["DeleteListener"] = "DeleteListener";
})(GetDeleteListenerActionEnum || (GetDeleteListenerActionEnum = {}));
export var GetDeleteListenerVersionEnum;
(function (GetDeleteListenerVersionEnum) {
    GetDeleteListenerVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(GetDeleteListenerVersionEnum || (GetDeleteListenerVersionEnum = {}));
var GetDeleteListenerQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteListenerQueryParams, _super);
    function GetDeleteListenerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteListenerQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ListenerArn" }),
        __metadata("design:type", String)
    ], GetDeleteListenerQueryParams.prototype, "listenerArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteListenerQueryParams.prototype, "version", void 0);
    return GetDeleteListenerQueryParams;
}(SpeakeasyBase));
export { GetDeleteListenerQueryParams };
var GetDeleteListenerHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteListenerHeaders, _super);
    function GetDeleteListenerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteListenerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteListenerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteListenerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteListenerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteListenerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteListenerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteListenerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteListenerHeaders;
}(SpeakeasyBase));
export { GetDeleteListenerHeaders };
var GetDeleteListenerRequest = /** @class */ (function (_super) {
    __extends(GetDeleteListenerRequest, _super);
    function GetDeleteListenerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteListenerQueryParams)
    ], GetDeleteListenerRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteListenerHeaders)
    ], GetDeleteListenerRequest.prototype, "headers", void 0);
    return GetDeleteListenerRequest;
}(SpeakeasyBase));
export { GetDeleteListenerRequest };
var GetDeleteListenerResponse = /** @class */ (function (_super) {
    __extends(GetDeleteListenerResponse, _super);
    function GetDeleteListenerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteListenerResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteListenerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteListenerResponse.prototype, "statusCode", void 0);
    return GetDeleteListenerResponse;
}(SpeakeasyBase));
export { GetDeleteListenerResponse };
