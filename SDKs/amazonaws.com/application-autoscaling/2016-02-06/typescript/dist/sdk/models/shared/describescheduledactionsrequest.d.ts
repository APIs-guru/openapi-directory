import { SpeakeasyBase } from "../../../internal/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
export declare class DescribeScheduledActionsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceId?: string;
    scalableDimension?: ScalableDimensionEnum;
    scheduledActionNames?: string[];
    serviceNamespace: ServiceNamespaceEnum;
}
