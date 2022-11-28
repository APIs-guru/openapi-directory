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
import { DataSource } from "./datasource";
import { Tag } from "./tag";
var CreateDatasetImportJobRequest = /** @class */ (function (_super) {
    __extends(CreateDatasetImportJobRequest, _super);
    function CreateDatasetImportJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataSource" }),
        __metadata("design:type", DataSource)
    ], CreateDatasetImportJobRequest.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatasetArn" }),
        __metadata("design:type", String)
    ], CreateDatasetImportJobRequest.prototype, "datasetArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatasetImportJobName" }),
        __metadata("design:type", String)
    ], CreateDatasetImportJobRequest.prototype, "datasetImportJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GeolocationFormat" }),
        __metadata("design:type", String)
    ], CreateDatasetImportJobRequest.prototype, "geolocationFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateDatasetImportJobRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeZone" }),
        __metadata("design:type", String)
    ], CreateDatasetImportJobRequest.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimestampFormat" }),
        __metadata("design:type", String)
    ], CreateDatasetImportJobRequest.prototype, "timestampFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UseGeolocationForTimeZone" }),
        __metadata("design:type", Boolean)
    ], CreateDatasetImportJobRequest.prototype, "useGeolocationForTimeZone", void 0);
    return CreateDatasetImportJobRequest;
}(SpeakeasyBase));
export { CreateDatasetImportJobRequest };
