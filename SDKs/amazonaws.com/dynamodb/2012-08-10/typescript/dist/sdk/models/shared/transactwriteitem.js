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
import { ConditionCheck } from "./conditioncheck";
import { Delete } from "./delete";
import { Put } from "./put";
import { Update } from "./update";
// TransactWriteItem
/**
 * A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically.
**/
var TransactWriteItem = /** @class */ (function (_super) {
    __extends(TransactWriteItem, _super);
    function TransactWriteItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConditionCheck" }),
        __metadata("design:type", ConditionCheck)
    ], TransactWriteItem.prototype, "conditionCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Delete" }),
        __metadata("design:type", Delete)
    ], TransactWriteItem.prototype, "delete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Put" }),
        __metadata("design:type", Put)
    ], TransactWriteItem.prototype, "put", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Update" }),
        __metadata("design:type", Update)
    ], TransactWriteItem.prototype, "update", void 0);
    return TransactWriteItem;
}(SpeakeasyBase));
export { TransactWriteItem };
