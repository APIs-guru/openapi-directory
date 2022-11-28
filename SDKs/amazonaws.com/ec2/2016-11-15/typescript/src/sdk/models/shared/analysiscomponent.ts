import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnalysisComponent
/** 
 * Describes a path component.
**/
export class AnalysisComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  id?: string;
}
