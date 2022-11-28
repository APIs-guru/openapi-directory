import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JsonClassifier
/** 
 * A classifier for <code>JSON</code> content.
**/
export class JsonClassifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=JsonPath" })
  jsonPath: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
