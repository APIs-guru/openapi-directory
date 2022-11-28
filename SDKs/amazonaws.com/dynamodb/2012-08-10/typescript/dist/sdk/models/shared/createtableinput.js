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
import { AttributeDefinition } from "./attributedefinition";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalSecondaryIndex } from "./globalsecondaryindex";
import { KeySchemaElement } from "./keyschemaelement";
import { LocalSecondaryIndex } from "./localsecondaryindex";
import { ProvisionedThroughput } from "./provisionedthroughput";
import { SseSpecification } from "./ssespecification";
import { StreamSpecification } from "./streamspecification";
import { Tag } from "./tag";
// CreateTableInput
/**
 * Represents the input of a <code>CreateTable</code> operation.
**/
var CreateTableInput = /** @class */ (function (_super) {
    __extends(CreateTableInput, _super);
    function CreateTableInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttributeDefinitions", elemType: AttributeDefinition }),
        __metadata("design:type", Array)
    ], CreateTableInput.prototype, "attributeDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingMode" }),
        __metadata("design:type", String)
    ], CreateTableInput.prototype, "billingMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexes", elemType: GlobalSecondaryIndex }),
        __metadata("design:type", Array)
    ], CreateTableInput.prototype, "globalSecondaryIndexes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: KeySchemaElement }),
        __metadata("design:type", Array)
    ], CreateTableInput.prototype, "keySchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalSecondaryIndexes", elemType: LocalSecondaryIndex }),
        __metadata("design:type", Array)
    ], CreateTableInput.prototype, "localSecondaryIndexes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" }),
        __metadata("design:type", ProvisionedThroughput)
    ], CreateTableInput.prototype, "provisionedThroughput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SSESpecification" }),
        __metadata("design:type", SseSpecification)
    ], CreateTableInput.prototype, "sseSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamSpecification" }),
        __metadata("design:type", StreamSpecification)
    ], CreateTableInput.prototype, "streamSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableName" }),
        __metadata("design:type", String)
    ], CreateTableInput.prototype, "tableName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateTableInput.prototype, "tags", void 0);
    return CreateTableInput;
}(SpeakeasyBase));
export { CreateTableInput };
