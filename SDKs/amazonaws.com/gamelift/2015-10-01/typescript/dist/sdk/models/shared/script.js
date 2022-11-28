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
import { S3Location } from "./s3location";
// Script
/**
 * <p>Properties describing a Realtime script.</p> <p> <b>Related actions</b> </p> <p> <a>CreateScript</a> | <a>ListScripts</a> | <a>DescribeScript</a> | <a>UpdateScript</a> | <a>DeleteScript</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
var Script = /** @class */ (function (_super) {
    __extends(Script, _super);
    function Script() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], Script.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Script.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScriptArn" }),
        __metadata("design:type", String)
    ], Script.prototype, "scriptArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScriptId" }),
        __metadata("design:type", String)
    ], Script.prototype, "scriptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SizeOnDisk" }),
        __metadata("design:type", Number)
    ], Script.prototype, "sizeOnDisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageLocation" }),
        __metadata("design:type", S3Location)
    ], Script.prototype, "storageLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", String)
    ], Script.prototype, "version", void 0);
    return Script;
}(SpeakeasyBase));
export { Script };
