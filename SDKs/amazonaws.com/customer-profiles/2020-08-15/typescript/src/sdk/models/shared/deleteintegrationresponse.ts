import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteIntegrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message: string;
}
