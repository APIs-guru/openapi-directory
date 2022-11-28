import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteResourceServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
