import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NamedRankExpression
/** 
 * A named expression that can be evaluated at search time and used for ranking or thresholding in a search query. 
**/
export class NamedRankExpression extends SpeakeasyBase {
  @SpeakeasyMetadata()
  rankExpression: string;

  @SpeakeasyMetadata()
  rankName: string;
}
