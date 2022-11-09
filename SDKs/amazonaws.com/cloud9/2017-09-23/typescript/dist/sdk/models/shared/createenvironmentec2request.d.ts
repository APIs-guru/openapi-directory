import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { Tag } from "./tag";
export declare class CreateEnvironmentEc2Request extends SpeakeasyBase {
    automaticStopTimeMinutes?: number;
    clientRequestToken?: string;
    connectionType?: ConnectionTypeEnum;
    description?: string;
    dryRun?: boolean;
    imageId?: string;
    instanceType: string;
    name: string;
    ownerArn?: string;
    subnetId?: string;
    tags?: Tag[];
}
