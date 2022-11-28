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
import { KeyValuePair } from "./keyvaluepair";
import { EnvironmentFile } from "./environmentfile";
import { ResourceRequirement } from "./resourcerequirement";
// ContainerOverride
/**
 * The overrides that should be sent to a container. An empty container override can be passed in. An example of an empty container override would be <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.
**/
var ContainerOverride = /** @class */ (function (_super) {
    __extends(ContainerOverride, _super);
    function ContainerOverride() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", Array)
    ], ContainerOverride.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpu" }),
        __metadata("design:type", Number)
    ], ContainerOverride.prototype, "cpu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment", elemType: KeyValuePair }),
        __metadata("design:type", Array)
    ], ContainerOverride.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentFiles", elemType: EnvironmentFile }),
        __metadata("design:type", Array)
    ], ContainerOverride.prototype, "environmentFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], ContainerOverride.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoryReservation" }),
        __metadata("design:type", Number)
    ], ContainerOverride.prototype, "memoryReservation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ContainerOverride.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceRequirements", elemType: ResourceRequirement }),
        __metadata("design:type", Array)
    ], ContainerOverride.prototype, "resourceRequirements", void 0);
    return ContainerOverride;
}(SpeakeasyBase));
export { ContainerOverride };
