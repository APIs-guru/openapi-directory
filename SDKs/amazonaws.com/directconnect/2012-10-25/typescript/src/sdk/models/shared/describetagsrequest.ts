import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceArns" })
  resourceArns: string[];
}
