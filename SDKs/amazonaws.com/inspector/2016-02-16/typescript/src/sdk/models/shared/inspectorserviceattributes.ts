import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InspectorServiceAttributes
/** 
 * This data type is used in the <a>Finding</a> data type.
**/
export class InspectorServiceAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn?: string;

  @Metadata({ data: "json, name=rulesPackageArn" })
  rulesPackageArn?: string;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion: number;
}
