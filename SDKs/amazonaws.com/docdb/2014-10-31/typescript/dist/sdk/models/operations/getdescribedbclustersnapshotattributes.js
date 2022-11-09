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
export var GetDescribeDbClusterSnapshotAttributesActionEnum;
(function (GetDescribeDbClusterSnapshotAttributesActionEnum) {
    GetDescribeDbClusterSnapshotAttributesActionEnum["DescribeDbClusterSnapshotAttributes"] = "DescribeDBClusterSnapshotAttributes";
})(GetDescribeDbClusterSnapshotAttributesActionEnum || (GetDescribeDbClusterSnapshotAttributesActionEnum = {}));
export var GetDescribeDbClusterSnapshotAttributesVersionEnum;
(function (GetDescribeDbClusterSnapshotAttributesVersionEnum) {
    GetDescribeDbClusterSnapshotAttributesVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetDescribeDbClusterSnapshotAttributesVersionEnum || (GetDescribeDbClusterSnapshotAttributesVersionEnum = {}));
var GetDescribeDbClusterSnapshotAttributesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeDbClusterSnapshotAttributesQueryParams, _super);
    function GetDescribeDbClusterSnapshotAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeDbClusterSnapshotAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeDbClusterSnapshotAttributesQueryParams.prototype, "dbClusterSnapshotIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeDbClusterSnapshotAttributesQueryParams.prototype, "version", void 0);
    return GetDescribeDbClusterSnapshotAttributesQueryParams;
}(SpeakeasyBase));
export { GetDescribeDbClusterSnapshotAttributesQueryParams };
var GetDescribeDbClusterSnapshotAttributesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeDbClusterSnapshotAttributesHeaders, _super);
    function GetDescribeDbClusterSnapshotAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeDbClusterSnapshotAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeDbClusterSnapshotAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeDbClusterSnapshotAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeDbClusterSnapshotAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeDbClusterSnapshotAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeDbClusterSnapshotAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeDbClusterSnapshotAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeDbClusterSnapshotAttributesHeaders;
}(SpeakeasyBase));
export { GetDescribeDbClusterSnapshotAttributesHeaders };
var GetDescribeDbClusterSnapshotAttributesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeDbClusterSnapshotAttributesRequest, _super);
    function GetDescribeDbClusterSnapshotAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeDbClusterSnapshotAttributesQueryParams)
    ], GetDescribeDbClusterSnapshotAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeDbClusterSnapshotAttributesHeaders)
    ], GetDescribeDbClusterSnapshotAttributesRequest.prototype, "headers", void 0);
    return GetDescribeDbClusterSnapshotAttributesRequest;
}(SpeakeasyBase));
export { GetDescribeDbClusterSnapshotAttributesRequest };
var GetDescribeDbClusterSnapshotAttributesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeDbClusterSnapshotAttributesResponse, _super);
    function GetDescribeDbClusterSnapshotAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeDbClusterSnapshotAttributesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeDbClusterSnapshotAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeDbClusterSnapshotAttributesResponse.prototype, "statusCode", void 0);
    return GetDescribeDbClusterSnapshotAttributesResponse;
}(SpeakeasyBase));
export { GetDescribeDbClusterSnapshotAttributesResponse };
