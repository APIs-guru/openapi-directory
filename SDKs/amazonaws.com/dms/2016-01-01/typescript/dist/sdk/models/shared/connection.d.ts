import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued.
**/
export declare class Connection extends SpeakeasyBase {
    endpointArn?: string;
    endpointIdentifier?: string;
    lastFailureMessage?: string;
    replicationInstanceArn?: string;
    replicationInstanceIdentifier?: string;
    status?: string;
}
