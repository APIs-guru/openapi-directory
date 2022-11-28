import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
