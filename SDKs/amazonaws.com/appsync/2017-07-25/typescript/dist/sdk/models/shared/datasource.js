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
import { DynamodbDataSourceConfig } from "./dynamodbdatasourceconfig";
import { ElasticsearchDataSourceConfig } from "./elasticsearchdatasourceconfig";
import { HttpDataSourceConfig } from "./httpdatasourceconfig";
import { LambdaDataSourceConfig } from "./lambdadatasourceconfig";
import { RelationalDatabaseDataSourceConfig } from "./relationaldatabasedatasourceconfig";
import { DataSourceTypeEnum } from "./datasourcetypeenum";
// DataSource
/**
 * Describes a data source.
**/
var DataSource = /** @class */ (function (_super) {
    __extends(DataSource, _super);
    function DataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=dataSourceArn" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "dataSourceArn", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=dynamodbConfig" }),
        __metadata("design:type", DynamodbDataSourceConfig)
    ], DataSource.prototype, "dynamodbConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=elasticsearchConfig" }),
        __metadata("design:type", ElasticsearchDataSourceConfig)
    ], DataSource.prototype, "elasticsearchConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=httpConfig" }),
        __metadata("design:type", HttpDataSourceConfig)
    ], DataSource.prototype, "httpConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=lambdaConfig" }),
        __metadata("design:type", LambdaDataSourceConfig)
    ], DataSource.prototype, "lambdaConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=relationalDatabaseConfig" }),
        __metadata("design:type", RelationalDatabaseDataSourceConfig)
    ], DataSource.prototype, "relationalDatabaseConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceRoleArn" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "serviceRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "type", void 0);
    return DataSource;
}(SpeakeasyBase));
export { DataSource };
