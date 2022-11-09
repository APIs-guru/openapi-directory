import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactStatusEnum } from "./contactstatusenum";
import { Elevation } from "./elevation";


// ContactData
/** 
 * Data describing a contact.
**/
export class ContactData extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactId" })
  contactId?: string;

  @Metadata({ data: "json, name=contactStatus" })
  contactStatus?: ContactStatusEnum;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=groundStation" })
  groundStation?: string;

  @Metadata({ data: "json, name=maximumElevation" })
  maximumElevation?: Elevation;

  @Metadata({ data: "json, name=missionProfileArn" })
  missionProfileArn?: string;

  @Metadata({ data: "json, name=postPassEndTime" })
  postPassEndTime?: Date;

  @Metadata({ data: "json, name=prePassStartTime" })
  prePassStartTime?: Date;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=satelliteArn" })
  satelliteArn?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
