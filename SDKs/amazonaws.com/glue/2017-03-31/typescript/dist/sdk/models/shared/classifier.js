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
import { CsvClassifier } from "./csvclassifier";
import { GrokClassifier } from "./grokclassifier";
import { JsonClassifier } from "./jsonclassifier";
import { XmlClassifier } from "./xmlclassifier";
// Classifier
/**
 * <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p>
**/
var Classifier = /** @class */ (function (_super) {
    __extends(Classifier, _super);
    function Classifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CsvClassifier" }),
        __metadata("design:type", CsvClassifier)
    ], Classifier.prototype, "csvClassifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GrokClassifier" }),
        __metadata("design:type", GrokClassifier)
    ], Classifier.prototype, "grokClassifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JsonClassifier" }),
        __metadata("design:type", JsonClassifier)
    ], Classifier.prototype, "jsonClassifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=XMLClassifier" }),
        __metadata("design:type", XmlClassifier)
    ], Classifier.prototype, "xmlClassifier", void 0);
    return Classifier;
}(SpeakeasyBase));
export { Classifier };
