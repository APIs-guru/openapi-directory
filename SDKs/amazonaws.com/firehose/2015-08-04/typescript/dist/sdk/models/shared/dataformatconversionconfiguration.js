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
import { InputFormatConfiguration } from "./inputformatconfiguration";
import { OutputFormatConfiguration } from "./outputformatconfiguration";
import { SchemaConfiguration } from "./schemaconfiguration";
// DataFormatConversionConfiguration
/**
 * Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>.
**/
var DataFormatConversionConfiguration = /** @class */ (function (_super) {
    __extends(DataFormatConversionConfiguration, _super);
    function DataFormatConversionConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], DataFormatConversionConfiguration.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputFormatConfiguration" }),
        __metadata("design:type", InputFormatConfiguration)
    ], DataFormatConversionConfiguration.prototype, "inputFormatConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputFormatConfiguration" }),
        __metadata("design:type", OutputFormatConfiguration)
    ], DataFormatConversionConfiguration.prototype, "outputFormatConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemaConfiguration" }),
        __metadata("design:type", SchemaConfiguration)
    ], DataFormatConversionConfiguration.prototype, "schemaConfiguration", void 0);
    return DataFormatConversionConfiguration;
}(SpeakeasyBase));
export { DataFormatConversionConfiguration };
