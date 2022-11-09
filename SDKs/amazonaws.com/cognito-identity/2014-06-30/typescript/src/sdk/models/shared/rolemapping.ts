import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AmbiguousRoleResolutionTypeEnum } from "./ambiguousroleresolutiontypeenum";
import { RulesConfigurationType } from "./rulesconfigurationtype";
import { RoleMappingTypeEnum } from "./rolemappingtypeenum";


// RoleMapping
/** 
 * A role mapping.
**/
export class RoleMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=AmbiguousRoleResolution" })
  ambiguousRoleResolution?: AmbiguousRoleResolutionTypeEnum;

  @Metadata({ data: "json, name=RulesConfiguration" })
  rulesConfiguration?: RulesConfigurationType;

  @Metadata({ data: "json, name=Type" })
  type: RoleMappingTypeEnum;
}
