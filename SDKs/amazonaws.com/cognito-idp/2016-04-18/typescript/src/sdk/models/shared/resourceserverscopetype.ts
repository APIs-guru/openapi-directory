import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceServerScopeType
/** 
 * A resource server scope.
**/
export class ResourceServerScopeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ScopeDescription" })
  scopeDescription: string;

  @SpeakeasyMetadata({ data: "json, name=ScopeName" })
  scopeName: string;
}
