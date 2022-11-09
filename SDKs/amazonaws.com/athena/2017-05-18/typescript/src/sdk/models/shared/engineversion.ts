import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EngineVersion
/** 
 * The Athena engine version for running queries.
**/
export class EngineVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=EffectiveEngineVersion" })
  effectiveEngineVersion?: string;

  @Metadata({ data: "json, name=SelectedEngineVersion" })
  selectedEngineVersion?: string;
}
