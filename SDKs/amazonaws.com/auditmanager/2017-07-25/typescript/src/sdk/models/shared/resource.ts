import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Resource
/** 
 *  A system asset that is evaluated in an Audit Manager assessment. 
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
