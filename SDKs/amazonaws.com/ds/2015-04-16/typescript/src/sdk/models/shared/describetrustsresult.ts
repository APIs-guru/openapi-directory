import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Trust } from "./trust";


// DescribeTrustsResult
/** 
 * The result of a DescribeTrust request.
**/
export class DescribeTrustsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Trusts", elemType: shared.Trust })
  trusts?: Trust[];
}
