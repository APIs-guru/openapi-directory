import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDownloadUrlForLayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=layerDigest" })
  layerDigest?: string;
}
