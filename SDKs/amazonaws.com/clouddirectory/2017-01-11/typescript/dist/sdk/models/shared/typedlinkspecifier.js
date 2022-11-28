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
import { AttributeNameAndValue } from "./attributenameandvalue";
import { ObjectReference } from "./objectreference";
import { TypedLinkSchemaAndFacetName } from "./typedlinkschemaandfacetname";
// TypedLinkSpecifier
/**
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
**/
var TypedLinkSpecifier = /** @class */ (function (_super) {
    __extends(TypedLinkSpecifier, _super);
    function TypedLinkSpecifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdentityAttributeValues", elemType: AttributeNameAndValue }),
        __metadata("design:type", Array)
    ], TypedLinkSpecifier.prototype, "identityAttributeValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceObjectReference" }),
        __metadata("design:type", ObjectReference)
    ], TypedLinkSpecifier.prototype, "sourceObjectReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetObjectReference" }),
        __metadata("design:type", ObjectReference)
    ], TypedLinkSpecifier.prototype, "targetObjectReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TypedLinkFacet" }),
        __metadata("design:type", TypedLinkSchemaAndFacetName)
    ], TypedLinkSpecifier.prototype, "typedLinkFacet", void 0);
    return TypedLinkSpecifier;
}(SpeakeasyBase));
export { TypedLinkSpecifier };
