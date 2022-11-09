import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Deployment } from "./deployment";
export declare class ListDeploymentsResponse extends SpeakeasyBase {
    deployments?: Deployment[];
    nextToken?: string;
}
