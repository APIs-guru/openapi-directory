import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Cors
/** 
 * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
**/
export class Cors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowCredentials" })
  allowCredentials?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AllowHeaders" })
  allowHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=AllowMethods" })
  allowMethods?: string[];

  @SpeakeasyMetadata({ data: "json, name=AllowOrigins" })
  allowOrigins?: string[];

  @SpeakeasyMetadata({ data: "json, name=ExposeHeaders" })
  exposeHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxAge" })
  maxAge?: number;
}
