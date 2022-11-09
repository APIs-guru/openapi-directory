import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Counters
/** 
 * Represents entity counters.
**/
export class Counters extends SpeakeasyBase {
  @Metadata({ data: "json, name=errored" })
  errored?: number;

  @Metadata({ data: "json, name=failed" })
  failed?: number;

  @Metadata({ data: "json, name=passed" })
  passed?: number;

  @Metadata({ data: "json, name=skipped" })
  skipped?: number;

  @Metadata({ data: "json, name=stopped" })
  stopped?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=warned" })
  warned?: number;
}
