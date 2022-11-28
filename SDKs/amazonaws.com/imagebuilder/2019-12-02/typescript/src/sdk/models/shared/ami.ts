import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageState } from "./imagestate";



// Ami
/** 
 *  Details of an Amazon EC2 AMI.
**/
export class Ami extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ImageState;
}
