import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceName" })
  resourceName: string;
}
