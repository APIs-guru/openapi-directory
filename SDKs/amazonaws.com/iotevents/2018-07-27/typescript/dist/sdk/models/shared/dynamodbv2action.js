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
import { Payload } from "./payload";
// DynamoDBv2Action
/**
 * <p>Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBv2Action</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>tableName</code> parameter can be <code>'GreenhouseTemperatureTable'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>tableName</code> parameter can be <code>$variable.ddbtableName</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>contentExpression</code> parameter in <code>Payload</code> uses a substitution template. </p> <p> <code>'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>The value for the <code>type</code> parameter in <code>Payload</code> must be <code>JSON</code>.</p>
**/
var DynamoDBv2Action = /** @class */ (function (_super) {
    __extends(DynamoDBv2Action, _super);
    function DynamoDBv2Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", Payload)
    ], DynamoDBv2Action.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableName" }),
        __metadata("design:type", String)
    ], DynamoDBv2Action.prototype, "tableName", void 0);
    return DynamoDBv2Action;
}(SpeakeasyBase));
export { DynamoDBv2Action };
