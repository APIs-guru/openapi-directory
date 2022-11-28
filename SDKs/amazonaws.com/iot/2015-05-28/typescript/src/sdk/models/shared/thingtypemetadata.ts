import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ThingTypeMetadata
/** 
 * The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated.
**/
export class ThingTypeMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deprecationDate" })
  deprecationDate?: Date;
}
