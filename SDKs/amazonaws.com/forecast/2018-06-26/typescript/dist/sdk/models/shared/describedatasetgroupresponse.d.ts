import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";
export declare class DescribeDatasetGroupResponse extends SpeakeasyBase {
    creationTime?: Date;
    datasetArns?: string[];
    datasetGroupArn?: string;
    datasetGroupName?: string;
    domain?: DomainEnum;
    lastModificationTime?: Date;
    status?: string;
}
