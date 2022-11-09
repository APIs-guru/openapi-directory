import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UploadLayerPartResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastByteReceived" })
  lastByteReceived?: number;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @Metadata({ data: "json, name=uploadId" })
  uploadId?: string;
}
