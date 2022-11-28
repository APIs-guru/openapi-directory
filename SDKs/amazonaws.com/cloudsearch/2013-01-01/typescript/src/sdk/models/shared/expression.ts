import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Expression
/** 
 * A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. 
**/
export class Expression extends SpeakeasyBase {
  @SpeakeasyMetadata()
  expressionName: string;

  @SpeakeasyMetadata()
  expressionValue: string;
}
