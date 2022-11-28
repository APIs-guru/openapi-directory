import { SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";
export declare class GetDeploymentsResponse extends SpeakeasyBase {
    items?: Deployment[];
    nextToken?: string;
}
