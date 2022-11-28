import { SpeakeasyBase } from "../../../internal/utils";
import { StopStatusEnum } from "./stopstatusenum";
/**
 *  Represents the output of a <code>StopDeployment</code> operation.
**/
export declare class StopDeploymentOutput extends SpeakeasyBase {
    status?: StopStatusEnum;
    statusMessage?: string;
}
