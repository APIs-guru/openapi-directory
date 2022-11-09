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
import { ContainerTypeEnum } from "./containertypeenum";
import { InstanceConfiguration } from "./instanceconfiguration";
import { PlatformEnum } from "./platformenum";
import { TargetContainerRepository } from "./targetcontainerrepository";
// ContainerRecipe
/**
 * A container recipe.
**/
var ContainerRecipe = /** @class */ (function (_super) {
    __extends(ContainerRecipe, _super);
    function ContainerRecipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], ContainerRecipe.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=components", elemType: shared.ComponentConfiguration }),
        __metadata("design:type", Array)
    ], ContainerRecipe.prototype, "components", void 0);
    __decorate([
        Metadata({ data: "json, name=containerType" }),
        __metadata("design:type", String)
    ], ContainerRecipe.prototype, "containerType", void 0);
    __decorate([
        Metadata({ data: "json, name=dateCreated" }),
        __metadata("design:type", String)
    ], ContainerRecipe.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ContainerRecipe.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=dockerfileTemplateData" }),
        __metadata("design:type", String)
    ], ContainerRecipe.prototype, "dockerfileTemplateData", void 0);
    __decorate([
        Metadata({ data: "json, name=encrypted" }),
        __metadata("design:type", Boolean)
    ], ContainerRecipe.prototype, "encrypted", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceConfiguration" }),
        __metadata("design:type", InstanceConfiguration)
    ], ContainerRecipe.prototype, "instanceConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=kmsKeyId" }),
        __metadata("design:type", String)
    ], ContainerRecipe.prototype, "kmsKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ContainerRecipe.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], ContainerRecipe.prototype, "owner", void 0);
    __decorate([
        Metadata({ data: "json, name=parentImage" }),
        __metadata("design:type", String)
    ], ContainerRecipe.prototype, "parentImage", void 0);
    __decorate([
        Metadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], ContainerRecipe.prototype, "platform", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], ContainerRecipe.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=targetRepository" }),
        __metadata("design:type", TargetContainerRepository)
    ], ContainerRecipe.prototype, "targetRepository", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ContainerRecipe.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "json, name=workingDirectory" }),
        __metadata("design:type", String)
    ], ContainerRecipe.prototype, "workingDirectory", void 0);
    return ContainerRecipe;
}(SpeakeasyBase));
export { ContainerRecipe };
