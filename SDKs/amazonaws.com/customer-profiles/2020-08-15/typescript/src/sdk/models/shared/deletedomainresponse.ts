import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDomainResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message: string;
}
