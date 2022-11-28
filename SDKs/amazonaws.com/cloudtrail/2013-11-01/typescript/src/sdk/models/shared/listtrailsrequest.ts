import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTrailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
