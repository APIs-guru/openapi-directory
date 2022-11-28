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
import { OrcCompressionEnum } from "./orccompressionenum";
import { OrcFormatVersionEnum } from "./orcformatversionenum";
// OrcSerDe
/**
 * A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>.
**/
var OrcSerDe = /** @class */ (function (_super) {
    __extends(OrcSerDe, _super);
    function OrcSerDe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockSizeBytes" }),
        __metadata("design:type", Number)
    ], OrcSerDe.prototype, "blockSizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BloomFilterColumns" }),
        __metadata("design:type", Array)
    ], OrcSerDe.prototype, "bloomFilterColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BloomFilterFalsePositiveProbability" }),
        __metadata("design:type", Number)
    ], OrcSerDe.prototype, "bloomFilterFalsePositiveProbability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Compression" }),
        __metadata("design:type", String)
    ], OrcSerDe.prototype, "compression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DictionaryKeyThreshold" }),
        __metadata("design:type", Number)
    ], OrcSerDe.prototype, "dictionaryKeyThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnablePadding" }),
        __metadata("design:type", Boolean)
    ], OrcSerDe.prototype, "enablePadding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FormatVersion" }),
        __metadata("design:type", String)
    ], OrcSerDe.prototype, "formatVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaddingTolerance" }),
        __metadata("design:type", Number)
    ], OrcSerDe.prototype, "paddingTolerance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RowIndexStride" }),
        __metadata("design:type", Number)
    ], OrcSerDe.prototype, "rowIndexStride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StripeSizeBytes" }),
        __metadata("design:type", Number)
    ], OrcSerDe.prototype, "stripeSizeBytes", void 0);
    return OrcSerDe;
}(SpeakeasyBase));
export { OrcSerDe };
