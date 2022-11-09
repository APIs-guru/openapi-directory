import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AmbiguousRoleResolutionTypeEnum } from "./ambiguousroleresolutiontypeenum";
import { RulesConfigurationType } from "./rulesconfigurationtype";
import { RoleMappingTypeEnum } from "./rolemappingtypeenum";
/**
 * A role mapping.
**/
export declare class RoleMapping extends SpeakeasyBase {
    ambiguousRoleResolution?: AmbiguousRoleResolutionTypeEnum;
    rulesConfiguration?: RulesConfigurationType;
    type: RoleMappingTypeEnum;
}
