import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeImagePermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SharedAwsAccountIds" })
  sharedAwsAccountIds?: string[];
}
