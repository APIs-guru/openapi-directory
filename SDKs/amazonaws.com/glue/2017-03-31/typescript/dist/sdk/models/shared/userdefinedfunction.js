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
import { PrincipalTypeEnum } from "./principaltypeenum";
import { ResourceUri } from "./resourceuri";
// UserDefinedFunction
/**
 * Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition.
**/
var UserDefinedFunction = /** @class */ (function (_super) {
    __extends(UserDefinedFunction, _super);
    function UserDefinedFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CatalogId" }),
        __metadata("design:type", String)
    ], UserDefinedFunction.prototype, "catalogId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClassName" }),
        __metadata("design:type", String)
    ], UserDefinedFunction.prototype, "className", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateTime" }),
        __metadata("design:type", Date)
    ], UserDefinedFunction.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], UserDefinedFunction.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FunctionName" }),
        __metadata("design:type", String)
    ], UserDefinedFunction.prototype, "functionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwnerName" }),
        __metadata("design:type", String)
    ], UserDefinedFunction.prototype, "ownerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwnerType" }),
        __metadata("design:type", String)
    ], UserDefinedFunction.prototype, "ownerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceUris", elemType: ResourceUri }),
        __metadata("design:type", Array)
    ], UserDefinedFunction.prototype, "resourceUris", void 0);
    return UserDefinedFunction;
}(SpeakeasyBase));
export { UserDefinedFunction };
