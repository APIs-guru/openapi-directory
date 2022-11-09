import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FeaturizationMethodNameEnum } from "./featurizationmethodnameenum";


// FeaturizationMethod
/** 
 * <p>Provides information about the method that featurizes (transforms) a dataset field. The method is part of the <code>FeaturizationPipeline</code> of the <a>Featurization</a> object. </p> <p>The following is an example of how you specify a <code>FeaturizationMethod</code> object.</p> <p> <code>{</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "sum", "middlefill": "zero", "backfill": "zero"}</code> </p> <p> <code>}</code> </p>
**/
export class FeaturizationMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeaturizationMethodName" })
  featurizationMethodName: FeaturizationMethodNameEnum;

  @Metadata({ data: "json, name=FeaturizationMethodParameters" })
  featurizationMethodParameters?: Map<string, string>;
}
