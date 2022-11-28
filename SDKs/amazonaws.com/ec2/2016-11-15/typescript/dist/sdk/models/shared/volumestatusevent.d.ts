import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a volume status event.
**/
export declare class VolumeStatusEvent extends SpeakeasyBase {
    description?: string;
    eventId?: string;
    eventType?: string;
    instanceId?: string;
    notAfter?: Date;
    notBefore?: Date;
}
