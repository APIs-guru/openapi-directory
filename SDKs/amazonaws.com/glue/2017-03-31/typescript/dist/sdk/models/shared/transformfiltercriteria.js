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
import { SchemaColumn } from "./schemacolumn";
import { TransformStatusTypeEnum } from "./transformstatustypeenum";
import { TransformTypeEnum } from "./transformtypeenum";
// TransformFilterCriteria
/**
 * The criteria used to filter the machine learning transforms.
**/
var TransformFilterCriteria = /** @class */ (function (_super) {
    __extends(TransformFilterCriteria, _super);
    function TransformFilterCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAfter" }),
        __metadata("design:type", Date)
    ], TransformFilterCriteria.prototype, "createdAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedBefore" }),
        __metadata("design:type", Date)
    ], TransformFilterCriteria.prototype, "createdBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GlueVersion" }),
        __metadata("design:type", String)
    ], TransformFilterCriteria.prototype, "glueVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedAfter" }),
        __metadata("design:type", Date)
    ], TransformFilterCriteria.prototype, "lastModifiedAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedBefore" }),
        __metadata("design:type", Date)
    ], TransformFilterCriteria.prototype, "lastModifiedBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], TransformFilterCriteria.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schema", elemType: SchemaColumn }),
        __metadata("design:type", Array)
    ], TransformFilterCriteria.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], TransformFilterCriteria.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransformType" }),
        __metadata("design:type", String)
    ], TransformFilterCriteria.prototype, "transformType", void 0);
    return TransformFilterCriteria;
}(SpeakeasyBase));
export { TransformFilterCriteria };
