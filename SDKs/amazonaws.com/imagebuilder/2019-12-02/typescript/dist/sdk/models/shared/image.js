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
import { ContainerRecipe } from "./containerrecipe";
import { DistributionConfiguration } from "./distributionconfiguration";
import { ImageRecipe } from "./imagerecipe";
import { ImageTestsConfiguration } from "./imagetestsconfiguration";
import { InfrastructureConfiguration } from "./infrastructureconfiguration";
import { OutputResources } from "./outputresources";
import { PlatformEnum } from "./platformenum";
import { ImageState } from "./imagestate";
import { ImageTypeEnum } from "./imagetypeenum";
// Image
/**
 * An Image Builder image. You must specify exactly one recipe for the image – either a container recipe (<code>containerRecipe</code>), which creates a container image, or an image recipe (<code>imageRecipe</code>), which creates an AMI.
**/
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Image.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerRecipe" }),
        __metadata("design:type", ContainerRecipe)
    ], Image.prototype, "containerRecipe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateCreated" }),
        __metadata("design:type", String)
    ], Image.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributionConfiguration" }),
        __metadata("design:type", DistributionConfiguration)
    ], Image.prototype, "distributionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enhancedImageMetadataEnabled" }),
        __metadata("design:type", Boolean)
    ], Image.prototype, "enhancedImageMetadataEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageRecipe" }),
        __metadata("design:type", ImageRecipe)
    ], Image.prototype, "imageRecipe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageTestsConfiguration" }),
        __metadata("design:type", ImageTestsConfiguration)
    ], Image.prototype, "imageTestsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infrastructureConfiguration" }),
        __metadata("design:type", InfrastructureConfiguration)
    ], Image.prototype, "infrastructureConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Image.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osVersion" }),
        __metadata("design:type", String)
    ], Image.prototype, "osVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputResources" }),
        __metadata("design:type", OutputResources)
    ], Image.prototype, "outputResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], Image.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourcePipelineArn" }),
        __metadata("design:type", String)
    ], Image.prototype, "sourcePipelineArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourcePipelineName" }),
        __metadata("design:type", String)
    ], Image.prototype, "sourcePipelineName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", ImageState)
    ], Image.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], Image.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Image.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Image.prototype, "version", void 0);
    return Image;
}(SpeakeasyBase));
export { Image };
