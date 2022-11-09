import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Processor } from "./processor";


// ProcessingConfiguration
/** 
 * Describes a data processing configuration.
**/
export class ProcessingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=Processors", elemType: shared.Processor })
  processors?: Processor[];
}
