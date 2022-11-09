import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @Metadata({ data: "json, name=imageManifest" })
  imageManifest: string;

  @Metadata({ data: "json, name=imageManifestMediaType" })
  imageManifestMediaType?: string;

  @Metadata({ data: "json, name=imageTag" })
  imageTag?: string;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
