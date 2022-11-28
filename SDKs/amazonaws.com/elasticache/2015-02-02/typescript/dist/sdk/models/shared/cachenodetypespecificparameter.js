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
import { CacheNodeTypeSpecificValue } from "./cachenodetypespecificvalue";
import { ChangeTypeEnum } from "./changetypeenum";
// CacheNodeTypeSpecificParameter
/**
 * A parameter that has a different value for each cache node type it is applied to. For example, in a Redis cluster, a <code>cache.m1.large</code> cache node type would have a larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type.
**/
var CacheNodeTypeSpecificParameter = /** @class */ (function (_super) {
    __extends(CacheNodeTypeSpecificParameter, _super);
    function CacheNodeTypeSpecificParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheNodeTypeSpecificParameter.prototype, "allowedValues", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CacheNodeTypeSpecificValue }),
        __metadata("design:type", Array)
    ], CacheNodeTypeSpecificParameter.prototype, "cacheNodeTypeSpecificValues", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheNodeTypeSpecificParameter.prototype, "changeType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheNodeTypeSpecificParameter.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheNodeTypeSpecificParameter.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], CacheNodeTypeSpecificParameter.prototype, "isModifiable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheNodeTypeSpecificParameter.prototype, "minimumEngineVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheNodeTypeSpecificParameter.prototype, "parameterName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheNodeTypeSpecificParameter.prototype, "source", void 0);
    return CacheNodeTypeSpecificParameter;
}(SpeakeasyBase));
export { CacheNodeTypeSpecificParameter };
