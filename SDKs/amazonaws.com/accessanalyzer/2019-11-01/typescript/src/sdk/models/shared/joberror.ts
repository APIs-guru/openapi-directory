import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobErrorCodeEnum } from "./joberrorcodeenum";



// JobError
/** 
 * Contains the details about the policy generation error.
**/
export class JobError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: JobErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
