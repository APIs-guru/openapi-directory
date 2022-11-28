import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudFormationHealth } from "./cloudformationhealth";
import { ServiceHealth } from "./servicehealth";



export class DescribeResourceCollectionHealthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudFormation", elemType: CloudFormationHealth })
  cloudFormation: CloudFormationHealth[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Service", elemType: ServiceHealth })
  service?: ServiceHealth[];
}
