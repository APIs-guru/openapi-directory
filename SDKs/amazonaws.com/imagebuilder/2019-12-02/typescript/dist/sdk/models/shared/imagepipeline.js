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
import { ImageTestsConfiguration } from "./imagetestsconfiguration";
import { PlatformEnum } from "./platformenum";
import { Schedule } from "./schedule";
import { PipelineStatusEnum } from "./pipelinestatusenum";
// ImagePipeline
/**
 * Details of an image pipeline.
**/
var ImagePipeline = /** @class */ (function (_super) {
    __extends(ImagePipeline, _super);
    function ImagePipeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], ImagePipeline.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=containerRecipeArn" }),
        __metadata("design:type", String)
    ], ImagePipeline.prototype, "containerRecipeArn", void 0);
    __decorate([
        Metadata({ data: "json, name=dateCreated" }),
        __metadata("design:type", String)
    ], ImagePipeline.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=dateLastRun" }),
        __metadata("design:type", String)
    ], ImagePipeline.prototype, "dateLastRun", void 0);
    __decorate([
        Metadata({ data: "json, name=dateNextRun" }),
        __metadata("design:type", String)
    ], ImagePipeline.prototype, "dateNextRun", void 0);
    __decorate([
        Metadata({ data: "json, name=dateUpdated" }),
        __metadata("design:type", String)
    ], ImagePipeline.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ImagePipeline.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=distributionConfigurationArn" }),
        __metadata("design:type", String)
    ], ImagePipeline.prototype, "distributionConfigurationArn", void 0);
    __decorate([
        Metadata({ data: "json, name=enhancedImageMetadataEnabled" }),
        __metadata("design:type", Boolean)
    ], ImagePipeline.prototype, "enhancedImageMetadataEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=imageRecipeArn" }),
        __metadata("design:type", String)
    ], ImagePipeline.prototype, "imageRecipeArn", void 0);
    __decorate([
        Metadata({ data: "json, name=imageTestsConfiguration" }),
        __metadata("design:type", ImageTestsConfiguration)
    ], ImagePipeline.prototype, "imageTestsConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=infrastructureConfigurationArn" }),
        __metadata("design:type", String)
    ], ImagePipeline.prototype, "infrastructureConfigurationArn", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImagePipeline.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], ImagePipeline.prototype, "platform", void 0);
    __decorate([
        Metadata({ data: "json, name=schedule" }),
        __metadata("design:type", Schedule)
    ], ImagePipeline.prototype, "schedule", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ImagePipeline.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], ImagePipeline.prototype, "tags", void 0);
    return ImagePipeline;
}(SpeakeasyBase));
export { ImagePipeline };
