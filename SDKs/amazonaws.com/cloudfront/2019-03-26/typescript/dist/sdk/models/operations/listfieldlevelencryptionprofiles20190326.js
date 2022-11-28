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
var ListFieldLevelEncryptionProfiles20190326QueryParams = /** @class */ (function (_super) {
    __extends(ListFieldLevelEncryptionProfiles20190326QueryParams, _super);
    function ListFieldLevelEncryptionProfiles20190326QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], ListFieldLevelEncryptionProfiles20190326QueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], ListFieldLevelEncryptionProfiles20190326QueryParams.prototype, "maxItems", void 0);
    return ListFieldLevelEncryptionProfiles20190326QueryParams;
}(SpeakeasyBase));
export { ListFieldLevelEncryptionProfiles20190326QueryParams };
var ListFieldLevelEncryptionProfiles20190326Headers = /** @class */ (function (_super) {
    __extends(ListFieldLevelEncryptionProfiles20190326Headers, _super);
    function ListFieldLevelEncryptionProfiles20190326Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListFieldLevelEncryptionProfiles20190326Headers.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListFieldLevelEncryptionProfiles20190326Headers.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListFieldLevelEncryptionProfiles20190326Headers.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListFieldLevelEncryptionProfiles20190326Headers.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListFieldLevelEncryptionProfiles20190326Headers.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListFieldLevelEncryptionProfiles20190326Headers.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListFieldLevelEncryptionProfiles20190326Headers.prototype, "xAmzSignedHeaders", void 0);
    return ListFieldLevelEncryptionProfiles20190326Headers;
}(SpeakeasyBase));
export { ListFieldLevelEncryptionProfiles20190326Headers };
var ListFieldLevelEncryptionProfiles20190326Request = /** @class */ (function (_super) {
    __extends(ListFieldLevelEncryptionProfiles20190326Request, _super);
    function ListFieldLevelEncryptionProfiles20190326Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFieldLevelEncryptionProfiles20190326QueryParams)
    ], ListFieldLevelEncryptionProfiles20190326Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFieldLevelEncryptionProfiles20190326Headers)
    ], ListFieldLevelEncryptionProfiles20190326Request.prototype, "headers", void 0);
    return ListFieldLevelEncryptionProfiles20190326Request;
}(SpeakeasyBase));
export { ListFieldLevelEncryptionProfiles20190326Request };
var ListFieldLevelEncryptionProfiles20190326Response = /** @class */ (function (_super) {
    __extends(ListFieldLevelEncryptionProfiles20190326Response, _super);
    function ListFieldLevelEncryptionProfiles20190326Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ListFieldLevelEncryptionProfiles20190326Response.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListFieldLevelEncryptionProfiles20190326Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListFieldLevelEncryptionProfiles20190326Response.prototype, "statusCode", void 0);
    return ListFieldLevelEncryptionProfiles20190326Response;
}(SpeakeasyBase));
export { ListFieldLevelEncryptionProfiles20190326Response };
