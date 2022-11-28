import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListFleetsInput
/** 
 * Represents the input for a request operation.
**/
export class ListFleetsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BuildId" })
  buildId?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ScriptId" })
  scriptId?: string;
}
