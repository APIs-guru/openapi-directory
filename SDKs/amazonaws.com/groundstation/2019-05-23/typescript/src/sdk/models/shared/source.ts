import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigDetails } from "./configdetails";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";


// Source
/** 
 * Dataflow details for the source side.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=configDetails" })
  configDetails?: ConfigDetails;

  @Metadata({ data: "json, name=configId" })
  configId?: string;

  @Metadata({ data: "json, name=configType" })
  configType?: ConfigCapabilityTypeEnum;

  @Metadata({ data: "json, name=dataflowSourceRegion" })
  dataflowSourceRegion?: string;
}
