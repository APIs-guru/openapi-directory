import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListDeploymentTargetsInput extends SpeakeasyBase {
    deploymentId?: string;
    nextToken?: string;
    targetFilters?: Map<string, string[]>;
}
