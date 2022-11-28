import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestGridVpcConfig } from "./testgridvpcconfig";



// TestGridProject
/** 
 * A Selenium testing project. Projects are used to collect and collate sessions.
**/
export class TestGridProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=vpcConfig" })
  vpcConfig?: TestGridVpcConfig;
}
