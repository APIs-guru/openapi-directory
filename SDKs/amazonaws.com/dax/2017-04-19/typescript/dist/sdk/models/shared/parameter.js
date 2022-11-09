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
import * as shared from "../shared";
import { ChangeTypeEnum } from "./changetypeenum";
import { IsModifiableEnum } from "./ismodifiableenum";
import { ParameterTypeEnum } from "./parametertypeenum";
// Parameter
/**
 * Describes an individual setting that controls some aspect of DAX behavior.
**/
var Parameter = /** @class */ (function (_super) {
    __extends(Parameter, _super);
    function Parameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AllowedValues" }),
        __metadata("design:type", String)
    ], Parameter.prototype, "allowedValues", void 0);
    __decorate([
        Metadata({ data: "json, name=ChangeType" }),
        __metadata("design:type", String)
    ], Parameter.prototype, "changeType", void 0);
    __decorate([
        Metadata({ data: "json, name=DataType" }),
        __metadata("design:type", String)
    ], Parameter.prototype, "dataType", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Parameter.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=IsModifiable" }),
        __metadata("design:type", String)
    ], Parameter.prototype, "isModifiable", void 0);
    __decorate([
        Metadata({ data: "json, name=NodeTypeSpecificValues", elemType: shared.NodeTypeSpecificValue }),
        __metadata("design:type", Array)
    ], Parameter.prototype, "nodeTypeSpecificValues", void 0);
    __decorate([
        Metadata({ data: "json, name=ParameterName" }),
        __metadata("design:type", String)
    ], Parameter.prototype, "parameterName", void 0);
    __decorate([
        Metadata({ data: "json, name=ParameterType" }),
        __metadata("design:type", String)
    ], Parameter.prototype, "parameterType", void 0);
    __decorate([
        Metadata({ data: "json, name=ParameterValue" }),
        __metadata("design:type", String)
    ], Parameter.prototype, "parameterValue", void 0);
    __decorate([
        Metadata({ data: "json, name=Source" }),
        __metadata("design:type", String)
    ], Parameter.prototype, "source", void 0);
    return Parameter;
}(SpeakeasyBase));
export { Parameter };
