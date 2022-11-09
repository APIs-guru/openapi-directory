import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VisibilityTypeEnum } from "./visibilitytypeenum";


export class DescribeImagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arns" })
  arns?: string[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=Names" })
  names?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Type" })
  type?: VisibilityTypeEnum;
}
