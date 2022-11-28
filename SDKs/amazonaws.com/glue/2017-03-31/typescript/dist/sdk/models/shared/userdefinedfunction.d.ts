import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { ResourceUri } from "./resourceuri";
/**
 * Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition.
**/
export declare class UserDefinedFunction extends SpeakeasyBase {
    catalogId?: string;
    className?: string;
    createTime?: Date;
    databaseName?: string;
    functionName?: string;
    ownerName?: string;
    ownerType?: PrincipalTypeEnum;
    resourceUris?: ResourceUri[];
}
