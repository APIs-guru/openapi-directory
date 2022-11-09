import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ControlMetadata
/** 
 *  The metadata associated with the specified standard or custom control. 
**/
export class ControlMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=controlSources" })
  controlSources?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
