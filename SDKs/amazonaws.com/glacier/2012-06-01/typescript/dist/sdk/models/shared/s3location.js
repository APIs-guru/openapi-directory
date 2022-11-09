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
import * as shared from "../shared";
import { CannedAclEnum } from "./cannedaclenum";
import { Encryption } from "./encryption";
import { StorageClassEnum } from "./storageclassenum";
// S3Location
/**
 * Contains information about the location in Amazon S3 where the select job results are stored.
**/
var S3Location = /** @class */ (function (_super) {
    __extends(S3Location, _super);
    function S3Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AccessControlList", elemType: shared.Grant }),
        __metadata("design:type", Array)
    ], S3Location.prototype, "accessControlList", void 0);
    __decorate([
        Metadata({ data: "json, name=BucketName" }),
        __metadata("design:type", String)
    ], S3Location.prototype, "bucketName", void 0);
    __decorate([
        Metadata({ data: "json, name=CannedACL" }),
        __metadata("design:type", String)
    ], S3Location.prototype, "cannedAcl", void 0);
    __decorate([
        Metadata({ data: "json, name=Encryption" }),
        __metadata("design:type", Encryption)
    ], S3Location.prototype, "encryption", void 0);
    __decorate([
        Metadata({ data: "json, name=Prefix" }),
        __metadata("design:type", String)
    ], S3Location.prototype, "prefix", void 0);
    __decorate([
        Metadata({ data: "json, name=StorageClass" }),
        __metadata("design:type", String)
    ], S3Location.prototype, "storageClass", void 0);
    __decorate([
        Metadata({ data: "json, name=Tagging" }),
        __metadata("design:type", Map)
    ], S3Location.prototype, "tagging", void 0);
    __decorate([
        Metadata({ data: "json, name=UserMetadata" }),
        __metadata("design:type", Map)
    ], S3Location.prototype, "userMetadata", void 0);
    return S3Location;
}(SpeakeasyBase));
export { S3Location };
