import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FindMatchesParameters
/** 
 * The parameters to configure the find matches transform.
**/
export class FindMatchesParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccuracyCostTradeoff" })
  accuracyCostTradeoff?: number;

  @SpeakeasyMetadata({ data: "json, name=EnforceProvidedLabels" })
  enforceProvidedLabels?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PrecisionRecallTradeoff" })
  precisionRecallTradeoff?: number;

  @SpeakeasyMetadata({ data: "json, name=PrimaryKeyColumnName" })
  primaryKeyColumnName?: string;
}
