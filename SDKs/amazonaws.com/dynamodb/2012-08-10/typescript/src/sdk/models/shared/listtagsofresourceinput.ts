import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTagsOfResourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
