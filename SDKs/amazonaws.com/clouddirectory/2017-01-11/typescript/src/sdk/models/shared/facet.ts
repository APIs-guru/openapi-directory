import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FacetStyleEnum } from "./facetstyleenum";
import { ObjectTypeEnum } from "./objecttypeenum";



// Facet
/** 
 * A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information.
**/
export class Facet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FacetStyle" })
  facetStyle?: FacetStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectType" })
  objectType?: ObjectTypeEnum;
}
