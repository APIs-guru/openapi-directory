import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreatedArtifact } from "./createdartifact";



export class ListCreatedArtifactsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedArtifactList", elemType: CreatedArtifact })
  createdArtifactList?: CreatedArtifact[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
