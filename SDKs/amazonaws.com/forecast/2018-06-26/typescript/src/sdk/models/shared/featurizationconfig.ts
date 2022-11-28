import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Featurization } from "./featurization";



// FeaturizationConfig
/** 
 * <p>In a <a>CreatePredictor</a> operation, the specified algorithm trains a model using the specified dataset group. You can optionally tell the operation to modify data fields prior to training a model. These modifications are referred to as <i>featurization</i>.</p> <p>You define featurization using the <code>FeaturizationConfig</code> object. You specify an array of transformations, one for each field that you want to featurize. You then include the <code>FeaturizationConfig</code> object in your <code>CreatePredictor</code> request. Amazon Forecast applies the featurization to the <code>TARGET_TIME_SERIES</code> and <code>RELATED_TIME_SERIES</code> datasets before model training.</p> <p>You can create multiple featurization configurations. For example, you might call the <code>CreatePredictor</code> operation twice by specifying different featurization configurations.</p>
**/
export class FeaturizationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Featurizations", elemType: Featurization })
  featurizations?: Featurization[];

  @SpeakeasyMetadata({ data: "json, name=ForecastDimensions" })
  forecastDimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=ForecastFrequency" })
  forecastFrequency: string;
}
