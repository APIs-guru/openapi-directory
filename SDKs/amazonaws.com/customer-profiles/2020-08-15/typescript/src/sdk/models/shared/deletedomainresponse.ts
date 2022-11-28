import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message: string;
}
