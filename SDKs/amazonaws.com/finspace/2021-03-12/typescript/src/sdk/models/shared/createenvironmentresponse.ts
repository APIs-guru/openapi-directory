import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEnvironmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentArn" })
  environmentArn?: string;

  @Metadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "json, name=environmentUrl" })
  environmentUrl?: string;
}
