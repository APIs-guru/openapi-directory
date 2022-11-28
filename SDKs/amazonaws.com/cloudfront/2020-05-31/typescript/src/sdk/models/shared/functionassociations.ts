import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionAssociation } from "./functionassociation";



// FunctionAssociations
/** 
 * A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.
**/
export class FunctionAssociations extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FunctionAssociation })
  items?: FunctionAssociation[];

  @SpeakeasyMetadata()
  quantity: number;
}
