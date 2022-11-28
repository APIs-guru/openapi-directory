import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceRepositoryEnum } from "./sourcerepositoryenum";
import { SourceTypeEnum } from "./sourcetypeenum";



// SourceBuildInformation
/** 
 * Location of the source code for an application version.
**/
export class SourceBuildInformation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  sourceLocation: string;

  @SpeakeasyMetadata()
  sourceRepository: SourceRepositoryEnum;

  @SpeakeasyMetadata()
  sourceType: SourceTypeEnum;
}
