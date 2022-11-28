import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSourceCredentialsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
