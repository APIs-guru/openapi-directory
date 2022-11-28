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
import { Featurization } from "./featurization";
// FeaturizationConfig
/**
 * <p>In a <a>CreatePredictor</a> operation, the specified algorithm trains a model using the specified dataset group. You can optionally tell the operation to modify data fields prior to training a model. These modifications are referred to as <i>featurization</i>.</p> <p>You define featurization using the <code>FeaturizationConfig</code> object. You specify an array of transformations, one for each field that you want to featurize. You then include the <code>FeaturizationConfig</code> object in your <code>CreatePredictor</code> request. Amazon Forecast applies the featurization to the <code>TARGET_TIME_SERIES</code> and <code>RELATED_TIME_SERIES</code> datasets before model training.</p> <p>You can create multiple featurization configurations. For example, you might call the <code>CreatePredictor</code> operation twice by specifying different featurization configurations.</p>
**/
var FeaturizationConfig = /** @class */ (function (_super) {
    __extends(FeaturizationConfig, _super);
    function FeaturizationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Featurizations", elemType: Featurization }),
        __metadata("design:type", Array)
    ], FeaturizationConfig.prototype, "featurizations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForecastDimensions" }),
        __metadata("design:type", Array)
    ], FeaturizationConfig.prototype, "forecastDimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForecastFrequency" }),
        __metadata("design:type", String)
    ], FeaturizationConfig.prototype, "forecastFrequency", void 0);
    return FeaturizationConfig;
}(SpeakeasyBase));
export { FeaturizationConfig };
