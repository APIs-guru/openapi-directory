import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FeaturizationMethod } from "./featurizationmethod";


// Featurization
/** 
 * <p>Provides featurization (transformation) information for a dataset field. This object is part of the <a>FeaturizationConfig</a> object.</p> <p>For example:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>FeaturizationPipeline [ {</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "avg", "backfill": "nan"}</code> </p> <p> <code>} ]</code> </p> <p> <code>}</code> </p>
**/
export class Featurization extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @Metadata({ data: "json, name=FeaturizationPipeline", elemType: shared.FeaturizationMethod })
  featurizationPipeline?: FeaturizationMethod[];
}
