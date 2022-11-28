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
import { LinkAttributeUpdate } from "./linkattributeupdate";
import { TypedLinkSpecifier } from "./typedlinkspecifier";
// BatchUpdateLinkAttributes
/**
 * Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.
**/
var BatchUpdateLinkAttributes = /** @class */ (function (_super) {
    __extends(BatchUpdateLinkAttributes, _super);
    function BatchUpdateLinkAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttributeUpdates", elemType: LinkAttributeUpdate }),
        __metadata("design:type", Array)
    ], BatchUpdateLinkAttributes.prototype, "attributeUpdates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TypedLinkSpecifier" }),
        __metadata("design:type", TypedLinkSpecifier)
    ], BatchUpdateLinkAttributes.prototype, "typedLinkSpecifier", void 0);
    return BatchUpdateLinkAttributes;
}(SpeakeasyBase));
export { BatchUpdateLinkAttributes };
