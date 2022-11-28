import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectTypeEnum } from "./objecttypeenum";
/**
 * A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/whatarefacets.html">Facets</a> for more information.
**/
export declare class Facet extends SpeakeasyBase {
    name?: string;
    objectType?: ObjectTypeEnum;
}
