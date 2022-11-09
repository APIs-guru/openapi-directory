import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SupplementaryFeature } from "./supplementaryfeature";


// InputDataConfig
/** 
 * The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request.
**/
export class InputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn: string;

  @Metadata({ data: "json, name=SupplementaryFeatures", elemType: shared.SupplementaryFeature })
  supplementaryFeatures?: SupplementaryFeature[];
}
