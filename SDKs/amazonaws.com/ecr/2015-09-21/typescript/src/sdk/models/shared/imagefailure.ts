import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageFailureCodeEnum } from "./imagefailurecodeenum";
import { ImageIdentifier } from "./imageidentifier";


// ImageFailure
/** 
 * An object representing an Amazon ECR image failure.
**/
export class ImageFailure extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureCode" })
  failureCode?: ImageFailureCodeEnum;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=imageId" })
  imageId?: ImageIdentifier;
}
