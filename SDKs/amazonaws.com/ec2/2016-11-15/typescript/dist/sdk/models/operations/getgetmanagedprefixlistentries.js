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
export var GetGetManagedPrefixListEntriesActionEnum;
(function (GetGetManagedPrefixListEntriesActionEnum) {
    GetGetManagedPrefixListEntriesActionEnum["GetManagedPrefixListEntries"] = "GetManagedPrefixListEntries";
})(GetGetManagedPrefixListEntriesActionEnum || (GetGetManagedPrefixListEntriesActionEnum = {}));
export var GetGetManagedPrefixListEntriesVersionEnum;
(function (GetGetManagedPrefixListEntriesVersionEnum) {
    GetGetManagedPrefixListEntriesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetGetManagedPrefixListEntriesVersionEnum || (GetGetManagedPrefixListEntriesVersionEnum = {}));
var GetGetManagedPrefixListEntriesQueryParams = /** @class */ (function (_super) {
    __extends(GetGetManagedPrefixListEntriesQueryParams, _super);
    function GetGetManagedPrefixListEntriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListEntriesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetGetManagedPrefixListEntriesQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetGetManagedPrefixListEntriesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListEntriesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PrefixListId" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListEntriesQueryParams.prototype, "prefixListId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TargetVersion" }),
        __metadata("design:type", Number)
    ], GetGetManagedPrefixListEntriesQueryParams.prototype, "targetVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListEntriesQueryParams.prototype, "version", void 0);
    return GetGetManagedPrefixListEntriesQueryParams;
}(SpeakeasyBase));
export { GetGetManagedPrefixListEntriesQueryParams };
var GetGetManagedPrefixListEntriesHeaders = /** @class */ (function (_super) {
    __extends(GetGetManagedPrefixListEntriesHeaders, _super);
    function GetGetManagedPrefixListEntriesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListEntriesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListEntriesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListEntriesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListEntriesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListEntriesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListEntriesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListEntriesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetManagedPrefixListEntriesHeaders;
}(SpeakeasyBase));
export { GetGetManagedPrefixListEntriesHeaders };
var GetGetManagedPrefixListEntriesRequest = /** @class */ (function (_super) {
    __extends(GetGetManagedPrefixListEntriesRequest, _super);
    function GetGetManagedPrefixListEntriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetManagedPrefixListEntriesQueryParams)
    ], GetGetManagedPrefixListEntriesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetManagedPrefixListEntriesHeaders)
    ], GetGetManagedPrefixListEntriesRequest.prototype, "headers", void 0);
    return GetGetManagedPrefixListEntriesRequest;
}(SpeakeasyBase));
export { GetGetManagedPrefixListEntriesRequest };
var GetGetManagedPrefixListEntriesResponse = /** @class */ (function (_super) {
    __extends(GetGetManagedPrefixListEntriesResponse, _super);
    function GetGetManagedPrefixListEntriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetManagedPrefixListEntriesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetManagedPrefixListEntriesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetManagedPrefixListEntriesResponse.prototype, "statusCode", void 0);
    return GetGetManagedPrefixListEntriesResponse;
}(SpeakeasyBase));
export { GetGetManagedPrefixListEntriesResponse };
