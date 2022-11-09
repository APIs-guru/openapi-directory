import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceServerScopeType
/** 
 * A resource server scope.
**/
export class ResourceServerScopeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=ScopeDescription" })
  scopeDescription: string;

  @Metadata({ data: "json, name=ScopeName" })
  scopeName: string;
}
