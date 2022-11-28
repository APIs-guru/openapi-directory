import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkAttributeUpdate } from "./linkattributeupdate";
import { TypedLinkSpecifier } from "./typedlinkspecifier";



// BatchUpdateLinkAttributes
/** 
 * Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchUpdateLinkAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeUpdates", elemType: LinkAttributeUpdate })
  attributeUpdates: LinkAttributeUpdate[];

  @SpeakeasyMetadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier: TypedLinkSpecifier;
}
