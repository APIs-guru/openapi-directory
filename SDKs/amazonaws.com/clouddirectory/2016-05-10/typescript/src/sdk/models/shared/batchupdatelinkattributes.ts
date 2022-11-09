import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LinkAttributeUpdate } from "./linkattributeupdate";
import { TypedLinkSpecifier } from "./typedlinkspecifier";


// BatchUpdateLinkAttributes
/** 
 * Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchUpdateLinkAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeUpdates", elemType: shared.LinkAttributeUpdate })
  attributeUpdates: LinkAttributeUpdate[];

  @Metadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier: TypedLinkSpecifier;
}
