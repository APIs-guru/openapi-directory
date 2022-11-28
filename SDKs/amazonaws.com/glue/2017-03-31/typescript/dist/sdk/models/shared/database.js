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
import { PrincipalPermissions } from "./principalpermissions";
import { DatabaseIdentifier } from "./databaseidentifier";
// Database
/**
 * The <code>Database</code> object represents a logical grouping of tables that might reside in a Hive metastore or an RDBMS.
**/
var Database = /** @class */ (function (_super) {
    __extends(Database, _super);
    function Database() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CatalogId" }),
        __metadata("design:type", String)
    ], Database.prototype, "catalogId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateTableDefaultPermissions", elemType: PrincipalPermissions }),
        __metadata("design:type", Array)
    ], Database.prototype, "createTableDefaultPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateTime" }),
        __metadata("design:type", Date)
    ], Database.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Database.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocationUri" }),
        __metadata("design:type", String)
    ], Database.prototype, "locationUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Database.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", Map)
    ], Database.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetDatabase" }),
        __metadata("design:type", DatabaseIdentifier)
    ], Database.prototype, "targetDatabase", void 0);
    return Database;
}(SpeakeasyBase));
export { Database };
