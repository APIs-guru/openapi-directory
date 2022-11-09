import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AbortConfig } from "./abortconfig";
import { JobExecutionsRolloutConfig } from "./jobexecutionsrolloutconfig";
import { PresignedUrlConfig } from "./presignedurlconfig";
import { TimeoutConfig } from "./timeoutconfig";


export class DescribeJobTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=abortConfig" })
  abortConfig?: AbortConfig;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=document" })
  document?: string;

  @Metadata({ data: "json, name=documentSource" })
  documentSource?: string;

  @Metadata({ data: "json, name=jobExecutionsRolloutConfig" })
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  @Metadata({ data: "json, name=jobTemplateArn" })
  jobTemplateArn?: string;

  @Metadata({ data: "json, name=jobTemplateId" })
  jobTemplateId?: string;

  @Metadata({ data: "json, name=presignedUrlConfig" })
  presignedUrlConfig?: PresignedUrlConfig;

  @Metadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: TimeoutConfig;
}
