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
export var GetGetManagedPrefixListAssociationsActionEnum;
(function (GetGetManagedPrefixListAssociationsActionEnum) {
    GetGetManagedPrefixListAssociationsActionEnum["GetManagedPrefixListAssociations"] = "GetManagedPrefixListAssociations";
})(GetGetManagedPrefixListAssociationsActionEnum || (GetGetManagedPrefixListAssociationsActionEnum = {}));
export var GetGetManagedPrefixListAssociationsVersionEnum;
(function (GetGetManagedPrefixListAssociationsVersionEnum) {
    GetGetManagedPrefixListAssociationsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetGetManagedPrefixListAssociationsVersionEnum || (GetGetManagedPrefixListAssociationsVersionEnum = {}));
var GetGetManagedPrefixListAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(GetGetManagedPrefixListAssociationsQueryParams, _super);
    function GetGetManagedPrefixListAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListAssociationsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetGetManagedPrefixListAssociationsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetGetManagedPrefixListAssociationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListAssociationsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PrefixListId" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListAssociationsQueryParams.prototype, "prefixListId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListAssociationsQueryParams.prototype, "version", void 0);
    return GetGetManagedPrefixListAssociationsQueryParams;
}(SpeakeasyBase));
export { GetGetManagedPrefixListAssociationsQueryParams };
var GetGetManagedPrefixListAssociationsHeaders = /** @class */ (function (_super) {
    __extends(GetGetManagedPrefixListAssociationsHeaders, _super);
    function GetGetManagedPrefixListAssociationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListAssociationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListAssociationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListAssociationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListAssociationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListAssociationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListAssociationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListAssociationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetManagedPrefixListAssociationsHeaders;
}(SpeakeasyBase));
export { GetGetManagedPrefixListAssociationsHeaders };
var GetGetManagedPrefixListAssociationsRequest = /** @class */ (function (_super) {
    __extends(GetGetManagedPrefixListAssociationsRequest, _super);
    function GetGetManagedPrefixListAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetManagedPrefixListAssociationsQueryParams)
    ], GetGetManagedPrefixListAssociationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetManagedPrefixListAssociationsHeaders)
    ], GetGetManagedPrefixListAssociationsRequest.prototype, "headers", void 0);
    return GetGetManagedPrefixListAssociationsRequest;
}(SpeakeasyBase));
export { GetGetManagedPrefixListAssociationsRequest };
var GetGetManagedPrefixListAssociationsResponse = /** @class */ (function (_super) {
    __extends(GetGetManagedPrefixListAssociationsResponse, _super);
    function GetGetManagedPrefixListAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetManagedPrefixListAssociationsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetManagedPrefixListAssociationsResponse.prototype, "statusCode", void 0);
    return GetGetManagedPrefixListAssociationsResponse;
}(SpeakeasyBase));
export { GetGetManagedPrefixListAssociationsResponse };
