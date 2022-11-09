import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceCodeVersionTypeEnum } from "./sourcecodeversiontypeenum";


// SourceCodeVersion
/** 
 * Identifies a version of code that AWS App Runner refers to within a source code repository.
**/
export class SourceCodeVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type: SourceCodeVersionTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
