import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectTypeEnum } from "./objecttypeenum";


// Facet
/** 
 * A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/whatarefacets.html">Facets</a> for more information.
**/
export class Facet extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ObjectType" })
  objectType?: ObjectTypeEnum;
}
