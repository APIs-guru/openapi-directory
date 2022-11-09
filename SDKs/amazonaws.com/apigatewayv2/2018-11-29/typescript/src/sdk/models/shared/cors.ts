import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Cors
/** 
 * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
**/
export class Cors extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowCredentials" })
  allowCredentials?: boolean;

  @Metadata({ data: "json, name=AllowHeaders" })
  allowHeaders?: string[];

  @Metadata({ data: "json, name=AllowMethods" })
  allowMethods?: string[];

  @Metadata({ data: "json, name=AllowOrigins" })
  allowOrigins?: string[];

  @Metadata({ data: "json, name=ExposeHeaders" })
  exposeHeaders?: string[];

  @Metadata({ data: "json, name=MaxAge" })
  maxAge?: number;
}
