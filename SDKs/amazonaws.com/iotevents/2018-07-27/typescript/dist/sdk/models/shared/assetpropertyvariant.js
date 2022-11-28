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
// AssetPropertyVariant
/**
 * <p>A structure that contains an asset property value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html">Variant</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyVariant</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>integerValue</code> parameter can be <code>'100'</code>.</p> </li> <li> <p>For references, you must specify either variables or parameters. For example, the value for the <code>booleanValue</code> parameter can be <code>$variable.offline</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates. </p> <p>In the following example, the value for the <code>doubleValue</code> parameter uses a substitution template. </p> <p> <code>'${$input.TemperatureInput.sensorData.temperature * 6 / 5 + 32}'</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>You must specify one of the following value types, depending on the <code>dataType</code> of the specified asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html">AssetProperty</a> in the <i>AWS IoT SiteWise API Reference</i>.</p>
**/
var AssetPropertyVariant = /** @class */ (function (_super) {
    __extends(AssetPropertyVariant, _super);
    function AssetPropertyVariant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=booleanValue" }),
        __metadata("design:type", String)
    ], AssetPropertyVariant.prototype, "booleanValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doubleValue" }),
        __metadata("design:type", String)
    ], AssetPropertyVariant.prototype, "doubleValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integerValue" }),
        __metadata("design:type", String)
    ], AssetPropertyVariant.prototype, "integerValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringValue" }),
        __metadata("design:type", String)
    ], AssetPropertyVariant.prototype, "stringValue", void 0);
    return AssetPropertyVariant;
}(SpeakeasyBase));
export { AssetPropertyVariant };
