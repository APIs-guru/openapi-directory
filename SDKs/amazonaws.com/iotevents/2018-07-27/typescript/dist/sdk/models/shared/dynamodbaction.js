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
import { Payload } from "./payload";
// DynamoDbAction
/**
 * <p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBAction</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>hashKeyType</code> parameter can be <code>'STRING'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>hashKeyField</code> parameter can be <code>$input.GreenhouseInput.name</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>hashKeyValue</code> parameter uses a substitution template. </p> <p> <code>'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the <code>payloadField</code> parameter is <code>&lt;payload-field&gt;_raw</code>.</p>
**/
var DynamoDbAction = /** @class */ (function (_super) {
    __extends(DynamoDbAction, _super);
    function DynamoDbAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=hashKeyField" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "hashKeyField", void 0);
    __decorate([
        Metadata({ data: "json, name=hashKeyType" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "hashKeyType", void 0);
    __decorate([
        Metadata({ data: "json, name=hashKeyValue" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "hashKeyValue", void 0);
    __decorate([
        Metadata({ data: "json, name=operation" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "operation", void 0);
    __decorate([
        Metadata({ data: "json, name=payload" }),
        __metadata("design:type", Payload)
    ], DynamoDbAction.prototype, "payload", void 0);
    __decorate([
        Metadata({ data: "json, name=payloadField" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "payloadField", void 0);
    __decorate([
        Metadata({ data: "json, name=rangeKeyField" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "rangeKeyField", void 0);
    __decorate([
        Metadata({ data: "json, name=rangeKeyType" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "rangeKeyType", void 0);
    __decorate([
        Metadata({ data: "json, name=rangeKeyValue" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "rangeKeyValue", void 0);
    __decorate([
        Metadata({ data: "json, name=tableName" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "tableName", void 0);
    return DynamoDbAction;
}(SpeakeasyBase));
export { DynamoDbAction };
