import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationEndpointTypeValueEnum } from "./replicationendpointtypevalueenum";


// SupportedEndpointType
/** 
 * Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported.
**/
export class SupportedEndpointType extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointType" })
  endpointType?: ReplicationEndpointTypeValueEnum;

  @Metadata({ data: "json, name=EngineDisplayName" })
  engineDisplayName?: string;

  @Metadata({ data: "json, name=EngineName" })
  engineName?: string;

  @Metadata({ data: "json, name=ReplicationInstanceEngineMinimumVersion" })
  replicationInstanceEngineMinimumVersion?: string;

  @Metadata({ data: "json, name=SupportsCDC" })
  supportsCdc?: boolean;
}
