import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateApplicationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationArn" })
  applicationArn: string;

  @Metadata({ data: "json, name=applicationId" })
  applicationId: string;
}
