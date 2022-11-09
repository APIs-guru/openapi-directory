import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FindMatchesParameters
/** 
 * The parameters to configure the find matches transform.
**/
export class FindMatchesParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccuracyCostTradeoff" })
  accuracyCostTradeoff?: number;

  @Metadata({ data: "json, name=EnforceProvidedLabels" })
  enforceProvidedLabels?: boolean;

  @Metadata({ data: "json, name=PrecisionRecallTradeoff" })
  precisionRecallTradeoff?: number;

  @Metadata({ data: "json, name=PrimaryKeyColumnName" })
  primaryKeyColumnName?: string;
}
