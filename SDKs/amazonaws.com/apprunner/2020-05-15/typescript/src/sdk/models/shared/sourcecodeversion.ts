import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceCodeVersionTypeEnum } from "./sourcecodeversiontypeenum";



// SourceCodeVersion
/** 
 * Identifies a version of code that AWS App Runner refers to within a source code repository.
**/
export class SourceCodeVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: SourceCodeVersionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
