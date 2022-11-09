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
import { ExpressionTypeEnum } from "./expressiontypeenum";
import { InputSerialization } from "./inputserialization";
import { OutputSerialization } from "./outputserialization";
// SelectParameters
/**
 * Contains information about the parameters used for a select.
**/
var SelectParameters = /** @class */ (function (_super) {
    __extends(SelectParameters, _super);
    function SelectParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Expression" }),
        __metadata("design:type", String)
    ], SelectParameters.prototype, "expression", void 0);
    __decorate([
        Metadata({ data: "json, name=ExpressionType" }),
        __metadata("design:type", String)
    ], SelectParameters.prototype, "expressionType", void 0);
    __decorate([
        Metadata({ data: "json, name=InputSerialization" }),
        __metadata("design:type", InputSerialization)
    ], SelectParameters.prototype, "inputSerialization", void 0);
    __decorate([
        Metadata({ data: "json, name=OutputSerialization" }),
        __metadata("design:type", OutputSerialization)
    ], SelectParameters.prototype, "outputSerialization", void 0);
    return SelectParameters;
}(SpeakeasyBase));
export { SelectParameters };
