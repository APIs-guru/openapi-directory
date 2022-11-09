import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TestGridSessionArtifact } from "./testgridsessionartifact";


export class ListTestGridSessionArtifactsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifacts", elemType: shared.TestGridSessionArtifact })
  artifacts?: TestGridSessionArtifact[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
