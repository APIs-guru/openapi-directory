import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListDeploymentTargetsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=targetIds" })
  targetIds?: string[];
}
