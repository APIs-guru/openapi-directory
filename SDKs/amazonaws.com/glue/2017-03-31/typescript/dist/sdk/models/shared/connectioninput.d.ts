import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { PhysicalConnectionRequirements } from "./physicalconnectionrequirements";
/**
 * A structure that is used to specify a connection to create or update.
**/
export declare class ConnectionInput extends SpeakeasyBase {
    connectionProperties: Map<string, string>;
    connectionType: ConnectionTypeEnum;
    description?: string;
    matchCriteria?: string[];
    name: string;
    physicalConnectionRequirements?: PhysicalConnectionRequirements;
}
