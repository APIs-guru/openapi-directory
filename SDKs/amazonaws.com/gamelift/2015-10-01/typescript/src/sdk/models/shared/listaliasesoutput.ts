import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";



// ListAliasesOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class ListAliasesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aliases", elemType: Alias })
  aliases?: Alias[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
