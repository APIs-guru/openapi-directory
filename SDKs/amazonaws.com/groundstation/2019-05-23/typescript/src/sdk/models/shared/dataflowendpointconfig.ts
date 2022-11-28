import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataflowEndpointConfig
/** 
 * Information about the dataflow endpoint <code>Config</code>.
**/
export class DataflowEndpointConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataflowEndpointName" })
  dataflowEndpointName: string;

  @SpeakeasyMetadata({ data: "json, name=dataflowEndpointRegion" })
  dataflowEndpointRegion?: string;
}
