import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComponentConfigurationUpdate
/** 
 * Contains information about a deployment's update to a component's configuration on Greengrass core devices. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html">Update component configurations</a> in the <i>IoT Greengrass V2 Developer Guide</i>.
**/
export class ComponentConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=merge" })
  merge?: string;

  @Metadata({ data: "json, name=reset" })
  reset?: string[];
}
