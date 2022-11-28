import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeStacksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
