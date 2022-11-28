import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetTypeEnum } from "./targettypeenum";



export class ListAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeName" })
  attributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=attributeValue" })
  attributeValue?: string;

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=targetType" })
  targetType: TargetTypeEnum;
}
