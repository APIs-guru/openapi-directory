import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DelegationMetadata } from "./delegationmetadata";
export declare class GetDelegationsResponse extends SpeakeasyBase {
    delegations?: DelegationMetadata[];
    nextToken?: string;
}
