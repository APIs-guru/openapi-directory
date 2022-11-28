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
import { S3Config } from "./s3config";
import { S3StorageClassEnum } from "./s3storageclassenum";
// DescribeLocationS3Response
/**
 * DescribeLocationS3Response
**/
var DescribeLocationS3Response = /** @class */ (function (_super) {
    __extends(DescribeLocationS3Response, _super);
    function DescribeLocationS3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgentArns" }),
        __metadata("design:type", Array)
    ], DescribeLocationS3Response.prototype, "agentArns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeLocationS3Response.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocationArn" }),
        __metadata("design:type", String)
    ], DescribeLocationS3Response.prototype, "locationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocationUri" }),
        __metadata("design:type", String)
    ], DescribeLocationS3Response.prototype, "locationUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Config" }),
        __metadata("design:type", S3Config)
    ], DescribeLocationS3Response.prototype, "s3Config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3StorageClass" }),
        __metadata("design:type", String)
    ], DescribeLocationS3Response.prototype, "s3StorageClass", void 0);
    return DescribeLocationS3Response;
}(SpeakeasyBase));
export { DescribeLocationS3Response };
