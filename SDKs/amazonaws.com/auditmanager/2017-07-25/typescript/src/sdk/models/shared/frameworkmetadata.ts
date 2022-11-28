import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FrameworkMetadata
/** 
 *  The metadata of a framework, such as the name, ID, description, and so on. 
**/
export class FrameworkMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
