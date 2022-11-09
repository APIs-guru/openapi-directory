import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsSuccess" })
  isSuccess?: boolean;
}
