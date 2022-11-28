import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuditCheckConfiguration
/** 
 * Which audit checks are enabled and disabled for this account.
**/
export class AuditCheckConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
