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
import { Field } from "./field";
import { ThingConnectivityIndexingModeEnum } from "./thingconnectivityindexingmodeenum";
import { ThingIndexingModeEnum } from "./thingindexingmodeenum";
// ThingIndexingConfiguration
/**
 * The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
**/
var ThingIndexingConfiguration = /** @class */ (function (_super) {
    __extends(ThingIndexingConfiguration, _super);
    function ThingIndexingConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields", elemType: Field }),
        __metadata("design:type", Array)
    ], ThingIndexingConfiguration.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedFields", elemType: Field }),
        __metadata("design:type", Array)
    ], ThingIndexingConfiguration.prototype, "managedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingConnectivityIndexingMode" }),
        __metadata("design:type", String)
    ], ThingIndexingConfiguration.prototype, "thingConnectivityIndexingMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingIndexingMode" }),
        __metadata("design:type", String)
    ], ThingIndexingConfiguration.prototype, "thingIndexingMode", void 0);
    return ThingIndexingConfiguration;
}(SpeakeasyBase));
export { ThingIndexingConfiguration };
