import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestGridSessionArtifact } from "./testgridsessionartifact";



export class ListTestGridSessionArtifactsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifacts", elemType: TestGridSessionArtifact })
  artifacts?: TestGridSessionArtifact[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
