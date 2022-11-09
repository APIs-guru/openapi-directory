import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageVersion } from "./imageversion";


export class ListImagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageVersionList", elemType: shared.ImageVersion })
  imageVersionList?: ImageVersion[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
