import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateTargetsWithJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;
}
