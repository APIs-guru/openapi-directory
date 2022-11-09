import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
export declare class DeleteScheduledActionRequest extends SpeakeasyBase {
    resourceId: string;
    scalableDimension: ScalableDimensionEnum;
    scheduledActionName: string;
    serviceNamespace: ServiceNamespaceEnum;
}
