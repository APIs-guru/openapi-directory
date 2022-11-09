import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
