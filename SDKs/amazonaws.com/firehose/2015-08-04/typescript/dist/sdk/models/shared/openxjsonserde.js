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
// OpenXJsonSerDe
/**
 * The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.
**/
var OpenXJsonSerDe = /** @class */ (function (_super) {
    __extends(OpenXJsonSerDe, _super);
    function OpenXJsonSerDe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CaseInsensitive" }),
        __metadata("design:type", Boolean)
    ], OpenXJsonSerDe.prototype, "caseInsensitive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColumnToJsonKeyMappings" }),
        __metadata("design:type", Map)
    ], OpenXJsonSerDe.prototype, "columnToJsonKeyMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConvertDotsInJsonKeysToUnderscores" }),
        __metadata("design:type", Boolean)
    ], OpenXJsonSerDe.prototype, "convertDotsInJsonKeysToUnderscores", void 0);
    return OpenXJsonSerDe;
}(SpeakeasyBase));
export { OpenXJsonSerDe };
