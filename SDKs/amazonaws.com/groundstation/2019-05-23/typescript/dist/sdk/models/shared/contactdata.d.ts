import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactStatusEnum } from "./contactstatusenum";
import { Elevation } from "./elevation";
/**
 * Data describing a contact.
**/
export declare class ContactData extends SpeakeasyBase {
    contactId?: string;
    contactStatus?: ContactStatusEnum;
    endTime?: Date;
    errorMessage?: string;
    groundStation?: string;
    maximumElevation?: Elevation;
    missionProfileArn?: string;
    postPassEndTime?: Date;
    prePassStartTime?: Date;
    region?: string;
    satelliteArn?: string;
    startTime?: Date;
    tags?: Map<string, string>;
}
