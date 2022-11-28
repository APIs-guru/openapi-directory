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
// SupplementaryFeature
/**
 * <p>Describes a supplementary feature of a dataset group. This object is part of the <a>InputDataConfig</a> object. Forecast supports the Weather Index and Holidays built-in featurizations.</p> <p> <b>Weather Index</b> </p> <p>The Amazon Forecast Weather Index is a built-in featurization that incorporates historical and projected weather information into your model. The Weather Index supplements your datasets with over two years of historical weather data and up to 14 days of projected weather data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/weather.html">Amazon Forecast Weather Index</a>.</p> <p> <b>Holidays</b> </p> <p>Holidays is a built-in featurization that incorporates a feature-engineered dataset of national holiday information into your model. It provides native support for the holiday calendars of 66 countries. To view the holiday calendars, refer to the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> library. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/holidays.html">Holidays Featurization</a>.</p>
**/
var SupplementaryFeature = /** @class */ (function (_super) {
    __extends(SupplementaryFeature, _super);
    function SupplementaryFeature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], SupplementaryFeature.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Value" }),
        __metadata("design:type", String)
    ], SupplementaryFeature.prototype, "value", void 0);
    return SupplementaryFeature;
}(SpeakeasyBase));
export { SupplementaryFeature };
