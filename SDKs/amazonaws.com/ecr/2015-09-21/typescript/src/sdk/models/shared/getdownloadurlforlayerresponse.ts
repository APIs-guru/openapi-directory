import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDownloadUrlForLayerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=layerDigest" })
  layerDigest?: string;
}
