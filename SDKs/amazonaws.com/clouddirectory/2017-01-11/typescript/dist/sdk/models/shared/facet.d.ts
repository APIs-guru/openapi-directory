import { SpeakeasyBase } from "../../../internal/utils";
import { FacetStyleEnum } from "./facetstyleenum";
import { ObjectTypeEnum } from "./objecttypeenum";
/**
 * A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information.
**/
export declare class Facet extends SpeakeasyBase {
    facetStyle?: FacetStyleEnum;
    name?: string;
    objectType?: ObjectTypeEnum;
}
