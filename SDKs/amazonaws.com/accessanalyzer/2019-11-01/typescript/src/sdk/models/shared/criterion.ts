import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Criterion
/** 
 * The criteria to use in the filter that defines the archive rule.
**/
export class Criterion extends SpeakeasyBase {
  @Metadata({ data: "json, name=contains" })
  contains?: string[];

  @Metadata({ data: "json, name=eq" })
  eq?: string[];

  @Metadata({ data: "json, name=exists" })
  exists?: boolean;

  @Metadata({ data: "json, name=neq" })
  neq?: string[];
}
