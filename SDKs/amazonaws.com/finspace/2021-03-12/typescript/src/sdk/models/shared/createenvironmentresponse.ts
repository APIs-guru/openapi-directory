import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentArn" })
  environmentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentUrl" })
  environmentUrl?: string;
}
