import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Duration } from "./duration";
import { TcpRetryPolicyEventEnum } from "./tcpretrypolicyeventenum";


// HttpRetryPolicy
/** 
 * An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>.
**/
export class HttpRetryPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpRetryEvents" })
  httpRetryEvents?: string[];

  @Metadata({ data: "json, name=maxRetries" })
  maxRetries: number;

  @Metadata({ data: "json, name=perRetryTimeout" })
  perRetryTimeout: Duration;

  @Metadata({ data: "json, name=tcpRetryEvents" })
  tcpRetryEvents?: TcpRetryPolicyEventEnum[];
}
