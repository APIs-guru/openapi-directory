import { SpeakeasyBase } from "../../../internal/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
export declare class DescribeScalableTargetsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceIds?: string[];
    scalableDimension?: ScalableDimensionEnum;
    serviceNamespace: ServiceNamespaceEnum;
}
