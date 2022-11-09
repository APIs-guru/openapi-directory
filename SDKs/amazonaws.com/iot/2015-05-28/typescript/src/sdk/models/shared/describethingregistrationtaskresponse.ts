import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";


export class DescribeThingRegistrationTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=failureCount" })
  failureCount?: number;

  @Metadata({ data: "json, name=inputFileBucket" })
  inputFileBucket?: string;

  @Metadata({ data: "json, name=inputFileKey" })
  inputFileKey?: string;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=percentageProgress" })
  percentageProgress?: number;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: StatusEnum;

  @Metadata({ data: "json, name=successCount" })
  successCount?: number;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;

  @Metadata({ data: "json, name=templateBody" })
  templateBody?: string;
}
