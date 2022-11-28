import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDownloadUrlForLayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=layerDigest" })
  layerDigest: string;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
