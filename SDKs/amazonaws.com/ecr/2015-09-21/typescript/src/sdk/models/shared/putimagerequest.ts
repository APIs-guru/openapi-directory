import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=imageManifest" })
  imageManifest: string;

  @SpeakeasyMetadata({ data: "json, name=imageManifestMediaType" })
  imageManifestMediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=imageTag" })
  imageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
