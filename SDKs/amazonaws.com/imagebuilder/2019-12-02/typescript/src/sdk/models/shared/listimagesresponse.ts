import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageVersion } from "./imageversion";



export class ListImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageVersionList", elemType: ImageVersion })
  imageVersionList?: ImageVersion[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
