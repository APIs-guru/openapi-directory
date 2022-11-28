import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { ResourceUri } from "./resourceuri";
/**
 * A structure used to create or update a user-defined function.
**/
export declare class UserDefinedFunctionInput extends SpeakeasyBase {
    className?: string;
    functionName?: string;
    ownerName?: string;
    ownerType?: PrincipalTypeEnum;
    resourceUris?: ResourceUri[];
}
