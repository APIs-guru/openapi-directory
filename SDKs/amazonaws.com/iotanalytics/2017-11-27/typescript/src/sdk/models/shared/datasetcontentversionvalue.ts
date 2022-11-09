import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatasetContentVersionValue
/** 
 * The dataset whose latest contents are used as input to the notebook or application.
**/
export class DatasetContentVersionValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetName" })
  datasetName: string;
}
