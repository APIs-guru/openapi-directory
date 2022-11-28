import { SpeakeasyBase } from "../../../internal/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
import { SuspendedState } from "./suspendedstate";
/**
 * Represents a scalable target.
**/
export declare class ScalableTarget extends SpeakeasyBase {
    creationTime: Date;
    maxCapacity: number;
    minCapacity: number;
    resourceId: string;
    roleArn: string;
    scalableDimension: ScalableDimensionEnum;
    serviceNamespace: ServiceNamespaceEnum;
    suspendedState?: SuspendedState;
}
