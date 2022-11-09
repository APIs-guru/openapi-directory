import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiKeyIds
/** 
 * The identifier of an <a>ApiKey</a> used in a <a>UsagePlan</a>.
**/
export class ApiKeyIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=warnings" })
  warnings?: string[];
}
