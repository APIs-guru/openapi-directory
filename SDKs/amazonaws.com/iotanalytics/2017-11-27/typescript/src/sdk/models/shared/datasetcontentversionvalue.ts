import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatasetContentVersionValue
/** 
 * The dataset whose latest contents are used as input to the notebook or application.
**/
export class DatasetContentVersionValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetName" })
  datasetName: string;
}
