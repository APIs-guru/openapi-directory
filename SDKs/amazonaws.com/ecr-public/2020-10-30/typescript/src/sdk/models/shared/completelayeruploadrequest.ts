import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompleteLayerUploadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=layerDigests" })
  layerDigests: string[];

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=uploadId" })
  uploadId: string;
}
