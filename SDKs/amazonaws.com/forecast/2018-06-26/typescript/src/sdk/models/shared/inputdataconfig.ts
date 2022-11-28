import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupplementaryFeature } from "./supplementaryfeature";



// InputDataConfig
/** 
 * The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request.
**/
export class InputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryFeatures", elemType: SupplementaryFeature })
  supplementaryFeatures?: SupplementaryFeature[];
}
