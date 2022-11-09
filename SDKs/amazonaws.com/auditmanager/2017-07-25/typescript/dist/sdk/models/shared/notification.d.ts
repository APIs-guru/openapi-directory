import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  The notification used to inform a user of an update in Audit Manager. For example, this includes the notification that is sent when a control set is delegated for review.
**/
export declare class Notification extends SpeakeasyBase {
    assessmentId?: string;
    assessmentName?: string;
    controlSetId?: string;
    controlSetName?: string;
    description?: string;
    eventTime?: Date;
    id?: string;
    source?: string;
}
