import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A prepared SQL statement for use with Athena.
**/
export declare class PreparedStatement extends SpeakeasyBase {
    description?: string;
    lastModifiedTime?: Date;
    queryStatement?: string;
    statementName?: string;
    workGroupName?: string;
}
