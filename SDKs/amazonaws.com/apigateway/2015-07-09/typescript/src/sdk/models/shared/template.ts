import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Template
/** 
 * <p>Represents a mapping template used to transform a payload.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html#models-mappings-mappings">Mapping Templates</a> </div>
**/
export class Template extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
