import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestGridVpcConfig } from "./testgridvpcconfig";


export class UpdateTestGridProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectArn" })
  projectArn: string;

  @Metadata({ data: "json, name=vpcConfig" })
  vpcConfig?: TestGridVpcConfig;
}
