import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataflowEndpointConfig
/** 
 * Information about the dataflow endpoint <code>Config</code>.
**/
export class DataflowEndpointConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataflowEndpointName" })
  dataflowEndpointName: string;

  @Metadata({ data: "json, name=dataflowEndpointRegion" })
  dataflowEndpointRegion?: string;
}
