import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetComponentVersionArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=preSignedUrl" })
  preSignedUrl: string;
}
