import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FrameworkMetadata
/** 
 *  The metadata of a framework, such as the name, ID, description, and so on. 
**/
export class FrameworkMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
