import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildStatusEnum } from "./buildstatusenum";



// ListBuildsInput
/** 
 * Represents the input for a request operation.
**/
export class ListBuildsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: BuildStatusEnum;
}
