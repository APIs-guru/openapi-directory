import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ThingTypeMetadata
/** 
 * The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated.
**/
export class ThingTypeMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=deprecated" })
  deprecated?: boolean;

  @Metadata({ data: "json, name=deprecationDate" })
  deprecationDate?: Date;
}
