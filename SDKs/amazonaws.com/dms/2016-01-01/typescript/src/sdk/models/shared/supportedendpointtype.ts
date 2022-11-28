import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationEndpointTypeValueEnum } from "./replicationendpointtypevalueenum";



// SupportedEndpointType
/** 
 * Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported.
**/
export class SupportedEndpointType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointType" })
  endpointType?: ReplicationEndpointTypeValueEnum;

  @SpeakeasyMetadata({ data: "json, name=EngineDisplayName" })
  engineDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineName" })
  engineName?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceEngineMinimumVersion" })
  replicationInstanceEngineMinimumVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportsCDC" })
  supportsCdc?: boolean;
}
