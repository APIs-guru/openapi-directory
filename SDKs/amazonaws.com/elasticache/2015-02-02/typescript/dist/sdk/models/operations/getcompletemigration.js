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
export var GetCompleteMigrationActionEnum;
(function (GetCompleteMigrationActionEnum) {
    GetCompleteMigrationActionEnum["CompleteMigration"] = "CompleteMigration";
})(GetCompleteMigrationActionEnum || (GetCompleteMigrationActionEnum = {}));
export var GetCompleteMigrationVersionEnum;
(function (GetCompleteMigrationVersionEnum) {
    GetCompleteMigrationVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetCompleteMigrationVersionEnum || (GetCompleteMigrationVersionEnum = {}));
var GetCompleteMigrationQueryParams = /** @class */ (function (_super) {
    __extends(GetCompleteMigrationQueryParams, _super);
    function GetCompleteMigrationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCompleteMigrationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Force" }),
        __metadata("design:type", Boolean)
    ], GetCompleteMigrationQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupId" }),
        __metadata("design:type", String)
    ], GetCompleteMigrationQueryParams.prototype, "replicationGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCompleteMigrationQueryParams.prototype, "version", void 0);
    return GetCompleteMigrationQueryParams;
}(SpeakeasyBase));
export { GetCompleteMigrationQueryParams };
var GetCompleteMigrationHeaders = /** @class */ (function (_super) {
    __extends(GetCompleteMigrationHeaders, _super);
    function GetCompleteMigrationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCompleteMigrationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCompleteMigrationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCompleteMigrationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCompleteMigrationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCompleteMigrationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCompleteMigrationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCompleteMigrationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCompleteMigrationHeaders;
}(SpeakeasyBase));
export { GetCompleteMigrationHeaders };
var GetCompleteMigrationRequest = /** @class */ (function (_super) {
    __extends(GetCompleteMigrationRequest, _super);
    function GetCompleteMigrationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCompleteMigrationQueryParams)
    ], GetCompleteMigrationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCompleteMigrationHeaders)
    ], GetCompleteMigrationRequest.prototype, "headers", void 0);
    return GetCompleteMigrationRequest;
}(SpeakeasyBase));
export { GetCompleteMigrationRequest };
var GetCompleteMigrationResponse = /** @class */ (function (_super) {
    __extends(GetCompleteMigrationResponse, _super);
    function GetCompleteMigrationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCompleteMigrationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCompleteMigrationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCompleteMigrationResponse.prototype, "statusCode", void 0);
    return GetCompleteMigrationResponse;
}(SpeakeasyBase));
export { GetCompleteMigrationResponse };
