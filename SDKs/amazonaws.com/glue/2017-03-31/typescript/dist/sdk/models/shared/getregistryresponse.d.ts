import { SpeakeasyBase } from "../../../internal/utils";
import { RegistryStatusEnum } from "./registrystatusenum";
export declare class GetRegistryResponse extends SpeakeasyBase {
    createdTime?: string;
    description?: string;
    registryArn?: string;
    registryName?: string;
    status?: RegistryStatusEnum;
    updatedTime?: string;
}
