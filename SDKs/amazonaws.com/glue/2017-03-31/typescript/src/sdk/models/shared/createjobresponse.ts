import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
