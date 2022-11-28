import { SpeakeasyBase } from "../../../internal/utils";
import { WorkGroupConfiguration } from "./workgroupconfiguration";
import { Tag } from "./tag";
export declare class CreateWorkGroupInput extends SpeakeasyBase {
    configuration?: WorkGroupConfiguration;
    description?: string;
    name: string;
    tags?: Tag[];
}
