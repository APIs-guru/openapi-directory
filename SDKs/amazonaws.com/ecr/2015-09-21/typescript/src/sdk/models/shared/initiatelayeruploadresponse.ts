import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InitiateLayerUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partSize" })
  partSize?: number;

  @SpeakeasyMetadata({ data: "json, name=uploadId" })
  uploadId?: string;
}
