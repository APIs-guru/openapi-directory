import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestGridSessionArtifactCategoryEnum } from "./testgridsessionartifactcategoryenum";


export class ListTestGridSessionArtifactsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResult" })
  maxResult?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sessionArn" })
  sessionArn: string;

  @Metadata({ data: "json, name=type" })
  type?: TestGridSessionArtifactCategoryEnum;
}
