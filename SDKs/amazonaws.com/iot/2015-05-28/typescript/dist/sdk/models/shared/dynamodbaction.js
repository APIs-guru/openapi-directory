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
import { DynamoKeyTypeEnum } from "./dynamokeytypeenum";
// DynamoDbAction
/**
 * <p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>"hashKeyValue": "${topic(3)}"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>"rangeKeyValue": "${timestamp()}"</code> </p>
**/
var DynamoDbAction = /** @class */ (function (_super) {
    __extends(DynamoDbAction, _super);
    function DynamoDbAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hashKeyField" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "hashKeyField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hashKeyType" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "hashKeyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hashKeyValue" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "hashKeyValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operation" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payloadField" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "payloadField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rangeKeyField" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "rangeKeyField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rangeKeyType" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "rangeKeyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rangeKeyValue" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "rangeKeyValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableName" }),
        __metadata("design:type", String)
    ], DynamoDbAction.prototype, "tableName", void 0);
    return DynamoDbAction;
}(SpeakeasyBase));
export { DynamoDbAction };
