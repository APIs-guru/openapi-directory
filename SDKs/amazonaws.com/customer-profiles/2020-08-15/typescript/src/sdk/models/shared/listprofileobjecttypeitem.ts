import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListProfileObjectTypeItem
/** 
 * A ProfileObjectType instance.
**/
export class ListProfileObjectTypeItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=ObjectTypeName" })
  objectTypeName: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
