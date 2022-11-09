import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetTypeEnum } from "./targettypeenum";


export class ListAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=attributeValue" })
  attributeValue?: string;

  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=targetType" })
  targetType: TargetTypeEnum;
}
