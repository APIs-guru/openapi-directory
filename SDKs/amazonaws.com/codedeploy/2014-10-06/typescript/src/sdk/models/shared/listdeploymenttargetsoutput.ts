import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDeploymentTargetsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=targetIds" })
  targetIds?: string[];
}
