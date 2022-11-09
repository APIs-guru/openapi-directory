import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
export declare class DescribeScalingActivitiesRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceId?: string;
    scalableDimension?: ScalableDimensionEnum;
    serviceNamespace: ServiceNamespaceEnum;
}
