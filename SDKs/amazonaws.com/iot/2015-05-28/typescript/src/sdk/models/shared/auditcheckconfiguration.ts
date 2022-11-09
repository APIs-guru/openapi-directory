import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuditCheckConfiguration
/** 
 * Which audit checks are enabled and disabled for this account.
**/
export class AuditCheckConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
