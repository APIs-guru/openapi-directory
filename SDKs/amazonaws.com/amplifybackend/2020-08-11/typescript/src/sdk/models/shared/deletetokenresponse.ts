import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsSuccess" })
  isSuccess?: boolean;
}
