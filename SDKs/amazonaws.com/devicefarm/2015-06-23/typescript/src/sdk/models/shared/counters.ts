import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Counters
/** 
 * Represents entity counters.
**/
export class Counters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errored" })
  errored?: number;

  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed?: number;

  @SpeakeasyMetadata({ data: "json, name=passed" })
  passed?: number;

  @SpeakeasyMetadata({ data: "json, name=skipped" })
  skipped?: number;

  @SpeakeasyMetadata({ data: "json, name=stopped" })
  stopped?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=warned" })
  warned?: number;
}
