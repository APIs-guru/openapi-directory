import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JsonClassifier
/** 
 * A classifier for <code>JSON</code> content.
**/
export class JsonClassifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=JsonPath" })
  jsonPath: string;

  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
