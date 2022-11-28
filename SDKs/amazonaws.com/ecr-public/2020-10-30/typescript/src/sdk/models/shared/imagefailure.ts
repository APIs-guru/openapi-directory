import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageFailureCodeEnum } from "./imagefailurecodeenum";
import { ImageIdentifier } from "./imageidentifier";



// ImageFailure
/** 
 * An object representing an Amazon ECR image failure.
**/
export class ImageFailure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureCode" })
  failureCode?: ImageFailureCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=imageId" })
  imageId?: ImageIdentifier;
}
