import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Processor } from "./processor";



// ProcessingConfiguration
/** 
 * Describes a data processing configuration.
**/
export class ProcessingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Processors", elemType: Processor })
  processors?: Processor[];
}
