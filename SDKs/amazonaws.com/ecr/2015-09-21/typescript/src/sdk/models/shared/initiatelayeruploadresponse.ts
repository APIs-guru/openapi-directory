import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InitiateLayerUploadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=partSize" })
  partSize?: number;

  @Metadata({ data: "json, name=uploadId" })
  uploadId?: string;
}
