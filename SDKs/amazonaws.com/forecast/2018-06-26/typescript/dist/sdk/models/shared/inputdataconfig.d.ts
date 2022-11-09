import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SupplementaryFeature } from "./supplementaryfeature";
/**
 * The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request.
**/
export declare class InputDataConfig extends SpeakeasyBase {
    datasetGroupArn: string;
    supplementaryFeatures?: SupplementaryFeature[];
}
