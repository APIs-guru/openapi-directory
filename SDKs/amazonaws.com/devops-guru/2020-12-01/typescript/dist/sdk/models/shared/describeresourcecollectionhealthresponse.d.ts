import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudFormationHealth } from "./cloudformationhealth";
import { ServiceHealth } from "./servicehealth";
export declare class DescribeResourceCollectionHealthResponse extends SpeakeasyBase {
    cloudFormation: CloudFormationHealth[];
    nextToken?: string;
    service?: ServiceHealth[];
}
