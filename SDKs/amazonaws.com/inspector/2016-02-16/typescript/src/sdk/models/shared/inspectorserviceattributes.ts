import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InspectorServiceAttributes
/** 
 * This data type is used in the <a>Finding</a> data type.
**/
export class InspectorServiceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn?: string;

  @SpeakeasyMetadata({ data: "json, name=rulesPackageArn" })
  rulesPackageArn?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion: number;
}
