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
// ExportedEnvironmentVariable
/**
 * <p>Contains information about an exported environment variable. </p> <p>Exported environment variables are used in conjunction with CodePipeline to export environment variables from the current build stage to subsequent stages in the pipeline. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-variables.html">Working with variables</a> in the <i>CodePipeline User Guide</i>.</p> <note> <p> During a build, the value of a variable is available starting with the <code>install</code> phase. It can be updated between the start of the <code>install</code> phase and the end of the <code>post_build</code> phase. After the <code>post_build</code> phase ends, the value of exported variables cannot change.</p> </note>
**/
var ExportedEnvironmentVariable = /** @class */ (function (_super) {
    __extends(ExportedEnvironmentVariable, _super);
    function ExportedEnvironmentVariable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ExportedEnvironmentVariable.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ExportedEnvironmentVariable.prototype, "value", void 0);
    return ExportedEnvironmentVariable;
}(SpeakeasyBase));
export { ExportedEnvironmentVariable };
