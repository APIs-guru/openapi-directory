import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an EC2 Fleet or Spot Fleet event.
**/
export declare class EventInformation extends SpeakeasyBase {
    eventDescription?: string;
    eventSubType?: string;
    instanceId?: string;
}
