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
import { JobInput } from "./jobinput";
import { JobOutput } from "./joboutput";
import { Playlist } from "./playlist";
import { Timing } from "./timing";
// Job
/**
 * A section of the response body that provides information about the job that is created.
**/
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], Job.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], Job.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Input" }),
        __metadata("design:type", JobInput)
    ], Job.prototype, "input", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Inputs", elemType: JobInput }),
        __metadata("design:type", Array)
    ], Job.prototype, "inputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Output" }),
        __metadata("design:type", JobOutput)
    ], Job.prototype, "output", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputKeyPrefix" }),
        __metadata("design:type", String)
    ], Job.prototype, "outputKeyPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Outputs", elemType: JobOutput }),
        __metadata("design:type", Array)
    ], Job.prototype, "outputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PipelineId" }),
        __metadata("design:type", String)
    ], Job.prototype, "pipelineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Playlists", elemType: Playlist }),
        __metadata("design:type", Array)
    ], Job.prototype, "playlists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Job.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timing" }),
        __metadata("design:type", Timing)
    ], Job.prototype, "timing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserMetadata" }),
        __metadata("design:type", Map)
    ], Job.prototype, "userMetadata", void 0);
    return Job;
}(SpeakeasyBase));
export { Job };
