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
var DestinationDefinitionRead = /** @class */ (function (_super) {
    __extends(DestinationDefinitionRead, _super);
    function DestinationDefinitionRead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=destinationDefinitionId" }),
        __metadata("design:type", String)
    ], DestinationDefinitionRead.prototype, "destinationDefinitionId", void 0);
    __decorate([
        Metadata({ data: "json, name=dockerImageTag" }),
        __metadata("design:type", String)
    ], DestinationDefinitionRead.prototype, "dockerImageTag", void 0);
    __decorate([
        Metadata({ data: "json, name=dockerRepository" }),
        __metadata("design:type", String)
    ], DestinationDefinitionRead.prototype, "dockerRepository", void 0);
    __decorate([
        Metadata({ data: "json, name=documentationUrl" }),
        __metadata("design:type", String)
    ], DestinationDefinitionRead.prototype, "documentationUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=icon" }),
        __metadata("design:type", String)
    ], DestinationDefinitionRead.prototype, "icon", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DestinationDefinitionRead.prototype, "name", void 0);
    return DestinationDefinitionRead;
}(SpeakeasyBase));
export { DestinationDefinitionRead };
