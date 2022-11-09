import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreatedArtifact } from "./createdartifact";


export class ListCreatedArtifactsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedArtifactList", elemType: shared.CreatedArtifact })
  createdArtifactList?: CreatedArtifact[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
