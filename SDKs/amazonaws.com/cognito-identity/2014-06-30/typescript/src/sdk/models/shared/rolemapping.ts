import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AmbiguousRoleResolutionTypeEnum } from "./ambiguousroleresolutiontypeenum";
import { RulesConfigurationType } from "./rulesconfigurationtype";
import { RoleMappingTypeEnum } from "./rolemappingtypeenum";



// RoleMapping
/** 
 * A role mapping.
**/
export class RoleMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AmbiguousRoleResolution" })
  ambiguousRoleResolution?: AmbiguousRoleResolutionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=RulesConfiguration" })
  rulesConfiguration?: RulesConfigurationType;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: RoleMappingTypeEnum;
}
