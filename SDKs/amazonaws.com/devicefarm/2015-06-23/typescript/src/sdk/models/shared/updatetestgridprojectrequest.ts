import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestGridVpcConfig } from "./testgridvpcconfig";



export class UpdateTestGridProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectArn" })
  projectArn: string;

  @SpeakeasyMetadata({ data: "json, name=vpcConfig" })
  vpcConfig?: TestGridVpcConfig;
}
