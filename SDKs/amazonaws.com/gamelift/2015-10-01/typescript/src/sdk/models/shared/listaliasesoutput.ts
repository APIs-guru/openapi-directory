import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Alias } from "./alias";


// ListAliasesOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class ListAliasesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aliases", elemType: shared.Alias })
  aliases?: Alias[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
