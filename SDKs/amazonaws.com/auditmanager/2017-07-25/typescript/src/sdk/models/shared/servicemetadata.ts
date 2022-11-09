import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceMetadata
/** 
 *  The metadata associated with the specified Amazon Web Service. 
**/
export class ServiceMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
