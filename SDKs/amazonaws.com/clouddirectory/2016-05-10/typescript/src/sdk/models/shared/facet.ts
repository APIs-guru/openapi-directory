import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectTypeEnum } from "./objecttypeenum";



// Facet
/** 
 * A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/whatarefacets.html">Facets</a> for more information.
**/
export class Facet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectType" })
  objectType?: ObjectTypeEnum;
}
