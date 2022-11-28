import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationArn" })
  applicationArn: string;

  @SpeakeasyMetadata({ data: "json, name=applicationId" })
  applicationId: string;
}
