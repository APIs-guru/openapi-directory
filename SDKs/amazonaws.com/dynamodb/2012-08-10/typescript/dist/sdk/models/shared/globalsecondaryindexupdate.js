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
import { CreateGlobalSecondaryIndexAction } from "./createglobalsecondaryindexaction";
import { DeleteGlobalSecondaryIndexAction } from "./deleteglobalsecondaryindexaction";
import { UpdateGlobalSecondaryIndexAction } from "./updateglobalsecondaryindexaction";
// GlobalSecondaryIndexUpdate
/**
 * <p>Represents one of the following:</p> <ul> <li> <p>A new global secondary index to be added to an existing table.</p> </li> <li> <p>New provisioned throughput parameters for an existing global secondary index.</p> </li> <li> <p>An existing global secondary index to be removed from an existing table.</p> </li> </ul>
**/
var GlobalSecondaryIndexUpdate = /** @class */ (function (_super) {
    __extends(GlobalSecondaryIndexUpdate, _super);
    function GlobalSecondaryIndexUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Create" }),
        __metadata("design:type", CreateGlobalSecondaryIndexAction)
    ], GlobalSecondaryIndexUpdate.prototype, "create", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Delete" }),
        __metadata("design:type", DeleteGlobalSecondaryIndexAction)
    ], GlobalSecondaryIndexUpdate.prototype, "delete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Update" }),
        __metadata("design:type", UpdateGlobalSecondaryIndexAction)
    ], GlobalSecondaryIndexUpdate.prototype, "update", void 0);
    return GlobalSecondaryIndexUpdate;
}(SpeakeasyBase));
export { GlobalSecondaryIndexUpdate };
