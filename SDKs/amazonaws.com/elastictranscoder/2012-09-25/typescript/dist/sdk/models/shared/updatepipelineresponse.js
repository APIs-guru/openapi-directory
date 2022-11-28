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
import { Pipeline } from "./pipeline";
import { Warning } from "./warning";
// UpdatePipelineResponse
/**
 * When you update a pipeline, Elastic Transcoder returns the values that you specified in the request.
**/
var UpdatePipelineResponse = /** @class */ (function (_super) {
    __extends(UpdatePipelineResponse, _super);
    function UpdatePipelineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Pipeline" }),
        __metadata("design:type", Pipeline)
    ], UpdatePipelineResponse.prototype, "pipeline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Warnings", elemType: Warning }),
        __metadata("design:type", Array)
    ], UpdatePipelineResponse.prototype, "warnings", void 0);
    return UpdatePipelineResponse;
}(SpeakeasyBase));
export { UpdatePipelineResponse };
