import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ControlMetadata
/** 
 *  The metadata associated with the specified standard or custom control. 
**/
export class ControlMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=controlSources" })
  controlSources?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
