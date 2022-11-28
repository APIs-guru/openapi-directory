import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectStatus } from "./projectstatus";
export declare class DescribeProjectResult extends SpeakeasyBase {
    arn?: string;
    clientRequestToken?: string;
    createdTimeStamp?: Date;
    description?: string;
    id?: string;
    name?: string;
    projectTemplateId?: string;
    stackId?: string;
    status?: ProjectStatus;
}
