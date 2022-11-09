import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudFormationHealth } from "./cloudformationhealth";
import { ServiceHealth } from "./servicehealth";


export class DescribeResourceCollectionHealthResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudFormation", elemType: shared.CloudFormationHealth })
  cloudFormation: CloudFormationHealth[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Service", elemType: shared.ServiceHealth })
  service?: ServiceHealth[];
}
