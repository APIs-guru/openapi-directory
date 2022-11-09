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
import { PlatformEnum } from "./platformenum";
import { ComponentTypeEnum } from "./componenttypeenum";
// Component
/**
 * A detailed view of a component.
**/
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Component.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=changeDescription" }),
        __metadata("design:type", String)
    ], Component.prototype, "changeDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], Component.prototype, "data", void 0);
    __decorate([
        Metadata({ data: "json, name=dateCreated" }),
        __metadata("design:type", String)
    ], Component.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Component.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=encrypted" }),
        __metadata("design:type", Boolean)
    ], Component.prototype, "encrypted", void 0);
    __decorate([
        Metadata({ data: "json, name=kmsKeyId" }),
        __metadata("design:type", String)
    ], Component.prototype, "kmsKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Component.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], Component.prototype, "owner", void 0);
    __decorate([
        Metadata({ data: "json, name=parameters", elemType: shared.ComponentParameterDetail }),
        __metadata("design:type", Array)
    ], Component.prototype, "parameters", void 0);
    __decorate([
        Metadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], Component.prototype, "platform", void 0);
    __decorate([
        Metadata({ data: "json, name=supportedOsVersions" }),
        __metadata("design:type", Array)
    ], Component.prototype, "supportedOsVersions", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], Component.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Component.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Component.prototype, "version", void 0);
    return Component;
}(SpeakeasyBase));
export { Component };
