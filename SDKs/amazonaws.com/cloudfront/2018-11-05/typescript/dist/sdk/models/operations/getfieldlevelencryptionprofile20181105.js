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
var GetFieldLevelEncryptionProfile20181105PathParams = /** @class */ (function (_super) {
    __extends(GetFieldLevelEncryptionProfile20181105PathParams, _super);
    function GetFieldLevelEncryptionProfile20181105PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Id" }),
        __metadata("design:type", String)
    ], GetFieldLevelEncryptionProfile20181105PathParams.prototype, "id", void 0);
    return GetFieldLevelEncryptionProfile20181105PathParams;
}(SpeakeasyBase));
export { GetFieldLevelEncryptionProfile20181105PathParams };
var GetFieldLevelEncryptionProfile20181105Headers = /** @class */ (function (_super) {
    __extends(GetFieldLevelEncryptionProfile20181105Headers, _super);
    function GetFieldLevelEncryptionProfile20181105Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetFieldLevelEncryptionProfile20181105Headers.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetFieldLevelEncryptionProfile20181105Headers.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetFieldLevelEncryptionProfile20181105Headers.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetFieldLevelEncryptionProfile20181105Headers.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetFieldLevelEncryptionProfile20181105Headers.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetFieldLevelEncryptionProfile20181105Headers.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetFieldLevelEncryptionProfile20181105Headers.prototype, "xAmzSignedHeaders", void 0);
    return GetFieldLevelEncryptionProfile20181105Headers;
}(SpeakeasyBase));
export { GetFieldLevelEncryptionProfile20181105Headers };
var GetFieldLevelEncryptionProfile20181105Request = /** @class */ (function (_super) {
    __extends(GetFieldLevelEncryptionProfile20181105Request, _super);
    function GetFieldLevelEncryptionProfile20181105Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFieldLevelEncryptionProfile20181105PathParams)
    ], GetFieldLevelEncryptionProfile20181105Request.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFieldLevelEncryptionProfile20181105Headers)
    ], GetFieldLevelEncryptionProfile20181105Request.prototype, "headers", void 0);
    return GetFieldLevelEncryptionProfile20181105Request;
}(SpeakeasyBase));
export { GetFieldLevelEncryptionProfile20181105Request };
var GetFieldLevelEncryptionProfile20181105Response = /** @class */ (function (_super) {
    __extends(GetFieldLevelEncryptionProfile20181105Response, _super);
    function GetFieldLevelEncryptionProfile20181105Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetFieldLevelEncryptionProfile20181105Response.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFieldLevelEncryptionProfile20181105Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFieldLevelEncryptionProfile20181105Response.prototype, "statusCode", void 0);
    return GetFieldLevelEncryptionProfile20181105Response;
}(SpeakeasyBase));
export { GetFieldLevelEncryptionProfile20181105Response };
