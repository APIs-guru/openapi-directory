import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterJobDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobDefinitionArn" })
  jobDefinitionArn: string;

  @SpeakeasyMetadata({ data: "json, name=jobDefinitionName" })
  jobDefinitionName: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision: number;
}
