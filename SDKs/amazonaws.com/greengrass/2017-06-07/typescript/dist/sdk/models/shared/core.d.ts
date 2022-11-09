import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about a core.
**/
export declare class Core extends SpeakeasyBase {
    certificateArn: string;
    id: string;
    syncShadow?: boolean;
    thingArn: string;
}
