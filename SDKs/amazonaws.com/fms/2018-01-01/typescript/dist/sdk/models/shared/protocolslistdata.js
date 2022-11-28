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
// ProtocolsListData
/**
 * An Firewall Manager protocols list.
**/
var ProtocolsListData = /** @class */ (function (_super) {
    __extends(ProtocolsListData, _super);
    function ProtocolsListData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateTime" }),
        __metadata("design:type", Date)
    ], ProtocolsListData.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateTime" }),
        __metadata("design:type", Date)
    ], ProtocolsListData.prototype, "lastUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListId" }),
        __metadata("design:type", String)
    ], ProtocolsListData.prototype, "listId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListName" }),
        __metadata("design:type", String)
    ], ProtocolsListData.prototype, "listName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListUpdateToken" }),
        __metadata("design:type", String)
    ], ProtocolsListData.prototype, "listUpdateToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreviousProtocolsList" }),
        __metadata("design:type", Map)
    ], ProtocolsListData.prototype, "previousProtocolsList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProtocolsList" }),
        __metadata("design:type", Array)
    ], ProtocolsListData.prototype, "protocolsList", void 0);
    return ProtocolsListData;
}(SpeakeasyBase));
export { ProtocolsListData };
