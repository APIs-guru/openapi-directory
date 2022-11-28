import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadLayerPartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastByteReceived" })
  lastByteReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=uploadId" })
  uploadId?: string;
}
