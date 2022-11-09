import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BasePathMapping
/** 
 * <p>Represents the base path that callers of the API must provide as part of the URL after the domain name.</p> <div class="remarks">A custom domain name plus a <code>BasePathMapping</code> specification identifies a deployed <a>RestApi</a> in a given stage of the owner <a>Account</a>.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a> </div>
**/
export class BasePathMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=basePath" })
  basePath?: string;

  @Metadata({ data: "json, name=restApiId" })
  restApiId?: string;

  @Metadata({ data: "json, name=stage" })
  stage?: string;
}
