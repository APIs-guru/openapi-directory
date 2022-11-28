import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EngineVersion
/** 
 * The Athena engine version for running queries.
**/
export class EngineVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EffectiveEngineVersion" })
  effectiveEngineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=SelectedEngineVersion" })
  selectedEngineVersion?: string;
}
