import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiKeyIds
/** 
 * The identifier of an <a>ApiKey</a> used in a <a>UsagePlan</a>.
**/
export class ApiKeyIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=warnings" })
  warnings?: string[];
}
