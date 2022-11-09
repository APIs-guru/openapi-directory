import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestGridVpcConfig } from "./testgridvpcconfig";


// TestGridProject
/** 
 * A Selenium testing project. Projects are used to collect and collate sessions.
**/
export class TestGridProject extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=vpcConfig" })
  vpcConfig?: TestGridVpcConfig;
}
