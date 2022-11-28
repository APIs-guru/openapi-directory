import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerInfo } from "./containerinfo";
import { ContainerProviderTypeEnum } from "./containerprovidertypeenum";
/**
 * The information about the container provider.
**/
export declare class ContainerProvider extends SpeakeasyBase {
    id: string;
    info?: ContainerInfo;
    type: ContainerProviderTypeEnum;
}
