import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
export declare class DescribeThingRegistrationTaskResponse extends SpeakeasyBase {
    creationDate?: Date;
    failureCount?: number;
    inputFileBucket?: string;
    inputFileKey?: string;
    lastModifiedDate?: Date;
    message?: string;
    percentageProgress?: number;
    roleArn?: string;
    status?: StatusEnum;
    successCount?: number;
    taskId?: string;
    templateBody?: string;
}
