import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}
