import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListFleetsInput
/** 
 * Represents the input for a request operation.
**/
export class ListFleetsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BuildId" })
  buildId?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ScriptId" })
  scriptId?: string;
}
