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
var ListInvalidations20200531PathParams = /** @class */ (function (_super) {
    __extends(ListInvalidations20200531PathParams, _super);
    function ListInvalidations20200531PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DistributionId" }),
        __metadata("design:type", String)
    ], ListInvalidations20200531PathParams.prototype, "distributionId", void 0);
    return ListInvalidations20200531PathParams;
}(SpeakeasyBase));
export { ListInvalidations20200531PathParams };
var ListInvalidations20200531QueryParams = /** @class */ (function (_super) {
    __extends(ListInvalidations20200531QueryParams, _super);
    function ListInvalidations20200531QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], ListInvalidations20200531QueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], ListInvalidations20200531QueryParams.prototype, "maxItems", void 0);
    return ListInvalidations20200531QueryParams;
}(SpeakeasyBase));
export { ListInvalidations20200531QueryParams };
var ListInvalidations20200531Headers = /** @class */ (function (_super) {
    __extends(ListInvalidations20200531Headers, _super);
    function ListInvalidations20200531Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListInvalidations20200531Headers.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListInvalidations20200531Headers.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListInvalidations20200531Headers.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListInvalidations20200531Headers.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListInvalidations20200531Headers.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListInvalidations20200531Headers.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListInvalidations20200531Headers.prototype, "xAmzSignedHeaders", void 0);
    return ListInvalidations20200531Headers;
}(SpeakeasyBase));
export { ListInvalidations20200531Headers };
var ListInvalidations20200531Request = /** @class */ (function (_super) {
    __extends(ListInvalidations20200531Request, _super);
    function ListInvalidations20200531Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListInvalidations20200531PathParams)
    ], ListInvalidations20200531Request.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListInvalidations20200531QueryParams)
    ], ListInvalidations20200531Request.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListInvalidations20200531Headers)
    ], ListInvalidations20200531Request.prototype, "headers", void 0);
    return ListInvalidations20200531Request;
}(SpeakeasyBase));
export { ListInvalidations20200531Request };
var ListInvalidations20200531Response = /** @class */ (function (_super) {
    __extends(ListInvalidations20200531Response, _super);
    function ListInvalidations20200531Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ListInvalidations20200531Response.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListInvalidations20200531Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListInvalidations20200531Response.prototype, "statusCode", void 0);
    return ListInvalidations20200531Response;
}(SpeakeasyBase));
export { ListInvalidations20200531Response };
