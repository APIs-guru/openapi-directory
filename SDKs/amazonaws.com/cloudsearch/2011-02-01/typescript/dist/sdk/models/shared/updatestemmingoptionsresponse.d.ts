import { SpeakeasyBase } from "../../../internal/utils";
import { StemmingOptionsStatus } from "./stemmingoptionsstatus";
/**
 * A response message that contains the status of updated stemming options.
**/
export declare class UpdateStemmingOptionsResponse extends SpeakeasyBase {
    stems: StemmingOptionsStatus;
}
