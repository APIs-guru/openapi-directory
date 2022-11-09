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
var ListInvalidations20170325PathParams = /** @class */ (function (_super) {
    __extends(ListInvalidations20170325PathParams, _super);
    function ListInvalidations20170325PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DistributionId" }),
        __metadata("design:type", String)
    ], ListInvalidations20170325PathParams.prototype, "distributionId", void 0);
    return ListInvalidations20170325PathParams;
}(SpeakeasyBase));
export { ListInvalidations20170325PathParams };
var ListInvalidations20170325QueryParams = /** @class */ (function (_super) {
    __extends(ListInvalidations20170325QueryParams, _super);
    function ListInvalidations20170325QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], ListInvalidations20170325QueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], ListInvalidations20170325QueryParams.prototype, "maxItems", void 0);
    return ListInvalidations20170325QueryParams;
}(SpeakeasyBase));
export { ListInvalidations20170325QueryParams };
var ListInvalidations20170325Headers = /** @class */ (function (_super) {
    __extends(ListInvalidations20170325Headers, _super);
    function ListInvalidations20170325Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListInvalidations20170325Headers.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListInvalidations20170325Headers.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListInvalidations20170325Headers.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListInvalidations20170325Headers.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListInvalidations20170325Headers.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListInvalidations20170325Headers.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListInvalidations20170325Headers.prototype, "xAmzSignedHeaders", void 0);
    return ListInvalidations20170325Headers;
}(SpeakeasyBase));
export { ListInvalidations20170325Headers };
var ListInvalidations20170325Request = /** @class */ (function (_super) {
    __extends(ListInvalidations20170325Request, _super);
    function ListInvalidations20170325Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListInvalidations20170325PathParams)
    ], ListInvalidations20170325Request.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListInvalidations20170325QueryParams)
    ], ListInvalidations20170325Request.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListInvalidations20170325Headers)
    ], ListInvalidations20170325Request.prototype, "headers", void 0);
    return ListInvalidations20170325Request;
}(SpeakeasyBase));
export { ListInvalidations20170325Request };
var ListInvalidations20170325Response = /** @class */ (function (_super) {
    __extends(ListInvalidations20170325Response, _super);
    function ListInvalidations20170325Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ListInvalidations20170325Response.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListInvalidations20170325Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListInvalidations20170325Response.prototype, "statusCode", void 0);
    return ListInvalidations20170325Response;
}(SpeakeasyBase));
export { ListInvalidations20170325Response };
