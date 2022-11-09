import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageState } from "./imagestate";


// Ami
/** 
 *  Details of an Amazon EC2 AMI.
**/
export class Ami extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=state" })
  state?: ImageState;
}
