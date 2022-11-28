import { SpeakeasyBase } from "../../../internal/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
export declare class DeregisterScalableTargetRequest extends SpeakeasyBase {
    resourceId: string;
    scalableDimension: ScalableDimensionEnum;
    serviceNamespace: ServiceNamespaceEnum;
}
