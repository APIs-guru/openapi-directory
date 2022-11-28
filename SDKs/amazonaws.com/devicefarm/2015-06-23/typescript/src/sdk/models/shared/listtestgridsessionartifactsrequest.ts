import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestGridSessionArtifactCategoryEnum } from "./testgridsessionartifactcategoryenum";



export class ListTestGridSessionArtifactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResult" })
  maxResult?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionArn" })
  sessionArn: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TestGridSessionArtifactCategoryEnum;
}
