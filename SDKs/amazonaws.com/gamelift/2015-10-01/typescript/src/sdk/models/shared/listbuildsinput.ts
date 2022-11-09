import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BuildStatusEnum } from "./buildstatusenum";


// ListBuildsInput
/** 
 * Represents the input for a request operation.
**/
export class ListBuildsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Status" })
  status?: BuildStatusEnum;
}
