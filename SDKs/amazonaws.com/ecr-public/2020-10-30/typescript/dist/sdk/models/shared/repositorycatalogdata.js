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
// RepositoryCatalogData
/**
 * The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
**/
var RepositoryCatalogData = /** @class */ (function (_super) {
    __extends(RepositoryCatalogData, _super);
    function RepositoryCatalogData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=aboutText" }),
        __metadata("design:type", String)
    ], RepositoryCatalogData.prototype, "aboutText", void 0);
    __decorate([
        Metadata({ data: "json, name=architectures" }),
        __metadata("design:type", Array)
    ], RepositoryCatalogData.prototype, "architectures", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], RepositoryCatalogData.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=logoUrl" }),
        __metadata("design:type", String)
    ], RepositoryCatalogData.prototype, "logoUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=marketplaceCertified" }),
        __metadata("design:type", Boolean)
    ], RepositoryCatalogData.prototype, "marketplaceCertified", void 0);
    __decorate([
        Metadata({ data: "json, name=operatingSystems" }),
        __metadata("design:type", Array)
    ], RepositoryCatalogData.prototype, "operatingSystems", void 0);
    __decorate([
        Metadata({ data: "json, name=usageText" }),
        __metadata("design:type", String)
    ], RepositoryCatalogData.prototype, "usageText", void 0);
    return RepositoryCatalogData;
}(SpeakeasyBase));
export { RepositoryCatalogData };
