import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobErrorCodeEnum } from "./joberrorcodeenum";


// JobError
/** 
 * Contains the details about the policy generation error.
**/
export class JobError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: JobErrorCodeEnum;

  @Metadata({ data: "json, name=message" })
  message: string;
}
