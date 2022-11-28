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
import { LineageConfiguration } from "./lineageconfiguration";
import { RecrawlPolicy } from "./recrawlpolicy";
import { SchemaChangePolicy } from "./schemachangepolicy";
import { CrawlerTargets } from "./crawlertargets";
var CreateCrawlerRequest = /** @class */ (function (_super) {
    __extends(CreateCrawlerRequest, _super);
    function CreateCrawlerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Classifiers" }),
        __metadata("design:type", Array)
    ], CreateCrawlerRequest.prototype, "classifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Configuration" }),
        __metadata("design:type", String)
    ], CreateCrawlerRequest.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CrawlerSecurityConfiguration" }),
        __metadata("design:type", String)
    ], CreateCrawlerRequest.prototype, "crawlerSecurityConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], CreateCrawlerRequest.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateCrawlerRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LineageConfiguration" }),
        __metadata("design:type", LineageConfiguration)
    ], CreateCrawlerRequest.prototype, "lineageConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateCrawlerRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecrawlPolicy" }),
        __metadata("design:type", RecrawlPolicy)
    ], CreateCrawlerRequest.prototype, "recrawlPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], CreateCrawlerRequest.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", String)
    ], CreateCrawlerRequest.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemaChangePolicy" }),
        __metadata("design:type", SchemaChangePolicy)
    ], CreateCrawlerRequest.prototype, "schemaChangePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TablePrefix" }),
        __metadata("design:type", String)
    ], CreateCrawlerRequest.prototype, "tablePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], CreateCrawlerRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Targets" }),
        __metadata("design:type", CrawlerTargets)
    ], CreateCrawlerRequest.prototype, "targets", void 0);
    return CreateCrawlerRequest;
}(SpeakeasyBase));
export { CreateCrawlerRequest };
