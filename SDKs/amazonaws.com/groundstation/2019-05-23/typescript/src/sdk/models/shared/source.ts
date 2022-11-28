import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigDetails } from "./configdetails";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";



// Source
/** 
 * Dataflow details for the source side.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configDetails" })
  configDetails?: ConfigDetails;

  @SpeakeasyMetadata({ data: "json, name=configId" })
  configId?: string;

  @SpeakeasyMetadata({ data: "json, name=configType" })
  configType?: ConfigCapabilityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dataflowSourceRegion" })
  dataflowSourceRegion?: string;
}
