import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationConfig } from "./authorizationconfig";



// HttpDataSourceConfig
/** 
 * Describes an HTTP data source configuration.
**/
export class HttpDataSourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationConfig" })
  authorizationConfig?: AuthorizationConfig;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;
}
