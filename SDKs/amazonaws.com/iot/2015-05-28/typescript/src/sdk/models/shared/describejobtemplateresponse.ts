import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AbortConfig } from "./abortconfig";
import { JobExecutionsRolloutConfig } from "./jobexecutionsrolloutconfig";
import { PresignedUrlConfig } from "./presignedurlconfig";
import { TimeoutConfig } from "./timeoutconfig";



export class DescribeJobTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abortConfig" })
  abortConfig?: AbortConfig;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: string;

  @SpeakeasyMetadata({ data: "json, name=documentSource" })
  documentSource?: string;

  @SpeakeasyMetadata({ data: "json, name=jobExecutionsRolloutConfig" })
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  @SpeakeasyMetadata({ data: "json, name=jobTemplateArn" })
  jobTemplateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobTemplateId" })
  jobTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=presignedUrlConfig" })
  presignedUrlConfig?: PresignedUrlConfig;

  @SpeakeasyMetadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: TimeoutConfig;
}
