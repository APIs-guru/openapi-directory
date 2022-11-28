import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceMetadata
/** 
 *  The metadata associated with the specified Amazon Web Service. 
**/
export class ServiceMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
