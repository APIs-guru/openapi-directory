import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DelegationStatusEnum } from "./delegationstatusenum";
/**
 *  The metadata associated with the specified delegation.
**/
export declare class DelegationMetadata extends SpeakeasyBase {
    assessmentId?: string;
    assessmentName?: string;
    controlSetName?: string;
    creationTime?: Date;
    id?: string;
    roleArn?: string;
    status?: DelegationStatusEnum;
}
