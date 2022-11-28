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
import { UlimitNameEnum } from "./ulimitnameenum";
// Ulimit
/**
 * <p>The <code>ulimit</code> settings to pass to the container.</p> <p>Amazon ECS tasks hosted on Fargate use the default resource limit values set by the operating system with the exception of the <code>nofile</code> resource limit parameter which Fargate overrides. The <code>nofile</code> resource limit sets a restriction on the number of open files that a container can use. The default <code>nofile</code> soft limit is <code>1024</code> and hard limit is <code>4096</code>.</p>
**/
var Ulimit = /** @class */ (function (_super) {
    __extends(Ulimit, _super);
    function Ulimit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hardLimit" }),
        __metadata("design:type", Number)
    ], Ulimit.prototype, "hardLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Ulimit.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=softLimit" }),
        __metadata("design:type", Number)
    ], Ulimit.prototype, "softLimit", void 0);
    return Ulimit;
}(SpeakeasyBase));
export { Ulimit };
