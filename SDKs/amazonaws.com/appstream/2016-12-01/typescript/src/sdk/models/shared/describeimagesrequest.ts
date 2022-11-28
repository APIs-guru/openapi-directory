import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VisibilityTypeEnum } from "./visibilitytypeenum";



export class DescribeImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arns" })
  arns?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=Names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: VisibilityTypeEnum;
}
