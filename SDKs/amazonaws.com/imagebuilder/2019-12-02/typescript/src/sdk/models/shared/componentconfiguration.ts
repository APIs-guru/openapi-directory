import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComponentParameter } from "./componentparameter";


// ComponentConfiguration
/** 
 *  Configuration details of the component.
**/
export class ComponentConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentArn" })
  componentArn: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.ComponentParameter })
  parameters?: ComponentParameter[];
}
