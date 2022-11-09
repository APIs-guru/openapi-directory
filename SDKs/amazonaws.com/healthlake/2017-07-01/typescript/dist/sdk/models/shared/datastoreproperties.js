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
import { DatastoreStatusEnum } from "./datastorestatusenum";
import { FhirVersionEnum } from "./fhirversionenum";
import { PreloadDataConfig } from "./preloaddataconfig";
import { SseConfiguration } from "./sseconfiguration";
// DatastoreProperties
/**
 * Displays the properties of the Data Store, including the ID, Arn, name, and the status of the Data Store.
**/
var DatastoreProperties = /** @class */ (function (_super) {
    __extends(DatastoreProperties, _super);
    function DatastoreProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], DatastoreProperties.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=DatastoreArn" }),
        __metadata("design:type", String)
    ], DatastoreProperties.prototype, "datastoreArn", void 0);
    __decorate([
        Metadata({ data: "json, name=DatastoreEndpoint" }),
        __metadata("design:type", String)
    ], DatastoreProperties.prototype, "datastoreEndpoint", void 0);
    __decorate([
        Metadata({ data: "json, name=DatastoreId" }),
        __metadata("design:type", String)
    ], DatastoreProperties.prototype, "datastoreId", void 0);
    __decorate([
        Metadata({ data: "json, name=DatastoreName" }),
        __metadata("design:type", String)
    ], DatastoreProperties.prototype, "datastoreName", void 0);
    __decorate([
        Metadata({ data: "json, name=DatastoreStatus" }),
        __metadata("design:type", String)
    ], DatastoreProperties.prototype, "datastoreStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=DatastoreTypeVersion" }),
        __metadata("design:type", String)
    ], DatastoreProperties.prototype, "datastoreTypeVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=PreloadDataConfig" }),
        __metadata("design:type", PreloadDataConfig)
    ], DatastoreProperties.prototype, "preloadDataConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=SseConfiguration" }),
        __metadata("design:type", SseConfiguration)
    ], DatastoreProperties.prototype, "sseConfiguration", void 0);
    return DatastoreProperties;
}(SpeakeasyBase));
export { DatastoreProperties };
