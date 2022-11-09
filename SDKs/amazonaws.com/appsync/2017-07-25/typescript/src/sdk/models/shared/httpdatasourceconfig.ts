import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizationConfig } from "./authorizationconfig";


// HttpDataSourceConfig
/** 
 * Describes an HTTP data source configuration.
**/
export class HttpDataSourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationConfig" })
  authorizationConfig?: AuthorizationConfig;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;
}
