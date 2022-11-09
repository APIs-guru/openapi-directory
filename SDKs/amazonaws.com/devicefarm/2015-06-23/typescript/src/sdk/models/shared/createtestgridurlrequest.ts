import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTestGridUrlRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiresInSeconds" })
  expiresInSeconds: number;

  @Metadata({ data: "json, name=projectArn" })
  projectArn: string;
}
