import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trust } from "./trust";



// DescribeTrustsResult
/** 
 * The result of a DescribeTrust request.
**/
export class DescribeTrustsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Trusts", elemType: Trust })
  trusts?: Trust[];
}
