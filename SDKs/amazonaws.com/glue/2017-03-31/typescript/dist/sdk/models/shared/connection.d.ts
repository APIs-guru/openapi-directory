import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { PhysicalConnectionRequirements } from "./physicalconnectionrequirements";
/**
 * Defines a connection to a data source.
**/
export declare class Connection extends SpeakeasyBase {
    connectionProperties?: Map<string, string>;
    connectionType?: ConnectionTypeEnum;
    creationTime?: Date;
    description?: string;
    lastUpdatedBy?: string;
    lastUpdatedTime?: Date;
    matchCriteria?: string[];
    name?: string;
    physicalConnectionRequirements?: PhysicalConnectionRequirements;
}
