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
import { ActionCodeEnum } from "./actioncodeenum";
import { InventoryRetrievalJobDescription } from "./inventoryretrievaljobdescription";
import { OutputLocation } from "./outputlocation";
import { SelectParameters } from "./selectparameters";
import { StatusCodeEnum } from "./statuscodeenum";
// GlacierJobDescription
/**
 * Contains the description of an Amazon S3 Glacier job.
**/
var GlacierJobDescription = /** @class */ (function (_super) {
    __extends(GlacierJobDescription, _super);
    function GlacierJobDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Action" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArchiveId" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "archiveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArchiveSHA256TreeHash" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "archiveSha256TreeHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArchiveSizeInBytes" }),
        __metadata("design:type", Number)
    ], GlacierJobDescription.prototype, "archiveSizeInBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Completed" }),
        __metadata("design:type", Boolean)
    ], GlacierJobDescription.prototype, "completed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDate" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "completionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InventoryRetrievalParameters" }),
        __metadata("design:type", InventoryRetrievalJobDescription)
    ], GlacierJobDescription.prototype, "inventoryRetrievalParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InventorySizeInBytes" }),
        __metadata("design:type", Number)
    ], GlacierJobDescription.prototype, "inventorySizeInBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobDescription" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "jobDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobId" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobOutputPath" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "jobOutputPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputLocation" }),
        __metadata("design:type", OutputLocation)
    ], GlacierJobDescription.prototype, "outputLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetrievalByteRange" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "retrievalByteRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SHA256TreeHash" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "sha256TreeHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SNSTopic" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "snsTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SelectParameters" }),
        __metadata("design:type", SelectParameters)
    ], GlacierJobDescription.prototype, "selectParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusCode" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusMessage" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tier" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "tier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VaultARN" }),
        __metadata("design:type", String)
    ], GlacierJobDescription.prototype, "vaultArn", void 0);
    return GlacierJobDescription;
}(SpeakeasyBase));
export { GlacierJobDescription };
