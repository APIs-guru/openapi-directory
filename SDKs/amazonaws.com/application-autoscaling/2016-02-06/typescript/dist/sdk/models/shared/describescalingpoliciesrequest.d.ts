import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
export declare class DescribeScalingPoliciesRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    policyNames?: string[];
    resourceId?: string;
    scalableDimension?: ScalableDimensionEnum;
    serviceNamespace: ServiceNamespaceEnum;
}
