import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompleteLayerUploadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=layerDigest" })
  layerDigest?: string;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @Metadata({ data: "json, name=uploadId" })
  uploadId?: string;
}
