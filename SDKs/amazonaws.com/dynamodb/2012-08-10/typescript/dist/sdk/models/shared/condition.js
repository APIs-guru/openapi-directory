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
import { AttributeValue } from "./attributevalue";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
// Condition
/**
 * <p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p> <ul> <li> <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>, only the following comparison operators are supported:</p> <p> <code>EQ | LE | LT | GE | GT | BEGINS_WITH | BETWEEN</code> </p> <p> <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results and returns only the desired values.</p> </li> <li> <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which evaluates the scan results and returns only the desired values.</p> </li> </ul>
**/
var Condition = /** @class */ (function (_super) {
    __extends(Condition, _super);
    function Condition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttributeValueList", elemType: AttributeValue }),
        __metadata("design:type", Array)
    ], Condition.prototype, "attributeValueList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComparisonOperator" }),
        __metadata("design:type", String)
    ], Condition.prototype, "comparisonOperator", void 0);
    return Condition;
}(SpeakeasyBase));
export { Condition };
