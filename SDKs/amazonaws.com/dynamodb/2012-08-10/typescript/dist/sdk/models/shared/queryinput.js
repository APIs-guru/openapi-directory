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
import { ConditionalOperatorEnum } from "./conditionaloperatorenum";
import { AttributeValue } from "./attributevalue";
import { Condition } from "./condition";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { SelectEnum } from "./selectenum";
// QueryInput
/**
 * Represents the input of a <code>Query</code> operation.
**/
var QueryInput = /** @class */ (function (_super) {
    __extends(QueryInput, _super);
    function QueryInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttributesToGet" }),
        __metadata("design:type", Array)
    ], QueryInput.prototype, "attributesToGet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConditionalOperator" }),
        __metadata("design:type", String)
    ], QueryInput.prototype, "conditionalOperator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsistentRead" }),
        __metadata("design:type", Boolean)
    ], QueryInput.prototype, "consistentRead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExclusiveStartKey", elemType: AttributeValue }),
        __metadata("design:type", Map)
    ], QueryInput.prototype, "exclusiveStartKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpressionAttributeNames" }),
        __metadata("design:type", Map)
    ], QueryInput.prototype, "expressionAttributeNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpressionAttributeValues", elemType: AttributeValue }),
        __metadata("design:type", Map)
    ], QueryInput.prototype, "expressionAttributeValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FilterExpression" }),
        __metadata("design:type", String)
    ], QueryInput.prototype, "filterExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexName" }),
        __metadata("design:type", String)
    ], QueryInput.prototype, "indexName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyConditionExpression" }),
        __metadata("design:type", String)
    ], QueryInput.prototype, "keyConditionExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyConditions", elemType: Condition }),
        __metadata("design:type", Map)
    ], QueryInput.prototype, "keyConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Limit" }),
        __metadata("design:type", Number)
    ], QueryInput.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProjectionExpression" }),
        __metadata("design:type", String)
    ], QueryInput.prototype, "projectionExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QueryFilter", elemType: Condition }),
        __metadata("design:type", Map)
    ], QueryInput.prototype, "queryFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReturnConsumedCapacity" }),
        __metadata("design:type", String)
    ], QueryInput.prototype, "returnConsumedCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScanIndexForward" }),
        __metadata("design:type", Boolean)
    ], QueryInput.prototype, "scanIndexForward", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Select" }),
        __metadata("design:type", String)
    ], QueryInput.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableName" }),
        __metadata("design:type", String)
    ], QueryInput.prototype, "tableName", void 0);
    return QueryInput;
}(SpeakeasyBase));
export { QueryInput };
